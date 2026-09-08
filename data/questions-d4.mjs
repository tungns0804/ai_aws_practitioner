/**
 * Domain 4 — Guidelines for Responsible AI (14% đề thi).
 */

const DOC = 'https://docs.aws.amazon.com';
const AWS = 'https://aws.amazon.com';

export default [
  /* ------------------------------------------------ responsible-dims */
  {
    id: 130,
    topic: 'responsible-dims',
    type: 'single',
    q: [
      'A loan model approves applications from one city at a much higher rate than equally qualified applications from another.',
      'Which responsible AI dimension is being violated?',
    ],
    vq: [
      'Một mô hình cho vay duyệt hồ sơ từ một thành phố với tỉ lệ cao hơn hẳn so với hồ sơ tương đương từ thành phố khác.',
      'Chiều nào của AI có trách nhiệm đang bị vi phạm?',
    ],
    o: [
      ['Fairness', true],
      ['Controllability', false],
      ['Sustainability', false],
      ['Latency', false],
    ],
    vo: ['Fairness (công bằng)', 'Controllability (kiểm soát được)', 'Tính bền vững', 'Độ trễ'],
    e: [
      'Fairness means the system treats comparable people comparably across groups. Systematically different outcomes for equally qualified applicants is a fairness failure.',
      'Controllability is about being able to steer and oversee the system, and latency is a performance attribute rather than a responsible AI dimension.',
    ],
    ve: [
      'Fairness nghĩa là hệ thống đối xử tương đương với những người tương đương, xuyên suốt các nhóm. Kết quả khác biệt có hệ thống giữa các hồ sơ ngang nhau là một thất bại về công bằng.',
      'Controllability nói về khả năng điều khiển và giám sát hệ thống, còn độ trễ là thuộc tính hiệu năng chứ không phải một chiều của AI có trách nhiệm.',
    ],
    refs: [{ label: 'AWS Responsible AI', url: `${AWS}/ai/responsible-ai/` }],
  },
  {
    id: 131,
    topic: 'responsible-dims',
    type: 'multi',
    q: ['Which of the following are dimensions of responsible AI as described by AWS? (Choose TWO.)'],
    vq: ['Những mục nào sau đây là chiều của AI có trách nhiệm theo mô tả của AWS? (Chọn HAI.)'],
    o: [
      ['Explainability', true],
      ['Veracity and robustness', true],
      ['Elasticity', false],
      ['Multi-tenancy', false],
      ['Serverless architecture', false],
    ],
    vo: [
      'Explainability (giải thích được)',
      'Veracity and robustness (đúng và bền vững)',
      'Elasticity (co giãn)',
      'Multi-tenancy (đa người thuê)',
      'Kiến trúc serverless',
    ],
    e: [
      'The AWS dimensions are fairness, explainability, privacy and security, safety, controllability, veracity and robustness, governance, and transparency.',
      'Elasticity, multi-tenancy, and serverless are cloud architecture concepts, not responsible AI dimensions.',
    ],
    ve: [
      'Các chiều theo AWS gồm fairness, explainability, privacy and security, safety, controllability, veracity and robustness, governance và transparency.',
      'Elasticity, multi-tenancy và serverless là khái niệm kiến trúc đám mây chứ không phải chiều của AI có trách nhiệm.',
    ],
  },
  {
    id: 132,
    topic: 'responsible-dims',
    type: 'single',
    q: ['A chatbot does not tell users they are talking to an AI system. Which responsible AI principle does this undermine?'],
    vq: ['Một chatbot không cho người dùng biết họ đang nói chuyện với hệ thống AI. Nguyên tắc nào của AI có trách nhiệm bị vi phạm?'],
    o: [
      ['Transparency', true],
      ['Robustness', false],
      ['Scalability', false],
      ['Availability', false],
    ],
    vo: ['Transparency (minh bạch)', 'Robustness (bền vững)', 'Khả năng mở rộng', 'Tính sẵn sàng'],
    e: [
      'Transparency means people understand when and how AI is being used, and what its limits are. Disclosing that a counterpart is an AI is a baseline transparency obligation.',
      'Scalability and availability are operational qualities, not ethical principles.',
    ],
    ve: [
      'Transparency nghĩa là người dùng hiểu được khi nào và bằng cách nào AI được sử dụng, cũng như giới hạn của nó. Cho biết đầu bên kia là AI là nghĩa vụ minh bạch tối thiểu.',
      'Khả năng mở rộng và tính sẵn sàng là phẩm chất vận hành chứ không phải nguyên tắc đạo đức.',
    ],
  },
  {
    id: 133,
    topic: 'responsible-dims',
    type: 'single',
    q: [
      'A team needs the ability to monitor an AI system behaviour and shut it down or adjust it if it starts behaving unexpectedly.',
      'Which dimension does this describe?',
    ],
    vq: [
      'Một nhóm cần khả năng giám sát hành vi của hệ thống AI và tắt hoặc điều chỉnh nó nếu nó bắt đầu hành xử bất thường.',
      'Điều này mô tả chiều nào?',
    ],
    o: [
      ['Controllability', true],
      ['Fairness', false],
      ['Privacy and security', false],
      ['Explainability', false],
    ],
    vo: ['Controllability', 'Fairness', 'Privacy and security', 'Explainability'],
    e: [
      'Controllability is the ability to monitor, steer, and intervene in an AI system while it is running.',
      'Explainability is about justifying outputs, and fairness is about equitable treatment — different concerns.',
    ],
    ve: [
      'Controllability là khả năng giám sát, điều hướng và can thiệp vào hệ thống AI trong lúc nó đang chạy.',
      'Explainability nói về việc lý giải đầu ra, còn fairness nói về đối xử công bằng — hai mối quan tâm khác nhau.',
    ],
  },

  /* --------------------------------------------------- bias-detect */
  {
    id: 134,
    topic: 'bias-detect',
    type: 'single',
    q: ['Which AWS service detects bias in training data and explains which features drove a prediction?'],
    vq: ['Dịch vụ AWS nào phát hiện thiên lệch trong dữ liệu huấn luyện và giải thích đặc trưng nào dẫn tới một dự đoán?'],
    o: [
      ['Amazon SageMaker Clarify', true],
      ['Amazon CloudWatch', false],
      ['AWS Config', false],
      ['Amazon Athena', false],
    ],
    vo: ['Amazon SageMaker Clarify', 'Amazon CloudWatch', 'AWS Config', 'Amazon Athena'],
    e: [
      'Clarify performs pre-training bias detection on datasets, post-training bias detection on predictions, and feature-attribution explainability using SHAP values.',
      'CloudWatch is operational monitoring, Config tracks resource configuration, and Athena queries data in S3.',
    ],
    ve: [
      'Clarify phát hiện thiên lệch trước huấn luyện trên bộ dữ liệu, phát hiện thiên lệch sau huấn luyện trên các dự đoán, và giải thích mức đóng góp của từng đặc trưng bằng giá trị SHAP.',
      'CloudWatch là giám sát vận hành, Config theo dõi cấu hình tài nguyên, còn Athena truy vấn dữ liệu trong S3.',
    ],
    refs: [
      { label: 'SageMaker Clarify', url: `${DOC}/sagemaker/latest/dg/clarify-fairness-and-explainability.html` },
    ],
  },
  {
    id: 135,
    topic: 'bias-detect',
    type: 'single',
    q: [
      'A company must prevent its generative AI assistant from producing hate speech or discussing a list of banned topics.',
      'Which capability should be configured?',
    ],
    vq: [
      'Một công ty phải ngăn trợ lý generative AI của mình sinh ra ngôn từ thù ghét hoặc bàn về danh sách chủ đề bị cấm.',
      'Nên cấu hình năng lực nào?',
    ],
    o: [
      ['Guardrails for Amazon Bedrock', true],
      ['SageMaker Feature Store', false],
      ['AWS Trusted Advisor', false],
      ['Amazon EventBridge', false],
    ],
    vo: [
      'Guardrails for Amazon Bedrock',
      'SageMaker Feature Store',
      'AWS Trusted Advisor',
      'Amazon EventBridge',
    ],
    e: [
      'Guardrails enforce configurable content filters, denied topics, word filters, and sensitive-information redaction, applied consistently across models.',
      'Feature Store, Trusted Advisor, and EventBridge serve unrelated purposes.',
    ],
    ve: [
      'Guardrails áp đặt bộ lọc nội dung cấu hình được, danh sách chủ đề bị cấm, bộ lọc từ ngữ và che thông tin nhạy cảm, áp dụng nhất quán cho các mô hình.',
      'Feature Store, Trusted Advisor và EventBridge phục vụ những mục đích không liên quan.',
    ],
    refs: [{ label: 'Bedrock Guardrails', url: `${DOC}/bedrock/latest/userguide/guardrails.html` }],
  },
  {
    id: 136,
    topic: 'bias-detect',
    type: 'single',
    q: [
      'A content moderation model produces low-confidence scores on about 8% of images, and mistakes there are costly.',
      'Which AWS capability routes those cases to human reviewers?',
    ],
    vq: [
      'Một mô hình kiểm duyệt nội dung cho điểm tin cậy thấp ở khoảng 8% số ảnh, và sai sót ở nhóm đó gây thiệt hại lớn.',
      'Năng lực nào của AWS chuyển các trường hợp đó cho người xem xét?',
    ],
    o: [
      ['Amazon Augmented AI (A2I)', true],
      ['Amazon Rekognition Custom Labels', false],
      ['AWS Glue', false],
      ['Amazon QuickSight', false],
    ],
    vo: [
      'Amazon Augmented AI (A2I)',
      'Amazon Rekognition Custom Labels',
      'AWS Glue',
      'Amazon QuickSight',
    ],
    e: [
      'A2I builds human review workflows that trigger when confidence falls below a threshold, implementing human-in-the-loop oversight.',
      'Glue is ETL and QuickSight is business intelligence.',
    ],
    ve: [
      'A2I dựng luồng xem xét của con người, kích hoạt khi độ tin cậy rơi xuống dưới ngưỡng, hiện thực hoá cơ chế human-in-the-loop.',
      'Glue là dịch vụ ETL còn QuickSight là công cụ business intelligence.',
    ],
    refs: [
      { label: 'Amazon Augmented AI', url: `${DOC}/sagemaker/latest/dg/a2i-use-augmented-ai-a2i-human-review-loops.html` },
    ],
  },
  {
    id: 137,
    topic: 'bias-detect',
    type: 'multi',
    q: ['Which practices help reduce bias in an AI system? (Choose TWO.)'],
    vq: ['Những thực hành nào giúp giảm thiên lệch trong hệ thống AI? (Chọn HAI.)'],
    o: [
      ['Auditing the training dataset for representation gaps before training', true],
      ['Monitoring outcomes by group after deployment', true],
      ['Removing all documentation about how the model was built', false],
      ['Training exclusively on data from the largest customer segment', false],
      ['Disabling human review to speed up decisions', false],
    ],
    vo: [
      'Rà soát bộ dữ liệu huấn luyện tìm khoảng trống đại diện trước khi huấn luyện',
      'Giám sát kết quả theo từng nhóm sau khi triển khai',
      'Xoá toàn bộ tài liệu về cách mô hình được xây dựng',
      'Chỉ huấn luyện trên dữ liệu của phân khúc khách hàng lớn nhất',
      'Tắt khâu xem xét của con người để ra quyết định nhanh hơn',
    ],
    e: [
      'Bias must be addressed both before training (data audit) and after deployment (outcome monitoring by group).',
      'Training on one segment only guarantees under-representation, and removing documentation destroys the audit trail that makes bias visible.',
    ],
    ve: [
      'Thiên lệch phải được xử lý cả trước khi huấn luyện (rà soát dữ liệu) lẫn sau khi triển khai (giám sát kết quả theo nhóm).',
      'Chỉ huấn luyện trên một phân khúc là bảo đảm chắc chắn cho việc thiếu đại diện, còn xoá tài liệu thì phá huỷ chính dấu vết kiểm toán giúp phát hiện thiên lệch.',
    ],
  },

  /* ------------------------------------------------- dataset-quality */
  {
    id: 138,
    topic: 'dataset-quality',
    type: 'single',
    q: ['Which characteristics describe a high-quality training dataset for a fair model?'],
    vq: ['Đặc điểm nào mô tả một bộ dữ liệu huấn luyện chất lượng cao cho mô hình công bằng?'],
    o: [
      ['Balanced, representative of the real user population, curated, and inclusive', true],
      ['As large as possible regardless of what it contains', false],
      ['Collected exclusively from a single source over one week', false],
      ['Composed mainly of synthetic duplicates of one record', false],
    ],
    vo: [
      'Cân bằng, đại diện đúng cho quần thể người dùng thực, được chọn lọc kỹ và bao trùm',
      'Càng lớn càng tốt bất kể nội dung là gì',
      'Chỉ thu thập từ một nguồn duy nhất trong vòng một tuần',
      'Chủ yếu gồm các bản sao tổng hợp của một bản ghi',
    ],
    e: [
      'Balance, representativeness, curation, and inclusivity are the qualities AWS names for responsible datasets.',
      'Raw size without quality simply scales existing problems.',
    ],
    ve: [
      'Cân bằng, tính đại diện, được chọn lọc và tính bao trùm là những phẩm chất AWS nêu ra cho bộ dữ liệu có trách nhiệm.',
      'Kích thước thô mà không có chất lượng chỉ khuếch đại các vấn đề sẵn có.',
    ],
  },
  {
    id: 139,
    topic: 'dataset-quality',
    type: 'single',
    q: ['A model is too simple to capture the patterns in the data and performs poorly on both training and test sets. What describes this?'],
    vq: ['Một mô hình quá đơn giản để nắm bắt quy luật trong dữ liệu và cho kết quả kém trên cả tập huấn luyện lẫn tập kiểm thử. Điều gì mô tả tình trạng này?'],
    o: [
      ['High bias, resulting in underfitting', true],
      ['High variance, resulting in overfitting', false],
      ['Data drift after deployment', false],
      ['A prompt injection attack', false],
    ],
    vo: [
      'Bias cao, dẫn tới underfitting',
      'Variance cao, dẫn tới overfitting',
      'Data drift sau khi triển khai',
      'Tấn công prompt injection',
    ],
    e: [
      'High bias means the model makes strong simplifying assumptions and misses real structure — poor scores everywhere.',
      'High variance is the opposite: excellent on training data, poor on unseen data.',
    ],
    ve: [
      'Bias cao nghĩa là mô hình đưa ra những giả định đơn giản hoá quá mạnh và bỏ lỡ cấu trúc thật — điểm kém ở mọi tập dữ liệu.',
      'Variance cao thì ngược lại: rất tốt trên tập huấn luyện nhưng kém trên dữ liệu chưa từng thấy.',
    ],
  },
  {
    id: 140,
    topic: 'dataset-quality',
    type: 'tf_table',
    q: ['Decide whether each statement about bias in AI systems is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về thiên lệch trong hệ thống AI là đúng hay sai.'],
    subs: [
      { p: 'Bias in training data can lead to unfair outcomes for specific groups.', o: ['True', 'False'], a: 0 },
      { p: 'A larger dataset automatically removes bias.', o: ['True', 'False'], a: 1 },
      { p: 'Biased models can create legal and reputational risk for a business.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Thiên lệch trong dữ liệu huấn luyện có thể dẫn tới kết quả bất công cho một số nhóm.', o: ['Đúng', 'Sai'] },
      { p: 'Bộ dữ liệu lớn hơn sẽ tự động loại bỏ thiên lệch.', o: ['Đúng', 'Sai'] },
      { p: 'Mô hình thiên lệch có thể tạo ra rủi ro pháp lý và rủi ro danh tiếng cho doanh nghiệp.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Scale alone does not fix representation: a larger dataset drawn from the same skewed source stays just as biased.',
      'Regulatory action and public backlash are real consequences, which is why bias detection is a governance requirement rather than a nice-to-have.',
    ],
    ve: [
      'Chỉ tăng quy mô không sửa được vấn đề đại diện: bộ dữ liệu lớn hơn nhưng lấy từ cùng một nguồn lệch thì vẫn lệch y như cũ.',
      'Chế tài từ cơ quan quản lý và phản ứng dư luận là hậu quả có thật, đó là lý do phát hiện thiên lệch là yêu cầu quản trị chứ không phải thứ có thì tốt.',
    ],
  },

  /* -------------------------------------------- responsible-tradeoffs */
  {
    id: 141,
    topic: 'responsible-tradeoffs',
    type: 'single',
    q: [
      'After tightening safety filters, an assistant begins refusing legitimate customer questions.',
      'What does this illustrate?',
    ],
    vq: [
      'Sau khi siết chặt bộ lọc an toàn, trợ lý bắt đầu từ chối cả những câu hỏi hợp lệ của khách hàng.',
      'Điều này minh hoạ cho vấn đề gì?',
    ],
    o: [
      ['The tradeoff between model safety and model usefulness', true],
      ['A hardware failure in the inference endpoint', false],
      ['Data drift in the training set', false],
      ['An increase in the context window size', false],
    ],
    vo: [
      'Sự đánh đổi giữa mức an toàn và mức hữu ích của mô hình',
      'Lỗi phần cứng ở endpoint suy luận',
      'Data drift trong tập huấn luyện',
      'Cửa sổ ngữ cảnh bị tăng kích thước',
    ],
    e: [
      'Stricter guardrails reduce harmful output but increase false refusals. Tuning that balance against real traffic is part of responsible deployment.',
      'The symptom appeared right after a policy change, so it is a configuration tradeoff, not a hardware or data problem.',
    ],
    ve: [
      'Guardrails chặt hơn giảm nội dung có hại nhưng làm tăng số lần từ chối nhầm. Tinh chỉnh cán cân đó trên lưu lượng thật là một phần của việc triển khai có trách nhiệm.',
      'Triệu chứng xuất hiện ngay sau khi đổi chính sách, nên đây là đánh đổi về cấu hình chứ không phải vấn đề phần cứng hay dữ liệu.',
    ],
  },
  {
    id: 142,
    topic: 'responsible-tradeoffs',
    type: 'single',
    q: ['Why might an organisation choose a smaller model even when a larger one scores higher on accuracy?'],
    vq: ['Vì sao một tổ chức có thể chọn mô hình nhỏ hơn ngay cả khi mô hình lớn hơn đạt điểm chính xác cao hơn?'],
    o: [
      ['Lower cost, lower latency, and lower energy consumption may outweigh a small accuracy gain', true],
      ['Smaller models are always more accurate in production', false],
      ['Larger models cannot be deployed on AWS', false],
      ['Smaller models never require evaluation', false],
    ],
    vo: [
      'Chi phí thấp hơn, độ trễ thấp hơn và tiêu thụ năng lượng ít hơn có thể quan trọng hơn một mức tăng độ chính xác nhỏ',
      'Mô hình nhỏ hơn luôn chính xác hơn trên production',
      'Mô hình lớn hơn không triển khai được trên AWS',
      'Mô hình nhỏ hơn không bao giờ cần đánh giá',
    ],
    e: [
      'Responsible choice weighs accuracy against cost, latency, and environmental impact. Sustainability is an explicit consideration in the exam guide.',
      'Every model, regardless of size, still needs evaluation before release.',
    ],
    ve: [
      'Lựa chọn có trách nhiệm phải cân nhắc độ chính xác cùng với chi phí, độ trễ và tác động môi trường. Tính bền vững là yếu tố được nêu rõ trong Exam Guide.',
      'Mọi mô hình, dù lớn hay nhỏ, vẫn cần được đánh giá trước khi phát hành.',
    ],
  },

  /* ---------------------------------------------------- explainability */
  {
    id: 143,
    topic: 'explainability',
    type: 'single',
    q: ['What is the difference between an interpretable model and an explainable model?'],
    vq: ['Khác biệt giữa mô hình interpretable và mô hình explainable là gì?'],
    o: [
      ['Interpretability means the internal mechanism is directly understandable; explainability means the reasons for a specific output can be described even if the internals are opaque', true],
      ['They are two names for exactly the same property', false],
      ['Interpretability applies only to generative models', false],
      ['Explainability means the model runs faster', false],
    ],
    vo: [
      'Interpretability nghĩa là cơ chế bên trong hiểu trực tiếp được; explainability nghĩa là mô tả được lý do cho một đầu ra cụ thể ngay cả khi bên trong là hộp đen',
      'Đây là hai tên gọi cho đúng cùng một thuộc tính',
      'Interpretability chỉ áp dụng cho mô hình sinh nội dung',
      'Explainability nghĩa là mô hình chạy nhanh hơn',
    ],
    e: [
      'A decision tree is interpretable: you can read the rules. A deep network is not, but SHAP values from SageMaker Clarify can still explain a specific prediction.',
      'The general tradeoff: more complex models are more accurate and less interpretable.',
    ],
    ve: [
      'Cây quyết định là interpretable: bạn đọc thẳng được các luật. Mạng nơ-ron sâu thì không, nhưng giá trị SHAP từ SageMaker Clarify vẫn giải thích được một dự đoán cụ thể.',
      'Đánh đổi chung: mô hình càng phức tạp thì càng chính xác và càng khó diễn giải.',
    ],
  },
  {
    id: 144,
    topic: 'explainability',
    type: 'single',
    q: [
      'A bank must be able to tell a rejected applicant which factors drove the decision, as required by regulation.',
      'What does this requirement demand of the model?',
    ],
    vq: [
      'Một ngân hàng phải nói được cho khách hàng bị từ chối biết những yếu tố nào dẫn tới quyết định đó, theo yêu cầu của quy định pháp luật.',
      'Yêu cầu này đòi hỏi gì ở mô hình?',
    ],
    o: [
      ['It must be explainable, with feature attribution available for individual decisions', true],
      ['It must run on the largest available instance type', false],
      ['It must be trained with reinforcement learning', false],
      ['It must be deployed in at least three Regions', false],
    ],
    vo: [
      'Mô hình phải giải thích được, có sẵn mức đóng góp của từng đặc trưng cho từng quyết định',
      'Mô hình phải chạy trên loại instance lớn nhất hiện có',
      'Mô hình phải được huấn luyện bằng học tăng cường',
      'Mô hình phải được triển khai ở ít nhất ba Region',
    ],
    e: [
      'Regulated decisions about individuals normally require a stated reason. Feature attribution through SageMaker Clarify supports this.',
      'Sometimes it also justifies choosing a simpler, inherently interpretable model over a marginally more accurate black box.',
    ],
    ve: [
      'Các quyết định bị quản lý liên quan tới cá nhân thường bắt buộc phải nêu lý do. Mức đóng góp đặc trưng qua SageMaker Clarify đáp ứng được điều này.',
      'Đôi khi nó cũng biện minh cho việc chọn mô hình đơn giản, vốn dĩ dễ diễn giải, thay vì một hộp đen chính xác hơn chút ít.',
    ],
    refs: [
      { label: 'Giải thích mô hình với Clarify', url: `${DOC}/sagemaker/latest/dg/clarify-model-explainability.html` },
    ],
  },

  /* ------------------------------------------------ transparency-tools */
  {
    id: 145,
    topic: 'transparency-tools',
    type: 'single',
    q: ['What information does an AWS AI Service Card provide?'],
    vq: ['AWS AI Service Card cung cấp thông tin gì?'],
    o: [
      ['Intended use cases, limitations, responsible design choices, and performance considerations for an AWS AI service', true],
      ['The billing history of the service for your account', false],
      ['The source code of the underlying model', false],
      ['A list of all customers using the service', false],
    ],
    vo: [
      'Các trường hợp sử dụng dự kiến, hạn chế, lựa chọn thiết kế có trách nhiệm và các lưu ý về hiệu năng của một dịch vụ AI của AWS',
      'Lịch sử thanh toán của dịch vụ cho tài khoản của bạn',
      'Mã nguồn của mô hình nền',
      'Danh sách tất cả khách hàng đang dùng dịch vụ',
    ],
    e: [
      'AI Service Cards are AWS transparency documents that help customers judge whether a service fits their use case responsibly.',
      'They do not disclose source code or customer lists.',
    ],
    ve: [
      'AI Service Card là tài liệu minh bạch của AWS, giúp khách hàng đánh giá xem dịch vụ có phù hợp với tình huống của mình một cách có trách nhiệm hay không.',
      'Chúng không tiết lộ mã nguồn hay danh sách khách hàng.',
    ],
    refs: [{ label: 'AWS AI Service Cards', url: `${AWS}/ai/responsible-ai/resources/` }],
  },
  {
    id: 146,
    topic: 'transparency-tools',
    type: 'single',
    q: [
      'A company must document, for audit purposes, the purpose, training data, evaluation results, and known risks of each model it builds.',
      'Which capability supports this?',
    ],
    vq: [
      'Một công ty phải ghi lại, phục vụ kiểm toán, mục đích, dữ liệu huấn luyện, kết quả đánh giá và rủi ro đã biết của từng mô hình họ xây dựng.',
      'Năng lực nào hỗ trợ việc này?',
    ],
    o: [
      ['Amazon SageMaker Model Cards', true],
      ['AWS AI Service Cards', false],
      ['Amazon CloudFront', false],
      ['AWS Cost Explorer', false],
    ],
    vo: [
      'Amazon SageMaker Model Cards',
      'AWS AI Service Cards',
      'Amazon CloudFront',
      'AWS Cost Explorer',
    ],
    e: [
      'Model Cards are where YOU document YOUR models. AI Service Cards are where AWS documents ITS services — this is the pair the exam likes to contrast.',
      'CloudFront is a CDN and Cost Explorer analyses spending.',
    ],
    ve: [
      'Model Cards là nơi BẠN ghi chép về MÔ HÌNH CỦA BẠN. AI Service Cards là nơi AWS ghi chép về DỊCH VỤ CỦA HỌ — đây là cặp khái niệm mà đề thi thích đem ra đối chiếu.',
      'CloudFront là CDN còn Cost Explorer phân tích chi tiêu.',
    ],
    refs: [{ label: 'SageMaker Model Cards', url: `${DOC}/sagemaker/latest/dg/model-cards.html` }],
  },
  {
    id: 147,
    topic: 'transparency-tools',
    type: 'multi',
    q: ['Which practices increase the transparency of an AI system? (Choose TWO.)'],
    vq: ['Những thực hành nào làm tăng tính minh bạch của hệ thống AI? (Chọn HAI.)'],
    o: [
      ['Documenting the data sources and known limitations of the model', true],
      ['Disclosing to users when content is generated by AI', true],
      ['Keeping the training data provenance secret from auditors', false],
      ['Presenting model predictions as guaranteed facts', false],
      ['Removing confidence scores from the interface', false],
    ],
    vo: [
      'Ghi chép nguồn dữ liệu và các hạn chế đã biết của mô hình',
      'Nói rõ với người dùng khi nội dung do AI tạo ra',
      'Giấu kiểm toán viên nguồn gốc dữ liệu huấn luyện',
      'Trình bày dự đoán của mô hình như những sự thật được bảo đảm',
      'Bỏ điểm tin cậy khỏi giao diện',
    ],
    e: [
      'Documentation and disclosure are the two pillars of transparency.',
      'Hiding provenance, overstating certainty, and removing confidence signals all reduce a user ability to judge the output.',
    ],
    ve: [
      'Ghi chép và công bố là hai trụ cột của tính minh bạch.',
      'Giấu nguồn gốc, thổi phồng mức chắc chắn và bỏ tín hiệu tin cậy đều làm giảm khả năng người dùng tự đánh giá đầu ra.',
    ],
  },

  /* -------------------------------------------------- human-centered */
  {
    id: 148,
    topic: 'human-centered',
    type: 'single',
    q: ['What does human-in-the-loop mean in an AI workflow?'],
    vq: ['Human-in-the-loop trong một luồng công việc AI nghĩa là gì?'],
    o: [
      ['People review or approve AI outputs, especially for high-risk or low-confidence cases', true],
      ['Humans manually write every model prediction', false],
      ['The model trains itself without any data', false],
      ['End users are prevented from seeing AI results', false],
    ],
    vo: [
      'Con người xem xét hoặc phê duyệt đầu ra của AI, nhất là với các ca rủi ro cao hoặc độ tin cậy thấp',
      'Con người viết tay mọi dự đoán của mô hình',
      'Mô hình tự huấn luyện mà không cần dữ liệu',
      'Người dùng cuối bị chặn không được xem kết quả AI',
    ],
    e: [
      'Human-in-the-loop keeps accountability with people for consequential decisions while still gaining automation benefits for routine ones.',
      'Amazon Augmented AI implements exactly this pattern using confidence thresholds.',
    ],
    ve: [
      'Human-in-the-loop giữ trách nhiệm giải trình ở phía con người với những quyết định hệ trọng, trong khi vẫn hưởng lợi ích tự động hoá cho các ca thông thường.',
      'Amazon Augmented AI hiện thực đúng mô hình này bằng ngưỡng tin cậy.',
    ],
  },
  {
    id: 149,
    topic: 'human-centered',
    type: 'single',
    q: [
      'A hospital deploys an AI tool that suggests diagnoses.',
      'Which design decision best reflects human-centered responsible AI?',
    ],
    vq: [
      'Một bệnh viện triển khai công cụ AI gợi ý chẩn đoán.',
      'Quyết định thiết kế nào phản ánh đúng nhất tinh thần AI có trách nhiệm lấy con người làm trung tâm?',
    ],
    o: [
      ['Present the suggestion with its confidence and supporting evidence, leaving the final decision to the clinician', true],
      ['Let the tool finalise diagnoses automatically to save time', false],
      ['Hide the model uncertainty so clinicians are not confused', false],
      ['Prevent clinicians from disagreeing with the model', false],
    ],
    vo: [
      'Hiển thị gợi ý kèm độ tin cậy và bằng chứng hỗ trợ, để bác sĩ đưa ra quyết định cuối cùng',
      'Để công cụ tự chốt chẩn đoán nhằm tiết kiệm thời gian',
      'Giấu mức bất định của mô hình để bác sĩ khỏi bối rối',
      'Không cho bác sĩ phản đối kết luận của mô hình',
    ],
    e: [
      'In high-stakes domains, AI should augment expert judgement rather than replace it, and the interface must communicate uncertainty honestly.',
      'Hiding uncertainty or removing the ability to override is the opposite of responsible design.',
    ],
    ve: [
      'Trong các lĩnh vực rủi ro cao, AI nên bổ trợ cho phán đoán chuyên gia chứ không thay thế nó, và giao diện phải truyền đạt mức bất định một cách trung thực.',
      'Giấu mức bất định hay tước quyền phản bác là điều ngược lại với thiết kế có trách nhiệm.',
    ],
  },
  {
    id: 150,
    topic: 'responsible-dims',
    type: 'single',
    q: [
      'A generative AI assistant occasionally produces confident but incorrect statements about product warranties.',
      'Which responsible AI dimension is most directly affected?',
    ],
    vq: [
      'Một trợ lý generative AI thỉnh thoảng đưa ra phát biểu tự tin nhưng sai về chính sách bảo hành sản phẩm.',
      'Chiều nào của AI có trách nhiệm bị ảnh hưởng trực tiếp nhất?',
    ],
    o: [
      ['Veracity and robustness', true],
      ['Sustainability of the training process', false],
      ['Cost optimisation', false],
      ['Multi-Region availability', false],
    ],
    vo: [
      'Veracity and robustness (đúng và bền vững)',
      'Tính bền vững của quá trình huấn luyện',
      'Tối ưu chi phí',
      'Tính sẵn sàng đa Region',
    ],
    e: [
      'Veracity is about the truthfulness of output; robustness is about staying correct under varied inputs. Confident falsehoods are a veracity failure.',
      'Grounding the assistant with RAG and adding human review for warranty claims are the practical remedies.',
    ],
    ve: [
      'Veracity nói về tính đúng đắn của đầu ra; robustness nói về việc vẫn đúng khi đầu vào thay đổi. Phát biểu sai nhưng tự tin là một thất bại về veracity.',
      'Cách khắc phục thực tế là neo trợ lý bằng RAG và thêm khâu con người xem xét với các yêu cầu bảo hành.',
    ],
  },
  {
    id: 151,
    topic: 'bias-detect',
    type: 'single',
    q: [
      'A model has been in production for a year. The team wants to know whether the live data has drifted away from what the model was trained on.',
      'Which capability should they use?',
    ],
    vq: [
      'Một mô hình đã chạy production được một năm. Nhóm thực hiện muốn biết dữ liệu thực tế có trôi khỏi dữ liệu huấn luyện hay không.',
      'Họ nên dùng năng lực nào?',
    ],
    o: [
      ['Amazon SageMaker Model Monitor', true],
      ['Amazon SageMaker Ground Truth', false],
      ['AWS Artifact', false],
      ['Amazon Translate', false],
    ],
    vo: [
      'Amazon SageMaker Model Monitor',
      'Amazon SageMaker Ground Truth',
      'AWS Artifact',
      'Amazon Translate',
    ],
    e: [
      'Model Monitor continuously checks data quality, model quality, bias drift, and feature attribution drift on a live endpoint, and raises alerts.',
      'Ground Truth labels data, Artifact delivers compliance reports, and Translate is a language service.',
    ],
    ve: [
      'Model Monitor liên tục kiểm tra chất lượng dữ liệu, chất lượng mô hình, trôi thiên lệch và trôi mức đóng góp đặc trưng trên endpoint đang chạy, đồng thời phát cảnh báo.',
      'Ground Truth gán nhãn dữ liệu, Artifact cung cấp báo cáo tuân thủ, còn Translate là dịch vụ ngôn ngữ.',
    ],
    refs: [{ label: 'SageMaker Model Monitor', url: `${DOC}/sagemaker/latest/dg/model-monitor.html` }],
  },
  {
    id: 152,
    topic: 'responsible-tradeoffs',
    type: 'multi',
    q: ['Which considerations belong to a responsible model-selection decision? (Choose TWO.)'],
    vq: ['Những cân nhắc nào thuộc về một quyết định chọn mô hình có trách nhiệm? (Chọn HAI.)'],
    o: [
      ['The environmental cost of running a very large model', true],
      ['Whether the model can be explained to the degree the industry requires', true],
      ['The number of social media followers of the model provider', false],
      ['The colour of the AWS console theme', false],
      ['The alphabetical order of the model name', false],
    ],
    vo: [
      'Chi phí môi trường của việc vận hành một mô hình rất lớn',
      'Mô hình có giải thích được ở mức mà ngành nghề yêu cầu hay không',
      'Số người theo dõi trên mạng xã hội của nhà cung cấp mô hình',
      'Màu giao diện của AWS console',
      'Thứ tự bảng chữ cái của tên mô hình',
    ],
    e: [
      'Sustainability and the required level of explainability are genuine responsible AI criteria alongside accuracy, cost, and safety.',
      'The other options are irrelevant to the quality or the ethics of the decision.',
    ],
    ve: [
      'Tính bền vững và mức độ giải thích được mà ngành yêu cầu là tiêu chí AI có trách nhiệm thực sự, bên cạnh độ chính xác, chi phí và mức an toàn.',
      'Các phương án còn lại không liên quan gì tới chất lượng hay khía cạnh đạo đức của quyết định.',
    ],
  },
  {
    id: 153,
    topic: 'human-centered',
    type: 'tf_table',
    q: ['Decide whether each statement about human oversight of AI systems is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về giám sát của con người với hệ thống AI là đúng hay sai.'],
    subs: [
      { p: 'High-risk decisions should keep a human reviewer in the loop.', o: ['True', 'False'], a: 0 },
      { p: 'Users should be told when they are interacting with an AI system.', o: ['True', 'False'], a: 0 },
      { p: 'Confidence scores should be hidden so users trust the system more.', o: ['True', 'False'], a: 1 },
    ],
    vsubs: [
      { p: 'Các quyết định rủi ro cao nên giữ một người xem xét trong vòng lặp.', o: ['Đúng', 'Sai'] },
      { p: 'Người dùng nên được cho biết khi họ đang tương tác với hệ thống AI.', o: ['Đúng', 'Sai'] },
      { p: 'Nên giấu điểm tin cậy để người dùng tin tưởng hệ thống hơn.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Human-in-the-loop review and AI disclosure are baseline responsible AI practices.',
      'Hiding uncertainty manufactures false trust — the opposite of transparency, and it removes the signal users need to decide when to double-check.',
    ],
    ve: [
      'Để con người xem xét trong vòng lặp và công bố rõ đây là AI là những thực hành có trách nhiệm ở mức cơ bản.',
      'Giấu mức bất định là tạo ra niềm tin giả — trái ngược với minh bạch, và nó lấy đi tín hiệu mà người dùng cần để biết khi nào phải kiểm chứng lại.',
    ],
  },
];
