/**
 * Domain 1 — Fundamentals of AI and ML (20% đề thi).
 *
 * Quy ước nguồn: q/o/e là tiếng Anh (đề thi thật ra đề bằng tiếng Anh), vq/vo/ve là bản dịch
 * tiếng Việt tương ứng. Đáp án đúng viết lên đầu mảng `o` cho dễ soát; tools/build-data.mjs sẽ
 * xoay vòng theo id để vị trí đáp án đúng trải đều.
 */

const DOC = 'https://docs.aws.amazon.com';
const AWS = 'https://aws.amazon.com';

export default [
  /* ---------------------------------------------------------- ai-terms */
  {
    id: 1,
    topic: 'ai-terms',
    type: 'single',
    q: ['Which statement correctly describes the relationship between AI, machine learning, and deep learning?'],
    vq: ['Phát biểu nào mô tả đúng quan hệ giữa AI, machine learning và deep learning?'],
    o: [
      ['Deep learning is a subset of machine learning, which is a subset of artificial intelligence', true],
      ['Machine learning is a subset of deep learning, which is a subset of artificial intelligence', false],
      ['Artificial intelligence is a subset of machine learning', false],
      ['The three terms describe exactly the same technology', false],
    ],
    vo: [
      'Deep learning là tập con của machine learning, và machine learning là tập con của artificial intelligence',
      'Machine learning là tập con của deep learning, và deep learning là tập con của artificial intelligence',
      'Artificial intelligence là tập con của machine learning',
      'Ba thuật ngữ này mô tả cùng một công nghệ',
    ],
    e: [
      'The nesting is AI ⊃ ML ⊃ deep learning ⊃ generative AI. AI is the broadest goal (machines performing tasks that need human intelligence), ML learns rules from data, and deep learning is the subset of ML built on multi-layer neural networks.',
      'The other options invert or flatten that hierarchy.',
    ],
    ve: [
      'Quan hệ lồng nhau là AI ⊃ ML ⊃ deep learning ⊃ generative AI. AI là mục tiêu rộng nhất (máy làm được việc cần trí tuệ con người), ML học quy luật từ dữ liệu, còn deep learning là nhánh của ML dựng trên mạng nơ-ron nhiều lớp.',
      'Các phương án còn lại đảo ngược hoặc san phẳng thứ bậc đó.',
    ],
    refs: [{ label: 'What is artificial intelligence?', url: `${AWS}/what-is/artificial-intelligence/` }],
  },
  {
    id: 2,
    topic: 'ai-terms',
    type: 'single',
    q: [
      'A company has finished building a model and now sends new customer records to it to obtain predictions in production.',
      'What is this process called?',
    ],
    vq: [
      'Một công ty đã xây xong mô hình và giờ gửi các bản ghi khách hàng mới vào mô hình để lấy dự đoán trên môi trường production.',
      'Quá trình này gọi là gì?',
    ],
    o: [
      ['Inference', true],
      ['Training', false],
      ['Feature engineering', false],
      ['Data labeling', false],
    ],
    vo: ['Inference (suy luận)', 'Training (huấn luyện)', 'Feature engineering', 'Data labeling (gán nhãn dữ liệu)'],
    e: [
      'Inference is using an already-trained model to produce predictions on new, unseen data. Training is the earlier phase that builds the model by learning patterns from historical data.',
      'Feature engineering creates the input variables, and data labeling attaches the ground-truth answers — both happen before training.',
    ],
    ve: [
      'Inference là dùng mô hình đã huấn luyện xong để sinh dự đoán trên dữ liệu mới chưa từng thấy. Training là giai đoạn trước đó, tạo ra mô hình bằng cách học quy luật từ dữ liệu lịch sử.',
      'Feature engineering tạo ra các biến đầu vào, còn data labeling gắn đáp án đúng — cả hai đều diễn ra trước khi huấn luyện.',
    ],
  },
  {
    id: 3,
    topic: 'ai-terms',
    type: 'single',
    q: ['In machine learning, what is a "label"?'],
    vq: ['Trong machine learning, "label" (nhãn) là gì?'],
    o: [
      ['The target value the model is trained to predict', true],
      ['An individual input attribute used by the model', false],
      ['The name given to the deployed model endpoint', false],
      ['A tag applied to an AWS resource for cost tracking', false],
    ],
    vo: [
      'Giá trị mục tiêu mà mô hình được huấn luyện để dự đoán',
      'Một thuộc tính đầu vào riêng lẻ mà mô hình sử dụng',
      'Tên đặt cho endpoint của mô hình đã triển khai',
      'Thẻ gắn vào tài nguyên AWS để theo dõi chi phí',
    ],
    e: [
      'A label is the known answer in supervised learning — the column you are trying to predict. The input attributes are called features.',
      'Do not confuse ML labels with AWS resource tags, which are a billing and organisation concept.',
    ],
    ve: [
      'Label là đáp án đã biết trong học có giám sát — cột mà bạn muốn dự đoán. Các thuộc tính đầu vào được gọi là feature.',
      'Đừng nhầm label trong ML với tag của tài nguyên AWS, vốn là khái niệm phục vụ tính tiền và sắp xếp tài nguyên.',
    ],
  },
  {
    id: 4,
    topic: 'ai-terms',
    type: 'multi',
    q: ['Which of the following are characteristics of deep learning? (Choose TWO.)'],
    vq: ['Những đặc điểm nào sau đây thuộc về deep learning? (Chọn HAI.)'],
    o: [
      ['It uses neural networks with many hidden layers', true],
      ['It performs particularly well on unstructured data such as images, audio, and text', true],
      ['It always needs less training data than classic machine learning', false],
      ['It removes the need for any compute resources during training', false],
      ['It only works with structured tabular data', false],
    ],
    vo: [
      'Dùng mạng nơ-ron với nhiều lớp ẩn',
      'Hoạt động đặc biệt tốt với dữ liệu phi cấu trúc như ảnh, âm thanh, văn bản',
      'Luôn cần ít dữ liệu huấn luyện hơn machine learning truyền thống',
      'Loại bỏ hoàn toàn nhu cầu tài nguyên tính toán khi huấn luyện',
      'Chỉ hoạt động với dữ liệu bảng có cấu trúc',
    ],
    e: [
      'Deep learning stacks many layers of neurons, which lets it learn features automatically from raw unstructured input.',
      'It normally requires MORE data and MORE compute than classic ML, not less — that is the main tradeoff.',
    ],
    ve: [
      'Deep learning xếp chồng nhiều lớp nơ-ron, nhờ đó tự học được đặc trưng trực tiếp từ dữ liệu thô phi cấu trúc.',
      'Nó thường cần NHIỀU dữ liệu và NHIỀU tài nguyên tính toán hơn ML truyền thống chứ không phải ít hơn — đây chính là cái giá phải trả.',
    ],
  },

  /* ------------------------------------------------------ ai-datatypes */
  {
    id: 5,
    topic: 'ai-datatypes',
    type: 'single',
    q: ['A dataset contains scanned invoices, recorded support calls, and product photos. How is this data classified?'],
    vq: ['Một bộ dữ liệu chứa hoá đơn scan, bản ghi âm cuộc gọi hỗ trợ và ảnh sản phẩm. Dữ liệu này được phân loại thế nào?'],
    o: [
      ['Unstructured data', true],
      ['Structured data', false],
      ['Semi-structured data', false],
      ['Time-series data', false],
    ],
    vo: ['Dữ liệu phi cấu trúc', 'Dữ liệu có cấu trúc', 'Dữ liệu bán cấu trúc', 'Dữ liệu chuỗi thời gian'],
    e: [
      'Images, audio, video, and free-form documents have no predefined schema, so they are unstructured data.',
      'Structured data means rows and columns (databases, CSV); semi-structured means JSON or XML with tags but no fixed schema; time-series is measurements ordered by timestamp.',
    ],
    ve: [
      'Ảnh, âm thanh, video và tài liệu dạng tự do không có lược đồ định sẵn nên là dữ liệu phi cấu trúc.',
      'Dữ liệu có cấu trúc là dạng hàng–cột (cơ sở dữ liệu, CSV); bán cấu trúc là JSON hoặc XML có thẻ nhưng không cố định lược đồ; chuỗi thời gian là các phép đo sắp theo mốc thời gian.',
    ],
  },
  {
    id: 6,
    topic: 'ai-datatypes',
    type: 'single',
    q: [
      'A team wants to train a model that predicts whether a loan application will default.',
      'They have historical applications, but no record of which ones actually defaulted.',
      'What is the immediate problem?',
    ],
    vq: [
      'Một nhóm muốn huấn luyện mô hình dự đoán một hồ sơ vay có vỡ nợ hay không.',
      'Họ có dữ liệu hồ sơ trong quá khứ, nhưng không có thông tin hồ sơ nào thực sự đã vỡ nợ.',
      'Vấn đề trước mắt là gì?',
    ],
    o: [
      ['The data is unlabeled, so supervised learning cannot be used until labels are obtained', true],
      ['The data is structured, which supervised learning cannot process', false],
      ['The dataset needs to be converted to unstructured format first', false],
      ['Supervised learning never requires labels, so there is no problem', false],
    ],
    vo: [
      'Dữ liệu chưa có nhãn, nên chưa dùng được học có giám sát cho tới khi có nhãn',
      'Dữ liệu có cấu trúc, mà học có giám sát không xử lý được dạng này',
      'Bộ dữ liệu cần được chuyển sang định dạng phi cấu trúc trước',
      'Học có giám sát không bao giờ cần nhãn, nên không có vấn đề gì',
    ],
    e: [
      'Supervised learning needs the ground-truth outcome for each historical record. Without the default/no-default label, there is nothing for the model to learn from.',
      'The fix is to source or create labels — for example with Amazon SageMaker Ground Truth — or reframe the problem as unsupervised anomaly detection.',
    ],
    ve: [
      'Học có giám sát cần đáp án thực tế cho từng bản ghi lịch sử. Không có nhãn vỡ nợ / không vỡ nợ thì mô hình không có gì để học.',
      'Cách xử lý là đi tìm hoặc tạo nhãn — ví dụ dùng Amazon SageMaker Ground Truth — hoặc chuyển bài toán sang phát hiện bất thường không giám sát.',
    ],
    refs: [{ label: 'SageMaker Ground Truth', url: `${DOC}/sagemaker/latest/dg/sms.html` }],
  },
  {
    id: 7,
    topic: 'ai-datatypes',
    type: 'tf_table',
    q: ['Decide whether each statement about data used in machine learning is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về dữ liệu dùng trong machine learning là đúng hay sai.'],
    subs: [
      { p: 'JSON and XML documents are examples of semi-structured data.', o: ['True', 'False'], a: 0 },
      { p: 'Unsupervised learning requires every record to carry a label.', o: ['True', 'False'], a: 1 },
      { p: 'Time-series data is ordered by a timestamp and is used for forecasting.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Tài liệu JSON và XML là ví dụ của dữ liệu bán cấu trúc.', o: ['Đúng', 'Sai'] },
      { p: 'Học không giám sát đòi hỏi mọi bản ghi phải có nhãn.', o: ['Đúng', 'Sai'] },
      { p: 'Dữ liệu chuỗi thời gian được sắp theo mốc thời gian và dùng cho bài toán dự báo.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'JSON and XML carry tags and hierarchy but no rigid schema, which is the definition of semi-structured data.',
      'Unsupervised learning works precisely on unlabeled data — that is its defining property.',
    ],
    ve: [
      'JSON và XML có thẻ và cấu trúc phân cấp nhưng không theo lược đồ cứng — đúng định nghĩa dữ liệu bán cấu trúc.',
      'Học không giám sát làm việc chính xác trên dữ liệu KHÔNG có nhãn — đó là đặc điểm định nghĩa của nó.',
    ],
  },

  /* --------------------------------------------------------- ml-types */
  {
    id: 8,
    topic: 'ml-types',
    type: 'single',
    q: [
      'A retailer wants to group its customers into segments for a marketing campaign.',
      'The team does not know in advance how many segments exist or what they look like.',
      'Which type of machine learning fits best?',
    ],
    vq: [
      'Một nhà bán lẻ muốn nhóm khách hàng thành các phân khúc cho chiến dịch tiếp thị.',
      'Nhóm thực hiện không biết trước có bao nhiêu phân khúc hay chúng trông như thế nào.',
      'Loại machine learning nào phù hợp nhất?',
    ],
    o: [
      ['Unsupervised learning (clustering)', true],
      ['Supervised learning (classification)', false],
      ['Supervised learning (regression)', false],
      ['Reinforcement learning', false],
    ],
    vo: [
      'Học không giám sát (clustering)',
      'Học có giám sát (classification)',
      'Học có giám sát (regression)',
      'Học tăng cường',
    ],
    e: [
      'The groups are unknown up front and there are no labels, which is exactly what clustering solves.',
      'Classification would require predefined segment labels for every customer, and regression predicts a continuous number rather than a group.',
    ],
    ve: [
      'Các nhóm chưa biết trước và không có nhãn — đây đúng là bài toán clustering giải quyết.',
      'Classification sẽ đòi hỏi nhãn phân khúc định sẵn cho từng khách hàng, còn regression dự đoán một con số liên tục chứ không phải một nhóm.',
    ],
  },
  {
    id: 9,
    topic: 'ml-types',
    type: 'single',
    q: ['A model is trained to predict tomorrow’s electricity demand in megawatts. Which ML problem type is this?'],
    vq: ['Một mô hình được huấn luyện để dự đoán nhu cầu điện ngày mai tính bằng megawatt. Đây là dạng bài toán ML nào?'],
    o: [
      ['Regression', true],
      ['Binary classification', false],
      ['Multiclass classification', false],
      ['Clustering', false],
    ],
    vo: ['Regression (hồi quy)', 'Phân loại nhị phân', 'Phân loại nhiều lớp', 'Clustering (phân cụm)'],
    e: [
      'The output is a continuous numeric value, which is the definition of a regression problem.',
      'Classification would produce a category (for example "high demand" or "low demand"), not a precise number.',
    ],
    ve: [
      'Đầu ra là một giá trị số liên tục — đúng định nghĩa của bài toán hồi quy.',
      'Phân loại sẽ cho ra một hạng mục (ví dụ "nhu cầu cao" hoặc "nhu cầu thấp") chứ không phải một con số cụ thể.',
    ],
  },
  {
    id: 10,
    topic: 'ml-types',
    type: 'single',
    q: [
      'A robotics team trains an agent that receives a positive score for reaching a target and a negative score for collisions.',
      'The agent improves through repeated trials.',
      'Which learning approach is being used?',
    ],
    vq: [
      'Một nhóm robot huấn luyện tác tử nhận điểm cộng khi tới được đích và điểm trừ khi va chạm.',
      'Tác tử cải thiện dần qua nhiều lần thử.',
      'Đây là phương pháp học nào?',
    ],
    o: [
      ['Reinforcement learning', true],
      ['Supervised learning', false],
      ['Unsupervised learning', false],
      ['Transfer learning', false],
    ],
    vo: ['Học tăng cường', 'Học có giám sát', 'Học không giám sát', 'Transfer learning'],
    e: [
      'A reward signal shaping behaviour through trial and error is the signature of reinforcement learning.',
      'There are no labeled examples here, and transfer learning is about reusing a pre-trained model, not about rewards.',
    ],
    ve: [
      'Tín hiệu phần thưởng định hình hành vi qua thử–sai chính là dấu hiệu của học tăng cường.',
      'Ở đây không có mẫu gán nhãn nào, còn transfer learning là tái sử dụng mô hình đã huấn luyện chứ không liên quan tới phần thưởng.',
    ],
  },
  {
    id: 11,
    topic: 'ml-types',
    type: 'match',
    q: ['Match each scenario with the machine learning approach it requires.'],
    vq: ['Ghép mỗi tình huống với phương pháp machine learning tương ứng.'],
    subs: [
      {
        p: 'Predicting whether an email is spam, using thousands of emails already marked spam or not spam',
        o: ['Supervised learning', 'Reinforcement learning', 'Unsupervised learning'],
        a: 0,
      },
      {
        p: 'Finding unusual network traffic patterns without any examples of known attacks',
        o: ['Supervised learning', 'Reinforcement learning', 'Unsupervised learning'],
        a: 2,
      },
      {
        p: 'Teaching a warehouse robot the most efficient route through trial, error, and rewards',
        o: ['Supervised learning', 'Reinforcement learning', 'Unsupervised learning'],
        a: 1,
      },
    ],
    vsubs: [
      {
        p: 'Dự đoán một email có phải thư rác không, dựa trên hàng nghìn email đã được đánh dấu là rác hoặc không rác',
        o: ['Học có giám sát', 'Học tăng cường', 'Học không giám sát'],
      },
      {
        p: 'Tìm các mẫu lưu lượng mạng bất thường mà không có ví dụ nào về tấn công đã biết',
        o: ['Học có giám sát', 'Học tăng cường', 'Học không giám sát'],
      },
      {
        p: 'Dạy robot kho hàng tuyến đường hiệu quả nhất qua thử–sai và phần thưởng',
        o: ['Học có giám sát', 'Học tăng cường', 'Học không giám sát'],
      },
    ],
    e: [
      'Existing spam labels make this supervised. No labeled attacks means anomaly detection, which is unsupervised. A reward-driven trial loop is reinforcement learning.',
    ],
    ve: [
      'Đã có nhãn thư rác nên đây là học có giám sát. Không có nhãn tấn công nào nghĩa là phát hiện bất thường, thuộc học không giám sát. Vòng lặp thử–sai theo phần thưởng là học tăng cường.',
    ],
  },

  /* ---------------------------------------------------------- ai-when */
  {
    id: 12,
    topic: 'ai-when',
    type: 'single',
    q: [
      'A finance team must calculate employee overtime pay. The rules are written in the labour contract, are fixed, and must be applied exactly.',
      'What is the most appropriate solution?',
    ],
    vq: [
      'Một bộ phận tài chính phải tính tiền làm thêm giờ cho nhân viên. Quy tắc đã ghi trong hợp đồng lao động, cố định và phải áp dụng chính xác.',
      'Giải pháp phù hợp nhất là gì?',
    ],
    o: [
      ['Implement deterministic business rules in code instead of a machine learning model', true],
      ['Train a regression model on historical payroll data', false],
      ['Fine-tune a large language model on the labour contract', false],
      ['Use a clustering algorithm to group employees by overtime', false],
    ],
    vo: [
      'Cài đặt quy tắc nghiệp vụ xác định bằng mã nguồn thay vì dùng mô hình machine learning',
      'Huấn luyện mô hình hồi quy trên dữ liệu bảng lương lịch sử',
      'Fine-tune một mô hình ngôn ngữ lớn trên hợp đồng lao động',
      'Dùng thuật toán phân cụm để nhóm nhân viên theo giờ làm thêm',
    ],
    e: [
      'When rules are known, fixed, and must produce an exact answer, ordinary code is cheaper, faster, fully explainable, and always correct.',
      'ML output is probabilistic and would introduce errors into a calculation that has one right answer. Recognising when NOT to use AI is an explicit exam objective.',
    ],
    ve: [
      'Khi quy tắc đã biết, cố định và phải cho ra kết quả chính xác thì mã nguồn thông thường rẻ hơn, nhanh hơn, giải thích được hoàn toàn và luôn đúng.',
      'Đầu ra của ML mang tính xác suất, sẽ đưa sai số vào một phép tính vốn chỉ có một đáp án đúng. Nhận ra khi nào KHÔNG nên dùng AI là một mục tiêu được nêu rõ trong đề cương.',
    ],
  },
  {
    id: 13,
    topic: 'ai-when',
    type: 'multi',
    q: ['In which situations is a machine learning solution a good fit? (Choose TWO.)'],
    vq: ['Trong những tình huống nào thì giải pháp machine learning là lựa chọn phù hợp? (Chọn HAI.)'],
    o: [
      ['Detecting objects in millions of product photographs', true],
      ['Predicting next quarter sales from years of historical transactions', true],
      ['Calculating value-added tax at a fixed statutory rate', false],
      ['Deciding user access based on a fixed role permission matrix', false],
      ['Converting a currency amount using a published exchange rate', false],
    ],
    vo: [
      'Phát hiện vật thể trong hàng triệu ảnh sản phẩm',
      'Dự đoán doanh số quý tới từ nhiều năm dữ liệu giao dịch lịch sử',
      'Tính thuế giá trị gia tăng theo mức luật định cố định',
      'Quyết định quyền truy cập của người dùng dựa trên ma trận phân quyền cố định',
      'Quy đổi số tiền theo tỉ giá đã công bố',
    ],
    e: [
      'ML earns its cost when patterns are too complex to hand-code and when unstructured data must be processed at scale.',
      'Fixed statutory rates, permission matrices, and published exchange rates are deterministic lookups — plain code is the right tool.',
    ],
    ve: [
      'ML xứng đáng với chi phí khi quy luật quá phức tạp để viết tay và khi phải xử lý dữ liệu phi cấu trúc ở quy mô lớn.',
      'Mức thuế luật định, ma trận phân quyền và tỉ giá công bố đều là tra cứu xác định — mã nguồn thông thường mới là công cụ đúng.',
    ],
  },
  {
    id: 14,
    topic: 'ai-when',
    type: 'single',
    q: [
      'A startup wants to launch an AI feature but has only 40 labeled examples and no budget for data collection.',
      'Which consideration should carry the most weight in the decision?',
    ],
    vq: [
      'Một startup muốn ra mắt tính năng AI nhưng chỉ có 40 mẫu đã gán nhãn và không có ngân sách thu thập dữ liệu.',
      'Yếu tố nào nên được cân nhắc nặng nhất khi ra quyết định?',
    ],
    o: [
      ['Insufficient training data will likely make a custom model unreliable, so a pre-trained managed service should be evaluated first', true],
      ['The number of examples is irrelevant because algorithms compensate automatically', false],
      ['They should train a deep neural network because it needs less data', false],
      ['They should skip evaluation and deploy directly to production', false],
    ],
    vo: [
      'Dữ liệu huấn luyện quá ít sẽ khiến mô hình tự huấn luyện thiếu tin cậy, nên cân nhắc trước tiên một dịch vụ được quản lý đã huấn luyện sẵn',
      'Số lượng mẫu không quan trọng vì thuật toán tự bù đắp được',
      'Họ nên huấn luyện mạng nơ-ron sâu vì loại này cần ít dữ liệu hơn',
      'Họ nên bỏ qua bước đánh giá và triển khai thẳng lên production',
    ],
    e: [
      'Data quantity and quality cap what any model can achieve. With 40 examples, a pre-trained managed service such as Amazon Comprehend or Amazon Rekognition — or a foundation model with few-shot prompting — is far more realistic.',
      'Deep networks need more data, not less.',
    ],
    ve: [
      'Số lượng và chất lượng dữ liệu chặn trần khả năng của mọi mô hình. Với 40 mẫu, dùng dịch vụ được quản lý đã huấn luyện sẵn như Amazon Comprehend hay Amazon Rekognition — hoặc một foundation model với prompt few-shot — thực tế hơn nhiều.',
      'Mạng nơ-ron sâu cần NHIỀU dữ liệu hơn chứ không phải ít hơn.',
    ],
  },

  /* --------------------------------------------- ml-technique-select */
  {
    id: 15,
    topic: 'ml-technique-select',
    type: 'single',
    q: ['An online store wants to show each shopper products similar to what they and comparable shoppers have bought. Which AWS service is purpose-built for this?'],
    vq: ['Một cửa hàng trực tuyến muốn hiển thị cho mỗi khách các sản phẩm tương tự thứ họ và những khách tương đồng đã mua. Dịch vụ AWS nào được thiết kế riêng cho việc này?'],
    o: [
      ['Amazon Personalize', true],
      ['Amazon Comprehend', false],
      ['Amazon Textract', false],
      ['Amazon Polly', false],
    ],
    vo: ['Amazon Personalize', 'Amazon Comprehend', 'Amazon Textract', 'Amazon Polly'],
    e: [
      'Amazon Personalize builds real-time recommendation systems from user interaction data, using the same technology as amazon.com.',
      'Comprehend analyses text, Textract extracts data from documents, and Polly turns text into speech.',
    ],
    ve: [
      'Amazon Personalize dựng hệ thống gợi ý theo thời gian thực từ dữ liệu tương tác của người dùng, dùng cùng công nghệ với amazon.com.',
      'Comprehend phân tích văn bản, Textract trích xuất dữ liệu từ tài liệu, còn Polly chuyển văn bản thành giọng nói.',
    ],
    refs: [{ label: 'Amazon Personalize', url: `${DOC}/personalize/latest/dg/what-is-personalize.html` }],
  },
  {
    id: 16,
    topic: 'ml-technique-select',
    type: 'single',
    q: ['A manufacturer wants to flag sensor readings that deviate sharply from normal machine behaviour, without a labeled history of failures. Which technique applies?'],
    vq: ['Một nhà sản xuất muốn đánh dấu các số đo cảm biến lệch mạnh khỏi hành vi bình thường của máy, mà không có lịch sử hỏng hóc đã gán nhãn. Kỹ thuật nào phù hợp?'],
    o: [
      ['Anomaly detection', true],
      ['Multiclass classification', false],
      ['Machine translation', false],
      ['Named entity recognition', false],
    ],
    vo: ['Phát hiện bất thường (anomaly detection)', 'Phân loại nhiều lớp', 'Dịch máy', 'Nhận dạng thực thể có tên'],
    e: [
      'Anomaly detection learns what "normal" looks like and flags deviations, which is exactly what is needed when failure labels do not exist.',
      'Classification would require labeled failure examples, and the other two options are NLP tasks.',
    ],
    ve: [
      'Phát hiện bất thường học xem thế nào là "bình thường" rồi đánh dấu các sai lệch — đúng thứ cần khi chưa có nhãn hỏng hóc.',
      'Phân loại sẽ đòi hỏi mẫu hỏng hóc đã gán nhãn, còn hai phương án kia là tác vụ NLP.',
    ],
  },
  {
    id: 17,
    topic: 'ml-technique-select',
    type: 'single',
    q: ['A hospital wants to predict the number of beds that will be occupied next week based on ten years of daily admission records. Which technique is most appropriate?'],
    vq: ['Một bệnh viện muốn dự đoán số giường sẽ có bệnh nhân trong tuần tới dựa trên mười năm dữ liệu nhập viện theo ngày. Kỹ thuật nào phù hợp nhất?'],
    o: [
      ['Time-series forecasting', true],
      ['Image classification', false],
      ['Sentiment analysis', false],
      ['Topic modeling', false],
    ],
    vo: ['Dự báo chuỗi thời gian', 'Phân loại ảnh', 'Phân tích cảm xúc', 'Mô hình hoá chủ đề'],
    e: [
      'The input is a sequence of values ordered by date and the output is a future value, which is the definition of forecasting.',
      'The other options address images or text, not temporal numeric sequences.',
    ],
    ve: [
      'Đầu vào là chuỗi giá trị sắp theo ngày và đầu ra là giá trị tương lai — đúng định nghĩa của bài toán dự báo.',
      'Các phương án còn lại xử lý ảnh hoặc văn bản, không phải chuỗi số theo thời gian.',
    ],
  },
  {
    id: 18,
    topic: 'ml-technique-select',
    type: 'single',
    q: ['A bank must decide whether each incoming card transaction is fraudulent in real time. Which AWS service is designed specifically for this use case?'],
    vq: ['Một ngân hàng phải quyết định từng giao dịch thẻ đến có phải gian lận hay không theo thời gian thực. Dịch vụ AWS nào được thiết kế riêng cho tình huống này?'],
    o: [
      ['Amazon Fraud Detector', true],
      ['Amazon Kendra', false],
      ['Amazon Transcribe', false],
      ['Amazon Translate', false],
    ],
    vo: ['Amazon Fraud Detector', 'Amazon Kendra', 'Amazon Transcribe', 'Amazon Translate'],
    e: [
      'Amazon Fraud Detector is a managed service purpose-built for online fraud detection, using models trained on your historical fraud data plus Amazon expertise.',
      'Kendra is enterprise search, Transcribe is speech to text, and Translate is machine translation.',
    ],
    ve: [
      'Amazon Fraud Detector là dịch vụ được quản lý, xây riêng cho phát hiện gian lận trực tuyến, dùng mô hình huấn luyện trên dữ liệu gian lận lịch sử của bạn cộng với kinh nghiệm của Amazon.',
      'Kendra là tìm kiếm doanh nghiệp, Transcribe là chuyển giọng nói thành văn bản, Translate là dịch máy.',
    ],
    refs: [{ label: 'Amazon Fraud Detector', url: `${DOC}/frauddetector/latest/ug/what-is-frauddetector.html` }],
  },

  /* --------------------------------------------------- aws-ai-services */
  {
    id: 19,
    topic: 'aws-ai-services',
    type: 'single',
    q: ['A company needs to extract text, tables, and key-value pairs from scanned PDF invoices. Which service should be used?'],
    vq: ['Một công ty cần trích xuất chữ, bảng và cặp key-value từ các hoá đơn PDF được scan. Nên dùng dịch vụ nào?'],
    o: [
      ['Amazon Textract', true],
      ['Amazon Rekognition', false],
      ['Amazon Comprehend', false],
      ['Amazon Polly', false],
    ],
    vo: ['Amazon Textract', 'Amazon Rekognition', 'Amazon Comprehend', 'Amazon Polly'],
    e: [
      'Amazon Textract goes beyond simple OCR: it understands document structure and returns forms, tables, and key-value pairs.',
      'Rekognition analyses images and video for objects and faces; Comprehend analyses text that has already been extracted; Polly is text to speech.',
    ],
    ve: [
      'Amazon Textract vượt xa OCR đơn thuần: nó hiểu cấu trúc tài liệu và trả về biểu mẫu, bảng và cặp key-value.',
      'Rekognition phân tích ảnh và video để nhận vật thể, khuôn mặt; Comprehend phân tích văn bản đã được trích xuất; Polly là chuyển văn bản thành giọng nói.',
    ],
    refs: [{ label: 'Amazon Textract', url: `${DOC}/textract/latest/dg/what-is.html` }],
  },
  {
    id: 20,
    topic: 'aws-ai-services',
    type: 'single',
    q: ['A support team wants to automatically detect whether customer feedback messages are positive, negative, neutral, or mixed. Which service is the best fit?'],
    vq: ['Một đội hỗ trợ muốn tự động nhận biết phản hồi của khách hàng là tích cực, tiêu cực, trung tính hay lẫn lộn. Dịch vụ nào phù hợp nhất?'],
    o: [
      ['Amazon Comprehend', true],
      ['Amazon Lex', false],
      ['Amazon Textract', false],
      ['Amazon Personalize', false],
    ],
    vo: ['Amazon Comprehend', 'Amazon Lex', 'Amazon Textract', 'Amazon Personalize'],
    e: [
      'Sentiment analysis is a core Amazon Comprehend capability, alongside entity recognition, key phrase extraction, language detection, and PII detection.',
      'Lex builds conversational bots, Textract reads documents, and Personalize makes recommendations.',
    ],
    ve: [
      'Phân tích cảm xúc là năng lực cốt lõi của Amazon Comprehend, cùng với nhận dạng thực thể, trích xuất cụm từ khoá, phát hiện ngôn ngữ và phát hiện PII.',
      'Lex dựng bot hội thoại, Textract đọc tài liệu, Personalize đưa ra gợi ý.',
    ],
    refs: [{ label: 'Amazon Comprehend', url: `${DOC}/comprehend/latest/dg/what-is.html` }],
  },
  {
    id: 21,
    topic: 'aws-ai-services',
    type: 'match',
    q: ['Match each requirement with the AWS AI service that satisfies it.'],
    vq: ['Ghép mỗi yêu cầu với dịch vụ AI của AWS đáp ứng được yêu cầu đó.'],
    subs: [
      {
        p: 'Convert recorded call-centre audio into written transcripts',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
        a: 1,
      },
      {
        p: 'Give a mobile app a natural-sounding spoken voice',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
        a: 3,
      },
      {
        p: 'Detect inappropriate content in user-uploaded images',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
        a: 0,
      },
      {
        p: 'Publish a product catalogue in twelve languages',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
        a: 2,
      },
    ],
    vsubs: [
      {
        p: 'Chuyển bản ghi âm tổng đài thành văn bản',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
      },
      {
        p: 'Cho ứng dụng di động một giọng nói tự nhiên',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
      },
      {
        p: 'Phát hiện nội dung không phù hợp trong ảnh người dùng tải lên',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
      },
      {
        p: 'Phát hành danh mục sản phẩm bằng mười hai ngôn ngữ',
        o: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Polly'],
      },
    ],
    e: [
      'Remember the direction of each speech service: Transcribe is speech → text, Polly is text → speech.',
      'Rekognition covers images and video, including content moderation. Translate handles language-to-language conversion of text.',
    ],
    ve: [
      'Nhớ chiều của hai dịch vụ giọng nói: Transcribe là giọng nói → văn bản, Polly là văn bản → giọng nói.',
      'Rekognition lo ảnh và video, bao gồm cả kiểm duyệt nội dung. Translate chuyển đổi văn bản giữa các ngôn ngữ.',
    ],
  },
  {
    id: 22,
    topic: 'aws-ai-services',
    type: 'single',
    q: ['An enterprise wants employees to ask questions in plain English and receive answers drawn from internal wikis, PDFs, and SharePoint. Which service is designed for this?'],
    vq: ['Một doanh nghiệp muốn nhân viên đặt câu hỏi bằng tiếng Anh thông thường và nhận câu trả lời lấy từ wiki nội bộ, file PDF và SharePoint. Dịch vụ nào được thiết kế cho việc này?'],
    o: [
      ['Amazon Kendra', true],
      ['Amazon Comprehend', false],
      ['Amazon Forecast', false],
      ['Amazon Polly', false],
    ],
    vo: ['Amazon Kendra', 'Amazon Comprehend', 'Amazon Forecast', 'Amazon Polly'],
    e: [
      'Amazon Kendra is an intelligent enterprise search service with built-in connectors to common repositories, answering natural-language questions over your own content.',
      'Comprehend analyses text but does not build a searchable index across enterprise sources.',
    ],
    ve: [
      'Amazon Kendra là dịch vụ tìm kiếm doanh nghiệp thông minh, có sẵn connector tới các kho tài liệu phổ biến, trả lời câu hỏi ngôn ngữ tự nhiên trên nội dung của chính bạn.',
      'Comprehend phân tích văn bản nhưng không dựng chỉ mục tìm kiếm xuyên suốt các nguồn dữ liệu doanh nghiệp.',
    ],
    refs: [{ label: 'Amazon Kendra', url: `${DOC}/kendra/latest/dg/what-is-kendra.html` }],
  },
  {
    id: 23,
    topic: 'aws-ai-services',
    type: 'single',
    q: ['A company wants to build a customer-facing chatbot that recognises user intents and collects required slots such as date and location. Which service should they use?'],
    vq: ['Một công ty muốn xây chatbot phục vụ khách hàng, nhận biết ý định người dùng và thu thập các trường bắt buộc như ngày và địa điểm. Nên dùng dịch vụ nào?'],
    o: [
      ['Amazon Lex', true],
      ['Amazon Kendra', false],
      ['Amazon Textract', false],
      ['Amazon Macie', false],
    ],
    vo: ['Amazon Lex', 'Amazon Kendra', 'Amazon Textract', 'Amazon Macie'],
    e: [
      'Amazon Lex provides the conversational building blocks — intents, utterances, slots, and fulfilment — for voice and text bots. It is the engine behind Amazon Alexa.',
      'Macie is a data-security service for discovering sensitive data in Amazon S3 and is unrelated to chatbots.',
    ],
    ve: [
      'Amazon Lex cung cấp các khối xây dựng hội thoại — intent, utterance, slot và fulfilment — cho bot giọng nói và văn bản. Đây chính là engine đứng sau Amazon Alexa.',
      'Macie là dịch vụ bảo mật dữ liệu dùng để phát hiện dữ liệu nhạy cảm trong Amazon S3, không liên quan tới chatbot.',
    ],
    refs: [{ label: 'Amazon Lex', url: `${DOC}/lex/latest/dg/what-is.html` }],
  },
  {
    id: 24,
    topic: 'aws-ai-services',
    type: 'multi',
    q: ['Which statements about AWS managed AI services such as Amazon Rekognition and Amazon Comprehend are correct? (Choose TWO.)'],
    vq: ['Những phát biểu nào về các dịch vụ AI được quản lý của AWS như Amazon Rekognition và Amazon Comprehend là đúng? (Chọn HAI.)'],
    o: [
      ['They are consumed through an API and require no ML expertise to use', true],
      ['They remove the need to provision and manage training infrastructure', true],
      ['They require customers to supply their own trained model before use', false],
      ['They can only be used from the AWS Management Console', false],
      ['They are free of charge for unlimited use', false],
    ],
    vo: [
      'Chúng được dùng qua API và không đòi hỏi chuyên môn ML để sử dụng',
      'Chúng loại bỏ nhu cầu cấp phát và quản lý hạ tầng huấn luyện',
      'Chúng đòi hỏi khách hàng phải cung cấp mô hình đã huấn luyện của mình trước khi dùng',
      'Chúng chỉ dùng được từ AWS Management Console',
      'Chúng miễn phí và không giới hạn lượng dùng',
    ],
    e: [
      'Managed AI services ship with pre-trained models behind a simple API, so teams get results without building or hosting models.',
      'They are billed per request or per unit processed, and are callable from the SDK, CLI, and console alike.',
    ],
    ve: [
      'Các dịch vụ AI được quản lý đi kèm mô hình huấn luyện sẵn phía sau một API đơn giản, nên các đội có kết quả mà không phải tự dựng hay tự vận hành mô hình.',
      'Chúng tính tiền theo lượt gọi hoặc theo đơn vị xử lý, và gọi được từ SDK, CLI cũng như console.',
    ],
  },

  /* ------------------------------------------- ai-capabilities-limits */
  {
    id: 25,
    topic: 'ai-capabilities-limits',
    type: 'single',
    q: [
      'A fraud model performed well at launch but its accuracy has fallen steadily over six months as fraud tactics changed.',
      'What is this phenomenon called?',
    ],
    vq: [
      'Một mô hình phát hiện gian lận chạy tốt lúc mới ra mắt nhưng độ chính xác giảm dần suốt sáu tháng khi thủ đoạn gian lận thay đổi.',
      'Hiện tượng này gọi là gì?',
    ],
    o: [
      ['Model drift caused by a change in the underlying data distribution', true],
      ['Overfitting to the validation set', false],
      ['A hardware failure on the inference endpoint', false],
      ['Underfitting caused by too few model parameters', false],
    ],
    vo: [
      'Model drift do phân phối dữ liệu nền thay đổi',
      'Overfitting trên tập validation',
      'Lỗi phần cứng ở endpoint suy luận',
      'Underfitting do mô hình có quá ít tham số',
    ],
    e: [
      'When live data drifts away from the training distribution, model quality decays. The remedy is continuous monitoring and periodic retraining on fresh data.',
      'Amazon SageMaker Model Monitor detects data quality, model quality, bias, and feature attribution drift automatically.',
    ],
    ve: [
      'Khi dữ liệu thực tế trôi khỏi phân phối lúc huấn luyện, chất lượng mô hình xuống cấp. Cách khắc phục là giám sát liên tục và huấn luyện lại định kỳ trên dữ liệu mới.',
      'Amazon SageMaker Model Monitor tự động phát hiện trôi về chất lượng dữ liệu, chất lượng mô hình, thiên lệch và mức đóng góp của đặc trưng.',
    ],
    refs: [{ label: 'SageMaker Model Monitor', url: `${DOC}/sagemaker/latest/dg/model-monitor.html` }],
  },
  {
    id: 26,
    topic: 'ai-capabilities-limits',
    type: 'tf_table',
    q: ['Decide whether each statement about the limitations of machine learning solutions is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về giới hạn của giải pháp machine learning là đúng hay sai.'],
    subs: [
      { p: 'A model can be no better than the quality of the data it was trained on.', o: ['True', 'False'], a: 0 },
      { p: 'Once deployed, a model keeps its accuracy indefinitely without maintenance.', o: ['True', 'False'], a: 1 },
      { p: 'Model predictions are probabilistic and can be wrong.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Mô hình không thể tốt hơn chất lượng dữ liệu dùng để huấn luyện nó.', o: ['Đúng', 'Sai'] },
      { p: 'Sau khi triển khai, mô hình giữ nguyên độ chính xác vô thời hạn mà không cần bảo trì.', o: ['Đúng', 'Sai'] },
      { p: 'Dự đoán của mô hình mang tính xác suất và có thể sai.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      '"Garbage in, garbage out" is the governing constraint of every ML project.',
      'Deployed models degrade as the world changes, so monitoring and retraining are part of the lifecycle, not an optional extra.',
    ],
    ve: [
      '"Garbage in, garbage out" là ràng buộc chi phối mọi dự án ML.',
      'Mô hình đã triển khai sẽ xuống cấp khi thực tế thay đổi, nên giám sát và huấn luyện lại là một phần của vòng đời chứ không phải tuỳ chọn thêm.',
    ],
  },

  /* ------------------------------------------------------- ml-pipeline */
  {
    id: 27,
    topic: 'ml-pipeline',
    type: 'single',
    q: [
      'A model achieves 99% accuracy on the training data but only 61% on the test data.',
      'What is the most likely explanation?',
    ],
    vq: [
      'Một mô hình đạt 99% độ chính xác trên dữ liệu huấn luyện nhưng chỉ 61% trên dữ liệu kiểm thử.',
      'Giải thích khả dĩ nhất là gì?',
    ],
    o: [
      ['The model is overfitting the training data', true],
      ['The model is underfitting the training data', false],
      ['The test set is too large', false],
      ['The learning rate was set to zero', false],
    ],
    vo: [
      'Mô hình bị overfitting trên dữ liệu huấn luyện',
      'Mô hình bị underfitting trên dữ liệu huấn luyện',
      'Tập kiểm thử quá lớn',
      'Learning rate bị đặt bằng 0',
    ],
    e: [
      'A large gap between excellent training performance and poor test performance is the textbook signature of overfitting: the model memorised the training set instead of learning general patterns.',
      'Common remedies are more training data, simplification of the model, regularisation, and cross-validation. Underfitting would show poor scores on BOTH sets.',
    ],
    ve: [
      'Khoảng cách lớn giữa kết quả rất tốt trên tập huấn luyện và kết quả kém trên tập kiểm thử là dấu hiệu kinh điển của overfitting: mô hình học thuộc tập huấn luyện thay vì học quy luật tổng quát.',
      'Cách khắc phục thường gặp: thêm dữ liệu huấn luyện, đơn giản hoá mô hình, dùng regularisation và cross-validation. Underfitting sẽ cho điểm kém trên CẢ HAI tập.',
    ],
  },
  {
    id: 28,
    topic: 'ml-pipeline',
    type: 'match',
    q: ['Place each activity in the correct stage of the machine learning lifecycle.'],
    vq: ['Xếp mỗi hoạt động vào đúng giai đoạn trong vòng đời machine learning.'],
    subs: [
      {
        p: 'Removing duplicate rows and filling in missing values',
        o: ['Model training', 'Monitoring', 'Data preparation', 'Model evaluation'],
        a: 2,
      },
      {
        p: 'Running a hyperparameter tuning job to find the best settings',
        o: ['Model training', 'Monitoring', 'Data preparation', 'Model evaluation'],
        a: 0,
      },
      {
        p: 'Measuring precision and recall on a held-out test set',
        o: ['Model training', 'Monitoring', 'Data preparation', 'Model evaluation'],
        a: 3,
      },
      {
        p: 'Detecting that live input data no longer matches the training distribution',
        o: ['Model training', 'Monitoring', 'Data preparation', 'Model evaluation'],
        a: 1,
      },
    ],
    vsubs: [
      {
        p: 'Loại bỏ dòng trùng lặp và điền giá trị còn thiếu',
        o: ['Huấn luyện mô hình', 'Giám sát', 'Chuẩn bị dữ liệu', 'Đánh giá mô hình'],
      },
      {
        p: 'Chạy job tinh chỉnh siêu tham số để tìm cấu hình tốt nhất',
        o: ['Huấn luyện mô hình', 'Giám sát', 'Chuẩn bị dữ liệu', 'Đánh giá mô hình'],
      },
      {
        p: 'Đo precision và recall trên tập kiểm thử để riêng',
        o: ['Huấn luyện mô hình', 'Giám sát', 'Chuẩn bị dữ liệu', 'Đánh giá mô hình'],
      },
      {
        p: 'Phát hiện dữ liệu đầu vào thực tế không còn khớp phân phối lúc huấn luyện',
        o: ['Huấn luyện mô hình', 'Giám sát', 'Chuẩn bị dữ liệu', 'Đánh giá mô hình'],
      },
    ],
    e: [
      'The lifecycle runs: business problem → data collection → data preparation and EDA → feature engineering → training and tuning → evaluation → deployment → monitoring.',
      'Drift detection belongs to monitoring, which feeds back into retraining.',
    ],
    ve: [
      'Vòng đời chạy theo trình tự: bài toán nghiệp vụ → thu thập dữ liệu → chuẩn bị dữ liệu và EDA → feature engineering → huấn luyện và tinh chỉnh → đánh giá → triển khai → giám sát.',
      'Phát hiện trôi dữ liệu thuộc giai đoạn giám sát, và kết quả của nó quay lại kích hoạt huấn luyện lại.',
    ],
  },
  {
    id: 29,
    topic: 'ml-pipeline',
    type: 'single',
    q: ['Why is a dataset normally split into training, validation, and test sets?'],
    vq: ['Vì sao bộ dữ liệu thường được chia thành tập huấn luyện, tập validation và tập kiểm thử?'],
    o: [
      ['To tune the model on data it did not train on and then measure final performance on data never used before', true],
      ['To reduce the total storage cost of the dataset', false],
      ['Because algorithms cannot process more than one third of a dataset at a time', false],
      ['To guarantee the model reaches 100% accuracy', false],
    ],
    vo: [
      'Để tinh chỉnh mô hình trên dữ liệu nó chưa huấn luyện, rồi đo kết quả cuối cùng trên dữ liệu chưa từng dùng đến',
      'Để giảm tổng chi phí lưu trữ của bộ dữ liệu',
      'Vì thuật toán không xử lý được quá một phần ba bộ dữ liệu mỗi lần',
      'Để bảo đảm mô hình đạt độ chính xác 100%',
    ],
    e: [
      'The training set fits the model, the validation set guides hyperparameter choices, and the test set gives an unbiased final estimate of how the model will behave in production.',
      'Reusing the test set for tuning leaks information and inflates the reported score.',
    ],
    ve: [
      'Tập huấn luyện dùng để khớp mô hình, tập validation dẫn hướng cho việc chọn siêu tham số, còn tập kiểm thử cho ước lượng cuối cùng không thiên lệch về cách mô hình sẽ hoạt động trên production.',
      'Dùng lại tập kiểm thử để tinh chỉnh sẽ làm rò rỉ thông tin và thổi phồng điểm số báo cáo.',
    ],
  },
  {
    id: 30,
    topic: 'ml-pipeline',
    type: 'single',
    q: ['What is the purpose of feature engineering?'],
    vq: ['Mục đích của feature engineering là gì?'],
    o: [
      ['Selecting, transforming, and creating input variables so the model can learn more effectively', true],
      ['Deploying the model to a real-time endpoint', false],
      ['Choosing the instance type used for training', false],
      ['Writing the API documentation for the model', false],
    ],
    vo: [
      'Chọn lọc, biến đổi và tạo ra các biến đầu vào để mô hình học hiệu quả hơn',
      'Triển khai mô hình lên endpoint thời gian thực',
      'Chọn loại instance dùng cho huấn luyện',
      'Viết tài liệu API cho mô hình',
    ],
    e: [
      'Feature engineering turns raw data into signals a model can use — normalising scales, encoding categories, deriving ratios, extracting date parts.',
      'It is frequently the highest-leverage step in a classic ML project, often mattering more than the choice of algorithm.',
    ],
    ve: [
      'Feature engineering biến dữ liệu thô thành tín hiệu mà mô hình dùng được — chuẩn hoá thang đo, mã hoá biến hạng mục, tạo tỉ số, tách thành phần ngày tháng.',
      'Đây thường là bước tạo đòn bẩy lớn nhất trong dự án ML truyền thống, nhiều khi quan trọng hơn cả việc chọn thuật toán.',
    ],
  },

  /* ---------------------------------------------------- sagemaker-tools */
  {
    id: 31,
    topic: 'sagemaker-tools',
    type: 'single',
    q: ['A business analyst with no coding experience needs to build and evaluate a prediction model from a CSV file. Which AWS capability is designed for that user?'],
    vq: ['Một chuyên viên phân tích nghiệp vụ không biết lập trình cần xây và đánh giá mô hình dự đoán từ một file CSV. Năng lực nào của AWS được thiết kế cho người dùng này?'],
    o: [
      ['Amazon SageMaker Canvas', true],
      ['Amazon SageMaker Feature Store', false],
      ['Amazon SageMaker Model Monitor', false],
      ['AWS CloudTrail', false],
    ],
    vo: [
      'Amazon SageMaker Canvas',
      'Amazon SageMaker Feature Store',
      'Amazon SageMaker Model Monitor',
      'AWS CloudTrail',
    ],
    e: [
      'SageMaker Canvas is the no-code, visual interface that lets business users generate accurate predictions without writing a line of code.',
      'Feature Store stores features, Model Monitor watches deployed models, and CloudTrail is an audit log service.',
    ],
    ve: [
      'SageMaker Canvas là giao diện trực quan không cần code, cho phép người dùng nghiệp vụ tạo dự đoán chính xác mà không phải viết dòng lệnh nào.',
      'Feature Store lưu trữ đặc trưng, Model Monitor theo dõi mô hình đã triển khai, còn CloudTrail là dịch vụ nhật ký kiểm toán.',
    ],
    refs: [{ label: 'SageMaker Canvas', url: `${DOC}/sagemaker/latest/dg/canvas.html` }],
  },
  {
    id: 32,
    topic: 'sagemaker-tools',
    type: 'single',
    q: [
      'Several teams keep recomputing the same customer features for both training and real-time inference, and the values sometimes disagree.',
      'Which SageMaker capability solves this?',
    ],
    vq: [
      'Nhiều đội cứ phải tính đi tính lại cùng một bộ đặc trưng khách hàng cho cả huấn luyện lẫn suy luận thời gian thực, và giá trị đôi khi lệch nhau.',
      'Năng lực nào của SageMaker giải quyết vấn đề này?',
    ],
    o: [
      ['Amazon SageMaker Feature Store', true],
      ['Amazon SageMaker Canvas', false],
      ['Amazon SageMaker Clarify', false],
      ['Amazon SageMaker Ground Truth', false],
    ],
    vo: [
      'Amazon SageMaker Feature Store',
      'Amazon SageMaker Canvas',
      'Amazon SageMaker Clarify',
      'Amazon SageMaker Ground Truth',
    ],
    e: [
      'Feature Store is a central repository for curated features, shared across teams and consistent between training and inference — which eliminates training/serving skew.',
      'Clarify addresses bias and explainability, and Ground Truth handles data labeling.',
    ],
    ve: [
      'Feature Store là kho trung tâm chứa các đặc trưng đã chuẩn hoá, dùng chung giữa các đội và nhất quán giữa huấn luyện với suy luận — nhờ đó loại bỏ lệch training/serving.',
      'Clarify lo về thiên lệch và giải thích mô hình, còn Ground Truth lo gán nhãn dữ liệu.',
    ],
    refs: [{ label: 'SageMaker Feature Store', url: `${DOC}/sagemaker/latest/dg/feature-store.html` }],
  },
  {
    id: 33,
    topic: 'sagemaker-tools',
    type: 'multi',
    q: ['Which tasks can Amazon SageMaker Clarify help with? (Choose TWO.)'],
    vq: ['Amazon SageMaker Clarify hỗ trợ những việc nào sau đây? (Chọn HAI.)'],
    o: [
      ['Detecting bias in training data before a model is built', true],
      ['Explaining which features contributed most to a prediction', true],
      ['Provisioning GPU capacity for training jobs', false],
      ['Encrypting objects stored in Amazon S3', false],
      ['Translating model output into other languages', false],
    ],
    vo: [
      'Phát hiện thiên lệch trong dữ liệu huấn luyện trước khi dựng mô hình',
      'Giải thích đặc trưng nào đóng góp nhiều nhất vào một dự đoán',
      'Cấp phát dung lượng GPU cho các job huấn luyện',
      'Mã hoá đối tượng lưu trong Amazon S3',
      'Dịch đầu ra của mô hình sang ngôn ngữ khác',
    ],
    e: [
      'Clarify has two headline jobs: bias detection (pre-training and post-training) and explainability through feature attribution.',
      'Encryption is handled by AWS KMS and S3, and capacity provisioning is a SageMaker training-job configuration concern.',
    ],
    ve: [
      'Clarify có hai nhiệm vụ chính: phát hiện thiên lệch (trước và sau huấn luyện) và giải thích mô hình qua mức đóng góp của từng đặc trưng.',
      'Mã hoá do AWS KMS và S3 đảm nhiệm, còn cấp phát dung lượng là phần cấu hình job huấn luyện của SageMaker.',
    ],
    refs: [
      { label: 'SageMaker Clarify', url: `${DOC}/sagemaker/latest/dg/clarify-fairness-and-explainability.html` },
    ],
  },

  /* -------------------------------------------------------- ml-metrics */
  {
    id: 34,
    topic: 'ml-metrics',
    type: 'single',
    q: [
      'A medical screening model must miss as few genuinely sick patients as possible, even if that means more false alarms.',
      'Which metric should the team optimise?',
    ],
    vq: [
      'Một mô hình sàng lọc y tế phải bỏ sót càng ít bệnh nhân thực sự có bệnh càng tốt, kể cả khi điều đó làm tăng số ca báo động giả.',
      'Nhóm thực hiện nên tối ưu chỉ số nào?',
    ],
    o: [
      ['Recall', true],
      ['Precision', false],
      ['Mean absolute error', false],
      ['R-squared', false],
    ],
    vo: ['Recall', 'Precision', 'Mean absolute error', 'R bình phương'],
    e: [
      'Recall measures the share of true positives the model actually caught, so maximising it minimises missed cases — the priority when a miss is dangerous.',
      'Precision would be the target when false alarms are the expensive error, for example in automated account suspension. MAE and R-squared are regression metrics.',
    ],
    ve: [
      'Recall đo tỉ lệ ca dương thật mà mô hình bắt được, nên tối đa hoá recall là giảm thiểu ca bị bỏ sót — ưu tiên đúng khi bỏ sót là nguy hiểm.',
      'Precision mới là mục tiêu khi báo động giả là lỗi tốn kém, ví dụ khoá tài khoản tự động. MAE và R bình phương là chỉ số cho bài toán hồi quy.',
    ],
  },
  {
    id: 35,
    topic: 'ml-metrics',
    type: 'single',
    q: [
      'A dataset contains 99% legitimate transactions and 1% fraudulent ones. A model that predicts "legitimate" for every transaction reports 99% accuracy.',
      'What does this illustrate?',
    ],
    vq: [
      'Một bộ dữ liệu có 99% giao dịch hợp lệ và 1% giao dịch gian lận. Một mô hình luôn dự đoán "hợp lệ" cho mọi giao dịch báo cáo độ chính xác 99%.',
      'Điều này minh hoạ cho vấn đề gì?',
    ],
    o: [
      ['Accuracy is misleading on imbalanced datasets, so precision, recall, or F1 should be used instead', true],
      ['The model is performing excellently and should be deployed', false],
      ['The dataset is too small to train on', false],
      ['Accuracy is the only metric that matters for classification', false],
    ],
    vo: [
      'Accuracy gây hiểu lầm trên dữ liệu mất cân bằng, nên phải dùng precision, recall hoặc F1 thay thế',
      'Mô hình đang hoạt động xuất sắc và nên được triển khai',
      'Bộ dữ liệu quá nhỏ để huấn luyện',
      'Accuracy là chỉ số duy nhất đáng quan tâm cho bài toán phân loại',
    ],
    e: [
      'The model catches zero fraud yet still scores 99%, because the majority class dominates. Its recall on the fraud class is 0%.',
      'On imbalanced problems, always inspect precision, recall, F1, or AUC-ROC rather than accuracy alone.',
    ],
    ve: [
      'Mô hình không bắt được giao dịch gian lận nào mà vẫn đạt 99%, vì lớp đa số áp đảo. Recall của nó trên lớp gian lận là 0%.',
      'Với bài toán mất cân bằng, luôn phải xem precision, recall, F1 hoặc AUC-ROC chứ không chỉ nhìn accuracy.',
    ],
  },
  {
    id: 36,
    topic: 'ml-metrics',
    type: 'single',
    q: ['Which metric is appropriate for evaluating a regression model that predicts house prices?'],
    vq: ['Chỉ số nào phù hợp để đánh giá mô hình hồi quy dự đoán giá nhà?'],
    o: [
      ['Root mean squared error (RMSE)', true],
      ['F1 score', false],
      ['AUC-ROC', false],
      ['Confusion matrix accuracy', false],
    ],
    vo: ['Root mean squared error (RMSE)', 'Điểm F1', 'AUC-ROC', 'Độ chính xác theo ma trận nhầm lẫn'],
    e: [
      'RMSE and MAE measure how far numeric predictions land from the true values, which is what regression needs.',
      'F1, AUC-ROC, and confusion-matrix accuracy all describe classification performance.',
    ],
    ve: [
      'RMSE và MAE đo khoảng cách giữa dự đoán số và giá trị thật — đúng thứ bài toán hồi quy cần.',
      'F1, AUC-ROC và độ chính xác theo ma trận nhầm lẫn đều mô tả hiệu năng của bài toán phân loại.',
    ],
  },

  /* ------------------------------------------------------------- mlops */
  {
    id: 37,
    topic: 'mlops',
    type: 'single',
    q: [
      'A company scores 20 million customer records once every night and does not need immediate responses.',
      'Which inference option is most cost-effective?',
    ],
    vq: [
      'Một công ty chấm điểm 20 triệu bản ghi khách hàng mỗi đêm một lần và không cần phản hồi tức thì.',
      'Lựa chọn suy luận nào tiết kiệm chi phí nhất?',
    ],
    o: [
      ['Batch transform', true],
      ['A real-time endpoint kept running 24/7', false],
      ['A real-time endpoint per customer record', false],
      ['Manual scoring in a notebook', false],
    ],
    vo: [
      'Batch transform',
      'Endpoint thời gian thực chạy liên tục 24/7',
      'Một endpoint thời gian thực cho mỗi bản ghi khách hàng',
      'Chấm điểm thủ công trong notebook',
    ],
    e: [
      'Batch transform spins up compute, processes the whole dataset, and shuts down — you pay only for the job duration.',
      'A permanently running real-time endpoint bills by the hour whether or not requests arrive, which is wasteful for a nightly job.',
    ],
    ve: [
      'Batch transform khởi tạo tài nguyên tính toán, xử lý toàn bộ bộ dữ liệu rồi tắt — bạn chỉ trả tiền cho thời gian job chạy.',
      'Endpoint thời gian thực chạy thường trực tính tiền theo giờ bất kể có yêu cầu hay không, rất lãng phí cho công việc chạy hằng đêm.',
    ],
    refs: [{ label: 'Triển khai mô hình để suy luận', url: `${DOC}/sagemaker/latest/dg/deploy-model.html` }],
  },
  {
    id: 38,
    topic: 'mlops',
    type: 'multi',
    q: ['Which practices are part of MLOps? (Choose TWO.)'],
    vq: ['Những thực hành nào thuộc về MLOps? (Chọn HAI.)'],
    o: [
      ['Versioning models and datasets so results can be reproduced', true],
      ['Automating retraining and deployment pipelines', true],
      ['Deleting training data immediately after the first model is built', false],
      ['Deploying models manually without any testing', false],
      ['Avoiding monitoring so production costs stay lower', false],
    ],
    vo: [
      'Quản lý phiên bản mô hình và bộ dữ liệu để tái lập được kết quả',
      'Tự động hoá pipeline huấn luyện lại và triển khai',
      'Xoá dữ liệu huấn luyện ngay sau khi dựng xong mô hình đầu tiên',
      'Triển khai mô hình thủ công không qua kiểm thử',
      'Không giám sát để giảm chi phí production',
    ],
    e: [
      'MLOps applies DevOps discipline to ML: reproducibility, automation, testing, and continuous monitoring.',
      'Discarding data, skipping tests, and switching off monitoring all remove the guarantees MLOps exists to provide.',
    ],
    ve: [
      'MLOps áp dụng kỷ luật DevOps vào ML: khả năng tái lập, tự động hoá, kiểm thử và giám sát liên tục.',
      'Xoá dữ liệu, bỏ kiểm thử và tắt giám sát đều loại bỏ đúng những bảo đảm mà MLOps sinh ra để cung cấp.',
    ],
  },
];
