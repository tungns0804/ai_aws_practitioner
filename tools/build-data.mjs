/**
 * Sinh dữ liệu chạy được từ nguồn song ngữ trong data/.
 *
 *   data/questions-*.mjs → public/aws-aip-data.json  (ngân hàng câu hỏi)
 *                        → public/aws-aip-vi.json    (bản dịch tiếng Việt kèm sẵn)
 *
 * Chạy: npm run build:data
 *
 * Script tự kiểm tra tính hợp lệ và dừng lại nếu phát hiện lỗi, để dữ liệu hỏng
 * không bao giờ lọt vào thư mục public/.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'data');
const publicDir = join(root, 'public');

const errors = [];
const fail = (msg) => errors.push(msg);

/* ---------- 1. đọc danh mục chủ đề từ categories.ts ---------- */

/**
 * Đọc trực tiếp file nguồn TypeScript thay vì import: tránh phải dựng bước biên dịch
 * chỉ để lấy một bảng ánh xạ id.
 *
 * @returns {Map<string,string>} topicId → domainId
 */
function readTopicDomains() {
  const src = readFileSync(join(root, 'src/app/core/categories.ts'), 'utf8');
  const map = new Map();
  let domain = null;
  for (const line of src.split('\n')) {
    const m = /^\s+id: '([a-z0-9-]+)',\s*$/.exec(line);
    if (!m) continue;
    if (/^d[1-5]$/.test(m[1])) domain = m[1];
    else if (domain) map.set(m[1], domain);
  }
  return map;
}

/* ---------- 2. nạp các file nguồn ---------- */

async function loadAll(prefix) {
  const files = readdirSync(dataDir)
    .filter((f) => f.startsWith(prefix) && f.endsWith('.mjs'))
    .sort();
  const out = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(join(dataDir, f)).href);
    out.push({ file: f, value: mod.default });
  }
  return out;
}

/* ---------- 3. chuyển câu hỏi sang định dạng của app ---------- */

const TYPES = new Set(['single', 'multi', 'truefalse', 'tf_table', 'match']);
const LETTERS = 'abcdefghij';

/**
 * Nguồn viết đáp án đúng lên đầu cho dễ đọc và dễ soát, nhưng nếu giữ nguyên thì đáp án đúng
 * lúc nào cũng là câu A. Xoay vòng danh sách theo id để trải đều vị trí đáp án đúng.
 * Cùng một id luôn cho cùng một thứ tự, nên build lại nhiều lần vẫn ra kết quả giống nhau.
 */
function rotate(arr, by) {
  const n = arr.length;
  if (!n) return arr;
  const k = ((by % n) + n) % n;
  return arr.map((_, i) => arr[(i + k) % n]);
}

function toQuestion(raw, file, topicDomains) {
  const where = `${file} · id ${raw.id}`;

  if (typeof raw.id !== 'number' || raw.id < 1) fail(`${where}: id phải là số >= 1`);
  if (!TYPES.has(raw.type)) fail(`${where}: type "${raw.type}" không hợp lệ`);
  if (!topicDomains.has(raw.topic))
    fail(`${where}: topic "${raw.topic}" không có trong categories.ts`);
  if (!Array.isArray(raw.q) || !raw.q.length) fail(`${where}: thiếu phần câu hỏi (q)`);
  if (!Array.isArray(raw.vq) || raw.vq.length !== (raw.q?.length ?? 0))
    fail(`${where}: vq phải có đúng số dòng như q`);

  const choice = raw.type === 'single' || raw.type === 'multi';
  const options = [];
  const subs = [];

  let vo = raw.vo;
  let vsubs = raw.vsubs ?? [];

  if (choice) {
    if (!Array.isArray(raw.o) || raw.o.length < 2) fail(`${where}: cần ít nhất 2 đáp án`);
    const src = raw.o ?? [];
    const by = raw.id;
    rotate(src, by).forEach(([text, correct], i) => {
      options.push({ k: LETTERS[i], t: text, c: !!correct });
    });
    if (Array.isArray(vo) && vo.length === src.length) vo = rotate(vo, by);
    const nCorrect = options.filter((o) => o.c).length;
    if (raw.type === 'single' && nCorrect !== 1)
      fail(`${where}: câu single phải có đúng 1 đáp án đúng (đang có ${nCorrect})`);
    if (raw.type === 'multi' && nCorrect < 2)
      fail(`${where}: câu multi phải có từ 2 đáp án đúng trở lên (đang có ${nCorrect})`);
    if (raw.type === 'multi' && nCorrect >= options.length)
      fail(`${where}: câu multi phải có ít nhất một đáp án sai`);
    if (!Array.isArray(raw.vo) || raw.vo.length !== options.length)
      fail(`${where}: vo phải có đúng số phần tử như o`);
    if (raw.subs) fail(`${where}: câu ${raw.type} không được có subs`);
  } else {
    if (!Array.isArray(raw.subs) || !raw.subs.length) fail(`${where}: thiếu subs`);
    (raw.subs ?? []).forEach((s, i) => {
      if (!Array.isArray(s.o) || s.o.length < 2) fail(`${where}: sub ${i} cần ít nhất 2 lựa chọn`);
      if (typeof s.a !== 'number' || s.a < 0 || s.a >= (s.o?.length ?? 0))
        fail(`${where}: sub ${i} có chỉ số đáp án đúng (a) không hợp lệ`);
      subs.push({ prompt: s.p ?? '', options: s.o, a: s.a });
    });
    if (raw.type === 'truefalse' && subs.length !== 1)
      fail(`${where}: câu truefalse phải có đúng 1 sub`);
    if (!Array.isArray(raw.vsubs) || raw.vsubs.length !== subs.length)
      fail(`${where}: vsubs phải có đúng số phần tử như subs`);
    (raw.vsubs ?? []).forEach((s, i) => {
      if (!Array.isArray(s.o) || s.o.length !== subs[i]?.options.length)
        fail(`${where}: vsubs ${i} phải có đúng số lựa chọn như subs ${i}`);
    });
    if (raw.o) fail(`${where}: câu ${raw.type} không được có o`);

    // Bảng True/False: các dòng độc lập với nhau nên xoay được. Nếu không xoay thì dòng đầu
    // lúc nào cũng True và mẫu đáp án trở nên đoán được. Câu match KHÔNG xoay vì thứ tự
    // các dòng ở đó có thể mang ý nghĩa (Bước 1, Bước 2…).
    if (raw.type === 'tf_table') {
      const order = rotate(
        subs.map((_, i) => i),
        raw.id,
      );
      subs.splice(0, subs.length, ...order.map((i) => subs[i]));
      vsubs = order.map((i) => vsubs[i]);
    }

    // Câu match không xoay được (thứ tự dòng có thể mang ý nghĩa, ví dụ Bước 1, Bước 2…),
    // nên phải chặn ngay ở nguồn kiểu ra đề mà đáp án đúng của dòng thứ i luôn là lựa chọn
    // thứ i + k: người làm chỉ cần nhận ra quy luật là ăn trọn điểm mà không cần hiểu bài.
    if (raw.type === 'match' && subs.length > 1) {
      const n = subs[0].options.length;
      const sameOptions = subs.every((s) => s.options.length === n);
      if (sameOptions) {
        for (let k = 0; k < n; k++) {
          if (subs.every((s, i) => s.a === (i + k) % n)) {
            fail(
              `${where}: đáp án các dòng đang theo đúng thứ tự lựa chọn (lệch ${k}) — ` +
                'hãy đổi thứ tự mảng o và sửa a cho tương ứng để không đoán được',
            );
            break;
          }
        }
      }
    }
  }

  const explanation = (raw.e ?? []).map((b) => (Array.isArray(b) ? b : [b]));
  const ve = (raw.ve ?? []).map((b) => (Array.isArray(b) ? b : [b]));
  if (explanation.length !== ve.length) fail(`${where}: ve phải có đúng số khối như e`);

  const refs = (raw.refs ?? []).map((r) => {
    if (!r || typeof r.label !== 'string' || typeof r.url !== 'string')
      fail(`${where}: refs phải là danh sách {label, url}`);
    return { label: r?.label ?? '', url: r?.url ?? '' };
  });

  return {
    question: {
      id: raw.id,
      type: raw.type,
      question: raw.q ?? [],
      options,
      subs,
      explanation,
      refs,
      topic: raw.topic,
      domain: topicDomains.get(raw.topic) ?? '',
    },
    vi: buildViEntries(raw.id, {
      q: raw.vq,
      o: choice ? vo : undefined,
      s: choice ? undefined : vsubs,
      e: ve.length ? ve : undefined,
    }),
  };
}

/* ---------- 4. bản dịch tiếng Việt ---------- */

/** Chuyển một mục nguồn {q,o,s,e} thành cặp "<id>:q" / "<id>:e". */
function buildViEntries(id, src) {
  const out = {};
  const q = {};
  if (src.q?.length) q.question = src.q;
  if (src.o?.length) q.options = src.o;
  if (src.s?.length)
    q.subs = src.s.map((s) => ({ prompt: s.p ?? s.prompt ?? '', options: s.o ?? s.options ?? [] }));
  if (Object.keys(q).length) out[`${id}:q`] = q;
  if (src.e?.length) out[`${id}:e`] = { explanation: src.e };
  return out;
}

/* ---------- 5. chạy ---------- */

const topicDomains = readTopicDomains();
if (!topicDomains.size) fail('Không đọc được chủ đề nào từ categories.ts');

const questions = [];
let vi = {};
const seen = new Set();

for (const { file, value } of await loadAll('questions-')) {
  if (!Array.isArray(value)) {
    fail(`${file}: export default phải là một mảng`);
    continue;
  }
  for (const raw of value) {
    if (seen.has(raw.id)) fail(`${file}: id ${raw.id} bị trùng`);
    seen.add(raw.id);
    const { question, vi: entries } = toQuestion(raw, file, topicDomains);
    questions.push(question);
    vi = { ...vi, ...entries };
  }
}

if (!questions.length) fail('Không có câu hỏi nào trong data/');

if (errors.length) {
  console.error('Dữ liệu không hợp lệ:\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}

questions.sort((a, b) => a.id - b.id);
writeFileSync(join(publicDir, 'aws-aip-data.json'), JSON.stringify(questions), 'utf8');
writeFileSync(join(publicDir, 'aws-aip-vi.json'), JSON.stringify(vi), 'utf8');

/* ---------- 6. báo cáo ---------- */
const byDomain = {};
const byType = {};
const byTopic = {};
for (const q of questions) {
  byDomain[q.domain] = (byDomain[q.domain] ?? 0) + 1;
  byType[q.type] = (byType[q.type] ?? 0) + 1;
  byTopic[q.topic] = (byTopic[q.topic] ?? 0) + 1;
}
const answerPos = {};
for (const q of questions) {
  if (q.type !== 'single') continue;
  const k = q.options.find((o) => o.c)?.k ?? '?';
  answerPos[k] = (answerPos[k] ?? 0) + 1;
}
const emptyTopics = [...topicDomains.keys()].filter((t) => !byTopic[t]);
const translatedQ = Object.keys(vi).filter((k) => k.endsWith(':q')).length;

console.log(`aws-aip-data.json : ${questions.length} cau hoi`);
console.log('  theo phan thi   :', JSON.stringify(byDomain));
console.log('  theo dang cau   :', JSON.stringify(byType));
console.log('  vi tri dap an   :', JSON.stringify(answerPos));
console.log(`aws-aip-vi.json   : ${Object.keys(vi).length} khoa dich`);
console.log(`  cau co ban dich : ${translatedQ}/${questions.length}`);
if (emptyTopics.length) console.log(`  chu de chua co cau (${emptyTopics.length}): ${emptyTopics.join(', ')}`);
else console.log('  tat ca chu de deu co cau hoi');
