import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DOMAINS, EXAM_GUIDE_URL, RESPONSIBLE_AI_URL } from '../core/categories';
import { QuizService } from '../core/quiz.service';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-study',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="study">
      <div class="card study-intro">
        <div class="card-head">
          <span class="qnum">{{ i18n.t('study.roadmap') }}</span>
          <span class="tag">{{ i18n.t('study.domains') }}</span>
          <span class="tag hide-sm">{{ i18n.t('study.topics', { n: topicTotal() }) }}</span>
          <span class="spacer"></span>
          <a class="btn sm" [href]="examGuideUrl" target="_blank" rel="noopener">
            {{ i18n.t('study.guideLink') }}
          </a>
        </div>
        <div class="study-body">
          <p>{{ i18n.t('study.intro') }}</p>
          <p class="study-note">
            <b>{{ i18n.t('study.noteLabel') }}</b> {{ i18n.t('study.examNote') }}
            <a [href]="responsibleAiUrl" target="_blank" rel="noopener">AWS Responsible AI</a
            >.
          </p>
        </div>
      </div>

      @for (d of domains(); track d.id) {
        <div class="card domain">
          <div class="card-head">
            <span class="qnum">{{ d.weight }}</span>
            <span class="dm-title">{{ d.title }}</span>
            <span class="spacer"></span>
            @if (cov().domains[d.id]; as c) {
              <span class="tag hide-sm">{{ i18n.t('study.count', { n: c.total }) }}</span>
              @if (c.total) {
                <span class="tag hide-sm">
                  {{ i18n.t('study.doneCount', { done: c.done, total: c.total }) }}
                </span>
              }
            }
            <button class="btn sm" [disabled]="!cov().domains[d.id].total" (click)="practice(d.id)">
              {{ i18n.t('study.practiceDomain') }}
            </button>
          </div>

          <div class="study-body">
            <p class="dm-obj">{{ d.objective }}</p>
            <p>{{ d.intro }}</p>
            <p class="svc-lbl">{{ i18n.t('study.keyServices') }}</p>
            <div class="svcs">
              @for (s of d.services; track s) {
                <span class="svc">{{ s }}</span>
              }
            </div>
            @if (cov().domains[d.id].total === 0) {
              <p class="warn-box">{{ i18n.t('study.noQuestions') }}</p>
            } @else {
              <div class="cov-bar" [title]="covTitle(d.id)">
                <i
                  class="cv-ok"
                  [style.width.%]="pct(cov().domains[d.id].ok, cov().domains[d.id].total)"
                ></i>
                <i
                  class="cv-no"
                  [style.width.%]="pct(cov().domains[d.id].no, cov().domains[d.id].total)"
                ></i>
                <i
                  class="cv-sh"
                  [style.width.%]="pct(cov().domains[d.id].sh, cov().domains[d.id].total)"
                ></i>
              </div>
            }
          </div>

          @for (g of d.groups; track g.title) {
            <div class="group">
              <h4 class="group-h">{{ g.title }}</h4>
              @for (t of g.topics; track t.id) {
                <div class="topic">
                  <button
                    class="topic-head"
                    [attr.aria-expanded]="isOpen(t.id)"
                    (click)="toggle(t.id)"
                  >
                    <span class="tw">{{ isOpen(t.id) ? '▾' : '▸' }}</span>
                    <span class="tt">{{ t.title }}</span>
                    @if (cov().topics[t.id]; as tc) {
                      @if (tc.total) {
                        <span class="tcount" [class.tdone]="tc.done === tc.total">
                          {{ tc.done }}/{{ tc.total }}
                        </span>
                      } @else {
                        <span class="tcount tnone">{{ i18n.t('study.zeroTopic') }}</span>
                      }
                    }
                  </button>

                  @if (isOpen(t.id)) {
                    <div class="topic-body">
                      <p class="t-obj">{{ t.objective }}</p>
                      <p class="t-ov">{{ t.overview }}</p>
                      <div class="t-links">
                        @for (l of t.links; track l.url) {
                          <a class="btn sm" [href]="l.url" target="_blank" rel="noopener">
                            {{ l.label }} ↗
                          </a>
                        }
                        @if (cov().topics[t.id].total) {
                          <button class="btn sm" (click)="practice(t.id)">
                            {{ i18n.t('study.practiceTopic', { n: cov().topics[t.id].total }) }}
                          </button>
                        }
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: `
    .study { display: flex; flex-direction: column; gap: 18px; }
    .study-body { padding: 16px 20px; font-size: calc(14.5px * var(--cs)); line-height: 1.68; color: var(--ink2); }
    .study-body p { margin: 0 0 10px; }
    .study-body p:last-child { margin: 0; }
    .study-note { font-size: calc(13.5px * var(--cs)); color: var(--ink3); border-left: 3px solid var(--warn-line); padding-left: 12px; }
    .dm-title { font-weight: 650; font-size: 15px; color: var(--ink); }
    .dm-obj { font-family: var(--f-mono); font-size: 11.5px; letter-spacing: .02em; color: var(--ink3); }
    .svc-lbl { font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .11em; text-transform: uppercase; color: var(--ink3); font-weight: 600; margin: 14px 0 8px !important; }
    .svcs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
    .svc {
      font-family: var(--f-mono); font-size: 11px; color: var(--aws-blue);
      border: 1px solid color-mix(in srgb, var(--aws-blue) 38%, transparent);
      background: color-mix(in srgb, var(--aws-blue) 10%, transparent);
      border-radius: 20px; padding: 3px 9px;
    }
    .warn-box { background: var(--warn-bg); border: 1px solid var(--warn-line); color: var(--warn); border-radius: 9px; padding: 10px 13px; font-size: calc(13.5px * var(--cs)); }
    .cov-bar { display: flex; height: 6px; border-radius: 4px; overflow: hidden; background: var(--line); }
    .cov-bar i { display: block; height: 100%; transition: width .45s var(--ease); }
    .cv-ok { background: var(--ok); } .cv-no { background: var(--bad); } .cv-sh { background: var(--warn); }
    .group { border-top: 1px solid var(--line); padding: 14px 20px; }
    .group-h { margin: 0 0 10px; font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .11em; text-transform: uppercase; color: var(--ink3); font-weight: 600; }
    .topic {
      border: 1px solid var(--line); border-radius: 10px; margin-bottom: 7px;
      background: var(--panel2); overflow: hidden;
      transition: border-color var(--t-fast), box-shadow var(--t-fast);
    }
    .topic:hover { border-color: var(--line2); box-shadow: var(--shadow-sm); }
    .topic:last-child { margin-bottom: 0; }
    .topic-head {
      display: flex; align-items: center; gap: 10px; width: 100%; text-align: left;
      background: none; border: 0; padding: 11px 14px; font-size: calc(14px * var(--cs)); color: var(--ink);
      transition: color var(--t-fast), background var(--t-fast);
    }
    .topic-head:hover { color: var(--accent); background: color-mix(in srgb, var(--accent) 7%, transparent); }
    .tw { font-family: var(--f-mono); color: var(--ink3); flex: 0 0 auto; }
    .tt { flex: 1; min-width: 0; }
    .tcount { font-family: var(--f-mono); font-size: 11px; color: var(--ink3); border: 1px solid var(--line2); border-radius: 20px; padding: 2px 8px; flex: 0 0 auto; }
    .tcount.tdone { color: var(--ok); border-color: var(--ok-line); }
    .tcount.tnone { opacity: .55; }
    .topic-body { padding: 0 14px 14px 36px; animation: topicIn .28s var(--ease) backwards; }
    @keyframes topicIn { from { opacity: 0; transform: translateY(-7px); } to { opacity: 1; transform: none; } }
    .t-obj { margin: 0 0 8px; font-family: var(--f-mono); font-size: 11px; color: var(--ink3); }
    .t-ov { margin: 0 0 12px; font-size: calc(14px * var(--cs)); line-height: 1.7; color: var(--ink2); }
    .t-links { display: flex; gap: 7px; flex-wrap: wrap; }
    .t-links a { text-decoration: none; }
    @media (max-width: 900px) {
      .study-body, .group { padding-left: 14px; padding-right: 14px; }
      .topic-body { padding-left: 30px; }
    }
  `,
})
export class StudyComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);

  readonly examGuideUrl = EXAM_GUIDE_URL;
  readonly responsibleAiUrl = RESPONSIBLE_AI_URL;
  readonly cov = this.quiz.coverage;

  /** danh mục đã chọn sẵn ngôn ngữ hiển thị cho tiêu đề và mô tả */
  readonly domains = computed(() =>
    DOMAINS.map((d) => ({
      id: d.id,
      weight: d.weight,
      objective: d.objective,
      services: d.services,
      title: this.i18n.pick(d.title, d.titleEn),
      intro: this.i18n.pick(d.intro, d.introEn),
      groups: d.groups.map((g) => ({
        title: g.title,
        topics: g.topics.map((t) => ({
          id: t.id,
          objective: t.objective,
          links: t.links,
          title: this.i18n.pick(t.title, t.titleEn),
          overview: this.i18n.pick(t.overview, t.overviewEn),
        })),
      })),
    })),
  );

  private readonly open = signal<Record<string, boolean>>({});

  readonly topicTotal = computed(() =>
    DOMAINS.reduce((n, d) => n + d.groups.reduce((m, g) => m + g.topics.length, 0), 0),
  );

  isOpen(id: string): boolean {
    return !!this.open()[id];
  }

  toggle(id: string): void {
    this.open.set({ ...this.open(), [id]: !this.open()[id] });
  }

  pct(n: number, total: number): number {
    return total ? (n / total) * 100 : 0;
  }

  covTitle(id: string): string {
    const c = this.cov().domains[id];
    return this.i18n.t('study.covTitle', {
      ok: c.ok,
      no: c.no,
      sh: c.sh,
      todo: c.total - c.done,
    });
  }

  /** Chuyển sang màn luyện tập, lọc đúng phần thi / chủ đề vừa chọn. */
  practice(cat: string): void {
    this.quiz.setCategory(cat);
    this.quiz.setView('practice');
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }
}
