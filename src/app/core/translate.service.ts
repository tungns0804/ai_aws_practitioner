import { Injectable, signal } from '@angular/core';
import { ViEntry, ViPart } from './models';

/**
 * Bản dịch tiếng Việt được đóng gói sẵn trong `public/aws-aip-vi.json` và nạp một lần lúc khởi
 * động, nên tính năng song ngữ chạy hoàn toàn offline: không gọi mạng, không cần API key.
 *
 * Khoá tra cứu có dạng "<id câu>:<phần>" với phần là 'q' (đề bài + đáp án) hoặc 'e' (giải thích).
 */
@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly builtIn = signal<Record<string, ViEntry>>({});

  setBuiltIn(v: Record<string, ViEntry> | null | undefined): void {
    if (v) this.builtIn.set(v);
  }

  key(id: number, part: ViPart): string {
    return id + ':' + part;
  }

  entry(id: number, part: ViPart): ViEntry | undefined {
    return this.builtIn()[this.key(id, part)];
  }
}
