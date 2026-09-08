import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { I18nService } from '../core/i18n.service';
import { flow } from '../core/text.util';
import { ViBoxComponent } from './vi-box';

@Component({
  selector: 'app-question-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ViBoxComponent],
  template: `
    <!-- track theo q.id: đổi câu là Angular dựng lại thẻ, nhờ vậy hiệu ứng vào chạy lại -->
    @for (q of currentList(); track q.id) {
      <div class="card">
        <div class="card-head">
          <span class="qnum">{{ i18n.t('card.num', { id: q.id }) }}</span>
          <span class="tag dom hide-sm">{{ quiz.domainLabel(q.domain) }}</span>
          <span class="tag">{{ quiz.typeLabel(q.type) }}</span>
          <span class="spacer"></span>
          <button
            class="star"
            [class.on]="isFav()"
            [attr.aria-pressed]="isFav()"
            [title]="i18n.t('card.fav')"
            (click)="quiz.toggleFav()"
          >
            ★
          </button>
        </div>

        <div class="qtext">
          @for (p of questionParas(); track $index) {
            <p>{{ p }}</p>
          }
          <app-vi-box [question]="q" part="q" />
        </div>

        @if (q.type === 'single' || q.type === 'multi') {
          @if (q.type === 'multi') {
            <p class="hint">{{ i18n.t('card.multiHint', { n: quiz.correctKeys(q).length }) }}</p>
          }
          <div class="opts">
            @for (o of quiz.currentOptions(); track o.k) {
              <button
                class="opt"
                [class.right]="revealed() && o.c"
                [class.wrong]="revealed() && !o.c && quiz.isPicked(o.k)"
                [class.pick]="!revealed() && quiz.isPicked(o.k)"
                [disabled]="revealed()"
                (click)="quiz.selectOpt(o.k)"
              >
                <span class="key">{{ o.k.toUpperCase() }}</span>
                <span>{{ o.t }}</span>
                @if (revealed() && o.c) {
                  <span class="mark">
                    {{
                      quiz.isPicked(o.k) ? i18n.t('card.markRightPicked') : i18n.t('card.markRight')
                    }}
                  </span>
                } @else if (revealed() && quiz.isPicked(o.k)) {
                  <span class="mark">{{ i18n.t('card.markPicked') }}</span>
                }
              </button>
            }
          </div>
        } @else {
          @if (q.type !== 'truefalse') {
            <p class="hint">
              {{ q.type === 'match' ? i18n.t('card.matchHint') : i18n.t('card.subHint') }}
            </p>
          }
          <div class="subs">
            @for (s of q.subs; track $index; let si = $index) {
              <div class="sub">
                @if (s.prompt) {
                  <div class="sub-p">{{ s.prompt }}</div>
                }
                <div class="sub-o">
                  @for (t of s.options; track $index; let oi = $index) {
                    <button
                      class="chip"
                      [class.right]="revealed() && oi === s.a"
                      [class.wrong]="revealed() && oi !== s.a && quiz.isSubPicked(si, oi)"
                      [class.pick]="!revealed() && quiz.isSubPicked(si, oi)"
                      [disabled]="revealed()"
                      (click)="quiz.selectSub(si, oi)"
                    >
                      {{ t }}
                    </button>
                  }
                </div>
              </div>
            }
          </div>
        }

        @if (revealed()) {
          <div class="verdict" [class]="'verdict ' + verdictClass()" role="status">
            {{ verdictText() }}
          </div>
          <div class="explain">
            <h4>{{ i18n.t('card.explain') }}</h4>
            @if (explainBlocks().length) {
              @for (block of explainBlocks(); track $index) {
                <div class="eblock">
                  @for (p of block; track $index) {
                    <p>{{ p }}</p>
                  }
                </div>
              }
              <app-vi-box [question]="q" part="e" [small]="true" />
            } @else {
              <p class="noexp">{{ i18n.t('card.noExplain') }}</p>
            }
            @if (q.refs.length) {
              <div class="reflinks">
                @for (r of q.refs; track r.url) {
                  <a class="btn sm" [href]="r.url" target="_blank" rel="noopener">{{ r.label }} ↗</a>
                }
              </div>
            }
          </div>
        }

        <div class="actions">
          @if (!revealed()) {
            <button class="btn primary" (click)="quiz.grade()">{{ i18n.t('card.check') }}</button>
            <button class="btn" (click)="quiz.reveal()">{{ i18n.t('card.reveal') }}</button>
            <span class="keys">
              <kbd>1</kbd>–<kbd>9</kbd> {{ i18n.t('card.keysPick') }} · <kbd>Enter</kbd>
              {{ i18n.t('card.keysCheck') }} · <kbd>F</kbd> {{ i18n.t('card.keysFav') }}
            </span>
          } @else {
            <button class="btn" (click)="quiz.retry()">{{ i18n.t('card.retry') }}</button>
            @if (quiz.canNext()) {
              <button class="btn primary" (click)="quiz.go(quiz.idx() + 1)">
                {{ i18n.t('card.next') }}
              </button>
            }
            <span class="keys">
              <kbd>Enter</kbd> {{ i18n.t('card.keysNext') }} · <kbd>←</kbd><kbd>→</kbd>
              {{ i18n.t('card.keysMove') }}
            </span>
          }
        </div>
      </div>
    } @empty {
      <div class="card">
        <div class="qtext">
          {{ i18n.t('card.emptyMode', { mode: quiz.modeName(quiz.mode()) }) }}
        </div>
        <div class="opts">
          <p class="empty">{{ i18n.t('card.emptyHint') }}</p>
        </div>
      </div>
    }
  `,
})
export class QuestionCardComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);

  readonly revealed = this.quiz.isRevealed;

  readonly isFav = computed(() => {
    const q = this.quiz.current();
    return !!q && !!this.quiz.fav()[q.id];
  });

  /** current() bọc thành mảng 0–1 phần tử để @for dựng lại thẻ mỗi khi đổi câu */
  readonly currentList = computed(() => {
    const q = this.quiz.current();
    return q ? [q] : [];
  });

  readonly questionParas = computed(() => flow(this.quiz.current()?.question ?? []));

  readonly explainBlocks = computed(() =>
    (this.quiz.current()?.explanation ?? []).map((b) => flow(b)),
  );

  private readonly status = computed(() => {
    const q = this.quiz.current();
    return q ? this.quiz.statusOf(q.id) : null;
  });

  readonly verdictClass = computed(() => {
    const st = this.status();
    return st === 'ok' ? 'ok' : st === 'sh' ? 'sh' : 'no';
  });

  readonly verdictText = computed(() => {
    const st = this.status();
    return this.i18n.t(
      st === 'ok' ? 'card.verdictOk' : st === 'sh' ? 'card.verdictSh' : 'card.verdictNo',
    );
  });
}
