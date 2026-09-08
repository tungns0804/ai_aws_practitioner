import { Injectable, signal } from '@angular/core';
import { I18nKey, Lang, STRINGS } from './i18n';

/**
 * Dịch giao diện. `lang` là một signal nên mọi template đọc `t(...)` sẽ tự vẽ lại khi đổi ngôn ngữ.
 *
 * UI translation. `lang` is a signal, so every template that calls `t(...)` re-renders on switch.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('vi');

  set(l: Lang): void {
    this.lang.set(l);
    try {
      document.documentElement.setAttribute('lang', l);
    } catch {
      /* bỏ qua */
    }
  }

  /** Lấy chuỗi theo khoá, thay thế {tên} bằng giá trị trong `params`. */
  t(key: I18nKey, params?: Record<string, string | number>): string {
    const pair = STRINGS[key] as readonly [string, string] | undefined;
    let s = pair ? (this.lang() === 'vi' ? pair[0] : pair[1]) : key;
    if (params) {
      for (const k of Object.keys(params)) s = s.split('{' + k + '}').join(String(params[k]));
    }
    return s;
  }

  /**
   * Chọn giữa hai biến thể tiếng Việt / tiếng Anh của một nội dung dữ liệu
   * (tiêu đề chủ đề, mô tả…). Thiếu bản tiếng Anh thì dùng lại bản tiếng Việt.
   */
  pick(vi: string, en?: string): string {
    return this.lang() === 'en' && en ? en : vi;
  }
}
