/**
 * Domain 2 — Fundamentals of Generative AI (24% đề thi).
 *
 * Quy ước nguồn giống questions-d1.mjs: q/o/e tiếng Anh, vq/vo/ve là bản dịch tiếng Việt.
 */

const DOC = 'https://docs.aws.amazon.com';
const AWS = 'https://aws.amazon.com';

export default [
  /* -------------------------------------------------------- gen-terms */
  {
    id: 39,
    topic: 'gen-terms',
    type: 'single',
    q: ['In the context of large language models, what is a token?'],
    vq: ['Trong bối cảnh mô hình ngôn ngữ lớn, token là gì?'],
    o: [
      ['The smallest unit of text a model processes, typically a word or part of a word', true],
      ['An authentication credential used to call the model API', false],
      ['A vector that stores the semantic meaning of a document', false],
      ['The random seed used to initialise model weights', false],
    ],
    vo: [
      'Đơn vị văn bản nhỏ nhất mà mô hình xử lý, thường là một từ hoặc một phần của từ',
      'Thông tin xác thực dùng để gọi API của mô hình',
      'Vector lưu ý nghĩa ngữ nghĩa của một tài liệu',
      'Giá trị seed ngẫu nhiên dùng để khởi tạo trọng số mô hình',
    ],
    e: [
      'Models break text into tokens before processing. Amazon Bedrock bills per input and output token, so token count drives cost directly.',
      'A vector storing meaning is an embedding, and an authentication credential is an access token in the security sense — a different concept entirely.',
    ],
    ve: [
      'Mô hình cắt văn bản thành token trước khi xử lý. Amazon Bedrock tính tiền theo token đầu vào và đầu ra, nên số token ảnh hưởng trực tiếp tới chi phí.',
      'Vector lưu ý nghĩa là embedding, còn thông tin xác thực là access token theo nghĩa bảo mật — hoàn toàn là khái niệm khác.',
    ],
  },
  {
    id: 40,
    topic: 'gen-terms',
    type: 'single',
    q: ['What is an embedding in a generative AI application?'],
    vq: ['Embedding trong ứng dụng generative AI là gì?'],
    o: [
      ['A numeric vector representation of content that preserves semantic meaning', true],
      ['A copy of the model weights stored inside the application', false],
      ['A compressed archive of the training dataset', false],
      ['The system prompt embedded in every request', false],
    ],
    vo: [
      'Biểu diễn vector số của nội dung, giữ được ý nghĩa ngữ nghĩa',
      'Bản sao trọng số mô hình lưu bên trong ứng dụng',
      'File nén của bộ dữ liệu huấn luyện',
      'Prompt hệ thống được nhúng vào mọi request',
    ],
    e: [
      'Embeddings map text or images into a vector space where semantically similar items sit close together. Similarity search over those vectors is what makes semantic search and RAG possible.',
      'Amazon Titan Text Embeddings and Cohere Embed on Bedrock generate them.',
    ],
    ve: [
      'Embedding ánh xạ văn bản hoặc ảnh vào một không gian vector, nơi những nội dung gần nghĩa nằm gần nhau. Tìm kiếm theo độ tương đồng trên các vector đó chính là thứ làm nên tìm kiếm ngữ nghĩa và RAG.',
      'Amazon Titan Text Embeddings và Cohere Embed trên Bedrock là các mô hình sinh embedding.',
    ],
    refs: [{ label: 'What are embeddings?', url: `${AWS}/what-is/embeddings-in-machine-learning/` }],
  },
  {
    id: 41,
    topic: 'gen-terms',
    type: 'single',
    q: ['Why is chunking used before storing documents in a vector database?'],
    vq: ['Vì sao phải chunking trước khi lưu tài liệu vào cơ sở dữ liệu vector?'],
    o: [
      ['Long documents are split into smaller passages so retrieval returns focused, relevant context that fits the model context window', true],
      ['It encrypts the documents before they leave the network', false],
      ['It converts documents from PDF to plain text automatically', false],
      ['It permanently removes duplicate documents from Amazon S3', false],
    ],
    vo: [
      'Tài liệu dài được cắt thành đoạn nhỏ để bước truy xuất trả về ngữ cảnh tập trung, liên quan và vừa cửa sổ ngữ cảnh của mô hình',
      'Nó mã hoá tài liệu trước khi rời khỏi mạng nội bộ',
      'Nó tự động chuyển tài liệu từ PDF sang văn bản thuần',
      'Nó xoá vĩnh viễn tài liệu trùng lặp khỏi Amazon S3',
    ],
    e: [
      'Embedding a whole 200-page manual as one vector loses detail and cannot fit the context window. Chunking keeps each vector focused on one idea, so retrieval is far more precise.',
      'Chunk size is a tuning decision: too small loses context, too large dilutes relevance.',
    ],
    ve: [
      'Nhúng cả cuốn cẩm nang 200 trang thành một vector sẽ mất chi tiết và không vừa cửa sổ ngữ cảnh. Chunking giữ cho mỗi vector tập trung vào một ý, nhờ đó truy xuất chính xác hơn nhiều.',
      'Kích thước chunk là một quyết định cần tinh chỉnh: quá nhỏ thì mất ngữ cảnh, quá lớn thì loãng độ liên quan.',
    ],
  },
  {
    id: 42,
    topic: 'gen-terms',
    type: 'single',
    q: ['Which architecture underpins most modern large language models?'],
    vq: ['Kiến trúc nào là nền tảng của phần lớn mô hình ngôn ngữ lớn hiện đại?'],
    o: [
      ['The transformer architecture with self-attention', true],
      ['The convolutional neural network architecture', false],
      ['The decision tree ensemble architecture', false],
      ['The k-means clustering architecture', false],
    ],
    vo: [
      'Kiến trúc transformer với cơ chế self-attention',
      'Kiến trúc mạng nơ-ron tích chập (CNN)',
      'Kiến trúc tập hợp cây quyết định',
      'Kiến trúc phân cụm k-means',
    ],
    e: [
      'Transformers use self-attention to weigh the relevance of every token against every other token, which is what lets LLMs handle long-range context.',
      'CNNs dominate classic image processing, while trees and k-means are traditional ML algorithms, not generative architectures.',
    ],
    ve: [
      'Transformer dùng self-attention để cân nhắc mức liên quan của mỗi token với mọi token khác — đó là thứ giúp LLM xử lý được ngữ cảnh dài.',
      'CNN thống trị xử lý ảnh truyền thống, còn cây quyết định và k-means là thuật toán ML cổ điển chứ không phải kiến trúc sinh nội dung.',
    ],
  },
  {
    id: 43,
    topic: 'gen-terms',
    type: 'single',
    q: ['A model accepts both an image and a text question and returns a written answer. What is this model called?'],
    vq: ['Một mô hình nhận cả ảnh lẫn câu hỏi bằng văn bản rồi trả lời bằng chữ. Mô hình này được gọi là gì?'],
    o: [
      ['A multimodal model', true],
      ['A unimodal model', false],
      ['A diffusion-only model', false],
      ['An embedding model', false],
    ],
    vo: ['Mô hình đa phương thức (multimodal)', 'Mô hình đơn phương thức', 'Mô hình chỉ dùng diffusion', 'Mô hình embedding'],
    e: [
      'Multimodal models accept or produce more than one data type — text plus images, audio, or video.',
      'Embedding models return vectors rather than generated content, and diffusion models specialise in image generation.',
    ],
    ve: [
      'Mô hình đa phương thức nhận hoặc sinh nhiều hơn một loại dữ liệu — văn bản kèm ảnh, âm thanh hoặc video.',
      'Mô hình embedding trả về vector chứ không sinh nội dung, còn mô hình diffusion chuyên về sinh ảnh.',
    ],
  },

  /* ------------------------------------------------- foundation-models */
  {
    id: 44,
    topic: 'foundation-models',
    type: 'single',
    q: ['What best describes a foundation model?'],
    vq: ['Mô tả nào đúng nhất về foundation model?'],
    o: [
      ['A large model pre-trained on broad data that can be adapted to many downstream tasks', true],
      ['A model trained from scratch for exactly one narrow task', false],
      ['A statistical rules engine that requires no data', false],
      ['A database index optimised for vector search', false],
    ],
    vo: [
      'Mô hình lớn được huấn luyện trước trên dữ liệu rộng và có thể thích ứng cho nhiều tác vụ hạ nguồn',
      'Mô hình huấn luyện từ đầu cho đúng một tác vụ hẹp',
      'Bộ máy quy tắc thống kê không cần dữ liệu',
      'Chỉ mục cơ sở dữ liệu tối ưu cho tìm kiếm vector',
    ],
    e: [
      'The value of a foundation model is exactly its generality: one expensive pre-training run produces a model that many teams adapt cheaply through prompting, RAG, or fine-tuning.',
      'A single-task model built from scratch is the opposite approach.',
    ],
    ve: [
      'Giá trị của foundation model nằm chính ở tính tổng quát: một lần pre-training tốn kém tạo ra mô hình mà nhiều đội có thể thích ứng rẻ tiền qua prompt, RAG hoặc fine-tuning.',
      'Mô hình một tác vụ dựng từ đầu là cách tiếp cận ngược lại.',
    ],
    refs: [{ label: 'What is a foundation model?', url: `${AWS}/what-is/foundation-models/` }],
  },
  {
    id: 45,
    topic: 'foundation-models',
    type: 'single',
    q: [
      'A user asks a foundation model about an event that happened last week and receives outdated information.',
      'What explains this behaviour?',
    ],
    vq: [
      'Một người dùng hỏi foundation model về sự kiện xảy ra tuần trước và nhận được thông tin lỗi thời.',
      'Điều gì giải thích cho hành vi này?',
    ],
    o: [
      ['The model has a knowledge cutoff and knows nothing after its training data ends', true],
      ['The temperature parameter was set too low', false],
      ['The model was deployed in the wrong AWS Region', false],
      ['The user did not enable multimodal input', false],
    ],
    vo: [
      'Mô hình có knowledge cutoff và không biết gì sau thời điểm dữ liệu huấn luyện kết thúc',
      'Tham số temperature bị đặt quá thấp',
      'Mô hình được triển khai sai AWS Region',
      'Người dùng chưa bật đầu vào đa phương thức',
    ],
    e: [
      'Training data is frozen at a point in time, so recent events are simply absent from the model. RAG or a tool that queries a live source is the standard fix.',
      'Temperature affects randomness, not factual freshness, and Region choice affects latency and compliance, not knowledge.',
    ],
    ve: [
      'Dữ liệu huấn luyện bị đóng băng tại một mốc thời gian, nên sự kiện gần đây đơn giản là không có trong mô hình. Cách khắc phục chuẩn là RAG hoặc một công cụ truy vấn nguồn dữ liệu trực tiếp.',
      'Temperature ảnh hưởng tới mức ngẫu nhiên chứ không phải độ mới của thông tin, còn chọn Region ảnh hưởng tới độ trễ và tuân thủ chứ không phải kiến thức.',
    ],
  },
  {
    id: 46,
    topic: 'foundation-models',
    type: 'match',
    q: ['Place each activity in the correct stage of the foundation model lifecycle.'],
    vq: ['Xếp mỗi hoạt động vào đúng giai đoạn trong vòng đời của foundation model.'],
    subs: [
      {
        p: 'Learning general language patterns from a very large unlabeled corpus',
        o: ['Evaluation', 'Pre-training', 'Deployment and monitoring', 'Fine-tuning'],
        a: 1,
      },
      {
        p: 'Adapting the model to a specific task using labeled prompt-response pairs',
        o: ['Evaluation', 'Pre-training', 'Deployment and monitoring', 'Fine-tuning'],
        a: 3,
      },
      {
        p: 'Scoring model output with benchmark datasets and human reviewers',
        o: ['Evaluation', 'Pre-training', 'Deployment and monitoring', 'Fine-tuning'],
        a: 0,
      },
      {
        p: 'Tracking latency, cost, and output quality once real users are served',
        o: ['Evaluation', 'Pre-training', 'Deployment and monitoring', 'Fine-tuning'],
        a: 2,
      },
    ],
    vsubs: [
      {
        p: 'Học quy luật ngôn ngữ tổng quát từ khối dữ liệu rất lớn chưa gán nhãn',
        o: ['Đánh giá', 'Pre-training', 'Triển khai và giám sát', 'Fine-tuning'],
      },
      {
        p: 'Thích ứng mô hình cho tác vụ cụ thể bằng cặp prompt-response đã gán nhãn',
        o: ['Đánh giá', 'Pre-training', 'Triển khai và giám sát', 'Fine-tuning'],
      },
      {
        p: 'Chấm điểm đầu ra bằng bộ dữ liệu chuẩn và người đánh giá',
        o: ['Đánh giá', 'Pre-training', 'Triển khai và giám sát', 'Fine-tuning'],
      },
      {
        p: 'Theo dõi độ trễ, chi phí và chất lượng đầu ra khi đã phục vụ người dùng thật',
        o: ['Đánh giá', 'Pre-training', 'Triển khai và giám sát', 'Fine-tuning'],
      },
    ],
    e: [
      'The lifecycle runs data selection → pre-training → fine-tuning and alignment → evaluation → deployment → monitoring and feedback.',
      'Only pre-training uses unlabeled data at massive scale; fine-tuning uses much smaller labeled datasets.',
    ],
    ve: [
      'Vòng đời chạy theo: chọn dữ liệu → pre-training → fine-tuning và căn chỉnh → đánh giá → triển khai → giám sát và phản hồi.',
      'Chỉ pre-training dùng dữ liệu không nhãn ở quy mô khổng lồ; fine-tuning dùng bộ dữ liệu có nhãn nhỏ hơn rất nhiều.',
    ],
  },
  {
    id: 47,
    topic: 'foundation-models',
    type: 'single',
    q: ['What does the context window of a large language model determine?'],
    vq: ['Cửa sổ ngữ cảnh (context window) của mô hình ngôn ngữ lớn quyết định điều gì?'],
    o: [
      ['How much text, measured in tokens, the model can consider in a single request', true],
      ['How many concurrent users the endpoint can serve', false],
      ['How long the model retains a conversation after the session ends', false],
      ['The maximum number of AWS Regions the model can run in', false],
    ],
    vo: [
      'Lượng văn bản, tính bằng token, mà mô hình xem xét được trong một lần gọi',
      'Số người dùng đồng thời mà endpoint phục vụ được',
      'Thời gian mô hình giữ lại cuộc hội thoại sau khi phiên kết thúc',
      'Số AWS Region tối đa mà mô hình chạy được',
    ],
    e: [
      'The context window caps prompt plus response length. Exceeding it means older content is dropped or the request is rejected.',
      'Larger windows allow richer RAG context but increase cost, since you pay per token.',
    ],
    ve: [
      'Cửa sổ ngữ cảnh giới hạn tổng độ dài prompt cộng phản hồi. Vượt quá thì nội dung cũ bị cắt bỏ hoặc request bị từ chối.',
      'Cửa sổ lớn hơn cho phép đưa nhiều ngữ cảnh RAG hơn nhưng làm tăng chi phí, vì bạn trả tiền theo token.',
    ],
  },

  /* ----------------------------------------------------- gen-usecases */
  {
    id: 48,
    topic: 'gen-usecases',
    type: 'single',
    q: [
      'A company wants to turn 40-page contracts into one-paragraph briefings for executives.',
      'Which generative AI use case does this describe?',
    ],
    vq: [
      'Một công ty muốn biến các hợp đồng 40 trang thành bản tóm tắt một đoạn cho ban lãnh đạo.',
      'Đây là trường hợp sử dụng generative AI nào?',
    ],
    o: [
      ['Summarisation', true],
      ['Anomaly detection', false],
      ['Time-series forecasting', false],
      ['Image classification', false],
    ],
    vo: ['Tóm tắt (summarisation)', 'Phát hiện bất thường', 'Dự báo chuỗi thời gian', 'Phân loại ảnh'],
    e: [
      'Condensing long text while preserving key meaning is a core generative task and is evaluated with ROUGE.',
      'The other options are classic ML tasks whose output is a score or a label, not new text.',
    ],
    ve: [
      'Cô đọng văn bản dài mà vẫn giữ ý chính là tác vụ sinh nội dung cốt lõi, và được đánh giá bằng ROUGE.',
      'Các phương án còn lại là tác vụ ML truyền thống với đầu ra là một điểm số hoặc một nhãn, không phải văn bản mới.',
    ],
  },
  {
    id: 49,
    topic: 'gen-usecases',
    type: 'multi',
    q: ['Which tasks are well suited to generative AI rather than traditional machine learning? (Choose TWO.)'],
    vq: ['Những tác vụ nào phù hợp với generative AI hơn là machine learning truyền thống? (Chọn HAI.)'],
    o: [
      ['Drafting personalised marketing emails from a product description', true],
      ['Writing and explaining source code from a natural-language request', true],
      ['Predicting the exact number of units that will sell next month', false],
      ['Assigning each transaction a numeric fraud risk score', false],
      ['Grouping customers into clusters by purchase behaviour', false],
    ],
    vo: [
      'Soạn email tiếp thị cá nhân hoá từ mô tả sản phẩm',
      'Viết và giải thích mã nguồn từ yêu cầu bằng ngôn ngữ tự nhiên',
      'Dự đoán chính xác số lượng sản phẩm sẽ bán tháng tới',
      'Gán cho mỗi giao dịch một điểm rủi ro gian lận dạng số',
      'Nhóm khách hàng thành các cụm theo hành vi mua sắm',
    ],
    e: [
      'Generative AI produces new content — text, code, images. Numeric prediction, scoring, and clustering are classic ML jobs where a purpose-built model is cheaper and more accurate.',
      'Choosing generative AI for a plain regression problem is a common wrong answer in the exam.',
    ],
    ve: [
      'Generative AI tạo ra nội dung mới — văn bản, mã nguồn, hình ảnh. Dự đoán số, chấm điểm và phân cụm là công việc của ML truyền thống, nơi mô hình chuyên dụng vừa rẻ hơn vừa chính xác hơn.',
      'Chọn generative AI cho một bài toán hồi quy thuần tuý là phương án sai rất hay gặp trong đề thi.',
    ],
  },
  {
    id: 50,
    topic: 'gen-usecases',
    type: 'single',
    q: ['A team needs a search experience that returns results matching the meaning of a question rather than exact keywords. Which capability enables this?'],
    vq: ['Một nhóm cần trải nghiệm tìm kiếm trả về kết quả khớp với ý nghĩa của câu hỏi thay vì khớp từ khoá chính xác. Năng lực nào giúp làm điều đó?'],
    o: [
      ['Semantic search using embeddings stored in a vector database', true],
      ['A relational database index on the text column', false],
      ['Regular expression matching over the documents', false],
      ['Increasing the temperature parameter of the model', false],
    ],
    vo: [
      'Tìm kiếm ngữ nghĩa dùng embedding lưu trong cơ sở dữ liệu vector',
      'Chỉ mục cơ sở dữ liệu quan hệ trên cột văn bản',
      'So khớp biểu thức chính quy trên các tài liệu',
      'Tăng tham số temperature của mô hình',
    ],
    e: [
      'Semantic search compares the embedding of the question to embeddings of stored passages, so "how do I reset my password" also matches a document titled "account recovery steps".',
      'Keyword indexes and regular expressions match characters, not meaning.',
    ],
    ve: [
      'Tìm kiếm ngữ nghĩa so sánh embedding của câu hỏi với embedding của các đoạn đã lưu, nên "làm sao đặt lại mật khẩu" vẫn khớp với tài liệu tiêu đề "các bước khôi phục tài khoản".',
      'Chỉ mục từ khoá và biểu thức chính quy chỉ so khớp ký tự chứ không so khớp ý nghĩa.',
    ],
  },
  {
    id: 51,
    topic: 'gen-usecases',
    type: 'single',
    q: ['Which scenario is the best fit for a diffusion model?'],
    vq: ['Tình huống nào phù hợp nhất với mô hình diffusion?'],
    o: [
      ['Generating product images from a written description', true],
      ['Forecasting warehouse stock levels for next quarter', false],
      ['Extracting entities from a legal contract', false],
      ['Ranking search results by keyword frequency', false],
    ],
    vo: [
      'Sinh ảnh sản phẩm từ mô tả bằng chữ',
      'Dự báo mức tồn kho quý tới',
      'Trích xuất thực thể từ hợp đồng pháp lý',
      'Xếp hạng kết quả tìm kiếm theo tần suất từ khoá',
    ],
    e: [
      'Diffusion models generate images by progressively removing noise, and they power text-to-image services such as Stability AI models and Amazon Nova Canvas on Bedrock.',
      'The remaining options are forecasting, NLP extraction, and ranking tasks.',
    ],
    ve: [
      'Mô hình diffusion sinh ảnh bằng cách khử nhiễu dần, và là công nghệ đứng sau các dịch vụ text-to-image như mô hình của Stability AI và Amazon Nova Canvas trên Bedrock.',
      'Các phương án còn lại là tác vụ dự báo, trích xuất NLP và xếp hạng.',
    ],
  },

  /* --------------------------------------------------- gen-advantages */
  {
    id: 52,
    topic: 'gen-advantages',
    type: 'multi',
    q: ['What are advantages of using a foundation model instead of training a custom model for every task? (Choose TWO.)'],
    vq: ['Đâu là ưu điểm của việc dùng foundation model thay vì huấn luyện mô hình riêng cho từng tác vụ? (Chọn HAI.)'],
    o: [
      ['A single model can be adapted to many tasks through prompting', true],
      ['Time to market is much shorter because no labeling or training run is required', true],
      ['Inference is always cheaper per request than a small specialised model', false],
      ['Outputs become fully deterministic and reproducible', false],
      ['It removes any need to evaluate model quality', false],
    ],
    vo: [
      'Một mô hình duy nhất có thể thích ứng cho nhiều tác vụ chỉ qua prompt',
      'Thời gian ra sản phẩm ngắn hơn nhiều vì không cần gán nhãn hay chạy huấn luyện',
      'Chi phí suy luận trên mỗi request luôn rẻ hơn mô hình nhỏ chuyên dụng',
      'Đầu ra trở nên hoàn toàn xác định và tái lập được',
      'Không còn cần đánh giá chất lượng mô hình nữa',
    ],
    e: [
      'Adaptability and speed are the headline advantages. A large FM often costs MORE per request than a small task-specific model, and its output stays probabilistic.',
      'Evaluation remains essential regardless of which approach is chosen.',
    ],
    ve: [
      'Khả năng thích ứng và tốc độ là hai ưu điểm nổi bật. Một FM lớn thường tốn NHIỀU tiền hơn trên mỗi request so với mô hình nhỏ chuyên dụng, và đầu ra vẫn mang tính xác suất.',
      'Việc đánh giá chất lượng vẫn là bắt buộc bất kể chọn cách tiếp cận nào.',
    ],
  },
  {
    id: 53,
    topic: 'gen-advantages',
    type: 'single',
    q: [
      'A small company has no machine learning engineers but wants to add an AI assistant to its website within two weeks.',
      'Which characteristic of generative AI on AWS makes this feasible?',
    ],
    vq: [
      'Một công ty nhỏ không có kỹ sư machine learning nhưng muốn thêm trợ lý AI vào website trong vòng hai tuần.',
      'Đặc điểm nào của generative AI trên AWS khiến việc này khả thi?',
    ],
    o: [
      ['Managed services expose pre-trained models through an API, so no model building or infrastructure management is needed', true],
      ['Foundation models must be trained from scratch, which is fast on AWS', false],
      ['Generative AI eliminates the need for any application code', false],
      ['AWS automatically writes the business requirements', false],
    ],
    vo: [
      'Dịch vụ được quản lý cung cấp mô hình huấn luyện sẵn qua API, nên không cần dựng mô hình hay quản lý hạ tầng',
      'Foundation model bắt buộc phải huấn luyện từ đầu, và việc đó rất nhanh trên AWS',
      'Generative AI loại bỏ hoàn toàn nhu cầu viết mã ứng dụng',
      'AWS tự động viết yêu cầu nghiệp vụ giúp bạn',
    ],
    e: [
      'Amazon Bedrock gives serverless API access to foundation models, so a small team ships an assistant without provisioning GPUs or training anything.',
      'Application code and clear requirements are still the responsibility of the team.',
    ],
    ve: [
      'Amazon Bedrock cho phép truy cập foundation model qua API kiểu serverless, nên một đội nhỏ đưa được trợ lý ra sản phẩm mà không phải cấp phát GPU hay huấn luyện gì cả.',
      'Mã ứng dụng và yêu cầu nghiệp vụ rõ ràng vẫn thuộc trách nhiệm của đội thực hiện.',
    ],
  },
  {
    id: 54,
    topic: 'gen-advantages',
    type: 'single',
    q: ['Which benefit best describes why generative AI lowers the barrier to entry for non-technical users?'],
    vq: ['Lợi ích nào mô tả đúng nhất việc generative AI hạ rào cản gia nhập cho người dùng không chuyên kỹ thuật?'],
    o: [
      ['Users interact with the system in natural language rather than through code or query syntax', true],
      ['It guarantees that every answer is factually correct', false],
      ['It removes the need for data governance entirely', false],
      ['It runs entirely on the user local machine at no cost', false],
    ],
    vo: [
      'Người dùng tương tác với hệ thống bằng ngôn ngữ tự nhiên thay vì bằng mã lệnh hay cú pháp truy vấn',
      'Nó bảo đảm mọi câu trả lời đều chính xác về mặt sự kiện',
      'Nó loại bỏ hoàn toàn nhu cầu quản trị dữ liệu',
      'Nó chạy hoàn toàn trên máy cá nhân và không tốn chi phí',
    ],
    e: [
      'The natural-language interface is the accessibility breakthrough — no SQL, no API syntax, no ML background required.',
      'Correctness is not guaranteed (hallucination remains), and governance becomes MORE important, not less.',
    ],
    ve: [
      'Giao diện ngôn ngữ tự nhiên chính là bước đột phá về khả năng tiếp cận — không cần SQL, không cần cú pháp API, không cần nền tảng ML.',
      'Tính đúng đắn không được bảo đảm (ảo giác vẫn còn), và quản trị dữ liệu càng trở nên QUAN TRỌNG hơn chứ không phải bớt đi.',
    ],
  },
  {
    id: 55,
    topic: 'gen-advantages',
    type: 'single',
    q: ['A team needs the same foundation model to summarise tickets, draft replies, and classify urgency. What property of foundation models makes this possible?'],
    vq: ['Một nhóm cần cùng một foundation model vừa tóm tắt ticket, vừa soạn thư trả lời, vừa phân loại mức độ khẩn. Đặc tính nào của foundation model cho phép điều đó?'],
    o: [
      ['Generality: one pre-trained model handles multiple tasks when given different prompts', true],
      ['Determinism: the model always returns identical output', false],
      ['Statelessness: the model stores no weights', false],
      ['Compression: the model shrinks the input data', false],
    ],
    vo: [
      'Tính tổng quát: một mô hình huấn luyện sẵn xử lý được nhiều tác vụ khi nhận các prompt khác nhau',
      'Tính xác định: mô hình luôn trả về đầu ra giống hệt nhau',
      'Tính phi trạng thái: mô hình không lưu trọng số nào',
      'Tính nén: mô hình làm nhỏ dữ liệu đầu vào',
    ],
    e: [
      'Generality is the defining property of a foundation model — it is why one deployment can serve many workflows.',
      'Foundation models are not deterministic by default and obviously do store weights.',
    ],
    ve: [
      'Tính tổng quát là đặc tính định nghĩa của foundation model — đó là lý do một lần triển khai phục vụ được nhiều quy trình.',
      'Foundation model mặc định không xác định, và tất nhiên vẫn lưu trọng số.',
    ],
  },

  /* -------------------------------------------------------- gen-limits */
  {
    id: 56,
    topic: 'gen-limits',
    type: 'single',
    q: [
      'A chatbot confidently cites a company policy clause that does not exist.',
      'What is this failure called?',
    ],
    vq: [
      'Một chatbot tự tin trích dẫn một điều khoản chính sách công ty vốn không tồn tại.',
      'Lỗi này được gọi là gì?',
    ],
    o: [
      ['Hallucination', true],
      ['Overfitting', false],
      ['Data drift', false],
      ['Prompt injection', false],
    ],
    vo: ['Ảo giác (hallucination)', 'Overfitting', 'Data drift', 'Prompt injection'],
    e: [
      'Hallucination is fabricated but plausible-sounding output. It is the most-tested limitation of generative AI.',
      'The standard mitigations are RAG grounding, citing sources, lowering temperature, guardrails, and human review for high-stakes answers.',
    ],
    ve: [
      'Ảo giác là đầu ra bịa đặt nhưng nghe rất hợp lý. Đây là hạn chế được hỏi nhiều nhất về generative AI.',
      'Các cách giảm thiểu chuẩn: neo mô hình bằng RAG, trích dẫn nguồn, hạ temperature, dùng guardrails và để con người xem xét với câu trả lời rủi ro cao.',
    ],
  },
  {
    id: 57,
    topic: 'gen-limits',
    type: 'single',
    q: ['Which approach most directly reduces hallucination in an enterprise question-answering application?'],
    vq: ['Cách tiếp cận nào giảm ảo giác trực tiếp nhất trong ứng dụng hỏi đáp doanh nghiệp?'],
    o: [
      ['Retrieval Augmented Generation that grounds answers in the company own documents', true],
      ['Increasing the temperature so the model explores more options', false],
      ['Raising the maximum token limit of the response', false],
      ['Deploying the model in more AWS Regions', false],
    ],
    vo: [
      'Retrieval Augmented Generation, neo câu trả lời vào chính tài liệu của công ty',
      'Tăng temperature để mô hình khám phá nhiều phương án hơn',
      'Nâng giới hạn token tối đa của phản hồi',
      'Triển khai mô hình ở nhiều AWS Region hơn',
    ],
    e: [
      'RAG supplies verified passages as context, so the model answers from real sources instead of from memory alone.',
      'Higher temperature increases randomness and therefore hallucination, and neither response length nor Region count affects factual accuracy.',
    ],
    ve: [
      'RAG cung cấp các đoạn tài liệu đã được kiểm chứng làm ngữ cảnh, nên mô hình trả lời dựa trên nguồn thật thay vì chỉ dựa vào trí nhớ.',
      'Temperature cao hơn làm tăng tính ngẫu nhiên và do đó tăng ảo giác; độ dài phản hồi hay số Region đều không ảnh hưởng tới độ chính xác sự kiện.',
    ],
    refs: [{ label: 'Bedrock Knowledge Bases', url: `${DOC}/bedrock/latest/userguide/knowledge-base.html` }],
  },
  {
    id: 58,
    topic: 'gen-limits',
    type: 'multi',
    q: ['Which are recognised limitations of generative AI systems? (Choose TWO.)'],
    vq: ['Đâu là những hạn chế đã được thừa nhận của hệ thống generative AI? (Chọn HAI.)'],
    o: [
      ['Output can be non-deterministic, so the same prompt may give different answers', true],
      ['The reasoning behind an answer is hard to inspect and explain', true],
      ['They cannot process text input at all', false],
      ['They always cite the exact source of every statement', false],
      ['They are immune to bias present in training data', false],
    ],
    vo: [
      'Đầu ra có thể không xác định, cùng một prompt vẫn ra câu trả lời khác nhau',
      'Rất khó soi xét và giải thích lập luận dẫn tới câu trả lời',
      'Chúng hoàn toàn không xử lý được đầu vào dạng văn bản',
      'Chúng luôn trích dẫn chính xác nguồn của mọi phát biểu',
      'Chúng miễn nhiễm với thiên lệch có trong dữ liệu huấn luyện',
    ],
    e: [
      'Non-determinism and opacity are inherent properties of large generative models.',
      'They do not cite sources unless the application adds RAG with citations, and they readily reproduce bias found in their training corpus.',
    ],
    ve: [
      'Tính không xác định và tính khó soi xét là đặc tính vốn có của mô hình sinh nội dung cỡ lớn.',
      'Chúng không trích dẫn nguồn trừ khi ứng dụng bổ sung RAG kèm trích dẫn, và chúng dễ dàng tái tạo thiên lệch có trong khối dữ liệu huấn luyện.',
    ],
  },
  {
    id: 59,
    topic: 'gen-limits',
    type: 'single',
    q: [
      'An employee pastes a customer list containing personal data into a public chatbot to draft an email.',
      'What is the primary risk?',
    ],
    vq: [
      'Một nhân viên dán danh sách khách hàng chứa dữ liệu cá nhân vào một chatbot công cộng để nhờ soạn email.',
      'Rủi ro chính ở đây là gì?',
    ],
    o: [
      ['Sensitive data leaves the organisation control and may be exposed or retained by a third party', true],
      ['The model will run more slowly because the prompt is long', false],
      ['The chatbot will refuse to answer any further questions', false],
      ['The organisation AWS bill will be reduced', false],
    ],
    vo: [
      'Dữ liệu nhạy cảm rời khỏi tầm kiểm soát của tổ chức và có thể bị lộ hoặc bị bên thứ ba lưu giữ',
      'Mô hình sẽ chạy chậm hơn vì prompt dài',
      'Chatbot sẽ từ chối trả lời mọi câu hỏi tiếp theo',
      'Hoá đơn AWS của tổ chức sẽ giảm xuống',
    ],
    e: [
      'Anything placed in a prompt leaves your boundary. Policy must forbid pasting PII or secrets into external tools; anonymise or tokenise first.',
      'On Amazon Bedrock, prompts and completions are not used to train the base models and traffic can stay on a private network through VPC endpoints.',
    ],
    ve: [
      'Bất cứ thứ gì đặt vào prompt đều rời khỏi ranh giới của bạn. Chính sách phải cấm dán PII hay bí mật vào công cụ bên ngoài; hãy ẩn danh hoặc token hoá trước.',
      'Trên Amazon Bedrock, prompt và phản hồi không được dùng để huấn luyện mô hình gốc, và lưu lượng có thể giữ trong mạng riêng qua VPC endpoint.',
    ],
  },
  {
    id: 60,
    topic: 'gen-limits',
    type: 'tf_table',
    q: ['Decide whether each statement about generative AI limitations is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về hạn chế của generative AI là đúng hay sai.'],
    subs: [
      { p: 'A model can produce fluent text that is factually wrong.', o: ['True', 'False'], a: 0 },
      { p: 'Lowering temperature to zero guarantees factual accuracy.', o: ['True', 'False'], a: 1 },
      { p: 'Generative models can reproduce bias present in their training data.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Mô hình có thể tạo ra văn bản trôi chảy nhưng sai sự thật.', o: ['Đúng', 'Sai'] },
      { p: 'Hạ temperature về 0 bảo đảm đầu ra chính xác về mặt sự kiện.', o: ['Đúng', 'Sai'] },
      { p: 'Mô hình sinh nội dung có thể tái tạo thiên lệch có trong dữ liệu huấn luyện.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Fluency and truth are independent properties — that is precisely what makes hallucination dangerous.',
      'Temperature 0 makes output more consistent, not more correct: the model will simply repeat the same wrong answer reliably.',
    ],
    ve: [
      'Sự trôi chảy và tính đúng đắn là hai thuộc tính độc lập — đó chính là điều khiến ảo giác trở nên nguy hiểm.',
      'Temperature bằng 0 làm đầu ra nhất quán hơn chứ không đúng hơn: mô hình sẽ lặp lại đúng câu trả lời sai đó một cách ổn định.',
    ],
  },
  {
    id: 61,
    topic: 'gen-limits',
    type: 'single',
    q: ['Which statement about the interpretability of large language models is accurate?'],
    vq: ['Phát biểu nào về khả năng diễn giải của mô hình ngôn ngữ lớn là chính xác?'],
    o: [
      ['They behave largely as black boxes, so tracing exactly why a specific answer was produced is difficult', true],
      ['Every generated token can be traced to a specific training document', false],
      ['They are as interpretable as a linear regression model', false],
      ['Interpretability is irrelevant in regulated industries', false],
    ],
    vo: [
      'Chúng hoạt động phần lớn như hộp đen, nên rất khó truy vết chính xác vì sao ra được một câu trả lời cụ thể',
      'Mỗi token sinh ra đều truy được về một tài liệu huấn luyện cụ thể',
      'Chúng dễ diễn giải ngang mô hình hồi quy tuyến tính',
      'Khả năng diễn giải không quan trọng trong các ngành bị quản lý chặt',
    ],
    e: [
      'Billions of parameters interacting make direct interpretation impractical, which is why transparency artefacts such as model cards and citation-based RAG matter.',
      'Regulated industries care about explainability more, not less.',
    ],
    ve: [
      'Hàng tỉ tham số tương tác với nhau khiến việc diễn giải trực tiếp là bất khả thi, đó là lý do các công cụ minh bạch như model card và RAG kèm trích dẫn trở nên quan trọng.',
      'Các ngành bị quản lý chặt càng quan tâm tới khả năng giải thích chứ không phải ít quan tâm hơn.',
    ],
  },

  /* ----------------------------------------------- gen-business-metrics */
  {
    id: 62,
    topic: 'gen-business-metrics',
    type: 'single',
    q: [
      'After launching a generative AI support assistant, a company wants to prove the project delivered value.',
      'Which metric best demonstrates business impact?',
    ],
    vq: [
      'Sau khi ra mắt trợ lý hỗ trợ dùng generative AI, một công ty muốn chứng minh dự án mang lại giá trị.',
      'Chỉ số nào thể hiện tác động nghiệp vụ rõ nhất?',
    ],
    o: [
      ['The percentage of customer requests resolved without human escalation', true],
      ['The number of parameters in the underlying model', false],
      ['The number of GPUs used during inference', false],
      ['The size of the training corpus in gigabytes', false],
    ],
    vo: [
      'Tỉ lệ yêu cầu của khách được giải quyết mà không phải chuyển cho người',
      'Số tham số của mô hình nền',
      'Số GPU dùng khi suy luận',
      'Kích thước khối dữ liệu huấn luyện tính bằng gigabyte',
    ],
    e: [
      'Business metrics measure outcomes: deflection rate, CSAT, average handling time, conversion, revenue, and ROI.',
      'Parameter counts, GPU counts, and corpus size are technical attributes that say nothing about delivered value.',
    ],
    ve: [
      'Chỉ số nghiệp vụ đo kết quả đầu ra: tỉ lệ tự xử lý, CSAT, thời gian xử lý trung bình, tỉ lệ chuyển đổi, doanh thu và ROI.',
      'Số tham số, số GPU và kích thước khối dữ liệu là thuộc tính kỹ thuật, không nói lên giá trị mang lại.',
    ],
  },
  {
    id: 63,
    topic: 'gen-business-metrics',
    type: 'multi',
    q: ['Which metrics are appropriate for evaluating the business success of a generative AI application? (Choose TWO.)'],
    vq: ['Những chỉ số nào phù hợp để đánh giá thành công về mặt nghiệp vụ của một ứng dụng generative AI? (Chọn HAI.)'],
    o: [
      ['Customer satisfaction score (CSAT)', true],
      ['Average cost per handled request compared to the previous process', true],
      ['Number of layers in the neural network', false],
      ['The exact tokenizer vocabulary size', false],
      ['The instance family used for hosting', false],
    ],
    vo: [
      'Điểm hài lòng của khách hàng (CSAT)',
      'Chi phí trung bình cho mỗi yêu cầu được xử lý so với quy trình trước đây',
      'Số lớp trong mạng nơ-ron',
      'Kích thước từ vựng của bộ tokenizer',
      'Dòng instance dùng để lưu trữ mô hình',
    ],
    e: [
      'CSAT and cost per request tie directly to outcomes the business cares about.',
      'Architecture details describe how the model is built, not whether the project succeeded.',
    ],
    ve: [
      'CSAT và chi phí trên mỗi yêu cầu gắn trực tiếp với kết quả mà doanh nghiệp quan tâm.',
      'Chi tiết kiến trúc mô tả mô hình được xây thế nào chứ không nói dự án có thành công hay không.',
    ],
  },
  {
    id: 64,
    topic: 'gen-business-metrics',
    type: 'single',
    q: ['What does cross-domain performance measure for a foundation model?'],
    vq: ['Cross-domain performance đo điều gì ở một foundation model?'],
    o: [
      ['How well the model performs across several different subject areas or tasks', true],
      ['How quickly the model replicates across AWS Regions', false],
      ['How many domain names the application can serve', false],
      ['How much the model costs per gigabyte of storage', false],
    ],
    vo: [
      'Mô hình làm tốt đến đâu trên nhiều lĩnh vực hoặc tác vụ khác nhau',
      'Mô hình sao chép qua các AWS Region nhanh đến đâu',
      'Ứng dụng phục vụ được bao nhiêu tên miền',
      'Mô hình tốn bao nhiêu tiền cho mỗi gigabyte lưu trữ',
    ],
    e: [
      'Cross-domain performance is a stated exam concept: it captures the generality of a model outside the domain it was primarily tuned for.',
      'A model strong only on one domain may be the wrong choice for a company with diverse workloads.',
    ],
    ve: [
      'Cross-domain performance là khái niệm được nêu rõ trong đề cương: nó đo tính tổng quát của mô hình bên ngoài lĩnh vực mà nó được tinh chỉnh chính.',
      'Mô hình chỉ mạnh ở một lĩnh vực có thể là lựa chọn sai với công ty có nhiều loại nghiệp vụ khác nhau.',
    ],
  },

  /* ---------------------------------------------------------- bedrock */
  {
    id: 65,
    topic: 'bedrock',
    type: 'single',
    q: ['What does Amazon Bedrock provide?'],
    vq: ['Amazon Bedrock cung cấp điều gì?'],
    o: [
      ['Serverless API access to foundation models from multiple providers, with no infrastructure to manage', true],
      ['A managed Kubernetes cluster for hosting containers', false],
      ['A relational database engine optimised for analytics', false],
      ['A data labeling workforce marketplace', false],
    ],
    vo: [
      'Truy cập foundation model của nhiều nhà cung cấp qua API kiểu serverless, không phải quản lý hạ tầng',
      'Cụm Kubernetes được quản lý để chạy container',
      'Bộ máy cơ sở dữ liệu quan hệ tối ưu cho phân tích',
      'Sàn cung cấp nhân lực gán nhãn dữ liệu',
    ],
    e: [
      'Bedrock is the flagship generative AI service: one API for models from Anthropic, Meta, Mistral, Cohere, Stability AI, Amazon, and others.',
      'Data-labeling workforces are SageMaker Ground Truth, and container orchestration is Amazon EKS or ECS.',
    ],
    ve: [
      'Bedrock là dịch vụ generative AI chủ lực: một API duy nhất cho mô hình của Anthropic, Meta, Mistral, Cohere, Stability AI, Amazon và nhiều bên khác.',
      'Nhân lực gán nhãn là SageMaker Ground Truth, còn điều phối container là Amazon EKS hoặc ECS.',
    ],
    refs: [{ label: 'Amazon Bedrock', url: `${DOC}/bedrock/latest/userguide/what-is-bedrock.html` }],
  },
  {
    id: 66,
    topic: 'bedrock',
    type: 'single',
    q: ['A company must block a chatbot from discussing competitor products and from returning profanity. Which Amazon Bedrock feature addresses this?'],
    vq: ['Một công ty phải chặn chatbot bàn về sản phẩm của đối thủ và chặn đầu ra chứa từ ngữ thô tục. Tính năng nào của Amazon Bedrock đáp ứng việc này?'],
    o: [
      ['Guardrails for Amazon Bedrock', true],
      ['Amazon Bedrock Knowledge Bases', false],
      ['Amazon Bedrock Model Evaluation', false],
      ['Provisioned throughput', false],
    ],
    vo: [
      'Guardrails for Amazon Bedrock',
      'Amazon Bedrock Knowledge Bases',
      'Amazon Bedrock Model Evaluation',
      'Provisioned throughput',
    ],
    e: [
      'Guardrails apply configurable content filters, denied topics, word filters, and sensitive-information redaction to both prompts and responses.',
      'Knowledge Bases implement RAG, Model Evaluation compares models, and provisioned throughput is a capacity purchase.',
    ],
    ve: [
      'Guardrails áp dụng bộ lọc nội dung cấu hình được, danh sách chủ đề bị cấm, bộ lọc từ ngữ và che thông tin nhạy cảm cho cả prompt lẫn phản hồi.',
      'Knowledge Bases hiện thực RAG, Model Evaluation so sánh mô hình, còn provisioned throughput là hình thức mua trước dung lượng.',
    ],
    refs: [{ label: 'Bedrock Guardrails', url: `${DOC}/bedrock/latest/userguide/guardrails.html` }],
  },
  {
    id: 67,
    topic: 'bedrock',
    type: 'single',
    q: ['A team wants their assistant to answer questions using internal PDF manuals stored in Amazon S3, with minimal engineering effort. Which Bedrock feature should they use?'],
    vq: ['Một nhóm muốn trợ lý của họ trả lời câu hỏi dựa trên các cẩm nang PDF nội bộ lưu trong Amazon S3, với công sức lập trình tối thiểu. Nên dùng tính năng nào của Bedrock?'],
    o: [
      ['Knowledge Bases for Amazon Bedrock', true],
      ['Guardrails for Amazon Bedrock', false],
      ['Provisioned throughput', false],
      ['Continued pre-training', false],
    ],
    vo: [
      'Knowledge Bases for Amazon Bedrock',
      'Guardrails for Amazon Bedrock',
      'Provisioned throughput',
      'Continued pre-training',
    ],
    e: [
      'Knowledge Bases manage the full RAG pipeline: ingesting documents from S3, chunking, generating embeddings, storing them in a vector store, and retrieving relevant passages at query time.',
      'Continued pre-training would be far more expensive and is unnecessary when the goal is to answer from documents.',
    ],
    ve: [
      'Knowledge Bases lo trọn luồng RAG: nạp tài liệu từ S3, chia chunk, sinh embedding, lưu vào kho vector và truy xuất đoạn liên quan lúc truy vấn.',
      'Continued pre-training sẽ tốn kém hơn rất nhiều và không cần thiết khi mục tiêu chỉ là trả lời dựa trên tài liệu.',
    ],
  },
  {
    id: 68,
    topic: 'bedrock',
    type: 'multi',
    q: ['Which statements about Amazon Bedrock are correct? (Choose TWO.)'],
    vq: ['Những phát biểu nào về Amazon Bedrock là đúng? (Chọn HAI.)'],
    o: [
      ['It offers models from several providers behind a single consistent API', true],
      ['Customer prompts and completions are not used to train the base foundation models', true],
      ['It requires customers to manage GPU instances themselves', false],
      ['It supports exactly one foundation model provider', false],
      ['It can only be accessed from on-premises networks', false],
    ],
    vo: [
      'Nó cung cấp mô hình của nhiều nhà cung cấp phía sau một API nhất quán',
      'Prompt và phản hồi của khách hàng không được dùng để huấn luyện các foundation model gốc',
      'Nó yêu cầu khách hàng tự quản lý các instance GPU',
      'Nó chỉ hỗ trợ đúng một nhà cung cấp foundation model',
      'Nó chỉ truy cập được từ mạng nội bộ tại chỗ',
    ],
    e: [
      'Provider choice behind one API and the data-privacy commitment are two defining points of Bedrock.',
      'Bedrock is serverless, so there are no GPU instances for the customer to manage.',
    ],
    ve: [
      'Việc chọn được nhiều nhà cung cấp sau một API duy nhất và cam kết về quyền riêng tư dữ liệu là hai điểm định danh của Bedrock.',
      'Bedrock hoạt động kiểu serverless nên khách hàng không phải quản lý instance GPU nào.',
    ],
  },
  {
    id: 69,
    topic: 'bedrock',
    type: 'single',
    q: ['Which Amazon Bedrock capability lets an application call external APIs and complete multi-step tasks on behalf of the user?'],
    vq: ['Năng lực nào của Amazon Bedrock cho phép ứng dụng gọi API bên ngoài và hoàn thành tác vụ nhiều bước thay cho người dùng?'],
    o: [
      ['Agents for Amazon Bedrock', true],
      ['Bedrock Model Evaluation', false],
      ['Bedrock Guardrails', false],
      ['Amazon Titan Text Embeddings', false],
    ],
    vo: [
      'Agents for Amazon Bedrock',
      'Bedrock Model Evaluation',
      'Bedrock Guardrails',
      'Amazon Titan Text Embeddings',
    ],
    e: [
      'Agents plan the steps, invoke action groups implemented as AWS Lambda functions, query knowledge bases, and assemble a final answer.',
      'Guardrails filter content, Model Evaluation benchmarks models, and Titan Text Embeddings produces vectors.',
    ],
    ve: [
      'Agents lập kế hoạch các bước, gọi các action group cài đặt bằng hàm AWS Lambda, truy vấn knowledge base rồi ghép lại thành câu trả lời cuối.',
      'Guardrails lọc nội dung, Model Evaluation đánh giá mô hình, còn Titan Text Embeddings sinh vector.',
    ],
    refs: [{ label: 'Agents for Amazon Bedrock', url: `${DOC}/bedrock/latest/userguide/agents.html` }],
  },
  {
    id: 70,
    topic: 'bedrock',
    type: 'single',
    q: ['A regulated bank must ensure that traffic between its application and Amazon Bedrock never traverses the public internet. What should be configured?'],
    vq: ['Một ngân hàng bị quản lý chặt phải bảo đảm lưu lượng giữa ứng dụng và Amazon Bedrock không bao giờ đi qua internet công cộng. Cần cấu hình gì?'],
    o: [
      ['A VPC interface endpoint powered by AWS PrivateLink', true],
      ['An internet gateway attached to the VPC', false],
      ['A public Application Load Balancer', false],
      ['A NAT gateway with an elastic IP', false],
    ],
    vo: [
      'VPC interface endpoint dùng AWS PrivateLink',
      'Internet gateway gắn vào VPC',
      'Application Load Balancer công khai',
      'NAT gateway kèm elastic IP',
    ],
    e: [
      'AWS PrivateLink creates a private interface endpoint inside your VPC, so calls to Bedrock stay on the AWS network.',
      'Internet gateways and NAT gateways do the opposite: they enable routing out to the public internet.',
    ],
    ve: [
      'AWS PrivateLink tạo interface endpoint riêng bên trong VPC của bạn, nhờ đó các lời gọi tới Bedrock nằm trọn trong mạng AWS.',
      'Internet gateway và NAT gateway làm điều ngược lại: chúng mở đường ra internet công cộng.',
    ],
    refs: [{ label: 'Bedrock và VPC endpoint', url: `${DOC}/bedrock/latest/userguide/usingVPC.html` }],
  },

  /* --------------------------------------------- genai-other-services */
  {
    id: 71,
    topic: 'genai-other-services',
    type: 'single',
    q: ['An organisation wants an AI assistant that answers employee questions using data from Amazon S3, SharePoint, and Salesforce. Which service is purpose-built for this?'],
    vq: ['Một tổ chức muốn có trợ lý AI trả lời câu hỏi của nhân viên dựa trên dữ liệu từ Amazon S3, SharePoint và Salesforce. Dịch vụ nào được xây riêng cho việc này?'],
    o: [
      ['Amazon Q Business', true],
      ['Amazon Polly', false],
      ['AWS Trainium', false],
      ['Amazon Macie', false],
    ],
    vo: ['Amazon Q Business', 'Amazon Polly', 'AWS Trainium', 'Amazon Macie'],
    e: [
      'Amazon Q Business is a fully managed generative AI assistant that connects to enterprise data sources with built-in connectors and respects existing permissions.',
      'Polly is text to speech, Trainium is training silicon, and Macie discovers sensitive data in S3.',
    ],
    ve: [
      'Amazon Q Business là trợ lý generative AI được quản lý hoàn toàn, kết nối tới các nguồn dữ liệu doanh nghiệp qua connector dựng sẵn và tôn trọng phân quyền hiện có.',
      'Polly là chuyển văn bản thành giọng nói, Trainium là chip huấn luyện, Macie phát hiện dữ liệu nhạy cảm trong S3.',
    ],
    refs: [{ label: 'Amazon Q Business', url: `${DOC}/amazonq/latest/qbusiness-ug/what-is.html` }],
  },
  {
    id: 72,
    topic: 'genai-other-services',
    type: 'single',
    q: [
      'A data science team needs full control over model hosting, wants to inspect and modify the model, and will deploy it on instances in their own account.',
      'Which option best fits?',
    ],
    vq: [
      'Một nhóm khoa học dữ liệu cần toàn quyền kiểm soát việc lưu trữ mô hình, muốn soi và chỉnh sửa mô hình, và sẽ triển khai trên instance trong tài khoản của họ.',
      'Lựa chọn nào phù hợp nhất?',
    ],
    o: [
      ['Amazon SageMaker JumpStart', true],
      ['PartyRock', false],
      ['Amazon Q Developer', false],
      ['Amazon Transcribe', false],
    ],
    vo: ['Amazon SageMaker JumpStart', 'PartyRock', 'Amazon Q Developer', 'Amazon Transcribe'],
    e: [
      'JumpStart deploys foundation models into your own SageMaker environment, giving control over instances, networking, and customisation.',
      'PartyRock is a no-code playground, Q Developer is a coding assistant, and Transcribe is a speech service.',
    ],
    ve: [
      'JumpStart triển khai foundation model vào chính môi trường SageMaker của bạn, cho phép kiểm soát instance, mạng và mức tuỳ biến.',
      'PartyRock là sân chơi không cần code, Q Developer là trợ lý viết mã, còn Transcribe là dịch vụ giọng nói.',
    ],
    refs: [{ label: 'SageMaker JumpStart', url: `${DOC}/sagemaker/latest/dg/studio-jumpstart.html` }],
  },
  {
    id: 73,
    topic: 'genai-other-services',
    type: 'single',
    q: ['A developer wants inline code suggestions and explanations inside their IDE. Which AWS service should they use?'],
    vq: ['Một lập trình viên muốn gợi ý và giải thích mã ngay trong IDE. Nên dùng dịch vụ AWS nào?'],
    o: [
      ['Amazon Q Developer', true],
      ['Amazon Q Business', false],
      ['Amazon Kendra', false],
      ['Amazon Bedrock Guardrails', false],
    ],
    vo: ['Amazon Q Developer', 'Amazon Q Business', 'Amazon Kendra', 'Amazon Bedrock Guardrails'],
    e: [
      'Amazon Q Developer is the coding assistant that integrates with IDEs to suggest, explain, and refactor code.',
      'Q Business targets enterprise knowledge questions rather than software development.',
    ],
    ve: [
      'Amazon Q Developer là trợ lý lập trình tích hợp với IDE để gợi ý, giải thích và tái cấu trúc mã.',
      'Q Business hướng tới câu hỏi tri thức doanh nghiệp chứ không phải công việc phát triển phần mềm.',
    ],
  },
  {
    id: 74,
    topic: 'genai-other-services',
    type: 'single',
    q: ['Which AWS offering lets someone experiment with building small generative AI apps without writing code or having an AWS account with provisioned resources?'],
    vq: ['Sản phẩm nào của AWS cho phép thử nghiệm xây các ứng dụng generative AI nhỏ mà không cần viết code hay cấp phát tài nguyên?'],
    o: [
      ['PartyRock', true],
      ['Amazon SageMaker Studio', false],
      ['AWS CloudFormation', false],
      ['Amazon EC2', false],
    ],
    vo: ['PartyRock', 'Amazon SageMaker Studio', 'AWS CloudFormation', 'Amazon EC2'],
    e: [
      'PartyRock is a playground built on Bedrock for learning and prototyping generative AI apps through a visual interface.',
      'SageMaker Studio is a full IDE for ML practitioners, while CloudFormation and EC2 are infrastructure services.',
    ],
    ve: [
      'PartyRock là sân chơi dựng trên Bedrock để học và làm nguyên mẫu ứng dụng generative AI qua giao diện trực quan.',
      'SageMaker Studio là IDE đầy đủ cho người làm ML, còn CloudFormation và EC2 là dịch vụ hạ tầng.',
    ],
  },

  /* ------------------------------------------------------ genai-infra */
  {
    id: 75,
    topic: 'genai-infra',
    type: 'single',
    q: ['Which AWS chip is purpose-built to reduce the cost of running inference for deep learning models at scale?'],
    vq: ['Chip nào của AWS được thiết kế riêng để giảm chi phí chạy suy luận cho mô hình deep learning ở quy mô lớn?'],
    o: [
      ['AWS Inferentia', true],
      ['AWS Trainium', false],
      ['AWS Graviton', false],
      ['AWS Outposts', false],
    ],
    vo: ['AWS Inferentia', 'AWS Trainium', 'AWS Graviton', 'AWS Outposts'],
    e: [
      'Inferentia targets inference and delivers a low cost per inference; Trainium targets training.',
      'Graviton is a general-purpose CPU family and Outposts brings AWS hardware on premises.',
    ],
    ve: [
      'Inferentia nhắm vào suy luận và cho chi phí thấp trên mỗi lần suy luận; Trainium nhắm vào huấn luyện.',
      'Graviton là dòng CPU đa dụng, còn Outposts đưa phần cứng AWS về hạ tầng tại chỗ.',
    ],
    refs: [{ label: 'AWS Inferentia', url: `${AWS}/ai/machine-learning/inferentia/` }],
  },
  {
    id: 76,
    topic: 'genai-infra',
    type: 'multi',
    q: ['What are benefits of building generative AI applications on AWS? (Choose TWO.)'],
    vq: ['Đâu là lợi ích của việc xây ứng dụng generative AI trên AWS? (Chọn HAI.)'],
    o: [
      ['Built-in security, compliance certifications, and identity controls', true],
      ['Elastic scaling without buying and operating GPU hardware', true],
      ['A guarantee that model output will never contain errors', false],
      ['Automatic elimination of all data governance obligations', false],
      ['Free unlimited inference for all foundation models', false],
    ],
    vo: [
      'Bảo mật, chứng nhận tuân thủ và kiểm soát danh tính có sẵn',
      'Mở rộng linh hoạt mà không phải mua và vận hành phần cứng GPU',
      'Bảo đảm đầu ra của mô hình không bao giờ có lỗi',
      'Tự động xoá bỏ mọi nghĩa vụ quản trị dữ liệu',
      'Suy luận miễn phí không giới hạn cho mọi foundation model',
    ],
    e: [
      'Security posture and elasticity are genuine platform benefits.',
      'No platform can guarantee correct model output, governance obligations remain with the customer under the shared responsibility model, and inference is billed.',
    ],
    ve: [
      'Nền tảng bảo mật và khả năng co giãn là lợi ích thật của nền tảng.',
      'Không nền tảng nào bảo đảm đầu ra mô hình luôn đúng, nghĩa vụ quản trị dữ liệu vẫn thuộc về khách hàng theo mô hình trách nhiệm chung, và suy luận thì có tính phí.',
    ],
  },

  /* ------------------------------------------------------- genai-cost */
  {
    id: 77,
    topic: 'genai-cost',
    type: 'single',
    q: [
      'A company runs a steady, high volume of Amazon Bedrock requests and needs predictable latency and throughput.',
      'Which pricing model should they evaluate?',
    ],
    vq: [
      'Một công ty chạy lượng request Amazon Bedrock lớn và ổn định, cần độ trễ và thông lượng dự đoán được.',
      'Họ nên cân nhắc mô hình giá nào?',
    ],
    o: [
      ['Provisioned throughput', true],
      ['On-demand token pricing', false],
      ['Spot Instances', false],
      ['Reserved Instances for Amazon EC2', false],
    ],
    vo: [
      'Provisioned throughput',
      'Tính tiền theo token on-demand',
      'Spot Instances',
      'Reserved Instances của Amazon EC2',
    ],
    e: [
      'Provisioned throughput buys dedicated model capacity for a committed term, giving consistent performance for steady high-volume workloads.',
      'On-demand suits variable or low traffic. Spot and Reserved Instances are EC2 pricing concepts and do not apply to Bedrock model invocation.',
    ],
    ve: [
      'Provisioned throughput mua dung lượng mô hình dành riêng theo kỳ hạn cam kết, cho hiệu năng ổn định với tải lớn và đều.',
      'On-demand hợp với tải thất thường hoặc thấp. Spot và Reserved Instances là khái niệm giá của EC2, không áp dụng cho việc gọi mô hình trên Bedrock.',
    ],
    refs: [{ label: 'Provisioned throughput', url: `${DOC}/bedrock/latest/userguide/prov-throughput.html` }],
  },
  {
    id: 78,
    topic: 'genai-cost',
    type: 'multi',
    q: ['Which actions reduce the cost of a generative AI application on Amazon Bedrock? (Choose TWO.)'],
    vq: ['Những hành động nào giúp giảm chi phí ứng dụng generative AI trên Amazon Bedrock? (Chọn HAI.)'],
    o: [
      ['Select the smallest model that still meets the quality requirement', true],
      ['Shorten prompts and cap the maximum response length', true],
      ['Always choose the largest available model for every request', false],
      ['Send each document in full rather than retrieving relevant chunks', false],
      ['Disable all logging and monitoring', false],
    ],
    vo: [
      'Chọn mô hình nhỏ nhất vẫn đạt yêu cầu chất lượng',
      'Rút gọn prompt và giới hạn độ dài phản hồi tối đa',
      'Luôn chọn mô hình lớn nhất hiện có cho mọi request',
      'Gửi nguyên cả tài liệu thay vì truy xuất các chunk liên quan',
      'Tắt toàn bộ nhật ký và giám sát',
    ],
    e: [
      'Bedrock charges per token, so model size, prompt length, and output length are the three levers that matter most.',
      'Sending whole documents inflates input tokens dramatically, and turning off logging saves almost nothing while destroying auditability.',
    ],
    ve: [
      'Bedrock tính tiền theo token, nên kích thước mô hình, độ dài prompt và độ dài đầu ra là ba đòn bẩy quan trọng nhất.',
      'Gửi nguyên cả tài liệu làm phình token đầu vào rất mạnh, còn tắt nhật ký gần như không tiết kiệm được gì mà lại phá huỷ khả năng kiểm toán.',
    ],
  },
];
