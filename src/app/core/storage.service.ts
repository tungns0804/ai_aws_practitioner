import { Injectable } from '@angular/core';

export type StorageMode = 'artifact' | 'local' | 'memory';

/** API storage do Claude artifact cung cấp (nếu chạy trong claude.ai). */
interface ClaudeStorage {
  get(key: string, shared: boolean): Promise<{ value?: string | null } | null>;
  set(key: string, value: string, shared: boolean): Promise<unknown>;
}

function claudeStorage(): ClaudeStorage | null {
  const s = (window as unknown as { storage?: ClaudeStorage }).storage;
  return s && typeof s.get === 'function' ? s : null;
}

/**
 * Lưu trữ 3 tầng: window.storage (Claude) → localStorage → bộ nhớ tạm.
 * Cùng cơ chế dự phòng như bản HTML gốc.
 */
@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly mem: Record<string, unknown> = {};
  readonly mode: StorageMode;

  constructor() {
    if (claudeStorage()) {
      this.mode = 'artifact';
    } else {
      try {
        const k = '__awsaip_probe__';
        window.localStorage.setItem(k, '1');
        window.localStorage.removeItem(k);
        this.mode = 'local';
      } catch {
        this.mode = 'memory';
      }
    }
  }

  /** khoá i18n mô tả nơi dữ liệu được lưu */
  get modeKey(): 'store.memory' | 'store.artifact' | 'store.local' {
    return this.mode === 'memory'
      ? 'store.memory'
      : this.mode === 'artifact'
        ? 'store.artifact'
        : 'store.local';
  }

  async get<T>(key: string): Promise<T | null> {
    if (this.mode === 'artifact') {
      try {
        const r = await claudeStorage()!.get(key, false);
        return r && r.value != null ? (JSON.parse(r.value) as T) : null;
      } catch {
        return null;
      }
    }
    if (this.mode === 'local') {
      try {
        const v = window.localStorage.getItem(key);
        return v ? (JSON.parse(v) as T) : null;
      } catch {
        return null;
      }
    }
    return (this.mem[key] as T) ?? null;
  }

  async set(key: string, val: unknown): Promise<void> {
    const s = JSON.stringify(val);
    if (this.mode === 'artifact') {
      try {
        await claudeStorage()!.set(key, s, false);
      } catch {
        /* bỏ qua */
      }
      return;
    }
    if (this.mode === 'local') {
      try {
        window.localStorage.setItem(key, s);
      } catch {
        /* bỏ qua */
      }
      return;
    }
    this.mem[key] = val;
  }
}
