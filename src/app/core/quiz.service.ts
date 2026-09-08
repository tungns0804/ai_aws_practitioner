import { Injectable, computed, inject, signal } from '@angular/core';
import {
  ExportPayload,
  HistoryEntry,
  Mode,
  Pick,
  Progress,
  QOption,
  Question,
  Session,
  Settings,
  Size,
  Status,
  StoredData,
  View,
} from './models';
import { DOMAINS, DOMAIN_BY_ID, TOPIC_BY_ID } from './categories';
import { shuffle } from './text.util';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';
import { I18nService } from './i18n.service';
import { I18nKey, Lang } from './i18n';

const K_DATA = 'awsaip:data:v1';
export const SIZES: Size[] = ['md', 'lg', 'xl'];

const MODE_KEYS: Record<string, I18nKey> = {
  all: 'mode.all',
  fav: 'mode.favShort',
  review: 'mode.review',
  todo: 'mode.todo',
};

const TYPE_KEYS: Record<string, I18nKey> = {
  single: 'type.single',
  multi: 'type.multi',
  truefalse: 'type.truefalse',
  tf_table: 'type.tf_table',
  match: 'type.match',
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly store = inject(StorageService);
  private readonly toast = inject(ToastService);
  private readonly i18n = inject(I18nService);

  /* ---------- dữ liệu ---------- */
  readonly questions = signal<Question[]>([]);
  private readonly byId = computed(() => {
    const m = new Map<number, Question>();
    this.questions().forEach((q) => m.set(q.id, q));
    return m;
  });

  /* ---------- trạng thái ---------- */
  readonly mode = signal<Mode>('all');
  /** lọc theo phần thi (d1–d5) hoặc theo chủ đề; null = toàn bộ */
  readonly category = signal<string | null>(null);
  readonly view = signal<View>('practice');
  readonly order = signal<number[]>([]);
  readonly idx = signal(0);
  readonly shuffleQ = signal(false);
  readonly shuffleO = signal(false);
  readonly autoNext = signal(false);
  readonly showVi = signal(false);
  readonly size = signal<Size>('md');

  readonly fav = signal<Record<number, boolean>>({});
  readonly prog = signal<Record<number, Progress>>({});
  readonly history = signal<HistoryEntry[]>([]);
  readonly session = signal<Session | null>(null);
  readonly pick = signal<Record<number, Pick>>({});
  readonly revealed = signal<Record<number, boolean>>({});

  /** thứ tự đáp án đã trộn — cache thường, không phải signal (tránh ghi khi đang tính computed) */
  private optOrderCache = new Map<number, number[]>();

  readonly ready = signal(false);
  readonly storeModeLabel = computed(() => this.i18n.t(this.store.modeKey));

  /** id lớn nhất trong ngân hàng — dùng cho thông báo "tới câu số" */
  readonly maxId = computed(() =>
    this.questions().reduce((n, q) => (q.id > n ? q.id : n), 0),
  );

  /* ---------- dẫn xuất ---------- */
  readonly current = computed<Question | null>(() => {
    const id = this.order()[this.idx()];
    return id == null ? null : (this.byId().get(id) ?? null);
  });

  readonly currentOptions = computed<QOption[]>(() => {
    const q = this.current();
    if (!q) return [];
    if (!this.shuffleO()) return q.options;
    let ord = this.optOrderCache.get(q.id);
    if (!ord) {
      ord = shuffle(q.options.map((_, i) => i));
      this.optOrderCache.set(q.id, ord);
    }
    return ord.map((i) => q.options[i]);
  });

  readonly isRevealed = computed(() => {
    const q = this.current();
    return !!q && !!this.revealed()[q.id];
  });

  readonly currentPick = computed<Pick>(() => {
    const q = this.current();
    return q ? (this.pick()[q.id] ?? []) : [];
  });

  readonly stats = computed(() => {
    const prog = this.prog();
    const total = this.questions().length;
    let ok = 0,
      no = 0,
      sh = 0;
    this.questions().forEach((q) => {
      const st = this.statusFrom(prog, q.id);
      if (st === 'ok') ok++;
      else if (st === 'no') no++;
      else if (st === 'sh') sh++;
    });
    const done = ok + no + sh;
    return {
      ok,
      no,
      sh,
      done,
      total,
      rate: ok + no ? Math.round((ok / (ok + no)) * 100) + '%' : '–',
      pct: total ? Math.round((done / total) * 100) : 0,
    };
  });

  readonly modeCounts = computed(() => ({
    all: this.poolFor('all').length,
    fav: this.poolFor('fav').length,
    review: this.poolFor('review').length,
    todo: this.poolFor('todo').length,
  }));

  /** tiến độ theo từng phần thi và từng chủ đề, dùng cho màn hình Học kiến thức */
  readonly coverage = computed(() => {
    const prog = this.prog();
    const blank = () => ({ total: 0, done: 0, ok: 0, no: 0, sh: 0 });
    const domains: Record<string, ReturnType<typeof blank>> = {};
    const topics: Record<string, ReturnType<typeof blank>> = {};
    for (const d of DOMAINS) {
      domains[d.id] = blank();
      for (const g of d.groups) for (const t of g.topics) topics[t.id] = blank();
    }
    for (const q of this.questions()) {
      const bucket = [domains[q.domain], topics[q.topic]].filter(Boolean);
      const st = this.statusFrom(prog, q.id);
      for (const b of bucket) {
        b.total++;
        if (st === 'ok') {
          b.ok++;
          b.done++;
        } else if (st === 'no') {
          b.no++;
          b.done++;
        } else if (st === 'sh') {
          b.sh++;
          b.done++;
        }
      }
    }
    return { domains, topics };
  });

  /** nhãn hiển thị cho bộ lọc đang áp dụng */
  readonly categoryLabel = computed(() => {
    const c = this.category();
    if (!c) return null;
    const d = DOMAIN_BY_ID[c];
    if (d) return this.i18n.pick(d.title, d.titleEn);
    const t = TOPIC_BY_ID[c];
    if (t) return this.i18n.pick(t.title, t.titleEn);
    return c;
  });

  readonly canPrev = computed(() => this.idx() > 0);
  readonly canNext = computed(() => this.idx() < this.order().length - 1);

  /* ---------- nạp dữ liệu ---------- */
  async init(questions: Question[]): Promise<void> {
    this.questions.set(questions);
    const d = await this.store.get<StoredData>(K_DATA);
    if (d) {
      this.fav.set(d.fav || {});
      this.prog.set(d.prog || {});
      this.history.set(d.history || []);
      this.session.set(d.session || null);
      this.pick.set(d.pick || {});
      this.revealed.set(d.revealed || {});
      const st: Settings = d.settings || {};
      this.mode.set(this.isKnownMode(st.mode) ? st.mode : 'all');
      // chỉ nhận lại bộ lọc nếu id vẫn còn tồn tại trong danh mục
      const cat = st.category ?? null;
      this.category.set(cat && this.isKnownCategory(cat) ? cat : null);
      this.view.set(st.view === 'study' ? 'study' : 'practice');
      this.i18n.set(st.lang === 'en' ? 'en' : 'vi');
      this.shuffleQ.set(!!st.shuffleQ);
      this.shuffleO.set(!!st.shuffleO);
      this.autoNext.set(!!st.autoNext);
      this.showVi.set(!!st.showVi);
      this.size.set(SIZES.indexOf(st.size as Size) >= 0 ? (st.size as Size) : 'md');
      this.idx.set(st.idx || 0);
    } else {
      this.i18n.set('vi');
    }
    this.applyLook();
    this.buildOrder(false);
    if (this.idx() >= this.order().length) this.idx.set(0);
    this.ready.set(true);
  }

  private isKnownMode(m: Mode | undefined): m is Mode {
    return m === 'all' || m === 'fav' || m === 'review' || m === 'todo';
  }

  /** id phạm vi có hợp lệ không (phần thi hoặc chủ đề) */
  private isKnownCategory(cat: string): boolean {
    return !!DOMAIN_BY_ID[cat] || !!TOPIC_BY_ID[cat];
  }

  /* ---------- ghi ---------- */
  private saveT: ReturnType<typeof setTimeout> | null = null;
  save(): void {
    if (this.saveT) clearTimeout(this.saveT);
    this.saveT = setTimeout(() => {
      void this.store.set(K_DATA, {
        fav: this.fav(),
        prog: this.prog(),
        history: this.history(),
        session: this.session(),
        pick: this.pick(),
        revealed: this.revealed(),
        settings: {
          mode: this.mode(),
          category: this.category(),
          view: this.view(),
          lang: this.i18n.lang(),
          shuffleQ: this.shuffleQ(),
          shuffleO: this.shuffleO(),
          autoNext: this.autoNext(),
          showVi: this.showVi(),
          size: this.size(),
          idx: this.idx(),
        },
      } satisfies StoredData);
    }, 400);
  }

  /* ---------- trạng thái từng câu ---------- */
  private statusFrom(prog: Record<number, Progress>, id: number): Status | null {
    const p = prog[id];
    if (!p) return null;
    if (p.shown) return 'sh';
    return p.ok ? 'ok' : 'no';
  }

  statusOf(id: number): Status | null {
    return this.statusFrom(this.prog(), id);
  }

  correctKeys(q: Question): string[] {
    return q.options.filter((o) => o.c).map((o) => o.k);
  }

  /** câu hỏi có thuộc phạm vi lọc hiện tại không (phần thi hoặc chủ đề) */
  private inCategory(q: Question, cat: string | null): boolean {
    if (!cat) return true;
    return DOMAIN_BY_ID[cat] ? q.domain === cat : q.topic === cat;
  }

  poolFor(mode: Mode, category: string | null = this.category()): number[] {
    const prog = this.prog();
    const fav = this.fav();
    return this.questions()
      .filter((q) => {
        if (!this.inCategory(q, category)) return false;
        const st = this.statusFrom(prog, q.id);
        if (mode === 'fav') return !!fav[q.id];
        if (mode === 'review') return st === 'no' || st === 'sh';
        if (mode === 'todo') return st === null;
        return true;
      })
      .map((q) => q.id);
  }

  buildOrder(keepCurrent: boolean): void {
    const cur = this.order()[this.idx()];
    const p = this.poolFor(this.mode());
    const next = this.shuffleQ() ? shuffle(p) : p;
    this.order.set(next);
    const at = keepCurrent ? next.indexOf(cur) : -1;
    this.idx.set(at >= 0 ? at : 0);
  }

  typeLabel(t: string): string {
    const k = TYPE_KEYS[t];
    return k ? this.i18n.t(k) : t;
  }

  modeName(m: string): string {
    const k = MODE_KEYS[m];
    return k ? this.i18n.t(k) : m;
  }

  /** nhãn phần thi hiển thị trên thẻ câu hỏi */
  domainLabel(id: string): string {
    const d = DOMAIN_BY_ID[id];
    return d ? d.objective.replace(/^Domain (\d).*/, 'DOMAIN $1') : id.toUpperCase();
  }

  /* ---------- phiên luyện tập ---------- */
  private ensureSession(): void {
    if (!this.session()) {
      this.session.set({
        id: Date.now(),
        mode: this.mode(),
        startedAt: new Date().toISOString(),
        answers: {},
      });
    }
  }

  private recordAnswer(id: number, ans: { ok: boolean; shown?: boolean; ts: number }): void {
    this.ensureSession();
    const s = this.session()!;
    this.session.set({ ...s, answers: { ...s.answers, [id]: ans } });
  }

  endSession(silent = false): void {
    const s = this.session();
    if (!s) {
      if (!silent) this.toast.show(this.i18n.t('toast.noSession'));
      return;
    }
    const ids = Object.keys(s.answers);
    if (!ids.length) {
      this.session.set(null);
      this.save();
      if (!silent) this.toast.show(this.i18n.t('toast.emptySession'));
      return;
    }
    let ok = 0;
    const wrong: number[] = [];
    const shown: number[] = [];
    ids.forEach((k) => {
      const a = s.answers[Number(k)];
      if (a.shown) shown.push(Number(k));
      else if (a.ok) ok++;
      else wrong.push(Number(k));
    });
    const entry: HistoryEntry = {
      id: s.id,
      mode: s.mode,
      startedAt: s.startedAt,
      endedAt: new Date().toISOString(),
      total: ids.length,
      correct: ok,
      wrong,
      shown,
    };
    const h = [entry, ...this.history()];
    if (h.length > 200) h.length = 200;
    this.history.set(h);
    this.session.set(null);
    this.save();
    if (!silent) this.toast.show(this.i18n.t('toast.sessionSaved', { ok, total: ids.length }));
  }

  /* ---------- chọn đáp án ---------- */
  selectOpt(key: string): void {
    const q = this.current();
    if (!q || this.revealed()[q.id]) return;
    const cur = this.pick()[q.id] ?? [];
    let next: Pick;
    if (q.type === 'multi') {
      const i = cur.indexOf(key);
      next = i >= 0 ? cur.slice(0, i).concat(cur.slice(i + 1)) : cur.concat([key]);
    } else next = [key];
    this.pick.set({ ...this.pick(), [q.id]: next });
    this.save();
  }

  selectSub(si: number, oi: number): void {
    const q = this.current();
    if (!q || this.revealed()[q.id]) return;
    const cur = (this.pick()[q.id] ?? []).slice();
    while (cur.length < q.subs.length) cur.push(null);
    cur[si] = oi;
    this.pick.set({ ...this.pick(), [q.id]: cur });
    this.save();
  }

  isPicked(key: string): boolean {
    return this.currentPick().indexOf(key) >= 0;
  }

  isSubPicked(si: number, oi: number): boolean {
    return this.currentPick()[si] === oi;
  }

  /* ---------- chấm điểm ---------- */
  grade(): void {
    const q = this.current();
    if (!q) return;
    const sel = this.pick()[q.id];
    const choice = q.type === 'single' || q.type === 'multi';
    if (!sel || !sel.length || sel.some((x) => x == null)) {
      this.toast.show(this.i18n.t(choice ? 'toast.pickAnswer' : 'toast.pickAll'));
      return;
    }
    // câu nhiều đáp án: bắt chọn đủ số lượng như đề thi thật, tránh chấm sai vì thiếu ô
    if (q.type === 'multi') {
      const need = this.correctKeys(q).length;
      if (sel.length !== need) {
        this.toast.show(this.i18n.t('toast.pickCount', { n: need }));
        return;
      }
    }
    // câu nhiều lựa chọn theo dòng: phải trả lời đủ mọi dòng
    if (!choice && sel.length < q.subs.length) {
      this.toast.show(this.i18n.t('toast.pickAll'));
      return;
    }
    let ok: boolean;
    if (choice) {
      ok =
        this.correctKeys(q).slice().sort().join(',') === (sel as string[]).slice().sort().join(',');
    } else {
      ok = q.subs.every((s, i) => sel[i] === s.a);
    }
    const ts = Date.now();
    this.revealed.set({ ...this.revealed(), [q.id]: true });
    this.prog.set({ ...this.prog(), [q.id]: { picked: sel, ok, ts } });
    this.recordAnswer(q.id, { ok, ts });
    this.save();
    if (ok && this.autoNext() && this.canNext()) {
      this.toast.show(this.i18n.t('toast.correctNext'));
      setTimeout(() => this.go(this.idx() + 1), 550);
      return;
    }
    this.focusVerdict();
  }

  reveal(): void {
    const q = this.current();
    if (!q) return;
    const ts = Date.now();
    this.revealed.set({ ...this.revealed(), [q.id]: true });
    this.prog.set({
      ...this.prog(),
      [q.id]: { picked: this.pick()[q.id] ?? [], ok: false, shown: true, ts },
    });
    this.recordAnswer(q.id, { ok: false, shown: true, ts });
    this.save();
    this.focusVerdict();
  }

  retry(): void {
    const q = this.current();
    if (!q) return;
    const rev = { ...this.revealed() };
    delete rev[q.id];
    this.revealed.set(rev);
    const pk = { ...this.pick() };
    delete pk[q.id];
    this.pick.set(pk);
    const pr = { ...this.prog() };
    delete pr[q.id];
    this.prog.set(pr);
    const s = this.session();
    if (s) {
      const answers = { ...s.answers };
      delete answers[q.id];
      this.session.set({ ...s, answers });
    }
    this.save();
  }

  toggleFav(): void {
    const q = this.current();
    if (!q) return;
    this.fav.set({ ...this.fav(), [q.id]: !this.fav()[q.id] });
    this.save();
  }

  private focusVerdict(): void {
    setTimeout(() => {
      const v = document.querySelector('.verdict');
      if (v && v.scrollIntoView) {
        try {
          v.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } catch {
          /* bỏ qua */
        }
      }
    });
  }

  /* ---------- điều hướng ---------- */
  go(i: number): void {
    if (i < 0 || i >= this.order().length) return;
    this.idx.set(i);
    this.save();
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }

  gotoId(id: number): boolean {
    const at = this.order().indexOf(id);
    if (at >= 0) {
      this.go(at);
      return true;
    }
    if (this.byId().has(id)) {
      // bỏ cả chế độ lọc lẫn phạm vi phần thi để chắc chắn mở được câu này
      this.mode.set('all');
      this.category.set(null);
      this.buildOrder(false);
      const j = this.order().indexOf(id);
      if (j >= 0) {
        this.go(j);
        this.toast.show(this.i18n.t('toast.filterDropped', { id }));
        return true;
      }
    }
    return false;
  }

  hasId(id: number): boolean {
    return this.byId().has(id);
  }

  /* ---------- tuỳ chọn ---------- */
  setMode(m: Mode): void {
    this.mode.set(m);
    this.buildOrder(false);
    this.save();
  }

  setView(v: View): void {
    this.view.set(v);
    this.save();
  }

  /** đổi ngôn ngữ giao diện và lưu lại lựa chọn */
  setLang(l: Lang): void {
    if (this.i18n.lang() === l) return;
    this.i18n.set(l);
    this.save();
    this.toast.show(this.i18n.t('toast.langChanged'));
  }

  /**
   * Đặt phạm vi ôn tập theo phần thi hoặc chủ đề (null = toàn bộ).
   * Nếu phạm vi mới rỗng ở chế độ hiện tại thì tự quay về "Toàn bộ" để không kẹt màn hình trống.
   */
  setCategory(cat: string | null, opts: { silent?: boolean } = {}): void {
    this.category.set(cat);
    if (cat && this.poolFor(this.mode(), cat).length === 0) {
      this.mode.set('all');
    }
    this.buildOrder(false);
    this.save();
    if (!opts.silent) {
      const n = this.order().length;
      this.toast.show(
        cat
          ? this.i18n.t('scope.set', { name: this.categoryLabel() ?? '', n })
          : this.i18n.t('scope.cleared', { n }),
      );
    }
  }

  /** Số câu hỏi có sẵn cho một phần thi / chủ đề, không phụ thuộc chế độ đang chọn. */
  countFor(cat: string): number {
    return this.poolFor('all', cat).length;
  }

  setShuffleQ(v: boolean): void {
    this.shuffleQ.set(v);
    this.buildOrder(true);
    this.save();
  }

  setShuffleO(v: boolean): void {
    this.shuffleO.set(v);
    this.optOrderCache.clear();
    this.save();
  }

  setAutoNext(v: boolean): void {
    this.autoNext.set(v);
    this.save();
  }

  toggleVi(): void {
    this.showVi.set(!this.showVi());
    this.save();
  }

  stepSize(dir: number): void {
    const i = SIZES.indexOf(this.size()) + dir;
    if (i < 0 || i >= SIZES.length) return;
    this.size.set(SIZES[i]);
    this.applyLook();
    this.save();
    this.toast.show(
      this.i18n.t('toast.sizeChanged', {
        size: this.i18n.t((['size.md', 'size.lg', 'size.xl'] as const)[i]),
      }),
    );
  }

  /** Giao diện chỉ có nền tối, nên ở đây chỉ còn cỡ chữ cần đồng bộ lên <html>. */
  applyLook(): void {
    document.documentElement.setAttribute('data-size', this.size());
  }

  /* ---------- xuất / nhập / xoá ---------- */
  exportData(): void {
    const fav = this.fav();
    const payload: ExportPayload = {
      app: 'AWS AI Practitioner Practice',
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: Object.keys(fav)
        .filter((k) => fav[Number(k)])
        .map(Number),
      progress: this.prog(),
      history: this.history(),
      settings: {
        lang: this.i18n.lang(),
        shuffleQ: this.shuffleQ(),
        shuffleO: this.shuffleO(),
        autoNext: this.autoNext(),
        showVi: this.showVi(),
        size: this.size(),
      },
    };
    const blob = new Blob([JSON.stringify(payload, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'aws-ai-practitioner-tien-do-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    this.toast.show(this.i18n.t('toast.exported'));
  }

  importData(txt: string): boolean {
    let d: Partial<ExportPayload> | null;
    try {
      d = JSON.parse(txt);
    } catch {
      this.toast.show(this.i18n.t('toast.badJson'));
      return false;
    }
    if (!d || typeof d !== 'object') {
      this.toast.show(this.i18n.t('toast.badJson'));
      return false;
    }
    if (Array.isArray(d.favorites)) {
      const f: Record<number, boolean> = {};
      d.favorites.forEach((id) => (f[id] = true));
      this.fav.set(f);
    }
    if (d.progress && typeof d.progress === 'object') this.prog.set(d.progress);
    if (Array.isArray(d.history)) this.history.set(d.history);
    if (d.settings) {
      if (d.settings.lang === 'en' || d.settings.lang === 'vi') this.i18n.set(d.settings.lang);
      this.shuffleQ.set(!!d.settings.shuffleQ);
      this.shuffleO.set(!!d.settings.shuffleO);
      this.autoNext.set(!!d.settings.autoNext);
      this.showVi.set(!!d.settings.showVi);
      if (SIZES.indexOf(d.settings.size as Size) >= 0) this.size.set(d.settings.size as Size);
    }
    const rev: Record<number, boolean> = {};
    const pk = { ...this.pick() };
    const prog = this.prog();
    Object.keys(prog).forEach((id) => {
      rev[Number(id)] = true;
      pk[Number(id)] = prog[Number(id)].picked || [];
    });
    this.revealed.set(rev);
    this.pick.set(pk);
    this.applyLook();
    this.buildOrder(false);
    this.save();
    this.toast.show(this.i18n.t('toast.imported'));
    return true;
  }

  resetAll(): void {
    this.fav.set({});
    this.prog.set({});
    this.history.set([]);
    this.session.set(null);
    this.pick.set({});
    this.revealed.set({});
    this.optOrderCache.clear();
    this.buildOrder(false);
    this.save();
    this.toast.show(this.i18n.t('toast.resetDone'));
  }
}
