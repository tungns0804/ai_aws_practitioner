# AWS AI Practitioner Practice — AIF-C01

Ứng dụng luyện thi chứng chỉ **AWS Certified AI Practitioner (AIF-C01)**, viết bằng Angular 20.
Cùng kiến trúc với bản [AI-900](https://github.com/tungns0804/azure-ai_900) nhưng giao diện chỉ có
**một chế độ nền tối (nightlight)** — không có nút đổi sang nền sáng.

**Bản chạy trực tiếp:** https://tungns0804.github.io/ai_aws_practitioner/

## Chạy

```bash
npm install
npm start            # http://localhost:4200
npm run build        # bản production -> dist/ai-aws-practitioner
npm run build:data   # sinh lại public/aws-aip-*.json từ data/
```

## Hai màn hình

| Màn hình | Nội dung |
|---|---|
| **Luyện thi** | Làm bài, chấm điểm, ⭐ yêu thích, phiên luyện tập, lịch sử, xuất/nhập JSON, phím tắt |
| **Học kiến thức** | 5 phần thi × 47 chủ đề theo Exam Guide chính thức, mỗi chủ đề có mô tả tổng quan + link tài liệu AWS + nút **Thi phần này / Thi chủ đề này** |

Chuyển màn hình bằng hai tab ở thanh trên. Ô **Phạm vi ôn tập** ở thanh bên lọc câu hỏi theo phần
thi hoặc theo chủ đề, và kết hợp được với các chế độ sẵn có (Yêu thích / Cần ôn lại / Chưa làm).

## Ngân hàng câu hỏi

**177 câu** biên soạn bám theo Exam Guide AIF-C01, phân bổ sát tỉ trọng đề thi thật:

| Phần thi | Tỉ trọng đề thi | Số câu | Tỉ lệ thực tế |
|---|---|---|---|
| d1 — Fundamentals of AI and ML | 20% | 38 | 21.5% |
| d2 — Fundamentals of Generative AI | 24% | 40 | 22.6% |
| d3 — Applications of Foundation Models | 28% | 51 | 28.8% |
| d4 — Guidelines for Responsible AI | 14% | 24 | 13.6% |
| d5 — Security, Compliance, and Governance | 14% | 24 | 13.6% |
| **Tổng** | | **177** | |

Cả 47 chủ đề trong Exam Guide đều có câu hỏi. Mỗi câu đều có phần giải thích (nêu cả lý do các
phương án còn lại sai) và **bản dịch tiếng Việt đầy đủ**; phần lớn câu kèm link tài liệu AWS gốc.

Năm dạng câu hỏi: `single` (chọn 1), `multi` (chọn nhiều), `truefalse`, `tf_table` (bảng đúng/sai
nhiều dòng), `match` (ghép nối).

## Đa ngôn ngữ (Việt / Anh)

Hai công tắc độc lập ở thanh trên:

* **VI / EN** — đổi ngôn ngữ của *toàn bộ giao diện*: nút, nhãn, thông báo, tên chủ đề và mô tả
  trong màn hình Học kiến thức. Lựa chọn được lưu cùng các thiết lập khác.
* **Song ngữ: Bật / Tắt** — hiện bản dịch tiếng Việt của *nội dung câu hỏi* ngay dưới bản tiếng Anh
  (đề thi thật ra đề bằng tiếng Anh nên phần câu hỏi luôn giữ nguyên bản gốc).

Bản dịch của cả 177 câu được đóng gói sẵn trong `public/aws-aip-vi.json`, nên tính năng chạy **hoàn
toàn offline**: không gọi mạng, không cần API key.

## Giao diện nightlight

Chỉ có một bảng màu duy nhất, khai báo ở `:root` trong `src/base.css`: nền xanh đêm sâu bốn tầng
(`--bg` → `--panel2`) với điểm nhấn cam AWS `#ff9900`. Không có khối `[data-theme="light"]`, không
có nút đổi theme, và `color-scheme: dark` khiến các control gốc của trình duyệt (select, checkbox,
thanh cuộn) cũng theo nền tối. Người dùng vẫn chỉnh được **cỡ chữ** vùng đọc bằng nút `A−` / `A+`
(3 mức, lưu vào `data-size` trên thẻ `<html>`).

## Cấu trúc

```
data/questions-d1.mjs …    NGUỒN song ngữ của câu hỏi (Anh + Việt cạnh nhau) — sửa ở đây
tools/build-data.mjs       kiểm tra tính hợp lệ rồi sinh hai file JSON trong public/
public/aws-aip-data.json   ngân hàng câu hỏi     } sinh ra từ data/, đừng sửa trực tiếp
public/aws-aip-vi.json     bản dịch tiếng Việt   }
src/base.css               toàn bộ CSS nền tối (nightlight)
src/app/core/
  categories.ts            5 phần thi / 47 chủ đề + mô tả + link tài liệu AWS
  categories.en.ts         bản tiếng Anh của tiêu đề và mô tả chủ đề
  i18n.ts                  từ điển [tiếng Việt, tiếng Anh] cho toàn bộ giao diện
  i18n.service.ts          signal ngôn ngữ + hàm t() thay thế {tham số}
  models.ts                kiểu dữ liệu câu hỏi, tiến độ, phiên, lịch sử
  text.util.ts             flow() nối dòng, shuffle(), fmtDate()
  storage.service.ts       lưu trữ 3 tầng: window.storage -> localStorage -> bộ nhớ tạm
  quiz.service.ts          toàn bộ trạng thái + chấm điểm + phiên + xuất/nhập (signals)
  translate.service.ts     tra bản dịch đóng gói sẵn
  toast.service.ts         thông báo nổi
src/app/components/
  sidebar.ts               phạm vi ôn tập, chế độ, tuỳ chọn, lưới câu hỏi, lịch sử, nút dữ liệu
  question-card.ts         thẻ câu hỏi cho cả 5 dạng + giải thích + link tài liệu AWS
  study.ts                 màn hình Học kiến thức
  vi-box.ts                khối bản dịch tiếng Việt
src/app/app.ts / app.html  khung ứng dụng: thanh trên, thanh dưới, hộp thoại, phím tắt
```

### Thêm câu hỏi mới

1. Mở file tương ứng trong `data/` (hoặc tạo `data/questions-<tên>.mjs` mới, export default một mảng).
2. Thêm câu hỏi theo mẫu song ngữ: `q/o/e` là tiếng Anh, `vq/vo/ve` là bản dịch tiếng Việt;
   câu dạng bảng dùng `subs` / `vsubs`; `refs` là link tài liệu AWS (tuỳ chọn). `id` không được trùng.
3. Chạy `npm run build:data`.

Script kiểm tra và **dừng lại nếu phát hiện lỗi**, để dữ liệu hỏng không lọt vào `public/`:

* id trùng, id không phải số, chủ đề lạ không có trong `categories.ts`;
* số đáp án đúng sai quy ước (`single` phải đúng 1, `multi` phải ≥ 2 và phải còn ít nhất 1 đáp án sai);
* số phần tử giữa bản Anh và bản Việt không khớp (`vq`/`vo`/`vsubs`/`ve`);
* chỉ số đáp án `a` nằm ngoài phạm vi;
* **câu `match` mà đáp án dòng thứ *i* luôn là lựa chọn thứ *i + k*** — kiểu ra đề này cho phép đoán
  trọn điểm mà không cần hiểu bài, nên bị chặn ngay từ khâu build.

Đáp án đúng viết lên đầu mảng `o` cho dễ soát; script tự **xoay vòng theo id** để vị trí đáp án đúng
trải đều giữa A/B/C/D (hiện tại: a 32, b 34, c 31, d 34). Câu `tf_table` cũng được xoay thứ tự dòng
để mẫu Đúng/Sai không đoán được. Câu `match` **không** xoay vì thứ tự dòng có thể mang ý nghĩa
(Bước 1, Bước 2…) — vì vậy mới cần validator nói trên.

## Lưu trữ và tương thích dữ liệu

Tiến độ lưu dưới khoá `awsaip:data:v1` theo ba tầng dự phòng: `window.storage` (khi chạy trong
Claude artifact) → `localStorage` → bộ nhớ tạm trong phiên. Nút **Xuất JSON** / **Nhập JSON** ở thanh
bên cho phép sao lưu và chuyển tiến độ giữa các máy.

## Phím tắt

| Phím | Tác dụng |
|---|---|
| `1`–`9` | Chọn đáp án |
| `Enter` | Kiểm tra đáp án, hoặc sang câu sau nếu đã kiểm tra |
| `←` `→` | Câu trước / câu sau |
| `F` | Đánh dấu yêu thích |

## Triển khai

Mỗi lần đẩy lên nhánh `main`, workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
chạy `npm run build:data`, build bản production với `--base-href /ai_aws_practitioner/` rồi đẩy thư
mục `dist/ai-aws-practitioner/browser` lên GitHub Pages. Không cần thao tác tay.

> `src/main.ts` nạp dữ liệu bằng đường dẫn **tương đối** (`aws-aip-data.json`), nên app chạy đúng cả
> khi được phục vụ dưới một thư mục con như `/ai_aws_practitioner/`.

## Miễn trừ

Đây là tài liệu ôn tập không chính thức, không liên kết với Amazon Web Services. Nội dung câu hỏi do
người viết biên soạn theo Exam Guide công khai, không phải câu hỏi thật của kỳ thi.
