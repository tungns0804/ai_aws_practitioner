import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Question, ViEntry } from './app/core/models';

/** Tải JSON, trả về `fallback` nếu file không có hoặc hỏng (để app vẫn chạy được). */
async function loadJson<T>(url: string, fallback: T, required = false): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return (await res.json()) as T;
  } catch (err) {
    if (required) throw err;
    console.warn('Không tải được ' + url + ' — bỏ qua.', err);
    return fallback;
  }
}

/**
 * Nạp ngân hàng câu hỏi trước khi khởi động, sau đó nạp tiến độ đã lưu.
 *
 *   aws-aip-data.json — ngân hàng câu hỏi AIF-C01 (bắt buộc), sinh từ data/ bằng `npm run build:data`
 *   aws-aip-vi.json   — bản dịch tiếng Việt kèm sẵn (tuỳ chọn)
 *
 * Đường dẫn để tương đối (không có "/" ở đầu) nên app chạy đúng cả khi được phục vụ dưới một
 * thư mục con, ví dụ GitHub Pages tại /ai_aws_practitioner/.
 */
async function main(): Promise<void> {
  const [questions, vi] = await Promise.all([
    loadJson<Question[]>('aws-aip-data.json', [], true),
    loadJson<Record<string, ViEntry>>('aws-aip-vi.json', {}),
  ]);

  const ref = await bootstrapApplication(App, appConfig);

  const { QuizService } = await import('./app/core/quiz.service');
  const { TranslateService } = await import('./app/core/translate.service');
  ref.injector.get(TranslateService).setBuiltIn(vi);
  await ref.injector.get(QuizService).init(questions);
}

main().catch((err) => {
  console.error(err);
  document.body.innerHTML =
    '<p style="font-family:system-ui;padding:24px;color:#ff6b5e">' +
    'Không khởi động được ứng dụng / Could not start the app: ' +
    String(err instanceof Error ? err.message : err) +
    '</p>';
});
