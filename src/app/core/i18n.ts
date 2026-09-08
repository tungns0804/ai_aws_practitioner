/**
 * Từ điển đa ngôn ngữ cho toàn bộ giao diện.
 * Mỗi khoá là một cặp [tiếng Việt, tiếng Anh]; chỗ cần chèn số/chữ dùng {tên}.
 *
 * Bilingual dictionary for the whole UI.
 * Every key holds a [Vietnamese, English] pair; placeholders use {name}.
 */
export type Lang = 'vi' | 'en';

export const STRINGS = {
  /* ---------- chung / common ---------- */
  'app.title': ['AWS AI Practitioner', 'AWS AI Practitioner'],
  'app.subtitle': ['AIF-C01 · {n} câu', 'AIF-C01 · {n} questions'],
  'app.menu': ['☰ Danh sách', '☰ Menu'],
  'common.questions': ['{n} câu', '{n} questions'],
  'common.close': ['Đóng', 'Close'],
  'common.cancel': ['Huỷ', 'Cancel'],
  'common.clearFilter': ['Bỏ lọc', 'Clear filter'],
  'common.empty': ['Danh sách trống.', 'The list is empty.'],

  /* ---------- thanh trên / topbar ---------- */
  'view.group': ['Màn hình', 'Screen'],
  'view.practice': ['Luyện thi', 'Practice'],
  'view.study': ['Học kiến thức', 'Study'],
  'top.done': ['Đã làm', 'Answered'],
  'top.ok': ['Đúng', 'Correct'],
  'top.no': ['Sai', 'Wrong'],
  'top.rate': ['Tỉ lệ', 'Accuracy'],
  'top.sizeGroup': ['Cỡ chữ', 'Text size'],
  'top.sizeDown': ['Giảm cỡ chữ', 'Smaller text'],
  'top.sizeUp': ['Tăng cỡ chữ', 'Larger text'],
  'top.langGroup': ['Ngôn ngữ giao diện', 'Interface language'],
  'top.langHint': [
    'Đổi ngôn ngữ toàn bộ giao diện (Việt / Anh)',
    'Switch the whole interface language (Vietnamese / English)',
  ],
  'top.viOn': ['Song ngữ: Bật', 'Bilingual: On'],
  'top.viOff': ['Song ngữ: Tắt', 'Bilingual: Off'],
  'top.viHint': [
    'Hiện bản dịch tiếng Việt ngay dưới nội dung tiếng Anh',
    'Show the Vietnamese translation under the English text',
  ],

  /* ---------- điều hướng / navigation ---------- */
  'nav.prev': ['Câu trước', 'Previous'],
  'nav.next': ['Câu sau', 'Next'],

  /* ---------- phạm vi / scope ---------- */
  'scope.label': ['Phạm vi', 'Scope'],
  'scope.title': ['Phạm vi ôn tập', 'Study scope'],
  'scope.all': ['Toàn bộ đề thi ({n} câu)', 'Entire question bank ({n} questions)'],
  'scope.wholeDomain': ['▸ Cả phần này ({n} câu)', '▸ This whole domain ({n} questions)'],
  'scope.set': ['Phạm vi: {name} · {n} câu', 'Scope: {name} · {n} questions'],
  'scope.cleared': [
    'Đã bỏ lọc — ôn toàn bộ {n} câu.',
    'Filter cleared — practising all {n} questions.',
  ],

  /* ---------- chế độ / modes ---------- */
  'mode.title': ['Chế độ luyện tập', 'Practice mode'],
  'mode.all': ['Toàn bộ', 'All'],
  'mode.fav': ['Yêu thích ⭐', 'Favourites ⭐'],
  'mode.favShort': ['Yêu thích', 'Favourites'],
  'mode.review': ['Cần ôn lại', 'Needs review'],
  'mode.todo': ['Chưa làm', 'Not attempted'],

  /* ---------- tuỳ chọn / options ---------- */
  'opt.title': ['Tuỳ chọn', 'Options'],
  'opt.shuffleQ': ['Trộn thứ tự câu hỏi', 'Shuffle question order'],
  'opt.shuffleO': ['Trộn thứ tự đáp án', 'Shuffle answer order'],
  'opt.autoNext': ['Tự sang câu sau khi trả lời đúng', 'Auto-advance after a correct answer'],

  /* ---------- danh sách câu / question list ---------- */
  'list.title': ['Danh sách câu hỏi', 'Question list'],
  'list.jumpPlaceholder': ['Tới câu số…', 'Go to question no.…'],
  'list.jump': ['Tới', 'Go'],
  'list.jumpAria': ['Tới câu số', 'Go to question number'],
  'list.cell': ['Câu {id}', 'Question {id}'],
  'legend.ok': ['Đúng', 'Correct'],
  'legend.no': ['Sai', 'Wrong'],
  'legend.sh': ['Đã xem đáp án', 'Answer revealed'],
  'legend.fav': ['Yêu thích', 'Favourite'],

  /* ---------- lịch sử / history ---------- */
  'hist.title': ['Lịch sử luyện tập', 'Practice history'],
  'hist.running': ['Phiên đang chạy · {mode}', 'Session in progress · {mode}'],
  'hist.startedAt': ['Bắt đầu {time}', 'Started {time}'],
  'hist.detail': ['{time} · {ok}/{total} đúng', '{time} · {ok}/{total} correct'],
  'hist.shownExtra': [' · {n} xem đáp án', ' · {n} revealed'],
  'hist.none': [
    'Chưa có lịch sử. Kết thúc một phiên để lưu lại.',
    'No history yet. End a session to save one.',
  ],
  'hist.end': ['Kết thúc & lưu phiên', 'End & save session'],

  /* ---------- dữ liệu / data ---------- */
  'data.title': ['Dữ liệu', 'Data'],
  'data.export': ['Xuất JSON', 'Export JSON'],
  'data.import': ['Nhập JSON', 'Import JSON'],
  'data.reset': ['Xoá tiến độ', 'Reset progress'],
  'data.status': ['Trạng thái: {mode}', 'Storage: {mode}'],
  'store.memory': ['Không lưu được (chỉ trong phiên này)', 'Not persisted (this session only)'],
  'store.artifact': ['Đã lưu trong Claude', 'Saved in Claude'],
  'store.local': ['Đã lưu trên trình duyệt', 'Saved in this browser'],

  /* ---------- thẻ câu hỏi / question card ---------- */
  'card.num': ['CÂU {id}', 'Q{id}'],
  'card.fav': ['Đánh dấu yêu thích (phím F)', 'Mark as favourite (key F)'],
  'card.multiHint': ['Câu này có {n} đáp án đúng.', 'This question has {n} correct answers.'],
  'card.subHint': ['Chọn đáp án cho từng dòng bên dưới.', 'Pick an answer for every row below.'],
  'card.matchHint': [
    'Ghép mỗi dòng bên dưới với lựa chọn đúng.',
    'Match every row below with the right choice.',
  ],
  'card.markRightPicked': ['Đúng · bạn chọn', 'Correct · your pick'],
  'card.markRight': ['Đáp án đúng', 'Correct answer'],
  'card.markPicked': ['Bạn chọn', 'Your pick'],
  'card.verdictOk': ['✓ Chính xác', '✓ Correct'],
  'card.verdictNo': ['✕ Chưa đúng', '✕ Not correct'],
  'card.verdictSh': [
    '◆ Bạn đã xem đáp án — câu này được xếp vào nhóm cần ôn lại',
    '◆ You revealed the answer — this question goes to the review list',
  ],
  'card.explain': ['Giải thích', 'Explanation'],
  'card.noExplain': ['Câu này chưa có phần giải thích.', 'This question has no explanation yet.'],
  'card.refs': ['Tài liệu AWS', 'AWS documentation'],
  'card.check': ['Kiểm tra đáp án', 'Check answer'],
  'card.reveal': ['Xem đáp án', 'Reveal answer'],
  'card.retry': ['Làm lại câu này', 'Try this question again'],
  'card.next': ['Câu tiếp theo →', 'Next question →'],
  'card.keysPick': ['chọn', 'pick'],
  'card.keysCheck': ['kiểm tra', 'check'],
  'card.keysFav': ['yêu thích', 'favourite'],
  'card.keysNext': ['câu sau', 'next'],
  'card.keysMove': ['chuyển câu', 'move'],
  'card.emptyMode': ['Không có câu hỏi nào trong chế độ {mode}.', 'No questions in {mode} mode.'],
  'card.emptyHint': [
    'Chọn “Toàn bộ” ở thanh bên, hoặc đánh dấu ⭐ ở các câu bạn muốn ôn lại.',
    'Pick “All” in the sidebar, or star ⭐ the questions you want to review.',
  ],

  /* ---------- loại câu hỏi / question types ---------- */
  'type.single': ['CHỌN 1 ĐÁP ÁN', 'SINGLE CHOICE'],
  'type.multi': ['CHỌN NHIỀU ĐÁP ÁN', 'MULTIPLE RESPONSE'],
  'type.truefalse': ['ĐÚNG / SAI', 'TRUE / FALSE'],
  'type.tf_table': ['BẢNG ĐÚNG / SAI', 'TRUE / FALSE TABLE'],
  'type.match': ['GHÉP NỐI', 'MATCHING'],

  /* ---------- hộp dịch / translation box ---------- */
  'vi.busy': ['Đang dịch…', 'Translating…'],
  'vi.error': [
    'Chưa có bản dịch cho phần này ({err}).',
    'No translation available for this section ({err}).',
  ],
  'vi.missing': [
    'Câu này chưa có bản dịch tiếng Việt kèm sẵn.',
    'This question has no bundled Vietnamese translation yet.',
  ],
  'vi.badge': ['TIẾNG VIỆT', 'VIETNAMESE'],

  /* ---------- màn hình học / study screen ---------- */
  'study.roadmap': ['LỘ TRÌNH', 'ROADMAP'],
  'study.domains': ['5 PHẦN THI', '5 DOMAINS'],
  'study.topics': ['{n} CHỦ ĐỀ', '{n} TOPICS'],
  'study.guideLink': ['Exam Guide gốc ↗', 'Official exam guide ↗'],
  'study.intro': [
    'Danh sách dưới đây bám theo Exam Guide chính thức của AWS cho kỳ thi AWS Certified AI Practitioner (AIF-C01). Mỗi chủ đề có phần mô tả tổng quan và link tài liệu AWS để đọc chi tiết. Bấm “Thi phần này” để luyện đúng nhóm câu hỏi tương ứng.',
    'The outline below follows the official AWS exam guide for AWS Certified AI Practitioner (AIF-C01). Every topic has an overview plus links to AWS documentation. Press “Practise this domain” to drill exactly that group of questions.',
  ],
  'study.noteLabel': ['Về kỳ thi:', 'About the exam:'],
  'study.examNote': [
    '65 câu (50 câu tính điểm + 15 câu thử nghiệm), 90 phút, thang điểm 100–1000, điểm đạt 700. Đây là chứng chỉ mức Foundational, không yêu cầu kinh nghiệm lập trình. Đọc thêm về nguyên tắc AI có trách nhiệm tại',
    '65 questions (50 scored + 15 unscored), 90 minutes, scaled 100–1000, passing score 700. This is a Foundational-level certification and requires no coding experience. Read more about responsible AI principles at',
  ],
  'study.practiceDomain': ['Thi phần này', 'Practise this domain'],
  'study.practiceTopic': ['Thi chủ đề này ({n})', 'Practise this topic ({n})'],
  'study.count': ['{n} CÂU', '{n} QUESTIONS'],
  'study.doneCount': ['ĐÃ LÀM {done}/{total}', 'DONE {done}/{total}'],
  'study.noQuestions': [
    'Ngân hàng câu hỏi hiện tại không có câu nào cho phần này — hãy học qua các link tài liệu bên dưới.',
    'The question bank has nothing for this domain — study it through the links below.',
  ],
  'study.covTitle': [
    'Đúng {ok} · Sai {no} · Đã xem đáp án {sh} · Chưa làm {todo}',
    'Correct {ok} · Wrong {no} · Revealed {sh} · Not attempted {todo}',
  ],
  'study.zeroTopic': ['0 câu', '0 questions'],
  'study.keyServices': ['Dịch vụ AWS cần nhớ', 'AWS services to remember'],

  /* ---------- hộp thoại / dialogs ---------- */
  'dlg.importTitle': ['Nhập dữ liệu tiến độ', 'Import progress data'],
  'dlg.importBody': [
    'Chọn file JSON đã xuất trước đó, hoặc dán nội dung vào ô bên dưới.',
    'Pick a previously exported JSON file, or paste its content below.',
  ],
  'dlg.importOk': ['Nhập dữ liệu', 'Import'],
  'dlg.resetTitle': ['Xoá toàn bộ tiến độ?', 'Reset all progress?'],
  'dlg.resetBody': [
    'Thao tác này xoá câu yêu thích, kết quả từng câu và toàn bộ lịch sử luyện tập. Không thể hoàn tác. Nên bấm “Xuất JSON” trước nếu bạn muốn giữ lại.',
    'This clears your favourites, per-question results and the whole practice history. It cannot be undone. Export JSON first if you want a backup.',
  ],
  'dlg.resetKeep': ['Giữ lại', 'Keep it'],
  'dlg.resetOk': ['Xoá tất cả', 'Delete everything'],

  /* ---------- thông báo / toasts ---------- */
  'toast.pickAnswer': ['Hãy chọn đáp án trước.', 'Pick an answer first.'],
  'toast.pickAll': ['Hãy chọn đủ tất cả các ô.', 'Answer every row first.'],
  'toast.pickCount': [
    'Câu này cần chọn đúng {n} đáp án.',
    'This question needs exactly {n} answers.',
  ],
  'toast.correctNext': [
    'Chính xác — sang câu tiếp theo.',
    'Correct — moving to the next question.',
  ],
  'toast.noSession': ['Chưa có phiên luyện tập nào đang chạy.', 'No practice session is running.'],
  'toast.emptySession': ['Phiên trống đã được huỷ.', 'The empty session was discarded.'],
  'toast.sessionSaved': [
    'Đã lưu phiên: {ok}/{total} câu đúng.',
    'Session saved: {ok}/{total} correct.',
  ],
  'toast.filterDropped': [
    'Đã bỏ bộ lọc để mở câu {id}.',
    'Filters cleared so question {id} could open.',
  ],
  'toast.sizeChanged': ['Cỡ chữ: {size}', 'Text size: {size}'],
  'toast.exported': ['Đã tải file JSON tiến độ.', 'Progress JSON downloaded.'],
  'toast.badJson': ['File JSON không hợp lệ.', 'That JSON file is not valid.'],
  'toast.imported': ['Đã nhập dữ liệu.', 'Data imported.'],
  'toast.resetDone': ['Đã xoá toàn bộ tiến độ.', 'All progress deleted.'],
  'toast.jumpRange': [
    'Không có câu số {id}. Ngân hàng hiện có câu 1–{last}.',
    'There is no question {id}. The bank currently holds 1–{last}.',
  ],
  'toast.langChanged': ['Đã chuyển giao diện sang tiếng Việt.', 'Interface switched to English.'],
  'size.md': ['Vừa', 'Medium'],
  'size.lg': ['Lớn', 'Large'],
  'size.xl': ['Rất lớn', 'Extra large'],
} as const satisfies Record<string, readonly [string, string]>;

export type I18nKey = keyof typeof STRINGS;
