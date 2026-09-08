/**
 * Danh mục kiến thức AWS Certified AI Practitioner (AIF-C01), bám theo Exam Guide chính thức
 * của AWS — https://aws.amazon.com/certification/certified-ai-practitioner/
 *
 * Mỗi chủ đề kèm mô tả tổng quan và link tài liệu AWS để đọc chi tiết.
 * Bản tiếng Anh của tiêu đề / mô tả nằm ở categories.en.ts và được gắn vào ở cuối file này.
 */

import { DOMAIN_EN, TOPIC_EN } from './categories.en';

export type DomainId = 'd1' | 'd2' | 'd3' | 'd4' | 'd5';

export interface StudyLink {
  label: string;
  url: string;
}

export interface StudyTopic {
  id: string;
  /** tên chủ đề (tiếng Việt) */
  title: string;
  /** tên chủ đề (tiếng Anh) — gán tự động từ categories.en.ts */
  titleEn?: string;
  /** mô tả tổng quan (tiếng Anh) — gán tự động từ categories.en.ts */
  overviewEn?: string;
  /** mục tiêu tương ứng trong Exam Guide (nguyên văn tiếng Anh) */
  objective: string;
  /** mô tả tổng quan */
  overview: string;
  links: StudyLink[];
}

export interface StudyGroup {
  /** tiêu đề nhóm, nguyên văn theo Exam Guide */
  title: string;
  topics: StudyTopic[];
}

export interface StudyDomain {
  id: DomainId;
  title: string;
  /** tên phần thi (tiếng Anh) — gán tự động từ categories.en.ts */
  titleEn?: string;
  /** dẫn nhập (tiếng Anh) — gán tự động từ categories.en.ts */
  introEn?: string;
  objective: string;
  /** tỉ trọng trong đề thi */
  weight: string;
  intro: string;
  /** các dịch vụ AWS trọng tâm của phần thi này */
  services: string[];
  groups: StudyGroup[];
}

const D = 'https://docs.aws.amazon.com';
const A = 'https://aws.amazon.com';

export const EXAM_GUIDE_URL = `${A}/certification/certified-ai-practitioner/`;
export const SKILL_BUILDER_URL = `${A}/training/digital/`;
export const RESPONSIBLE_AI_URL = `${A}/ai/responsible-ai/`;

export const DOMAINS: StudyDomain[] = [
  /* ==================================================================== d1 */
  {
    id: 'd1',
    title: 'Nền tảng AI và Machine Learning',
    objective: 'Domain 1: Fundamentals of AI and ML',
    weight: '20%',
    intro:
      'Phần lý thuyết nền: phân biệt AI / ML / deep learning, ba kiểu học máy, vòng đời phát triển một mô hình và bộ dịch vụ AI được quản lý sẵn của AWS. Đề thi rất hay cho một tình huống nghiệp vụ rồi hỏi “dịch vụ nào phù hợp nhất” — nhớ đúng công dụng từng dịch vụ là ăn điểm chắc.',
    services: [
      'Amazon SageMaker AI',
      'Amazon Comprehend',
      'Amazon Rekognition',
      'Amazon Textract',
      'Amazon Transcribe',
      'Amazon Polly',
      'Amazon Translate',
      'Amazon Lex',
      'Amazon Personalize',
      'Amazon Kendra',
      'Amazon Fraud Detector',
    ],
    groups: [
      {
        title: 'Task 1.1 — Explain basic AI concepts and terminologies',
        topics: [
          {
            id: 'ai-terms',
            title: 'Thuật ngữ nền tảng: AI, ML, deep learning, neural network',
            objective: 'Define basic AI terms',
            overview:
              'AI là khái niệm rộng nhất — máy móc mô phỏng năng lực nhận thức của con người. ML là một nhánh của AI, học quy luật từ dữ liệu thay vì được lập trình quy tắc cứng. Deep learning là một nhánh của ML dùng mạng nơ-ron nhiều lớp, mạnh nhất với dữ liệu phi cấu trúc (ảnh, âm thanh, văn bản). Nhớ quan hệ lồng nhau: AI ⊃ ML ⊃ Deep learning ⊃ Generative AI. Hai thao tác cốt lõi cần phân biệt: training (huấn luyện, tạo ra mô hình từ dữ liệu) và inference (suy luận, dùng mô hình đã có để dự đoán trên dữ liệu mới).',
            links: [
              { label: 'AI vs ML vs Deep Learning', url: `${A}/what-is/artificial-intelligence/` },
              { label: 'What is machine learning?', url: `${A}/what-is/machine-learning/` },
            ],
          },
          {
            id: 'ai-datatypes',
            title: 'Các loại dữ liệu dùng cho AI',
            objective: 'Describe types of data used in AI',
            overview:
              'Dữ liệu có nhãn (labeled) đi kèm đáp án đúng và bắt buộc cho học có giám sát; dữ liệu không nhãn (unlabeled) chỉ có đặc trưng. Dữ liệu có cấu trúc là bảng/CSV/cơ sở dữ liệu quan hệ; bán cấu trúc là JSON, XML; phi cấu trúc là ảnh, video, âm thanh, văn bản tự do. Ngoài ra còn dữ liệu chuỗi thời gian (time-series) cho bài toán dự báo. Đề thi hay hỏi: “loại dữ liệu nào phù hợp cho kỹ thuật nào” — ảnh/âm thanh/văn bản tự do thường gắn với deep learning, bảng số liệu gắn với ML truyền thống.',
            links: [
              { label: 'SageMaker — chuẩn bị dữ liệu', url: `${D}/sagemaker/latest/dg/data-prep.html` },
              { label: 'Amazon S3 — lưu trữ dữ liệu', url: `${D}/AmazonS3/latest/userguide/Welcome.html` },
            ],
          },
          {
            id: 'ml-types',
            title: 'Học có giám sát, không giám sát và tăng cường',
            objective: 'Describe supervised, unsupervised, and reinforcement learning',
            overview:
              'Supervised learning: dữ liệu có nhãn, dùng cho phân loại (classification — đầu ra là hạng mục) và hồi quy (regression — đầu ra là số liên tục). Unsupervised learning: dữ liệu không nhãn, dùng cho phân cụm (clustering), giảm chiều và phát hiện bất thường. Reinforcement learning: tác tử học qua thử–sai bằng phần thưởng, dùng cho robot, game, tối ưu vận hành. Mẹo nhận biết trong đề: có nhãn/đáp án sẵn → supervised; “nhóm khách hàng giống nhau mà chưa biết trước nhóm nào” → unsupervised; “tối đa hoá phần thưởng theo thời gian” → reinforcement.',
            links: [
              { label: 'Thuật toán dựng sẵn của SageMaker', url: `${D}/sagemaker/latest/dg/algos.html` },
              { label: 'What is reinforcement learning?', url: `${A}/what-is/reinforcement-learning/` },
            ],
          },
        ],
      },
      {
        title: 'Task 1.2 — Identify practical use cases for AI',
        topics: [
          {
            id: 'ai-when',
            title: 'Khi nào nên và không nên dùng AI/ML',
            objective: 'Recognize when AI/ML solutions are and are not appropriate',
            overview:
              'Dùng AI/ML khi bài toán quá phức tạp để viết luật cứng, khi cần dự đoán từ dữ liệu lịch sử, hoặc khi phải xử lý dữ liệu phi cấu trúc ở quy mô lớn. KHÔNG nên dùng khi: quy tắc nghiệp vụ đã rõ ràng và cố định (dùng if/else rẻ và chính xác hơn), khi cần kết quả xác định 100% và giải thích tuyệt đối, khi chi phí vượt lợi ích, hoặc khi không có đủ dữ liệu chất lượng. Đây là câu hỏi “bẫy” rất hay gặp: đáp án đúng nhiều khi là “không dùng ML”.',
            links: [
              { label: 'Well-Architected — Machine Learning Lens', url: `${D}/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html` },
            ],
          },
          {
            id: 'ml-technique-select',
            title: 'Chọn kỹ thuật ML phù hợp với bài toán',
            objective: 'Determine appropriate ML techniques for specific use cases',
            overview:
              'Ánh xạ bài toán nghiệp vụ sang kỹ thuật: dự đoán giá / doanh số / nhiệt độ → regression; lọc thư rác, duyệt hồ sơ đạt–trượt, phân loại ảnh → classification; phân khúc khách hàng khi chưa biết trước nhóm → clustering; gợi ý sản phẩm → recommendation; dự báo nhu cầu theo thời gian → forecasting; phát hiện giao dịch bất thường → anomaly detection; nhận diện đối tượng trong ảnh → computer vision; hiểu ý định người dùng trong hội thoại → NLP.',
            links: [
              { label: 'Amazon Personalize', url: `${D}/personalize/latest/dg/what-is-personalize.html` },
              { label: 'Amazon Fraud Detector', url: `${D}/frauddetector/latest/ug/what-is-frauddetector.html` },
            ],
          },
          {
            id: 'aws-ai-services',
            title: 'Danh mục dịch vụ AI được quản lý của AWS',
            objective: 'Identify examples of real-world AI applications and AWS managed AI/ML services',
            overview:
              'Học thuộc bảng ánh xạ này — đề thi hỏi rất nhiều. Comprehend: phân tích văn bản (cảm xúc, thực thể, ngôn ngữ, PII). Translate: dịch máy. Polly: text-to-speech. Transcribe: speech-to-text. Rekognition: phân tích ảnh và video. Textract: trích xuất chữ, bảng, cặp key/value từ tài liệu scan. Lex: chatbot theo intent. Personalize: gợi ý cá nhân hoá. Kendra: tìm kiếm doanh nghiệp bằng ngôn ngữ tự nhiên. Fraud Detector: phát hiện gian lận trực tuyến. Amazon Q: trợ lý GenAI cho doanh nghiệp và lập trình viên.',
            links: [
              { label: 'Amazon Comprehend', url: `${D}/comprehend/latest/dg/what-is.html` },
              { label: 'Amazon Rekognition', url: `${D}/rekognition/latest/dg/what-is.html` },
              { label: 'Amazon Textract', url: `${D}/textract/latest/dg/what-is.html` },
              { label: 'Amazon Lex', url: `${D}/lex/latest/dg/what-is.html` },
              { label: 'Amazon Kendra', url: `${D}/kendra/latest/dg/what-is-kendra.html` },
            ],
          },
          {
            id: 'ai-capabilities-limits',
            title: 'Năng lực và giới hạn của giải pháp AI',
            objective: 'Describe the capabilities and limitations of AI/ML solutions',
            overview:
              'Mô hình ML cho ra dự đoán mang tính xác suất, không phải chân lý — luôn có sai số. Chất lượng đầu ra bị chặn bởi chất lượng dữ liệu huấn luyện (“garbage in, garbage out”). Mô hình xuống cấp theo thời gian khi phân phối dữ liệu thực tế trôi khỏi dữ liệu huấn luyện (data drift / model drift), nên bắt buộc phải giám sát và huấn luyện lại. Cần cân nhắc chi phí huấn luyện, độ trễ suy luận và yêu cầu giải thích được của ngành nghề.',
            links: [
              { label: 'SageMaker Model Monitor', url: `${D}/sagemaker/latest/dg/model-monitor.html` },
            ],
          },
        ],
      },
      {
        title: 'Task 1.3 — Describe the ML development lifecycle',
        topics: [
          {
            id: 'ml-pipeline',
            title: 'Vòng đời phát triển mô hình ML',
            objective: 'Describe components of an ML pipeline',
            overview:
              'Trình tự chuẩn: xác định bài toán nghiệp vụ → thu thập dữ liệu → EDA (khám phá, làm sạch, trực quan hoá) → feature engineering → huấn luyện và tinh chỉnh siêu tham số → đánh giá → triển khai → giám sát. Nhớ hai khái niệm hay bị hỏi: overfitting (mô hình thuộc lòng tập huấn luyện, kém trên dữ liệu mới) và underfitting (mô hình quá đơn giản, kém ở cả hai). Dữ liệu thường chia ba phần: training, validation, test.',
            links: [
              { label: 'SageMaker — tổng quan', url: `${D}/sagemaker/latest/dg/whatis.html` },
              { label: 'SageMaker Pipelines', url: `${D}/sagemaker/latest/dg/pipelines.html` },
            ],
          },
          {
            id: 'sagemaker-tools',
            title: 'Công cụ SageMaker theo từng giai đoạn',
            objective: 'Identify AWS services and features for each stage of an ML pipeline',
            overview:
              'Data Wrangler: chuẩn bị và biến đổi dữ liệu bằng giao diện kéo thả. Feature Store: kho đặc trưng dùng chung cho huấn luyện và suy luận. Ground Truth: gán nhãn dữ liệu (có thể dùng người thật). Autopilot: tự động chọn thuật toán và siêu tham số. JumpStart: kho mô hình và giải pháp dựng sẵn. Canvas: xây mô hình không cần viết code. Model Registry: quản lý phiên bản mô hình. Clarify: phát hiện thiên lệch và giải thích dự đoán. Model Monitor: giám sát chất lượng mô hình đang chạy.',
            links: [
              { label: 'SageMaker Data Wrangler', url: `${D}/sagemaker/latest/dg/data-wrangler.html` },
              { label: 'SageMaker Feature Store', url: `${D}/sagemaker/latest/dg/feature-store.html` },
              { label: 'SageMaker Canvas', url: `${D}/sagemaker/latest/dg/canvas.html` },
              { label: 'SageMaker Model Registry', url: `${D}/sagemaker/latest/dg/model-registry.html` },
            ],
          },
          {
            id: 'ml-metrics',
            title: 'Chỉ số đánh giá mô hình và chỉ số nghiệp vụ',
            objective: 'Describe model performance metrics and business metrics',
            overview:
              'Bài toán phân loại: accuracy (tỉ lệ đúng chung — dễ đánh lừa khi dữ liệu mất cân bằng), precision (trong các ca dự đoán dương, bao nhiêu ca đúng — quan trọng khi báo động giả tốn kém), recall (trong các ca dương thật, bắt được bao nhiêu — quan trọng khi bỏ sót nguy hiểm, ví dụ chẩn đoán bệnh), F1 (trung hoà precision và recall), AUC-ROC. Bài toán hồi quy: RMSE, MAE. Chỉ số nghiệp vụ: chi phí vận hành, ROI, tỉ lệ chuyển đổi, mức độ hài lòng của khách hàng.',
            links: [
              { label: 'SageMaker — chỉ số đánh giá', url: `${D}/sagemaker/latest/dg/autopilot-metrics-validation.html` },
            ],
          },
          {
            id: 'mlops',
            title: 'MLOps và vận hành mô hình',
            objective: 'Describe MLOps concepts',
            overview:
              'MLOps đưa nguyên tắc DevOps vào ML: tự động hoá pipeline, quản lý phiên bản mô hình và dữ liệu, kiểm thử, triển khai lặp lại được, giám sát và huấn luyện lại. Mục tiêu chính là khả năng tái lập (reproducibility), rút ngắn thời gian đưa mô hình ra thị trường và phát hiện sớm suy giảm chất lượng. Hai lựa chọn triển khai hay bị hỏi: real-time endpoint (độ trễ thấp, chạy liên tục, tốn tiền theo giờ) và batch transform (xử lý theo lô, rẻ hơn, không cần trả lời tức thì).',
            links: [
              { label: 'MLOps trên SageMaker', url: `${D}/sagemaker/latest/dg/sagemaker-projects-whatis.html` },
              { label: 'Triển khai mô hình để suy luận', url: `${D}/sagemaker/latest/dg/deploy-model.html` },
            ],
          },
        ],
      },
    ],
  },

  /* ==================================================================== d2 */
  {
    id: 'd2',
    title: 'Nền tảng Generative AI',
    objective: 'Domain 2: Fundamentals of Generative AI',
    weight: '24%',
    intro:
      'Khái niệm cốt lõi của AI sinh nội dung: token, embedding, transformer, foundation model; ưu điểm và hạn chế (đặc biệt là ảo giác — hallucination); và bộ hạ tầng AWS để xây ứng dụng GenAI mà Amazon Bedrock là trung tâm.',
    services: [
      'Amazon Bedrock',
      'Amazon Q',
      'SageMaker JumpStart',
      'PartyRock',
      'AWS Trainium',
      'AWS Inferentia',
    ],
    groups: [
      {
        title: 'Task 2.1 — Explain the basic concepts of generative AI',
        topics: [
          {
            id: 'gen-terms',
            title: 'Thuật ngữ GenAI: token, embedding, transformer, diffusion',
            objective: 'Explain foundational generative AI concepts',
            overview:
              'Token là đơn vị nhỏ nhất mô hình xử lý (một từ hoặc mảnh từ) và là đơn vị tính tiền của Bedrock. Embedding là biểu diễn vector số của văn bản/ảnh, giữ được ý nghĩa ngữ nghĩa nên hai nội dung gần nghĩa sẽ gần nhau trong không gian vector — nền tảng của tìm kiếm ngữ nghĩa và RAG. Chunking là chia tài liệu dài thành đoạn nhỏ trước khi tạo embedding. Kiến trúc transformer với cơ chế attention là nền của LLM; diffusion model là nền của mô hình sinh ảnh. Multimodal nghĩa là nhận/sinh nhiều loại dữ liệu (văn bản + ảnh).',
            links: [
              { label: 'Bedrock — khái niệm cơ bản', url: `${D}/bedrock/latest/userguide/what-is-bedrock.html` },
              { label: 'What are embeddings?', url: `${A}/what-is/embeddings-in-machine-learning/` },
            ],
          },
          {
            id: 'foundation-models',
            title: 'Foundation model và LLM',
            objective: 'Describe foundation models and large language models',
            overview:
              'Foundation model (FM) là mô hình rất lớn được huấn luyện trước trên khối dữ liệu khổng lồ, đa mục đích, có thể thích ứng cho nhiều tác vụ khác nhau mà không cần huấn luyện lại từ đầu. LLM là FM chuyên về ngôn ngữ. Vòng đời một FM: lựa chọn dữ liệu → pre-training → tối ưu (fine-tuning, RLHF) → đánh giá → triển khai → giám sát và phản hồi. Điểm cần nhớ: FM có knowledge cutoff — không biết sự kiện sau ngày dữ liệu huấn luyện dừng lại.',
            links: [
              { label: 'Foundation models trên Bedrock', url: `${D}/bedrock/latest/userguide/models-supported.html` },
              { label: 'What is a foundation model?', url: `${A}/what-is/foundation-models/` },
            ],
          },
          {
            id: 'gen-usecases',
            title: 'Các trường hợp sử dụng GenAI',
            objective: 'Describe common use cases for generative AI',
            overview:
              'Nhóm dùng nhiều nhất: tóm tắt tài liệu, sinh và giải thích mã nguồn, chatbot hỗ trợ khách hàng, dịch thuật, sinh ảnh/video, tìm kiếm ngữ nghĩa, trích xuất thông tin, viết nội dung tiếp thị, tạo dữ liệu tổng hợp (synthetic data) và cá nhân hoá trải nghiệm. Điểm chung: đầu ra là nội dung mới, không phải một con số hay một nhãn — nếu đề bài chỉ cần dự đoán một giá trị thì ML truyền thống mới là câu trả lời đúng.',
            links: [
              { label: 'Generative AI trên AWS', url: `${A}/ai/generative-ai/` },
            ],
          },
        ],
      },
      {
        title: 'Task 2.2 — Understand the capabilities and limitations of generative AI',
        topics: [
          {
            id: 'gen-advantages',
            title: 'Ưu điểm của Generative AI',
            objective: 'Describe the advantages of generative AI',
            overview:
              'Thích ứng nhanh với tác vụ mới chỉ bằng prompt, không cần dán nhãn dữ liệu và huấn luyện lại. Một mô hình phục vụ nhiều tác vụ (đa nhiệm). Rút ngắn đáng kể thời gian ra sản phẩm và hạ rào cản kỹ thuật — người không biết lập trình vẫn dùng được. Tương tác bằng ngôn ngữ tự nhiên nên trải nghiệm gần gũi. Với dịch vụ được quản lý như Bedrock, doanh nghiệp không phải tự vận hành hạ tầng GPU.',
            links: [
              { label: 'Vì sao chọn Amazon Bedrock', url: `${A}/bedrock/` },
            ],
          },
          {
            id: 'gen-limits',
            title: 'Hạn chế và rủi ro của Generative AI',
            objective: 'Describe the disadvantages of generative AI solutions',
            overview:
              'Hallucination — mô hình bịa ra thông tin nghe rất thuyết phục nhưng sai; đây là hạn chế bị hỏi nhiều nhất và cách giảm thiểu chuẩn là RAG (nối mô hình với nguồn dữ liệu thật) cùng với kiểm duyệt của con người. Các hạn chế khác: kết quả không xác định (cùng prompt có thể ra đáp án khác nhau), thiếu minh bạch nội tại (khó giải thích vì sao ra đáp án đó), knowledge cutoff, chi phí suy luận cao, rủi ro rò rỉ dữ liệu nhạy cảm khi nhét vào prompt, và khả năng tái tạo thiên lệch có trong dữ liệu huấn luyện.',
            links: [
              { label: 'Bedrock Guardrails', url: `${D}/bedrock/latest/userguide/guardrails.html` },
              { label: 'AWS Responsible AI', url: RESPONSIBLE_AI_URL },
            ],
          },
          {
            id: 'gen-business-metrics',
            title: 'Chỉ số nghiệp vụ cho giải pháp GenAI',
            objective: 'Understand various business metrics for generative AI applications',
            overview:
              'Đo giá trị mang lại chứ không chỉ đo mô hình: mức độ hài lòng của khách hàng (CSAT), tỉ lệ chuyển đổi, doanh thu tăng thêm, hiệu suất nhân viên, tỉ lệ tự phục vụ thành công của chatbot, thời gian trung bình xử lý một yêu cầu, ROI so với chi phí token và hạ tầng, và cross-domain performance (mô hình làm tốt trên nhiều lĩnh vực khác nhau). Chỉ số kỹ thuật đo mô hình; chỉ số nghiệp vụ mới quyết định dự án có đáng tiếp tục hay không.',
            links: [
              { label: 'Well-Architected — Generative AI Lens', url: `${D}/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html` },
            ],
          },
        ],
      },
      {
        title: 'Task 2.3 — AWS infrastructure and technologies for generative AI',
        topics: [
          {
            id: 'bedrock',
            title: 'Amazon Bedrock',
            objective: 'Identify AWS services and features to develop generative AI applications',
            overview:
              'Bedrock là dịch vụ được quản lý hoàn toàn, cung cấp foundation model từ nhiều nhà cung cấp (Anthropic, Meta, Mistral, Cohere, Stability AI, Amazon Nova/Titan…) qua một API duy nhất, không cần quản lý hạ tầng. Các thành phần cần nhớ: Knowledge Bases (RAG có sẵn), Agents (điều phối tác vụ nhiều bước), Guardrails (chặn nội dung không mong muốn), Model Evaluation (đánh giá và so sánh mô hình), custom models (fine-tuning và continued pre-training). Dữ liệu của bạn không được dùng để huấn luyện lại mô hình gốc.',
            links: [
              { label: 'Amazon Bedrock — tổng quan', url: `${D}/bedrock/latest/userguide/what-is-bedrock.html` },
              { label: 'Bedrock Knowledge Bases', url: `${D}/bedrock/latest/userguide/knowledge-base.html` },
              { label: 'Bedrock Agents', url: `${D}/bedrock/latest/userguide/agents.html` },
            ],
          },
          {
            id: 'genai-other-services',
            title: 'SageMaker JumpStart, Amazon Q và PartyRock',
            objective: 'Identify additional AWS services for generative AI',
            overview:
              'SageMaker JumpStart: kho foundation model và giải pháp mẫu, triển khai được vào tài khoản của bạn với toàn quyền kiểm soát hạ tầng — chọn khi cần tuỳ biến sâu. Amazon Q Business: trợ lý GenAI trả lời câu hỏi trên dữ liệu nội bộ doanh nghiệp. Amazon Q Developer: trợ lý viết mã trong IDE. PartyRock: sân chơi không cần code để dựng ứng dụng GenAI nhỏ, dùng để học và thử nghiệm. Bedrock hợp cho ứng dụng serverless dùng API; JumpStart hợp khi cần kiểm soát mô hình và hạ tầng.',
            links: [
              { label: 'SageMaker JumpStart', url: `${D}/sagemaker/latest/dg/studio-jumpstart.html` },
              { label: 'Amazon Q Business', url: `${D}/amazonq/latest/qbusiness-ug/what-is.html` },
              { label: 'PartyRock', url: 'https://partyrock.aws/' },
            ],
          },
          {
            id: 'genai-infra',
            title: 'Hạ tầng tính toán: Trainium, Inferentia, GPU',
            objective: 'Describe the AWS infrastructure for generative AI',
            overview:
              'AWS Trainium: chip tự thiết kế tối ưu cho huấn luyện mô hình lớn, rẻ hơn GPU cho cùng khối lượng. AWS Inferentia: chip tối ưu cho suy luận, giá trên mỗi lần suy luận thấp. Instance GPU (P và G series) dùng khi cần thư viện CUDA hoặc mô hình chưa hỗ trợ chip AWS. Chọn theo mục đích: huấn luyện → Trainium/P; suy luận quy mô lớn → Inferentia. Lợi ích của việc chạy GenAI trên AWS: bảo mật và tuân thủ sẵn có, khả năng mở rộng, tích hợp với hệ sinh thái, và giảm thời gian đưa sản phẩm ra thị trường.',
            links: [
              { label: 'AWS Trainium', url: `${A}/ai/machine-learning/trainium/` },
              { label: 'AWS Inferentia', url: `${A}/ai/machine-learning/inferentia/` },
            ],
          },
          {
            id: 'genai-cost',
            title: 'Chi phí và đánh đổi khi chọn giải pháp GenAI',
            objective: 'Understand the cost tradeoffs of AWS generative AI services',
            overview:
              'Bedrock tính tiền chủ yếu theo token (đầu vào + đầu ra). On-demand: trả theo lượng dùng, hợp với tải thất thường. Provisioned throughput: mua trước công suất, độ trễ ổn định, hợp với tải lớn và đều — nhưng đắt nếu dùng ít, và bắt buộc với một số mô hình đã tuỳ biến. Batch inference rẻ hơn real-time khi không cần trả lời tức thì. Các yếu tố làm đội chi phí: prompt dài, cửa sổ ngữ cảnh lớn, mô hình lớn, fine-tuning. Mẹo tiết kiệm: chọn mô hình nhỏ vừa đủ, rút gọn prompt, cache kết quả, và giới hạn độ dài đầu ra.',
            links: [
              { label: 'Bedrock — giá', url: `${A}/bedrock/pricing/` },
              { label: 'Provisioned throughput', url: `${D}/bedrock/latest/userguide/prov-throughput.html` },
            ],
          },
        ],
      },
    ],
  },

  /* ==================================================================== d3 */
  {
    id: 'd3',
    title: 'Ứng dụng Foundation Model',
    objective: 'Domain 3: Applications of Foundation Models',
    weight: '28%',
    intro:
      'Phần nặng điểm nhất của kỳ thi. Nội dung xoay quanh: chọn mô hình phù hợp, dựng RAG với vector database, chỉnh tham số suy luận, viết prompt hiệu quả và phòng rủi ro prompt, tuỳ biến mô hình (fine-tuning) và đánh giá chất lượng đầu ra.',
    services: [
      'Amazon Bedrock',
      'Bedrock Knowledge Bases',
      'Bedrock Agents',
      'Amazon OpenSearch Service',
      'Amazon Aurora PostgreSQL (pgvector)',
      'Amazon Neptune',
      'Amazon DocumentDB',
      'SageMaker JumpStart',
    ],
    groups: [
      {
        title: 'Task 3.1 — Design considerations for applications that use foundation models',
        topics: [
          {
            id: 'fm-selection',
            title: 'Tiêu chí chọn foundation model',
            objective: 'Identify selection criteria to choose pre-trained models',
            overview:
              'Cân nhắc theo: chi phí (giá token), độ trễ (mô hình nhỏ nhanh hơn), modality (chỉ văn bản hay đa phương thức), kích thước mô hình và độ phức tạp tác vụ, khả năng tuỳ biến (có hỗ trợ fine-tuning không), độ dài cửa sổ ngữ cảnh, ràng buộc tuân thủ và vùng (Region) khả dụng. Nguyên tắc chọn: mô hình nhỏ nhất vẫn đạt yêu cầu chất lượng — vừa rẻ vừa nhanh. Đề thi hay đưa tình huống “ngân sách hạn chế / cần phản hồi tức thì” → chọn mô hình nhỏ hơn thay vì mô hình mạnh nhất.',
            links: [
              { label: 'Chọn mô hình trên Bedrock', url: `${D}/bedrock/latest/userguide/models-supported.html` },
            ],
          },
          {
            id: 'rag',
            title: 'RAG và cơ sở dữ liệu vector trên AWS',
            objective: 'Describe the effect of RAG and data stores on foundation models',
            overview:
              'RAG (Retrieval Augmented Generation) truy xuất tài liệu liên quan từ kho dữ liệu của bạn rồi chèn vào prompt để mô hình trả lời dựa trên nguồn thật. Đây là cách chuẩn để giảm hallucination, cập nhật kiến thức mới và trả lời trên dữ liệu nội bộ MÀ KHÔNG cần fine-tuning. Kho vector trên AWS: Amazon OpenSearch Service (kể cả Serverless), Amazon Aurora PostgreSQL với pgvector, Amazon RDS for PostgreSQL, Amazon Neptune Analytics, Amazon DocumentDB, Amazon MemoryDB. Bedrock Knowledge Bases dựng sẵn toàn bộ luồng ingest → chunk → embed → truy xuất.',
            links: [
              { label: 'Bedrock Knowledge Bases (RAG)', url: `${D}/bedrock/latest/userguide/knowledge-base.html` },
              { label: 'OpenSearch — vector database', url: `${D}/opensearch-service/latest/developerguide/vector-database.html` },
              { label: 'Aurora PostgreSQL pgvector', url: `${D}/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.VectorDB.html` },
            ],
          },
          {
            id: 'inference-params',
            title: 'Tham số suy luận: temperature, top-p, top-k, độ dài',
            objective: 'Describe the effect of inference parameters on model responses',
            overview:
              'Temperature điều khiển mức ngẫu nhiên: giá trị thấp (gần 0) cho đầu ra ổn định, nhất quán, hợp với trích xuất dữ liệu và trả lời sự kiện; giá trị cao cho đầu ra đa dạng, sáng tạo, hợp với viết quảng cáo. Top-p (nucleus sampling) và top-k giới hạn tập token ứng viên — giảm để đầu ra tập trung hơn. Response length / max tokens giới hạn độ dài đầu ra và ảnh hưởng trực tiếp tới chi phí. Stop sequences báo cho mô hình dừng lại. Nhớ: temperature KHÔNG làm mô hình chính xác hơn về mặt sự kiện, chỉ làm bớt ngẫu nhiên.',
            links: [
              { label: 'Tham số suy luận của Bedrock', url: `${D}/bedrock/latest/userguide/inference-parameters.html` },
            ],
          },
          {
            id: 'agents',
            title: 'Agent và điều phối tác vụ nhiều bước',
            objective: 'Describe the role of agents in multi-step tasks',
            overview:
              'Agent để mô hình tự lập kế hoạch, gọi API/hàm bên ngoài (action group), tra cứu knowledge base và ghép kết quả lại thành nhiều bước cho tới khi hoàn thành yêu cầu. Dùng khi tác vụ cần thao tác với hệ thống khác (đặt hàng, tra đơn, cập nhật CSDL) chứ không chỉ sinh văn bản. Bedrock Agents lo phần điều phối, còn bạn khai báo các hành động qua Lambda và schema API.',
            links: [
              { label: 'Agents for Amazon Bedrock', url: `${D}/bedrock/latest/userguide/agents.html` },
            ],
          },
        ],
      },
      {
        title: 'Task 3.2 — Choose effective prompt engineering techniques',
        topics: [
          {
            id: 'prompt-basics',
            title: 'Thành phần của một prompt tốt',
            objective: 'Describe the concepts and constructs of prompt engineering',
            overview:
              'Một prompt đầy đủ gồm: instruction (yêu cầu rõ ràng), context (bối cảnh và dữ liệu tham chiếu), input data (nội dung cần xử lý), output indicator (mô tả định dạng đầu ra mong muốn), và negative prompt (nêu rõ điều không được làm). Prompt càng cụ thể — nêu rõ vai trò, đối tượng đọc, giọng văn, độ dài, định dạng — thì kết quả càng ổn định. Prompt template giúp chuẩn hoá và tái sử dụng prompt trong ứng dụng.',
            links: [
              { label: 'Hướng dẫn prompt engineering của Bedrock', url: `${D}/bedrock/latest/userguide/prompt-engineering-guidelines.html` },
            ],
          },
          {
            id: 'prompt-techniques',
            title: 'Kỹ thuật: zero-shot, few-shot, chain-of-thought',
            objective: 'Describe prompt engineering techniques',
            overview:
              'Zero-shot: chỉ ra lệnh, không đưa ví dụ. Few-shot (in-context learning): đưa kèm vài ví dụ mẫu đầu vào–đầu ra để mô hình bắt chước định dạng và phong cách — cách rẻ nhất để nâng chất lượng mà không cần fine-tuning. Chain-of-thought: yêu cầu mô hình trình bày từng bước suy luận, hiệu quả với bài toán logic và tính toán nhiều bước. Nhớ phân biệt: few-shot đưa ví dụ ngay trong prompt lúc chạy; fine-tuning cập nhật trọng số mô hình và tốn kém hơn nhiều.',
            links: [
              { label: 'Kỹ thuật prompt engineering', url: `${D}/bedrock/latest/userguide/prompt-engineering-guidelines.html` },
            ],
          },
          {
            id: 'prompt-risks',
            title: 'Rủi ro prompt và cách phòng vệ',
            objective: 'Describe the risks and limitations of prompt engineering',
            overview:
              'Prompt injection: người dùng nhét chỉ thị độc hại vào đầu vào để chiếm quyền điều khiển mô hình. Jailbreaking: lách qua rào an toàn để mô hình sinh nội dung bị cấm. Prompt leaking / exposure: mô hình vô tình tiết lộ prompt hệ thống hoặc dữ liệu nhạy cảm. Poisoning: đầu độc dữ liệu tham chiếu. Phòng vệ: tách rõ chỉ thị hệ thống với dữ liệu người dùng, kiểm duyệt đầu vào–đầu ra bằng Bedrock Guardrails, áp dụng đặc quyền tối thiểu cho mọi công cụ agent gọi được, và không đưa bí mật vào prompt.',
            links: [
              { label: 'Bedrock Guardrails', url: `${D}/bedrock/latest/userguide/guardrails.html` },
              { label: 'OWASP Top 10 for LLM', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
            ],
          },
        ],
      },
      {
        title: 'Task 3.3 — Describe the training and fine-tuning process for foundation models',
        topics: [
          {
            id: 'fm-training',
            title: 'Các giai đoạn huấn luyện foundation model',
            objective: 'Describe the key elements of training a foundation model',
            overview:
              'Pre-training: học từ khối dữ liệu khổng lồ chưa gán nhãn để nắm ngôn ngữ và tri thức chung — cực kỳ tốn kém, hầu như không doanh nghiệp nào tự làm. Continued pre-training: huấn luyện tiếp mô hình có sẵn bằng dữ liệu chuyên ngành CHƯA gán nhãn để mô hình quen thuật ngữ lĩnh vực. Fine-tuning: huấn luyện tiếp bằng dữ liệu CÓ gán nhãn theo cặp prompt–completion để mô hình làm tốt một tác vụ cụ thể. Thứ tự cân nhắc khi cần cải thiện chất lượng: prompt engineering → RAG → fine-tuning → huấn luyện từ đầu (theo chiều tăng dần chi phí).',
            links: [
              { label: 'Tuỳ biến mô hình trên Bedrock', url: `${D}/bedrock/latest/userguide/custom-models.html` },
            ],
          },
          {
            id: 'fine-tune-methods',
            title: 'Instruction tuning, domain adaptation, transfer learning, RLHF',
            objective: 'Define methods for fine-tuning a foundation model',
            overview:
              'Instruction tuning: dạy mô hình tuân theo dạng chỉ thị bằng bộ dữ liệu prompt–response. Domain adaptation: hướng mô hình sang lĩnh vực hẹp (y tế, pháp lý, tài chính). Transfer learning: tận dụng tri thức của mô hình đã huấn luyện cho tác vụ mới, tiết kiệm dữ liệu và thời gian. RLHF (Reinforcement Learning from Human Feedback): con người xếp hạng đầu ra để mô hình học theo sở thích và chuẩn mực an toàn của con người — đây là bước làm mô hình “biết cư xử”. Cần cảnh giác với catastrophic forgetting: fine-tune quá đà khiến mô hình quên năng lực tổng quát.',
            links: [
              { label: 'Fine-tuning trên Bedrock', url: `${D}/bedrock/latest/userguide/custom-models.html` },
              { label: 'What is RLHF?', url: `${A}/what-is/reinforcement-learning-from-human-feedback/` },
            ],
          },
          {
            id: 'training-data',
            title: 'Chuẩn bị dữ liệu cho tuỳ biến mô hình',
            objective: 'Describe how to prepare data to fine-tune a foundation model',
            overview:
              'Dữ liệu fine-tuning phải có nhãn, đúng định dạng yêu cầu (thường là JSONL với cặp prompt/completion), đủ đại diện cho tình huống thực tế, đã loại trùng lặp và loại thông tin nhạy cảm (PII). Chất lượng quan trọng hơn số lượng: vài trăm mẫu sạch và nhất quán thường tốt hơn hàng vạn mẫu nhiễu. Các bước cần nhớ: curation (chọn lọc), labeling (gán nhãn), governance (quản trị nguồn gốc và quyền dùng), representativeness (bao phủ đủ các trường hợp), và tách riêng tập đánh giá.',
            links: [
              { label: 'Chuẩn bị dữ liệu tuỳ biến mô hình', url: `${D}/bedrock/latest/userguide/model-customization-prereq.html` },
              { label: 'SageMaker Ground Truth', url: `${D}/sagemaker/latest/dg/sms.html` },
            ],
          },
        ],
      },
      {
        title: 'Task 3.4 — Describe methods to evaluate foundation model performance',
        topics: [
          {
            id: 'fm-eval',
            title: 'Phương pháp đánh giá foundation model',
            objective: 'Describe approaches to evaluate foundation model performance',
            overview:
              'Hai hướng chính: đánh giá tự động bằng bộ dữ liệu chuẩn (benchmark dataset) và đánh giá bởi con người — bắt buộc khi cần chấm những tiêu chí chủ quan như giọng văn, mức hữu ích, mức an toàn. Bedrock Model Evaluation hỗ trợ cả hai: automatic evaluation với bộ dữ liệu dựng sẵn hoặc của bạn, và human evaluation với đội ngũ của bạn hoặc của AWS. Nên đánh giá trên tập dữ liệu phản ánh đúng nghiệp vụ thật thay vì chỉ nhìn benchmark công khai.',
            links: [
              { label: 'Bedrock — Model Evaluation', url: `${D}/bedrock/latest/userguide/model-evaluation.html` },
            ],
          },
          {
            id: 'fm-metrics',
            title: 'Chỉ số ROUGE, BLEU, BERTScore, perplexity',
            objective: 'Determine whether a foundation model effectively meets business objectives',
            overview:
              'ROUGE: đo độ trùng khớp với bản tham chiếu, dùng cho tóm tắt văn bản. BLEU: dùng cho dịch máy. BERTScore: so khớp theo ngữ nghĩa bằng embedding thay vì so khớp từ, bắt được cách diễn đạt khác nhau nhưng cùng nghĩa. Perplexity: đo mức độ “bất ngờ” của mô hình trước văn bản — càng thấp càng tốt. Nhớ ánh xạ: tóm tắt → ROUGE, dịch → BLEU, tương đồng ngữ nghĩa → BERTScore.',
            links: [
              { label: 'Chỉ số đánh giá của Bedrock', url: `${D}/bedrock/latest/userguide/model-evaluation-tasks.html` },
            ],
          },
          {
            id: 'fm-business-fit',
            title: 'Đánh giá theo mục tiêu nghiệp vụ',
            objective: 'Determine whether a foundation model effectively meets business objectives',
            overview:
              'Điểm benchmark cao không đồng nghĩa dự án thành công. Cần đo bằng chỉ số nghiệp vụ: mức độ hài lòng của người dùng, tỉ lệ yêu cầu được giải quyết mà không cần người can thiệp, thời gian xử lý trung bình, doanh thu tăng thêm, chi phí trên mỗi lượt dùng và ROI tổng thể. Kết hợp thêm vòng phản hồi: thu thập đánh giá của người dùng thật, phân tích các ca thất bại và cải tiến prompt hoặc dữ liệu tham chiếu.',
            links: [
              { label: 'Well-Architected — Generative AI Lens', url: `${D}/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html` },
            ],
          },
        ],
      },
    ],
  },

  /* ==================================================================== d4 */
  {
    id: 'd4',
    title: 'Nguyên tắc AI có trách nhiệm',
    objective: 'Domain 4: Guidelines for Responsible AI',
    weight: '14%',
    intro:
      'Các chiều của AI có trách nhiệm theo AWS, cách phát hiện và giảm thiểu thiên lệch, và vì sao mô hình cần minh bạch, giải thích được. Phần này thiên về khái niệm — học kỹ định nghĩa là làm được.',
    services: [
      'SageMaker Clarify',
      'Bedrock Guardrails',
      'SageMaker Model Monitor',
      'Amazon Augmented AI (A2I)',
      'SageMaker Model Cards',
      'AWS AI Service Cards',
    ],
    groups: [
      {
        title: 'Task 4.1 — Explain the development of AI systems that are responsible',
        topics: [
          {
            id: 'responsible-dims',
            title: 'Tám chiều của AI có trách nhiệm theo AWS',
            objective: 'Identify features of responsible AI',
            overview:
              'AWS nêu tám chiều: fairness (công bằng giữa các nhóm người dùng), explainability (giải thích được vì sao có kết quả đó), privacy and security (bảo vệ dữ liệu), safety (ngăn đầu ra gây hại), controllability (giám sát và điều chỉnh được hành vi hệ thống), veracity and robustness (đúng và ổn định kể cả với đầu vào bất thường), governance (tuân thủ quy định và chuẩn mực nội bộ), transparency (người dùng biết mình đang tương tác với AI và hiểu giới hạn của nó). Đề thi hay mô tả một tình huống rồi hỏi vi phạm chiều nào.',
            links: [
              { label: 'AWS Responsible AI', url: RESPONSIBLE_AI_URL },
            ],
          },
          {
            id: 'bias-detect',
            title: 'Phát hiện và giảm thiểu thiên lệch',
            objective: 'Identify tools to identify features in training data and mitigate bias',
            overview:
              'SageMaker Clarify là công cụ chuyên trách: phát hiện thiên lệch cả trước huấn luyện (trong dữ liệu) lẫn sau huấn luyện (trong dự đoán), đồng thời giải thích mức đóng góp của từng đặc trưng. Bedrock Guardrails lọc nội dung có hại, chủ đề bị cấm và thông tin nhạy cảm ở cả đầu vào lẫn đầu ra. SageMaker Model Monitor theo dõi trôi dữ liệu và trôi chất lượng khi mô hình đã chạy. Amazon Augmented AI (A2I) đưa con người vào vòng lặp để xem xét các dự đoán có độ tin cậy thấp.',
            links: [
              { label: 'SageMaker Clarify', url: `${D}/sagemaker/latest/dg/clarify-fairness-and-explainability.html` },
              { label: 'Bedrock Guardrails', url: `${D}/bedrock/latest/userguide/guardrails.html` },
              { label: 'Amazon Augmented AI', url: `${D}/sagemaker/latest/dg/a2i-use-augmented-ai-a2i-human-review-loops.html` },
            ],
          },
          {
            id: 'dataset-quality',
            title: 'Chất lượng và tính đại diện của bộ dữ liệu',
            objective: 'Describe the effects of bias and variance on AI systems',
            overview:
              'Bộ dữ liệu tốt phải cân bằng giữa các nhóm, đại diện đủ cho quần thể người dùng thực, được chọn lọc kỹ và bao trùm (inclusive). Dữ liệu thiếu đại diện dẫn tới mô hình hoạt động kém với nhóm thiểu số — đây là nguồn gốc phổ biến nhất của thiên lệch. Hai lỗi cân bằng cần nhớ: bias cao gây underfitting (mô hình quá đơn giản), variance cao gây overfitting (mô hình thuộc lòng dữ liệu huấn luyện). Ảnh hưởng thực tế của thiên lệch: mất công bằng, giảm độ chính xác cho một số nhóm, và rủi ro pháp lý cho doanh nghiệp.',
            links: [
              { label: 'Phát hiện thiên lệch trước huấn luyện', url: `${D}/sagemaker/latest/dg/clarify-measure-data-bias.html` },
            ],
          },
          {
            id: 'responsible-tradeoffs',
            title: 'Đánh đổi khi chọn mô hình có trách nhiệm',
            objective: 'Describe the tradeoffs between model safety and model performance',
            overview:
              'Rào an toàn chặt hơn có thể làm mô hình từ chối cả yêu cầu hợp lệ (false refusal) và giảm mức hữu ích; ngược lại nới lỏng thì tăng rủi ro nội dung có hại. Mô hình lớn thường chính xác hơn nhưng đắt, chậm và tiêu tốn nhiều năng lượng hơn — yếu tố bền vững (sustainability) cũng là một tiêu chí trong lựa chọn có trách nhiệm. Mô hình dễ giải thích (cây quyết định, hồi quy tuyến tính) thường kém chính xác hơn mạng nơ-ron sâu, nên ngành nghề bị quản lý chặt phải chấp nhận đánh đổi này.',
            links: [
              { label: 'AWS Responsible AI', url: RESPONSIBLE_AI_URL },
            ],
          },
        ],
      },
      {
        title: 'Task 4.2 — Recognize the importance of transparent and explainable models',
        topics: [
          {
            id: 'explainability',
            title: 'Explainability, interpretability, black box vs white box',
            objective: 'Describe the differences between models that are transparent and explainable',
            overview:
              'Interpretability: hiểu được cơ chế bên trong mô hình vận hành ra sao — cao nhất ở mô hình “white box” như hồi quy tuyến tính hay cây quyết định. Explainability: giải thích được vì sao mô hình đưa ra một kết quả cụ thể, kể cả khi bên trong là “black box” (mạng nơ-ron sâu, LLM) — làm được nhờ công cụ như SHAP trong SageMaker Clarify. Đánh đổi kinh điển: mô hình càng phức tạp thì càng chính xác nhưng càng khó giải thích. Ngành y tế, tài chính, tuyển dụng thường bắt buộc phải giải thích được.',
            links: [
              { label: 'Giải thích mô hình với Clarify', url: `${D}/sagemaker/latest/dg/clarify-model-explainability.html` },
            ],
          },
          {
            id: 'transparency-tools',
            title: 'Công cụ minh bạch: AI Service Cards, Model Cards',
            objective: 'Identify tools to identify transparent models',
            overview:
              'AWS AI Service Cards: tài liệu công khai của AWS mô tả mục đích sử dụng dự kiến, hạn chế, lựa chọn thiết kế có trách nhiệm và cách đánh giá hiệu năng của từng dịch vụ AI. SageMaker Model Cards: nơi bạn ghi lại thông tin mô hình của mình — mục đích, dữ liệu huấn luyện, chỉ số đánh giá, rủi ro đã biết — phục vụ kiểm toán và bàn giao. Ngoài ra: data lineage (truy vết nguồn gốc dữ liệu), mô hình nguồn mở giúp cộng đồng soi xét, và tài liệu hoá giới hạn của hệ thống cho người dùng cuối.',
            links: [
              { label: 'AWS AI Service Cards', url: `${A}/ai/responsible-ai/resources/` },
              { label: 'SageMaker Model Cards', url: `${D}/sagemaker/latest/dg/model-cards.html` },
            ],
          },
          {
            id: 'human-centered',
            title: 'Thiết kế lấy con người làm trung tâm',
            objective: 'Describe human-centered design for explainable AI',
            overview:
              'Nguyên tắc: giữ con người trong vòng lặp (human-in-the-loop) ở những quyết định rủi ro cao, thiết kế giao diện giúp người dùng hiểu độ tin cậy của kết quả, cho phép phản hồi và khiếu nại, và luôn nói rõ đây là nội dung do AI tạo ra. Amazon Augmented AI (A2I) hiện thực hoá điều này bằng cách tự động chuyển các dự đoán dưới ngưỡng tin cậy sang cho người thật xem xét. Việc thu thập phản hồi của người dùng cũng là nguồn dữ liệu để cải tiến mô hình về sau.',
            links: [
              { label: 'Amazon Augmented AI (A2I)', url: `${D}/sagemaker/latest/dg/a2i-use-augmented-ai-a2i-human-review-loops.html` },
            ],
          },
        ],
      },
    ],
  },

  /* ==================================================================== d5 */
  {
    id: 'd5',
    title: 'Bảo mật, tuân thủ và quản trị cho giải pháp AI',
    objective: 'Domain 5: Security, Compliance, and Governance for AI Solutions',
    weight: '14%',
    intro:
      'Bảo vệ hệ thống AI bằng bộ công cụ bảo mật quen thuộc của AWS (IAM, KMS, Macie, PrivateLink…), cộng với phần quản trị dữ liệu, truy vết và tuân thủ quy định. Nhiều câu ở đây thực chất là kiến thức bảo mật AWS nền tảng áp vào bối cảnh AI.',
    services: [
      'AWS IAM',
      'AWS KMS',
      'Amazon Macie',
      'AWS PrivateLink',
      'Amazon GuardDuty',
      'AWS Config',
      'AWS CloudTrail',
      'AWS Audit Manager',
      'AWS Artifact',
    ],
    groups: [
      {
        title: 'Task 5.1 — Explain methods to secure AI systems',
        topics: [
          {
            id: 'iam-security',
            title: 'IAM và nguyên tắc đặc quyền tối thiểu',
            objective: 'Identify AWS services and features to secure AI systems',
            overview:
              'Dùng IAM role thay cho khoá truy cập cứng, cấp đúng quyền tối thiểu cần thiết (least privilege), tách quyền theo vai trò (nhà khoa học dữ liệu, kỹ sư triển khai, người dùng cuối). Với Bedrock và SageMaker, kiểm soát ai được gọi mô hình nào bằng IAM policy; dùng identity-based policy cho người dùng và resource-based policy cho tài nguyên. AWS IAM Identity Center để quản lý danh tính tập trung. Ghi nhớ mô hình trách nhiệm chung: AWS bảo mật hạ tầng đám mây, khách hàng bảo mật dữ liệu và cấu hình của mình.',
            links: [
              { label: 'AWS IAM — giới thiệu', url: `${D}/IAM/latest/UserGuide/introduction.html` },
              { label: 'Bảo mật trong Amazon Bedrock', url: `${D}/bedrock/latest/userguide/security.html` },
            ],
          },
          {
            id: 'data-protection',
            title: 'Bảo vệ dữ liệu: mã hoá, Macie, PrivateLink, VPC',
            objective: 'Describe methods to protect data used in AI systems',
            overview:
              'Mã hoá khi lưu trữ bằng AWS KMS và khi truyền bằng TLS. Amazon Macie tự động phát hiện dữ liệu nhạy cảm (PII) trong S3. AWS PrivateLink và VPC endpoint giữ lưu lượng tới Bedrock/SageMaker trong mạng riêng, không đi ra internet công cộng. Với SageMaker có thể chạy trong VPC không có đường ra internet. Nguyên tắc quan trọng cho GenAI: không đưa bí mật hay dữ liệu cá nhân vào prompt; ẩn danh hoá hoặc token hoá dữ liệu nhạy cảm trước khi gửi cho mô hình.',
            links: [
              { label: 'AWS KMS', url: `${D}/kms/latest/developerguide/overview.html` },
              { label: 'Amazon Macie', url: `${D}/macie/latest/user/what-is-macie.html` },
              { label: 'Bedrock với VPC endpoint', url: `${D}/bedrock/latest/userguide/usingVPC.html` },
            ],
          },
          {
            id: 'ai-security-tools',
            title: 'Dịch vụ giám sát và phòng thủ',
            objective: 'Identify AWS services for monitoring and auditing AI systems',
            overview:
              'GuardDuty: phát hiện mối đe doạ dựa trên hành vi bất thường. Inspector: quét lỗ hổng cho workload. Security Hub: tổng hợp cảnh báo bảo mật một chỗ. AWS WAF và Shield: chặn tấn công tầng ứng dụng và DDoS trước ứng dụng AI. CloudTrail: ghi lại mọi lời gọi API — dùng để truy vết ai đã gọi mô hình nào, lúc nào. AWS Config: theo dõi và đánh giá cấu hình tài nguyên so với quy tắc. CloudWatch: nhật ký và chỉ số vận hành.',
            links: [
              { label: 'Amazon GuardDuty', url: `${D}/guardduty/latest/ug/what-is-guardduty.html` },
              { label: 'AWS CloudTrail', url: `${D}/awscloudtrail/latest/userguide/cloudtrail-user-guide.html` },
              { label: 'AWS Config', url: `${D}/config/latest/developerguide/WhatIsConfig.html` },
            ],
          },
          {
            id: 'genai-threats',
            title: 'Rủi ro bảo mật riêng của hệ thống GenAI',
            objective: 'Describe the security concerns unique to AI systems',
            overview:
              'Các mối đe doạ đặc thù: prompt injection và jailbreaking, data poisoning (đầu độc dữ liệu huấn luyện hoặc kho tham chiếu), model inversion và membership inference (suy ngược dữ liệu huấn luyện từ đầu ra), đánh cắp mô hình, rò rỉ dữ liệu qua prompt, và phụ thuộc chuỗi cung ứng mô hình bên thứ ba. Khung tham chiếu hay được nhắc: OWASP Top 10 for LLM Applications và MITRE ATLAS. Biện pháp: kiểm duyệt đầu vào–đầu ra, giới hạn tốc độ, ghi nhật ký đầy đủ, và kiểm thử đối kháng (red teaming) trước khi lên production.',
            links: [
              { label: 'OWASP Top 10 for LLM', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
              { label: 'Bảo mật Amazon Bedrock', url: `${D}/bedrock/latest/userguide/security.html` },
            ],
          },
        ],
      },
      {
        title: 'Task 5.2 — Recognize governance and compliance regulations for AI systems',
        topics: [
          {
            id: 'governance',
            title: 'Quản trị dữ liệu và mô hình',
            objective: 'Describe data governance strategies',
            overview:
              'Các thành phần cần nhớ: data lineage (truy vết nguồn gốc và biến đổi của dữ liệu), cataloging (lập danh mục dữ liệu, ví dụ với AWS Glue Data Catalog), data quality (kiểm soát chất lượng), retention policy (giữ và xoá dữ liệu đúng hạn), residency (dữ liệu phải nằm ở vùng địa lý nào), và quyền truy cập theo vai trò. Về mô hình: đăng ký phiên bản trong Model Registry, ghi Model Card, và có quy trình phê duyệt trước khi đưa lên production.',
            links: [
              { label: 'AWS Glue Data Catalog', url: `${D}/glue/latest/dg/catalog-and-crawler.html` },
              { label: 'SageMaker Model Registry', url: `${D}/sagemaker/latest/dg/model-registry.html` },
            ],
          },
          {
            id: 'compliance-standards',
            title: 'Chuẩn tuân thủ và quy định pháp lý',
            objective: 'Identify regulatory compliance standards for AI systems',
            overview:
              'Các chuẩn hay được nhắc trong đề: ISO 27001 và ISO 42001 (hệ thống quản lý AI), SOC 1/2/3, PCI DSS cho dữ liệu thẻ, HIPAA cho dữ liệu y tế Hoa Kỳ, GDPR cho dữ liệu cá nhân ở châu Âu, EU AI Act phân loại hệ thống AI theo mức rủi ro, cùng các luật về trách nhiệm giải trình thuật toán (algorithm accountability). Nguyên tắc: yêu cầu tuân thủ quyết định vùng triển khai, cách lưu trữ dữ liệu và mức độ giải thích được mà mô hình phải đạt.',
            links: [
              { label: 'AWS Compliance Programs', url: `${A}/compliance/programs/` },
              { label: 'AWS Artifact', url: `${D}/artifact/latest/ug/what-is-aws-artifact.html` },
            ],
          },
          {
            id: 'aws-governance-tools',
            title: 'Công cụ AWS phục vụ kiểm toán và tuân thủ',
            objective: 'Identify AWS services and features to assist with governance and compliance',
            overview:
              'AWS Artifact: tải báo cáo tuân thủ và chứng nhận của AWS (SOC, ISO, PCI). AWS Audit Manager: tự động thu thập bằng chứng và lập báo cáo kiểm toán theo khung chuẩn. AWS Config: đánh giá cấu hình tài nguyên có tuân thủ quy tắc hay không. CloudTrail: nhật ký kiểm toán mọi lời gọi API. AWS Trusted Advisor: khuyến nghị về bảo mật, chi phí và hiệu năng. Ghi nhớ cặp dễ nhầm: Artifact để LẤY báo cáo của AWS, Audit Manager để TẠO báo cáo cho hệ thống của bạn.',
            links: [
              { label: 'AWS Audit Manager', url: `${D}/audit-manager/latest/userguide/what-is.html` },
              { label: 'AWS Artifact', url: `${D}/artifact/latest/ug/what-is-aws-artifact.html` },
            ],
          },
        ],
      },
    ],
  },
];

/** Tra cứu nhanh theo id chủ đề. */
export const TOPIC_BY_ID: Record<string, StudyTopic> = {};
export const DOMAIN_OF_TOPIC: Record<string, DomainId> = {};
for (const d of DOMAINS) {
  // gắn bản tiếng Anh vào đúng phần thi / chủ đề
  const de = DOMAIN_EN[d.id];
  if (de) {
    d.titleEn = de.title;
    d.introEn = de.intro;
  }
  for (const g of d.groups) {
    for (const t of g.topics) {
      const te = TOPIC_EN[t.id];
      if (te) {
        t.titleEn = te.title;
        t.overviewEn = te.overview;
      }
      TOPIC_BY_ID[t.id] = t;
      DOMAIN_OF_TOPIC[t.id] = d.id;
    }
  }
}

export const DOMAIN_BY_ID: Record<string, StudyDomain> = Object.fromEntries(
  DOMAINS.map((d) => [d.id, d]),
);
