/**
 * Domain 3 — Applications of Foundation Models (28% đề thi), phần 1/2.
 *
 * Bao gồm: chọn foundation model, RAG và cơ sở dữ liệu vector, tham số suy luận,
 * agent, và thành phần của một prompt tốt.
 */

const DOC = 'https://docs.aws.amazon.com';

export default [
  /* ----------------------------------------------------- fm-selection */
  {
    id: 79,
    topic: 'fm-selection',
    type: 'single',
    q: [
      'A mobile app must return answers in under one second and operates on a tight budget.',
      'The task is simple text classification of short messages.',
      'Which model choice is most appropriate?',
    ],
    vq: [
      'Một ứng dụng di động phải trả lời trong vòng dưới một giây và có ngân sách eo hẹp.',
      'Tác vụ là phân loại văn bản đơn giản trên các tin nhắn ngắn.',
      'Lựa chọn mô hình nào phù hợp nhất?',
    ],
    o: [
      ['A smaller foundation model that still meets the accuracy requirement', true],
      ['The largest available foundation model, for maximum quality', false],
      ['A model fine-tuned on unrelated medical literature', false],
      ['A multimodal image-generation model', false],
    ],
    vo: [
      'Một foundation model nhỏ hơn nhưng vẫn đạt yêu cầu về độ chính xác',
      'Foundation model lớn nhất hiện có, để chất lượng cao nhất',
      'Mô hình đã fine-tune trên tài liệu y khoa không liên quan',
      'Mô hình đa phương thức chuyên sinh ảnh',
    ],
    e: [
      'Smaller models cost less per token and answer faster. The selection rule is the smallest model that still clears the quality bar — not the most powerful one available.',
      'An image-generation model cannot classify text, and a model tuned on unrelated data brings no benefit.',
    ],
    ve: [
      'Mô hình nhỏ hơn tốn ít tiền hơn trên mỗi token và trả lời nhanh hơn. Nguyên tắc chọn là lấy mô hình nhỏ nhất vẫn vượt qua ngưỡng chất lượng — không phải mô hình mạnh nhất hiện có.',
      'Mô hình sinh ảnh không phân loại được văn bản, còn mô hình tinh chỉnh trên dữ liệu không liên quan thì chẳng mang lại lợi ích gì.',
    ],
  },
  {
    id: 80,
    topic: 'fm-selection',
    type: 'multi',
    q: ['Which factors should be considered when selecting a foundation model for a business application? (Choose TWO.)'],
    vq: ['Những yếu tố nào cần cân nhắc khi chọn foundation model cho ứng dụng nghiệp vụ? (Chọn HAI.)'],
    o: [
      ['Inference cost and latency requirements', true],
      ['Required modality, such as text only or text plus images', true],
      ['The programming language used by the front-end team', false],
      ['The colour scheme of the application interface', false],
      ['The number of employees in the company', false],
    ],
    vo: [
      'Chi phí suy luận và yêu cầu về độ trễ',
      'Modality cần thiết, ví dụ chỉ văn bản hay văn bản kèm ảnh',
      'Ngôn ngữ lập trình mà đội front-end đang dùng',
      'Bảng màu của giao diện ứng dụng',
      'Số lượng nhân viên trong công ty',
    ],
    e: [
      'Selection criteria named in the exam guide are cost, latency, modality, model size versus task complexity, customisation support, context-window length, compliance constraints, and Region availability.',
      'Front-end language and interface styling have no bearing on model choice, since access is through an API.',
    ],
    ve: [
      'Các tiêu chí chọn mô hình được nêu trong Exam Guide gồm chi phí, độ trễ, modality, kích thước mô hình so với độ phức tạp tác vụ, khả năng tuỳ biến, độ dài cửa sổ ngữ cảnh, ràng buộc tuân thủ và Region khả dụng.',
      'Ngôn ngữ front-end và cách tạo kiểu giao diện không ảnh hưởng tới việc chọn mô hình, vì truy cập đều qua API.',
    ],
  },
  {
    id: 81,
    topic: 'fm-selection',
    type: 'single',
    q: [
      'A legal team must feed 300-page contracts to a model in a single request without splitting them.',
      'Which model attribute is the deciding factor?',
    ],
    vq: [
      'Một bộ phận pháp chế phải đưa hợp đồng 300 trang vào mô hình trong một lần gọi mà không chia nhỏ.',
      'Thuộc tính nào của mô hình là yếu tố quyết định?',
    ],
    o: [
      ['The size of the context window', true],
      ['The number of AWS Regions the model is offered in', false],
      ['Whether the model supports image generation', false],
      ['The colour depth of the model output', false],
    ],
    vo: [
      'Kích thước cửa sổ ngữ cảnh',
      'Số AWS Region mà mô hình được cung cấp',
      'Mô hình có hỗ trợ sinh ảnh hay không',
      'Độ sâu màu của đầu ra mô hình',
    ],
    e: [
      'The context window caps how many tokens can be supplied in one request. A 300-page contract needs a long-context model, otherwise chunking with RAG is required.',
      'Region availability affects deployment and compliance, not document size limits.',
    ],
    ve: [
      'Cửa sổ ngữ cảnh giới hạn số token đưa vào trong một lần gọi. Hợp đồng 300 trang cần mô hình có ngữ cảnh dài, nếu không thì phải chia chunk và dùng RAG.',
      'Region khả dụng ảnh hưởng tới việc triển khai và tuân thủ chứ không phải giới hạn kích thước tài liệu.',
    ],
  },
  {
    id: 82,
    topic: 'fm-selection',
    type: 'single',
    q: [
      'A healthcare provider must keep all inference within a specific country because of data-residency law.',
      'Which selection criterion becomes decisive?',
    ],
    vq: [
      'Một nhà cung cấp dịch vụ y tế phải giữ toàn bộ hoạt động suy luận trong một quốc gia cụ thể vì luật về nơi lưu trữ dữ liệu.',
      'Tiêu chí lựa chọn nào trở thành yếu tố quyết định?',
    ],
    o: [
      ['Availability of the model in the required AWS Region', true],
      ['The number of parameters in the model', false],
      ['Whether the model was trained with reinforcement learning', false],
      ['The marketing popularity of the model provider', false],
    ],
    vo: [
      'Mô hình có sẵn ở AWS Region bắt buộc hay không',
      'Số tham số của mô hình',
      'Mô hình có được huấn luyện bằng học tăng cường hay không',
      'Mức độ nổi tiếng về marketing của nhà cung cấp mô hình',
    ],
    e: [
      'Not every foundation model is offered in every Region. When residency is mandated, the model must be available in a Region inside the permitted geography.',
      'Parameter count and training method are quality considerations, not compliance ones.',
    ],
    ve: [
      'Không phải foundation model nào cũng có ở mọi Region. Khi luật bắt buộc về nơi lưu trữ, mô hình phải có sẵn ở một Region nằm trong phạm vi địa lý được phép.',
      'Số tham số và phương pháp huấn luyện là yếu tố chất lượng chứ không phải yếu tố tuân thủ.',
    ],
  },
  {
    id: 83,
    topic: 'fm-selection',
    type: 'tf_table',
    q: ['Decide whether each statement about choosing a foundation model is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về việc chọn foundation model là đúng hay sai.'],
    subs: [
      { p: 'A larger model always produces a better business outcome.', o: ['True', 'False'], a: 1 },
      { p: 'Latency requirements can rule out an otherwise accurate model.', o: ['True', 'False'], a: 0 },
      { p: 'Some models support customisation while others do not.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Mô hình lớn hơn luôn cho kết quả nghiệp vụ tốt hơn.', o: ['Đúng', 'Sai'] },
      { p: 'Yêu cầu về độ trễ có thể loại bỏ một mô hình vốn rất chính xác.', o: ['Đúng', 'Sai'] },
      { p: 'Một số mô hình hỗ trợ tuỳ biến, một số thì không.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Bigger models cost more and answer more slowly, so they can easily be the wrong business choice even when they score higher on benchmarks.',
      'Customisation support varies by model on Amazon Bedrock, and it is a documented selection criterion.',
    ],
    ve: [
      'Mô hình lớn hơn tốn nhiều tiền hơn và trả lời chậm hơn, nên hoàn toàn có thể là lựa chọn sai về mặt nghiệp vụ dù điểm benchmark cao hơn.',
      'Khả năng tuỳ biến khác nhau tuỳ mô hình trên Amazon Bedrock, và đây là một tiêu chí lựa chọn được ghi rõ trong tài liệu.',
    ],
  },

  /* ------------------------------------------------------------- rag */
  {
    id: 84,
    topic: 'rag',
    type: 'single',
    q: ['What does Retrieval Augmented Generation (RAG) do?'],
    vq: ['Retrieval Augmented Generation (RAG) làm gì?'],
    o: [
      ['Retrieves relevant documents from a data store and adds them to the prompt as context before generation', true],
      ['Permanently updates the weights of the foundation model with new facts', false],
      ['Compresses the model so it runs on smaller instances', false],
      ['Translates the prompt into every supported language before answering', false],
    ],
    vo: [
      'Truy xuất tài liệu liên quan từ kho dữ liệu và đưa vào prompt làm ngữ cảnh trước khi sinh câu trả lời',
      'Cập nhật vĩnh viễn trọng số của foundation model bằng thông tin mới',
      'Nén mô hình để chạy được trên instance nhỏ hơn',
      'Dịch prompt sang mọi ngôn ngữ được hỗ trợ trước khi trả lời',
    ],
    e: [
      'RAG changes what the model SEES, not what it IS. No weights are modified, which is why it is cheaper and faster to adopt than fine-tuning.',
      'This is the key distinction the exam tests: fine-tuning changes weights, RAG changes context.',
    ],
    ve: [
      'RAG thay đổi thứ mô hình NHÌN THẤY, chứ không thay đổi bản thân mô hình. Không trọng số nào bị sửa, nên nó rẻ hơn và nhanh triển khai hơn fine-tuning.',
      'Đây là điểm phân biệt then chốt mà đề thi hay kiểm tra: fine-tuning đổi trọng số, RAG đổi ngữ cảnh.',
    ],
    refs: [{ label: 'Bedrock Knowledge Bases', url: `${DOC}/bedrock/latest/userguide/knowledge-base.html` }],
  },
  {
    id: 85,
    topic: 'rag',
    type: 'single',
    q: [
      'A company policy document is updated every week and the assistant must always answer from the latest version.',
      'Which approach is most suitable?',
    ],
    vq: [
      'Một tài liệu chính sách của công ty được cập nhật hằng tuần và trợ lý phải luôn trả lời theo bản mới nhất.',
      'Cách tiếp cận nào phù hợp nhất?',
    ],
    o: [
      ['RAG, so the assistant retrieves the current document at query time', true],
      ['Fine-tune the model again after every weekly update', false],
      ['Continued pre-training on the whole company intranet each week', false],
      ['Increase the temperature so the model invents current answers', false],
    ],
    vo: [
      'Dùng RAG để trợ lý truy xuất tài liệu hiện hành ngay lúc truy vấn',
      'Fine-tune lại mô hình sau mỗi lần cập nhật hằng tuần',
      'Chạy continued pre-training trên toàn bộ intranet công ty mỗi tuần',
      'Tăng temperature để mô hình tự nghĩ ra câu trả lời hiện hành',
    ],
    e: [
      'RAG reads from the live data store, so refreshing the source document is enough — no retraining cycle is needed.',
      'Weekly fine-tuning or pre-training would be extremely expensive and slow for content that changes constantly.',
    ],
    ve: [
      'RAG đọc trực tiếp từ kho dữ liệu đang chạy, nên chỉ cần cập nhật tài liệu nguồn là đủ — không cần chu kỳ huấn luyện lại.',
      'Fine-tune hay pre-training hằng tuần sẽ cực kỳ tốn kém và chậm với nội dung thay đổi liên tục.',
    ],
  },
  {
    id: 86,
    topic: 'rag',
    type: 'multi',
    q: ['Which AWS services can be used as a vector store for a RAG application? (Choose TWO.)'],
    vq: ['Những dịch vụ AWS nào có thể dùng làm kho vector cho ứng dụng RAG? (Chọn HAI.)'],
    o: [
      ['Amazon OpenSearch Service', true],
      ['Amazon Aurora PostgreSQL with the pgvector extension', true],
      ['Amazon Simple Queue Service (SQS)', false],
      ['AWS Lambda', false],
      ['Amazon Route 53', false],
    ],
    vo: [
      'Amazon OpenSearch Service',
      'Amazon Aurora PostgreSQL với extension pgvector',
      'Amazon Simple Queue Service (SQS)',
      'AWS Lambda',
      'Amazon Route 53',
    ],
    e: [
      'Vector store options on AWS include Amazon OpenSearch Service and Serverless, Aurora PostgreSQL and RDS for PostgreSQL with pgvector, Amazon Neptune Analytics, Amazon DocumentDB, and Amazon MemoryDB.',
      'SQS is a message queue, Lambda is compute, and Route 53 is DNS — none of them store or search vectors.',
    ],
    ve: [
      'Các lựa chọn kho vector trên AWS gồm Amazon OpenSearch Service và bản Serverless, Aurora PostgreSQL và RDS for PostgreSQL với pgvector, Amazon Neptune Analytics, Amazon DocumentDB và Amazon MemoryDB.',
      'SQS là hàng đợi tin nhắn, Lambda là dịch vụ tính toán, Route 53 là DNS — không cái nào lưu hay tìm kiếm vector.',
    ],
    refs: [
      { label: 'OpenSearch vector database', url: `${DOC}/opensearch-service/latest/developerguide/vector-database.html` },
    ],
  },
  {
    id: 87,
    topic: 'rag',
    type: 'match',
    q: ['Place the steps of a RAG pipeline in the correct order.'],
    vq: ['Sắp xếp các bước của một pipeline RAG theo đúng thứ tự.'],
    subs: [
      {
        p: 'Step 1',
        o: ['Convert the user question into an embedding', 'Split source documents into chunks and generate embeddings', 'Send the question plus retrieved context to the model', 'Retrieve the most similar chunks from the vector store'],
        a: 1,
      },
      {
        p: 'Step 2',
        o: ['Convert the user question into an embedding', 'Split source documents into chunks and generate embeddings', 'Send the question plus retrieved context to the model', 'Retrieve the most similar chunks from the vector store'],
        a: 0,
      },
      {
        p: 'Step 3',
        o: ['Convert the user question into an embedding', 'Split source documents into chunks and generate embeddings', 'Send the question plus retrieved context to the model', 'Retrieve the most similar chunks from the vector store'],
        a: 3,
      },
      {
        p: 'Step 4',
        o: ['Convert the user question into an embedding', 'Split source documents into chunks and generate embeddings', 'Send the question plus retrieved context to the model', 'Retrieve the most similar chunks from the vector store'],
        a: 2,
      },
    ],
    vsubs: [
      {
        p: 'Bước 1',
        o: ['Chuyển câu hỏi của người dùng thành embedding', 'Chia tài liệu nguồn thành chunk và sinh embedding', 'Gửi câu hỏi kèm ngữ cảnh đã truy xuất tới mô hình', 'Truy xuất các chunk tương đồng nhất từ kho vector'],
      },
      {
        p: 'Bước 2',
        o: ['Chuyển câu hỏi của người dùng thành embedding', 'Chia tài liệu nguồn thành chunk và sinh embedding', 'Gửi câu hỏi kèm ngữ cảnh đã truy xuất tới mô hình', 'Truy xuất các chunk tương đồng nhất từ kho vector'],
      },
      {
        p: 'Bước 3',
        o: ['Chuyển câu hỏi của người dùng thành embedding', 'Chia tài liệu nguồn thành chunk và sinh embedding', 'Gửi câu hỏi kèm ngữ cảnh đã truy xuất tới mô hình', 'Truy xuất các chunk tương đồng nhất từ kho vector'],
      },
      {
        p: 'Bước 4',
        o: ['Chuyển câu hỏi của người dùng thành embedding', 'Chia tài liệu nguồn thành chunk và sinh embedding', 'Gửi câu hỏi kèm ngữ cảnh đã truy xuất tới mô hình', 'Truy xuất các chunk tương đồng nhất từ kho vector'],
      },
    ],
    e: [
      'Ingestion happens first and offline: chunk, embed, store. At query time the question is embedded, similar chunks are retrieved, and both are sent to the model.',
      'Bedrock Knowledge Bases automates all four steps.',
    ],
    ve: [
      'Bước nạp dữ liệu diễn ra trước và offline: chia chunk, sinh embedding, lưu trữ. Lúc truy vấn thì câu hỏi được nhúng, các chunk tương đồng được truy xuất, rồi cả hai được gửi tới mô hình.',
      'Bedrock Knowledge Bases tự động hoá cả bốn bước này.',
    ],
  },
  {
    id: 88,
    topic: 'rag',
    type: 'single',
    q: [
      'A RAG assistant returns answers that are relevant but frequently miss details buried in the middle of long manuals.',
      'Which adjustment is most likely to help?',
    ],
    vq: [
      'Một trợ lý RAG trả lời đúng chủ đề nhưng thường bỏ sót chi tiết nằm giữa các cẩm nang dài.',
      'Điều chỉnh nào nhiều khả năng giúp ích nhất?',
    ],
    o: [
      ['Tune the chunking strategy, for example smaller chunks with some overlap', true],
      ['Increase the temperature of the generation model', false],
      ['Move the vector store to a different AWS Region', false],
      ['Switch the application from Python to Java', false],
    ],
    vo: [
      'Tinh chỉnh chiến lược chunking, ví dụ chunk nhỏ hơn và có phần chồng lấn',
      'Tăng temperature của mô hình sinh nội dung',
      'Chuyển kho vector sang AWS Region khác',
      'Đổi ứng dụng từ Python sang Java',
    ],
    e: [
      'Retrieval quality is governed by chunk size, overlap, and the number of chunks returned. Oversized chunks dilute the embedding and bury detail.',
      'Temperature affects wording, not retrieval, and Region or language choice is irrelevant to relevance.',
    ],
    ve: [
      'Chất lượng truy xuất phụ thuộc vào kích thước chunk, mức chồng lấn và số chunk trả về. Chunk quá lớn làm loãng embedding và chôn mất chi tiết.',
      'Temperature ảnh hưởng tới cách diễn đạt chứ không tới việc truy xuất, còn Region hay ngôn ngữ lập trình thì không liên quan tới độ liên quan.',
    ],
  },
  {
    id: 89,
    topic: 'rag',
    type: 'single',
    q: [
      'A company wants the assistant to show which source document each answer came from, so staff can verify it.',
      'Which capability provides this?',
    ],
    vq: [
      'Một công ty muốn trợ lý hiển thị tài liệu nguồn của mỗi câu trả lời để nhân viên kiểm chứng.',
      'Năng lực nào cung cấp điều đó?',
    ],
    o: [
      ['RAG with source attribution or citations returned alongside the answer', true],
      ['Increasing the maximum token limit', false],
      ['Fine-tuning the model on the same documents', false],
      ['Switching the model to a multimodal variant', false],
    ],
    vo: [
      'RAG kèm ghi nguồn hoặc trích dẫn trả về cùng câu trả lời',
      'Nâng giới hạn token tối đa',
      'Fine-tune mô hình trên chính các tài liệu đó',
      'Đổi sang biến thể mô hình đa phương thức',
    ],
    e: [
      'Because RAG retrieves identifiable passages, the application can return citations pointing back to the source — a major transparency and trust advantage.',
      'A fine-tuned model absorbs information into its weights and cannot say which document an answer came from.',
    ],
    ve: [
      'Vì RAG truy xuất các đoạn văn bản xác định được, ứng dụng có thể trả về trích dẫn chỉ ngược về nguồn — một lợi thế lớn về minh bạch và độ tin cậy.',
      'Mô hình đã fine-tune hấp thụ thông tin vào trọng số nên không nói được câu trả lời đến từ tài liệu nào.',
    ],
  },
  {
    id: 90,
    topic: 'rag',
    type: 'tf_table',
    q: ['Decide whether each statement comparing RAG and fine-tuning is true or false.'],
    vq: ['Xác định mỗi phát biểu so sánh RAG với fine-tuning là đúng hay sai.'],
    subs: [
      { p: 'RAG modifies the weights of the foundation model.', o: ['True', 'False'], a: 1 },
      { p: 'RAG is usually faster and cheaper to implement than fine-tuning.', o: ['True', 'False'], a: 0 },
      { p: 'Fine-tuning is a better fit when the goal is to change the style and format of responses.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'RAG sửa đổi trọng số của foundation model.', o: ['Đúng', 'Sai'] },
      { p: 'RAG thường nhanh hơn và rẻ hơn fine-tuning khi triển khai.', o: ['Đúng', 'Sai'] },
      { p: 'Fine-tuning phù hợp hơn khi mục tiêu là thay đổi phong cách và định dạng câu trả lời.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'RAG leaves weights untouched and only supplies context, which is why it is the first thing to try.',
      'Fine-tuning is the right tool when you need consistent tone, format, or task-specific behaviour that prompting alone cannot achieve.',
    ],
    ve: [
      'RAG không đụng tới trọng số mà chỉ cung cấp ngữ cảnh, đó là lý do nên thử nó trước tiên.',
      'Fine-tuning mới là công cụ đúng khi cần giọng văn, định dạng hoặc hành vi chuyên biệt nhất quán mà chỉ prompt không đạt được.',
    ],
  },

  /* ------------------------------------------------- inference-params */
  {
    id: 91,
    topic: 'inference-params',
    type: 'single',
    q: [
      'A model is used to extract invoice numbers from text and must return the same result every time it sees the same input.',
      'How should temperature be configured?',
    ],
    vq: [
      'Một mô hình được dùng để trích xuất số hoá đơn từ văn bản và phải trả về cùng kết quả mỗi khi gặp cùng đầu vào.',
      'Nên cấu hình temperature như thế nào?',
    ],
    o: [
      ['Set it very low, close to 0', true],
      ['Set it very high, close to 1', false],
      ['Leave it undefined so the model picks a random value', false],
      ['Temperature has no effect on this behaviour', false],
    ],
    vo: [
      'Đặt rất thấp, gần 0',
      'Đặt rất cao, gần 1',
      'Bỏ trống để mô hình tự chọn giá trị ngẫu nhiên',
      'Temperature không ảnh hưởng gì tới hành vi này',
    ],
    e: [
      'Low temperature makes the model pick the highest-probability tokens, producing consistent, focused output — ideal for extraction and factual tasks.',
      'High temperature adds randomness, which suits creative writing but is harmful when consistency matters.',
    ],
    ve: [
      'Temperature thấp khiến mô hình chọn các token có xác suất cao nhất, cho đầu ra nhất quán và tập trung — lý tưởng cho tác vụ trích xuất và trả lời sự kiện.',
      'Temperature cao thêm tính ngẫu nhiên, hợp với viết sáng tạo nhưng gây hại khi cần sự nhất quán.',
    ],
    refs: [{ label: 'Tham số suy luận của Bedrock', url: `${DOC}/bedrock/latest/userguide/inference-parameters.html` }],
  },
  {
    id: 92,
    topic: 'inference-params',
    type: 'single',
    q: ['A marketing team wants a model to produce varied, creative slogan suggestions. Which parameter change helps?'],
    vq: ['Một đội tiếp thị muốn mô hình đưa ra các gợi ý khẩu hiệu đa dạng và sáng tạo. Thay đổi tham số nào giúp ích?'],
    o: [
      ['Increase the temperature', true],
      ['Decrease the temperature to 0', false],
      ['Reduce the maximum token limit to 5', false],
      ['Disable the model context window', false],
    ],
    vo: [
      'Tăng temperature',
      'Giảm temperature về 0',
      'Giảm giới hạn token tối đa xuống 5',
      'Tắt cửa sổ ngữ cảnh của mô hình',
    ],
    e: [
      'Higher temperature widens the probability distribution the model samples from, producing more surprising and varied wording.',
      'A very low token limit would truncate output, and the context window cannot be disabled.',
    ],
    ve: [
      'Temperature cao hơn làm rộng phân phối xác suất mà mô hình lấy mẫu, cho ra cách diễn đạt bất ngờ và đa dạng hơn.',
      'Giới hạn token quá thấp sẽ cắt cụt đầu ra, còn cửa sổ ngữ cảnh thì không thể tắt.',
    ],
  },
  {
    id: 93,
    topic: 'inference-params',
    type: 'single',
    q: ['What does the top-p (nucleus sampling) parameter control?'],
    vq: ['Tham số top-p (nucleus sampling) điều khiển điều gì?'],
    o: [
      ['The model samples only from the smallest set of tokens whose cumulative probability reaches p', true],
      ['The maximum number of requests per second the endpoint accepts', false],
      ['The percentage of the training data that was labeled', false],
      ['The proportion of the response that must be in English', false],
    ],
    vo: [
      'Mô hình chỉ lấy mẫu từ tập token nhỏ nhất có tổng xác suất đạt tới p',
      'Số request tối đa mỗi giây mà endpoint chấp nhận',
      'Tỉ lệ dữ liệu huấn luyện đã được gán nhãn',
      'Tỉ lệ phản hồi bắt buộc phải bằng tiếng Anh',
    ],
    e: [
      'Top-p restricts the candidate pool by cumulative probability, while top-k restricts it to a fixed count of candidates. Lower values in either make output more focused.',
      'Request rate limits are a service quota concept, not an inference parameter.',
    ],
    ve: [
      'Top-p giới hạn tập ứng viên theo xác suất tích luỹ, còn top-k giới hạn theo một số lượng ứng viên cố định. Giảm giá trị của cả hai đều làm đầu ra tập trung hơn.',
      'Giới hạn số request mỗi giây là khái niệm hạn mức dịch vụ chứ không phải tham số suy luận.',
    ],
  },
  {
    id: 94,
    topic: 'inference-params',
    type: 'single',
    q: [
      'An application produces answers that are far longer than the interface can display, and cost per request is rising.',
      'Which inference setting should be adjusted first?',
    ],
    vq: [
      'Một ứng dụng sinh ra câu trả lời dài hơn nhiều so với khả năng hiển thị của giao diện, và chi phí trên mỗi request đang tăng.',
      'Nên điều chỉnh thiết lập suy luận nào trước?',
    ],
    o: [
      ['The maximum response length (max tokens)', true],
      ['The top-k parameter', false],
      ['The AWS Region of the endpoint', false],
      ['The IAM role attached to the application', false],
    ],
    vo: [
      'Độ dài phản hồi tối đa (max tokens)',
      'Tham số top-k',
      'AWS Region của endpoint',
      'IAM role gắn với ứng dụng',
    ],
    e: [
      'Max tokens directly caps output length and therefore output-token cost — it addresses both problems at once.',
      'Top-k changes wording diversity, and Region or IAM settings do not affect response length.',
    ],
    ve: [
      'Max tokens giới hạn trực tiếp độ dài đầu ra và do đó cả chi phí token đầu ra — nó xử lý cả hai vấn đề cùng lúc.',
      'Top-k thay đổi mức đa dạng trong cách diễn đạt, còn Region hay IAM không ảnh hưởng tới độ dài phản hồi.',
    ],
  },
  {
    id: 95,
    topic: 'inference-params',
    type: 'single',
    q: ['What is the purpose of a stop sequence in an inference request?'],
    vq: ['Mục đích của stop sequence trong một request suy luận là gì?'],
    o: [
      ['It tells the model to end generation when that string is produced', true],
      ['It blocks the user from submitting further prompts', false],
      ['It stops billing for the current session', false],
      ['It halts training of the underlying model', false],
    ],
    vo: [
      'Nó báo cho mô hình dừng sinh nội dung khi gặp chuỗi đó',
      'Nó chặn người dùng gửi thêm prompt',
      'Nó dừng tính tiền cho phiên hiện tại',
      'Nó dừng quá trình huấn luyện của mô hình nền',
    ],
    e: [
      'Stop sequences are useful for structured output — for example ending generation at a closing delimiter so the response parses cleanly.',
      'They control generation only; they have no effect on billing, training, or user access.',
    ],
    ve: [
      'Stop sequence hữu ích cho đầu ra có cấu trúc — ví dụ kết thúc việc sinh nội dung tại một dấu đóng để phản hồi phân tích cú pháp được gọn gàng.',
      'Chúng chỉ điều khiển việc sinh nội dung; không ảnh hưởng tới tính tiền, huấn luyện hay quyền truy cập của người dùng.',
    ],
  },
  {
    id: 96,
    topic: 'inference-params',
    type: 'tf_table',
    q: ['Decide whether each statement about inference parameters is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về tham số suy luận là đúng hay sai.'],
    subs: [
      { p: 'Lowering temperature makes output more consistent.', o: ['True', 'False'], a: 0 },
      { p: 'Raising temperature improves the factual accuracy of answers.', o: ['True', 'False'], a: 1 },
      { p: 'Max tokens influences the cost of a request.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Hạ temperature làm đầu ra nhất quán hơn.', o: ['Đúng', 'Sai'] },
      { p: 'Tăng temperature cải thiện độ chính xác về mặt sự kiện của câu trả lời.', o: ['Đúng', 'Sai'] },
      { p: 'Max tokens ảnh hưởng tới chi phí của một request.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Temperature governs randomness only. It never adds knowledge, so it cannot make an answer more factually correct.',
      'Because Bedrock bills per token, the output-length cap is a direct cost lever.',
    ],
    ve: [
      'Temperature chỉ chi phối mức ngẫu nhiên. Nó không bao giờ bổ sung kiến thức nên không thể làm câu trả lời đúng sự thật hơn.',
      'Vì Bedrock tính tiền theo token, giới hạn độ dài đầu ra là một đòn bẩy chi phí trực tiếp.',
    ],
  },

  /* ---------------------------------------------------------- agents */
  {
    id: 97,
    topic: 'agents',
    type: 'single',
    q: [
      'A travel assistant must check flight availability through an internal API, reserve a seat, and then email a confirmation.',
      'Which Amazon Bedrock capability is designed for this?',
    ],
    vq: [
      'Một trợ lý du lịch phải kiểm tra chỗ trống chuyến bay qua API nội bộ, giữ chỗ, rồi gửi email xác nhận.',
      'Năng lực nào của Amazon Bedrock được thiết kế cho việc này?',
    ],
    o: [
      ['Agents, using action groups backed by AWS Lambda functions', true],
      ['Guardrails content filters', false],
      ['A larger context window', false],
      ['Provisioned throughput', false],
    ],
    vo: [
      'Agents, dùng action group được hiện thực bằng hàm AWS Lambda',
      'Bộ lọc nội dung của Guardrails',
      'Cửa sổ ngữ cảnh lớn hơn',
      'Provisioned throughput',
    ],
    e: [
      'Agents break a request into steps, call the declared actions, and chain results until the task completes. That is exactly the multi-step, tool-using pattern described here.',
      'A model alone can only generate text — it cannot reserve a seat.',
    ],
    ve: [
      'Agent chia yêu cầu thành các bước, gọi các hành động đã khai báo và nối kết quả cho tới khi hoàn tất tác vụ. Đó chính là mô hình nhiều bước có dùng công cụ được mô tả ở đây.',
      'Bản thân mô hình chỉ sinh được văn bản — nó không giữ chỗ được.',
    ],
    refs: [{ label: 'Agents for Amazon Bedrock', url: `${DOC}/bedrock/latest/userguide/agents.html` }],
  },
  {
    id: 98,
    topic: 'agents',
    type: 'multi',
    q: ['Which capabilities can an agent add to a foundation model application? (Choose TWO.)'],
    vq: ['Agent bổ sung được những năng lực nào cho ứng dụng dùng foundation model? (Chọn HAI.)'],
    o: [
      ['Breaking a user request into an ordered sequence of steps', true],
      ['Invoking external APIs and functions to take real actions', true],
      ['Guaranteeing that no answer will ever be incorrect', false],
      ['Removing the need for access controls on the called APIs', false],
      ['Reducing the token cost of every request to zero', false],
    ],
    vo: [
      'Chia yêu cầu của người dùng thành chuỗi các bước có thứ tự',
      'Gọi API và hàm bên ngoài để thực hiện hành động thật',
      'Bảo đảm không câu trả lời nào bị sai',
      'Loại bỏ nhu cầu kiểm soát truy cập cho các API được gọi',
      'Giảm chi phí token của mọi request xuống 0',
    ],
    e: [
      'Planning and tool invocation are what agents add. They also increase token usage, since each reasoning step costs tokens.',
      'Access control becomes MORE important with agents: every callable action must follow least privilege, or a prompt injection could trigger real damage.',
    ],
    ve: [
      'Lập kế hoạch và gọi công cụ là hai thứ agent bổ sung. Chúng cũng làm tăng lượng token, vì mỗi bước suy luận đều tốn token.',
      'Kiểm soát truy cập càng QUAN TRỌNG hơn khi có agent: mọi hành động gọi được đều phải theo đặc quyền tối thiểu, nếu không một cú prompt injection có thể gây thiệt hại thật.',
    ],
  },
  {
    id: 99,
    topic: 'agents',
    type: 'single',
    q: ['When is an agent NOT the right choice?'],
    vq: ['Khi nào agent KHÔNG phải lựa chọn đúng?'],
    o: [
      ['When the task is a single-turn text generation with no external systems involved', true],
      ['When the task requires calling several internal services in sequence', false],
      ['When the assistant must query a knowledge base and then update a ticket', false],
      ['When the workflow depends on the result of a previous step', false],
    ],
    vo: [
      'Khi tác vụ chỉ là sinh văn bản một lượt và không liên quan hệ thống bên ngoài',
      'Khi tác vụ đòi hỏi gọi nhiều dịch vụ nội bộ theo trình tự',
      'Khi trợ lý phải truy vấn knowledge base rồi cập nhật một ticket',
      'Khi luồng công việc phụ thuộc vào kết quả của bước trước đó',
    ],
    e: [
      'A simple one-shot generation needs only a model invocation. Adding an agent brings orchestration overhead, extra latency, and extra token cost for no benefit.',
      'The other three scenarios all involve multiple dependent steps, which is precisely what agents are for.',
    ],
    ve: [
      'Một lần sinh nội dung đơn giản chỉ cần gọi mô hình. Thêm agent sẽ kéo theo chi phí điều phối, độ trễ và tốn token thêm mà không được lợi gì.',
      'Ba tình huống còn lại đều gồm nhiều bước phụ thuộc nhau — đúng thứ mà agent sinh ra để giải quyết.',
    ],
  },

  /* --------------------------------------------------- prompt-basics */
  {
    id: 100,
    topic: 'prompt-basics',
    type: 'single',
    q: ['Which element of a prompt tells the model the required shape of the answer, such as "reply with a JSON object"?'],
    vq: ['Thành phần nào của prompt cho mô hình biết định dạng câu trả lời cần có, ví dụ "trả lời bằng một object JSON"?'],
    o: [
      ['The output indicator', true],
      ['The negative prompt', false],
      ['The input data', false],
      ['The temperature setting', false],
    ],
    vo: ['Output indicator', 'Negative prompt', 'Input data', 'Thiết lập temperature'],
    e: [
      'A prompt is commonly described as instruction, context, input data, and output indicator. The output indicator defines the format of the response.',
      'A negative prompt states what to avoid, and temperature is an inference parameter rather than part of the prompt text.',
    ],
    ve: [
      'Một prompt thường được mô tả gồm instruction, context, input data và output indicator. Output indicator xác định định dạng của phản hồi.',
      'Negative prompt nêu điều cần tránh, còn temperature là tham số suy luận chứ không phải một phần nội dung prompt.',
    ],
    refs: [
      { label: 'Prompt engineering guidelines', url: `${DOC}/bedrock/latest/userguide/prompt-engineering-guidelines.html` },
    ],
  },
  {
    id: 101,
    topic: 'prompt-basics',
    type: 'single',
    q: [
      'A prompt reads: "Write something about our product."',
      'Which change would most improve output quality?',
    ],
    vq: [
      'Một prompt có nội dung: "Viết gì đó về sản phẩm của chúng tôi."',
      'Thay đổi nào cải thiện chất lượng đầu ra nhiều nhất?',
    ],
    o: [
      ['Specify the audience, tone, length, format, and key facts to include', true],
      ['Repeat the same sentence three times', false],
      ['Write the prompt entirely in capital letters', false],
      ['Remove all punctuation from the prompt', false],
    ],
    vo: [
      'Nêu rõ đối tượng đọc, giọng văn, độ dài, định dạng và các thông tin bắt buộc phải có',
      'Lặp lại đúng câu đó ba lần',
      'Viết toàn bộ prompt bằng chữ in hoa',
      'Bỏ hết dấu câu trong prompt',
    ],
    e: [
      'Specificity is the single biggest driver of prompt quality. Vague prompts produce generic output because the model has nothing to anchor to.',
      'Capitalisation, repetition, and stripping punctuation add no useful signal.',
    ],
    ve: [
      'Tính cụ thể là yếu tố tác động lớn nhất tới chất lượng prompt. Prompt mơ hồ cho ra đầu ra chung chung vì mô hình không có gì để bám vào.',
      'Viết hoa, lặp lại hay bỏ dấu câu đều không thêm tín hiệu hữu ích nào.',
    ],
  },
  {
    id: 102,
    topic: 'prompt-basics',
    type: 'single',
    q: ['What is a prompt template used for in a production application?'],
    vq: ['Prompt template được dùng để làm gì trong ứng dụng production?'],
    o: [
      ['To standardise and reuse a prompt structure, inserting variable values at run time', true],
      ['To store the model weights in Amazon S3', false],
      ['To encrypt the prompt before it reaches the model', false],
      ['To replace the need for testing prompt quality', false],
    ],
    vo: [
      'Chuẩn hoá và tái sử dụng cấu trúc prompt, chèn giá trị biến lúc chạy',
      'Lưu trọng số mô hình trong Amazon S3',
      'Mã hoá prompt trước khi tới mô hình',
      'Thay thế cho việc kiểm thử chất lượng prompt',
    ],
    e: [
      'Templates keep prompt structure consistent across requests and make prompts versionable and testable like any other application asset.',
      'Encryption in transit is handled by TLS, and templates do not remove the need for evaluation.',
    ],
    ve: [
      'Template giữ cấu trúc prompt nhất quán giữa các request và giúp prompt quản lý phiên bản, kiểm thử được như mọi tài sản khác của ứng dụng.',
      'Mã hoá khi truyền do TLS đảm nhiệm, và template không thay thế được việc đánh giá chất lượng.',
    ],
  },
];
