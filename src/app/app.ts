import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { QuizService } from './core/quiz.service';
import { ToastService } from './core/toast.service';
import { I18nService } from './core/i18n.service';
import { SidebarComponent } from './components/sidebar';
import { QuestionCardComponent } from './components/question-card';
import { StudyComponent } from './components/study';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidebarComponent, QuestionCardComponent, StudyComponent],
  templateUrl: './app.html',
  styles: `
    .viewtabs { display: flex; border: 1px solid var(--line2); border-radius: 8px; overflow: hidden; }
    .viewtabs button {
      background: var(--panel); border: 0; padding: 6px 13px;
      font-size: 12.5px; font-weight: 550; color: var(--ink2);
      transition: background var(--t-fast), color var(--t-fast);
    }
    .viewtabs button + button { border-left: 1px solid var(--line2); }
    .viewtabs button:hover { color: var(--accent); background: var(--panel2); }
    .viewtabs button.on { background: var(--accent-bg); color: var(--accent-ink); font-weight: 650; }
    .langctl button {
      font-family: var(--f-mono); font-size: 11.5px; letter-spacing: .06em; padding: 6px 10px;
    }
    .scope-bar {
      display: flex; align-items: center; gap: 9px; flex-wrap: wrap; margin-bottom: 14px;
      animation: scopeIn .3s var(--ease) backwards;
      background: color-mix(in srgb, var(--accent) 10%, var(--panel));
      border: 1px dashed color-mix(in srgb, var(--accent) 50%, transparent);
      border-radius: 10px; padding: 9px 14px; font-size: 13.5px; color: var(--ink);
    }
    .scope-lbl {
      font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .11em;
      text-transform: uppercase; color: var(--ink3); font-weight: 600;
    }
    .scope-n { font-family: var(--f-mono); font-size: 12px; color: var(--ink3); }
    .study-wrap { padding-bottom: 40px; }
    @keyframes scopeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
  `,
})
export class App {
  readonly quiz = inject(QuizService);
  readonly toast = inject(ToastService);
  readonly i18n = inject(I18nService);

  readonly sideOpen = signal(false);
  readonly importText = signal('');

  private readonly impDlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('impDlg');

  closeSide(): void {
    this.sideOpen.set(false);
  }

  openImport(): void {
    this.importText.set('');
    this.impDlgRef().nativeElement.showModal();
  }

  confirmImport(): void {
    if (this.quiz.importData(this.importText())) this.impDlgRef().nativeElement.close();
  }

  textValue(e: Event): string {
    return (e.target as HTMLTextAreaElement).value;
  }

  readFile(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => this.importText.set(String(r.result));
    r.readAsText(f);
  }

  /* ---------- phím tắt ---------- */
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    // phím tắt chỉ áp dụng cho màn luyện thi
    if (this.quiz.view() !== 'practice') return;
    const t = e.target as HTMLElement | null;
    if (t && typeof t.matches === 'function' && t.matches('input,textarea,select')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('dialog[open]')) return;

    if (e.key === 'ArrowLeft') {
      this.quiz.go(this.quiz.idx() - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      this.quiz.go(this.quiz.idx() + 1);
      return;
    }

    const q = this.quiz.current();
    if (!q) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.quiz.revealed()[q.id]) this.quiz.go(this.quiz.idx() + 1);
      else this.quiz.grade();
      return;
    }
    if (e.key === 'f' || e.key === 'F') {
      this.quiz.toggleFav();
      return;
    }
    if (/^[1-9]$/.test(e.key)) {
      const n = Number(e.key) - 1;
      if (q.type === 'single' || q.type === 'multi') {
        const arr = this.quiz.currentOptions();
        if (arr[n]) this.quiz.selectOpt(arr[n].k);
      } else if (q.subs.length === 1 && q.subs[0].options[n] !== undefined) {
        this.quiz.selectSub(0, n);
      }
    }
  }
}
