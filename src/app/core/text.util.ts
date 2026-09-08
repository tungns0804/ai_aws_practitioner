/**
 * Nối các dòng bị ngắt từ PDF thành đoạn văn liền mạch.
 * Giữ nguyên thuật toán của bản HTML gốc.
 */
export function flow(lines: readonly (string | null | undefined)[] | null | undefined): string[] {
  const out: string[] = [];
  (lines || []).forEach((raw) => {
    const line = String(raw == null ? '' : raw).trim();
    if (!line) return;
    const prev = out.length ? out[out.length - 1] : null;
    const isBullet = /^[•\-–]\s/.test(line);
    const isTable = line.indexOf(' | ') >= 0;
    const isNote = /^NOTE\s*:/i.test(line);
    const isLetter = /^[a-h]\)\s/.test(line);
    const prevEnds = prev ? /[.?!:;]["')\]]?$/.test(prev) : true;
    const prevTable = prev ? prev.indexOf(' | ') >= 0 : false;
    const canJoin = prev && !prevEnds && !isBullet && !isTable && !prevTable && !isNote && !isLetter;
    if (canJoin) {
      out[out.length - 1] = /-$/.test(prev!) ? prev! + line : prev! + ' ' + line;
    } else out.push(line);
  });
  return out;
}

/** Trộn mảng (Fisher–Yates) — trả về bản sao. */
export function shuffle<T>(a: readonly T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = r[i];
    r[i] = r[j];
    r[j] = t;
  }
  return r;
}

/** dd/MM HH:mm — định dạng ngày của bản gốc. */
export function fmtDate(iso: string): string {
  try {
    const d = new Date(iso);
    const p = (n: number) => (n < 10 ? '0' : '') + n;
    return p(d.getDate()) + '/' + p(d.getMonth() + 1) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  } catch {
    return '';
  }
}

export function letterFor(i: number): string {
  return String.fromCharCode(97 + i);
}
