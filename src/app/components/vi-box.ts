import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Question, ViPart } from '../core/models';
import { flow, letterFor } from '../core/text.util';
import { QuizService } from '../core/quiz.service';
import { TranslateService } from '../core/translate.service';
import { I18nService } from '../core/i18n.service';

/** Khối hiển thị bản dịch tiếng Việt cho câu hỏi hoặc phần giải thích. */
@Component({
  selector: 'app-vi-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (show()) {
      <div class="vi" [class.small]="small()">
        <span class="vi-tag">{{ i18n.t('vi.badge') }}</span>
        @if (missing()) {
          <span class="vi-err">{{ i18n.t('vi.missing') }}</span>
        } @else if (part() === 'q') {
          @for (p of qParas(); track $index) {
            <p>{{ p }}</p>
          }
          @if (qOptions().length) {
            <p style="margin-top:7px">
              @for (o of qOptions(); track $index) {
                <b>{{ o.k }})</b> {{ o.t }}@if (!$last) {<br />}
              }
            </p>
          }
          @if (qSubs().length) {
            <p style="margin-top:7px">
              @for (s of qSubs(); track $index) {
                • {{ s.prompt }}
                @if (s.opts) {
                  <span style="opacity:.75">({{ s.opts }})</span>
                }
                @if (!$last) {<br />}
              }
            </p>
          }
        } @else {
          @for (block of eBlocks(); track $index) {
            @for (p of block; track $index) {
              <p>{{ p }}</p>
            }
          }
        }
      </div>
    }
  `,
})
export class ViBoxComponent {
  readonly question = input.required<Question>();
  readonly part = input.required<ViPart>();
  readonly small = input(false);

  private readonly quiz = inject(QuizService);
  private readonly tr = inject(TranslateService);
  readonly i18n = inject(I18nService);

  private readonly entry = computed(() => this.tr.entry(this.question().id, this.part()));

  /** có nội dung dịch thật sự để hiển thị hay không */
  private readonly hasContent = computed(() =>
    this.part() === 'q'
      ? this.qParas().length > 0 || this.qOptions().length > 0 || this.qSubs().length > 0
      : this.eBlocks().some((b) => b.length > 0),
  );

  /** bật song ngữ nhưng câu này chưa có bản dịch nào kèm sẵn */
  readonly missing = computed(() => !this.hasContent());

  /**
   * Hiện khi bật song ngữ. Với phần giải thích, chỉ hiện khi thực sự có nội dung —
   * không làm phiền bằng thông báo "chưa có bản dịch" cho câu vốn không có giải thích.
   */
  readonly show = computed(() => {
    if (!this.quiz.showVi()) return false;
    if (this.hasContent()) return true;
    return this.part() === 'q';
  });

  readonly qParas = computed(() => flow(this.entry()?.question ?? []));

  readonly qOptions = computed(() =>
    (this.entry()?.options ?? []).map((t, i) => ({ k: letterFor(i), t })),
  );

  readonly qSubs = computed(() =>
    (this.entry()?.subs ?? []).map((s) => ({
      prompt: s.prompt ?? '',
      opts: s.options?.length ? s.options.join(' / ') : '',
    })),
  );

  readonly eBlocks = computed(() =>
    (this.entry()?.explanation ?? []).map((b) => flow(Array.isArray(b) ? b : [b])),
  );
}
