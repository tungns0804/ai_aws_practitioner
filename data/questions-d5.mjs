/**
 * Domain 5 — Security, Compliance, and Governance for AI Solutions (14% đề thi).
 */

const DOC = 'https://docs.aws.amazon.com';
const AWS = 'https://aws.amazon.com';
const OWASP = 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';

export default [
  /* ------------------------------------------------------ iam-security */
  {
    id: 154,
    topic: 'iam-security',
    type: 'single',
    q: [
      'An application running on Amazon EC2 needs to invoke a model on Amazon Bedrock.',
      'What is the recommended way to grant access?',
    ],
    vq: [
      'Một ứng dụng chạy trên Amazon EC2 cần gọi mô hình trên Amazon Bedrock.',
      'Cách cấp quyền được khuyến nghị là gì?',
    ],
    o: [
      ['Attach an IAM role to the instance with only the required Bedrock permissions', true],
      ['Hard-code an access key and secret key in the application source', false],
      ['Use the AWS account root user credentials', false],
      ['Grant the application full administrator permissions', false],
    ],
    vo: [
      'Gắn IAM role vào instance với đúng những quyền Bedrock cần thiết',
      'Nhúng cứng access key và secret key vào mã nguồn ứng dụng',
      'Dùng thông tin đăng nhập của người dùng root trong tài khoản AWS',
      'Cấp cho ứng dụng toàn quyền quản trị',
    ],
    e: [
      'IAM roles provide temporary, automatically rotated credentials and follow least privilege. This is the standard AWS pattern.',
      'Hard-coded keys leak through source control, root credentials should never be used for workloads, and administrator access violates least privilege.',
    ],
    ve: [
      'IAM role cung cấp thông tin xác thực tạm thời, tự động xoay vòng và tuân theo đặc quyền tối thiểu. Đây là mô hình chuẩn của AWS.',
      'Khoá nhúng cứng bị lộ qua hệ thống quản lý mã nguồn, thông tin root không bao giờ nên dùng cho workload, và cấp quyền quản trị thì vi phạm đặc quyền tối thiểu.',
    ],
    refs: [{ label: 'AWS IAM', url: `${DOC}/IAM/latest/UserGuide/introduction.html` }],
  },
  {
    id: 155,
    topic: 'iam-security',
    type: 'single',
    q: ['Under the AWS shared responsibility model, who is responsible for configuring access controls on the data used to customise a model?'],
    vq: ['Theo mô hình trách nhiệm chung của AWS, ai chịu trách nhiệm cấu hình kiểm soát truy cập cho dữ liệu dùng để tuỳ biến mô hình?'],
    o: [
      ['The customer', true],
      ['AWS', false],
      ['The foundation model provider', false],
      ['No one, because access control is automatic', false],
    ],
    vo: [
      'Khách hàng',
      'AWS',
      'Nhà cung cấp foundation model',
      'Không ai cả, vì kiểm soát truy cập là tự động',
    ],
    e: [
      'AWS secures the infrastructure OF the cloud; the customer secures what they put IN the cloud — data, IAM policies, encryption settings, and network configuration.',
      'This split is tested repeatedly across AWS certifications.',
    ],
    ve: [
      'AWS bảo mật hạ tầng CỦA đám mây; khách hàng bảo mật những gì họ đưa VÀO đám mây — dữ liệu, chính sách IAM, thiết lập mã hoá và cấu hình mạng.',
      'Ranh giới này được kiểm tra đi kiểm tra lại trong các chứng chỉ AWS.',
    ],
  },
  {
    id: 156,
    topic: 'iam-security',
    type: 'multi',
    q: ['Which practices follow the principle of least privilege for an AI workload? (Choose TWO.)'],
    vq: ['Những thực hành nào tuân theo nguyên tắc đặc quyền tối thiểu cho workload AI? (Chọn HAI.)'],
    o: [
      ['Granting each role only the specific model-invocation actions it needs', true],
      ['Separating permissions for data scientists, deployment engineers, and end users', true],
      ['Giving every user the AdministratorAccess policy for convenience', false],
      ['Sharing one IAM user across the whole team', false],
      ['Disabling CloudTrail so permission changes are not recorded', false],
    ],
    vo: [
      'Chỉ cấp cho mỗi role đúng những hành động gọi mô hình mà nó cần',
      'Tách quyền cho nhà khoa học dữ liệu, kỹ sư triển khai và người dùng cuối',
      'Cấp policy AdministratorAccess cho mọi người dùng cho tiện',
      'Dùng chung một IAM user cho cả nhóm',
      'Tắt CloudTrail để không ghi lại các thay đổi về quyền',
    ],
    e: [
      'Least privilege means narrow, role-specific permissions and separation of duties.',
      'Blanket admin rights, shared identities, and disabled audit logging are all anti-patterns that destroy accountability.',
    ],
    ve: [
      'Đặc quyền tối thiểu nghĩa là quyền hẹp, gắn với vai trò cụ thể và có phân tách nhiệm vụ.',
      'Cấp quyền quản trị đại trà, dùng chung danh tính và tắt nhật ký kiểm toán đều là các phản mẫu phá huỷ khả năng quy trách nhiệm.',
    ],
  },

  /* --------------------------------------------------- data-protection */
  {
    id: 157,
    topic: 'data-protection',
    type: 'single',
    q: ['Which AWS service automatically discovers personally identifiable information stored in Amazon S3?'],
    vq: ['Dịch vụ AWS nào tự động phát hiện thông tin định danh cá nhân lưu trong Amazon S3?'],
    o: [
      ['Amazon Macie', true],
      ['Amazon GuardDuty', false],
      ['AWS Shield', false],
      ['Amazon Inspector', false],
    ],
    vo: ['Amazon Macie', 'Amazon GuardDuty', 'AWS Shield', 'Amazon Inspector'],
    e: [
      'Macie uses machine learning to discover and classify sensitive data such as PII in S3 buckets.',
      'GuardDuty detects threats from behaviour, Shield defends against DDoS, and Inspector scans workloads for vulnerabilities.',
    ],
    ve: [
      'Macie dùng machine learning để phát hiện và phân loại dữ liệu nhạy cảm như PII trong các bucket S3.',
      'GuardDuty phát hiện mối đe doạ qua hành vi, Shield chống DDoS, còn Inspector quét lỗ hổng cho workload.',
    ],
    refs: [{ label: 'Amazon Macie', url: `${DOC}/macie/latest/user/what-is-macie.html` }],
  },
  {
    id: 158,
    topic: 'data-protection',
    type: 'single',
    q: ['Which service is used to create and manage the encryption keys that protect data at rest for an AI workload?'],
    vq: ['Dịch vụ nào dùng để tạo và quản lý khoá mã hoá bảo vệ dữ liệu khi lưu trữ cho một workload AI?'],
    o: [
      ['AWS Key Management Service (KMS)', true],
      ['Amazon Route 53', false],
      ['AWS Step Functions', false],
      ['Amazon EventBridge', false],
    ],
    vo: [
      'AWS Key Management Service (KMS)',
      'Amazon Route 53',
      'AWS Step Functions',
      'Amazon EventBridge',
    ],
    e: [
      'KMS creates, stores, rotates, and audits the use of encryption keys, and integrates with S3, SageMaker, and Bedrock.',
      'Data in transit is protected separately by TLS.',
    ],
    ve: [
      'KMS tạo, lưu trữ, xoay vòng và ghi nhật ký việc sử dụng khoá mã hoá, đồng thời tích hợp với S3, SageMaker và Bedrock.',
      'Dữ liệu khi truyền được bảo vệ riêng bằng TLS.',
    ],
    refs: [{ label: 'AWS KMS', url: `${DOC}/kms/latest/developerguide/overview.html` }],
  },
  {
    id: 159,
    topic: 'data-protection',
    type: 'multi',
    q: ['Which measures protect sensitive data in a generative AI application? (Choose TWO.)'],
    vq: ['Những biện pháp nào bảo vệ dữ liệu nhạy cảm trong ứng dụng generative AI? (Chọn HAI.)'],
    o: [
      ['Masking or tokenising PII before it is included in a prompt', true],
      ['Encrypting data at rest with AWS KMS and in transit with TLS', true],
      ['Storing API keys inside the prompt text', false],
      ['Logging complete prompts containing customer PII to a public bucket', false],
      ['Allowing anonymous public access to the vector store', false],
    ],
    vo: [
      'Che hoặc token hoá PII trước khi đưa vào prompt',
      'Mã hoá dữ liệu khi lưu trữ bằng AWS KMS và khi truyền bằng TLS',
      'Lưu API key ngay trong nội dung prompt',
      'Ghi toàn bộ prompt chứa PII của khách hàng vào một bucket công khai',
      'Cho phép truy cập công khai ẩn danh vào kho vector',
    ],
    e: [
      'Minimising what sensitive data reaches the model, plus encryption everywhere, are the two core controls.',
      'The wrong options each create a direct data-exposure path.',
    ],
    ve: [
      'Giảm thiểu lượng dữ liệu nhạy cảm tới được mô hình, cộng với mã hoá ở mọi nơi, là hai biện pháp cốt lõi.',
      'Các phương án sai đều tạo ra một con đường lộ dữ liệu trực tiếp.',
    ],
  },
  {
    id: 160,
    topic: 'data-protection',
    type: 'single',
    q: [
      'A team must ensure that a SageMaker training job has no route to the public internet while still reading data from Amazon S3.',
      'Which configuration achieves this?',
    ],
    vq: [
      'Một nhóm phải bảo đảm job huấn luyện SageMaker không có đường ra internet công cộng nhưng vẫn đọc được dữ liệu từ Amazon S3.',
      'Cấu hình nào đạt được điều đó?',
    ],
    o: [
      ['Run the job in a private VPC subnet and reach S3 through a VPC endpoint', true],
      ['Attach an internet gateway to the training subnet', false],
      ['Make the S3 bucket publicly readable', false],
      ['Disable IAM authentication for the job', false],
    ],
    vo: [
      'Chạy job trong subnet riêng của VPC và truy cập S3 qua VPC endpoint',
      'Gắn internet gateway vào subnet huấn luyện',
      'Đặt bucket S3 thành công khai đọc được',
      'Tắt xác thực IAM cho job',
    ],
    e: [
      'VPC endpoints keep S3 traffic on the AWS network without exposing the workload to the internet.',
      'The other options either open internet access or remove access control entirely.',
    ],
    ve: [
      'VPC endpoint giữ lưu lượng tới S3 nằm trong mạng AWS mà không đưa workload ra internet.',
      'Các phương án còn lại hoặc mở đường ra internet, hoặc gỡ bỏ hoàn toàn kiểm soát truy cập.',
    ],
  },

  /* ------------------------------------------------- ai-security-tools */
  {
    id: 161,
    topic: 'ai-security-tools',
    type: 'single',
    q: ['Which service records API calls so an auditor can determine who invoked a Bedrock model and when?'],
    vq: ['Dịch vụ nào ghi lại các lời gọi API để kiểm toán viên xác định được ai đã gọi mô hình Bedrock và vào lúc nào?'],
    o: [
      ['AWS CloudTrail', true],
      ['Amazon CloudFront', false],
      ['AWS Batch', false],
      ['Amazon Comprehend', false],
    ],
    vo: ['AWS CloudTrail', 'Amazon CloudFront', 'AWS Batch', 'Amazon Comprehend'],
    e: [
      'CloudTrail is the audit log of AWS API activity — who did what, from where, and when. It is the standard answer for accountability and forensic questions.',
      'CloudWatch, by contrast, handles operational metrics and application logs.',
    ],
    ve: [
      'CloudTrail là nhật ký kiểm toán hoạt động API của AWS — ai làm gì, từ đâu, khi nào. Đây là đáp án chuẩn cho các câu hỏi về quy trách nhiệm và điều tra.',
      'Ngược lại, CloudWatch lo về chỉ số vận hành và log ứng dụng.',
    ],
    refs: [
      { label: 'AWS CloudTrail', url: `${DOC}/awscloudtrail/latest/userguide/cloudtrail-user-guide.html` },
    ],
  },
  {
    id: 162,
    topic: 'ai-security-tools',
    type: 'match',
    q: ['Match each security requirement with the AWS service that addresses it.'],
    vq: ['Ghép mỗi yêu cầu bảo mật với dịch vụ AWS đáp ứng được yêu cầu đó.'],
    subs: [
      {
        p: 'Detect anomalous behaviour that may indicate an account compromise',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
        a: 2,
      },
      {
        p: 'Scan compute workloads for software vulnerabilities',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
        a: 0,
      },
      {
        p: 'Block malicious web requests before they reach the application',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
        a: 3,
      },
      {
        p: 'Continuously evaluate whether resource configuration complies with rules',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
        a: 1,
      },
    ],
    vsubs: [
      {
        p: 'Phát hiện hành vi bất thường có thể là dấu hiệu tài khoản bị xâm nhập',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
      },
      {
        p: 'Quét lỗ hổng phần mềm trên các workload tính toán',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
      },
      {
        p: 'Chặn request web độc hại trước khi tới ứng dụng',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
      },
      {
        p: 'Liên tục đánh giá cấu hình tài nguyên có tuân thủ quy tắc hay không',
        o: ['Amazon Inspector', 'AWS Config', 'Amazon GuardDuty', 'AWS WAF'],
      },
    ],
    e: [
      'These four are commonly confused. Remember the verbs: GuardDuty detects threats, Inspector scans vulnerabilities, WAF blocks web traffic, Config evaluates configuration.',
    ],
    ve: [
      'Bốn dịch vụ này rất hay bị nhầm. Hãy nhớ theo động từ: GuardDuty phát hiện mối đe doạ, Inspector quét lỗ hổng, WAF chặn lưu lượng web, Config đánh giá cấu hình.',
    ],
  },
  {
    id: 163,
    topic: 'ai-security-tools',
    type: 'single',
    q: ['A security team wants a single place to view aggregated security findings from multiple AWS security services. Which service should they use?'],
    vq: ['Một đội bảo mật muốn có một nơi duy nhất để xem tổng hợp các phát hiện bảo mật từ nhiều dịch vụ bảo mật AWS. Nên dùng dịch vụ nào?'],
    o: [
      ['AWS Security Hub', true],
      ['Amazon SageMaker Studio', false],
      ['AWS Cost Explorer', false],
      ['Amazon Polly', false],
    ],
    vo: ['AWS Security Hub', 'Amazon SageMaker Studio', 'AWS Cost Explorer', 'Amazon Polly'],
    e: [
      'Security Hub aggregates findings from GuardDuty, Inspector, Macie, and partner tools into one prioritised view.',
      'The other services address ML development, cost analysis, and speech synthesis.',
    ],
    ve: [
      'Security Hub tổng hợp phát hiện từ GuardDuty, Inspector, Macie và công cụ của đối tác vào một màn hình đã được ưu tiên hoá.',
      'Các dịch vụ còn lại phục vụ phát triển ML, phân tích chi phí và tổng hợp giọng nói.',
    ],
  },

  /* ---------------------------------------------------- genai-threats */
  {
    id: 164,
    topic: 'genai-threats',
    type: 'single',
    q: ['Which framework specifically catalogues the top security risks of large language model applications?'],
    vq: ['Khung tham chiếu nào liệt kê cụ thể các rủi ro bảo mật hàng đầu của ứng dụng mô hình ngôn ngữ lớn?'],
    o: [
      ['OWASP Top 10 for Large Language Model Applications', true],
      ['PCI DSS', false],
      ['ISO 9001', false],
      ['The AWS Well-Architected cost pillar', false],
    ],
    vo: [
      'OWASP Top 10 for Large Language Model Applications',
      'PCI DSS',
      'ISO 9001',
      'Trụ cột chi phí của AWS Well-Architected',
    ],
    e: [
      'The OWASP LLM Top 10 covers prompt injection, insecure output handling, training data poisoning, model denial of service, supply chain risks, and more.',
      'PCI DSS covers card data, ISO 9001 is a quality management standard, and the cost pillar is about spending efficiency.',
    ],
    ve: [
      'OWASP LLM Top 10 bao gồm prompt injection, xử lý đầu ra thiếu an toàn, đầu độc dữ liệu huấn luyện, từ chối dịch vụ nhắm vào mô hình, rủi ro chuỗi cung ứng và nhiều mục khác.',
      'PCI DSS lo về dữ liệu thẻ, ISO 9001 là chuẩn quản lý chất lượng, còn trụ cột chi phí nói về hiệu quả chi tiêu.',
    ],
    refs: [{ label: 'OWASP Top 10 for LLM', url: OWASP }],
  },
  {
    id: 165,
    topic: 'genai-threats',
    type: 'single',
    q: [
      'An attacker repeatedly queries a deployed model to reconstruct information about the data it was trained on.',
      'What is this attack called?',
    ],
    vq: [
      'Kẻ tấn công liên tục truy vấn một mô hình đã triển khai để tái dựng thông tin về dữ liệu dùng huấn luyện nó.',
      'Kiểu tấn công này gọi là gì?',
    ],
    o: [
      ['Model inversion', true],
      ['Prompt engineering', false],
      ['Chain-of-thought prompting', false],
      ['Chunking', false],
    ],
    vo: ['Model inversion', 'Prompt engineering', 'Chain-of-thought prompting', 'Chunking'],
    e: [
      'Model inversion and membership inference attempt to recover training data or determine whether a specific record was in the training set.',
      'Controls include rate limiting, output filtering, monitoring for abnormal query patterns, and avoiding training on raw sensitive data.',
    ],
    ve: [
      'Model inversion và membership inference tìm cách khôi phục dữ liệu huấn luyện hoặc xác định một bản ghi cụ thể có nằm trong tập huấn luyện hay không.',
      'Biện pháp kiểm soát gồm giới hạn tốc độ truy vấn, lọc đầu ra, giám sát mẫu truy vấn bất thường và tránh huấn luyện trực tiếp trên dữ liệu nhạy cảm thô.',
    ],
  },
  {
    id: 166,
    topic: 'genai-threats',
    type: 'multi',
    q: ['Which risks are specific to generative AI systems rather than traditional applications? (Choose TWO.)'],
    vq: ['Những rủi ro nào là đặc thù của hệ thống generative AI chứ không phải ứng dụng truyền thống? (Chọn HAI.)'],
    o: [
      ['Prompt injection through user-supplied text', true],
      ['Poisoning of the data used to ground model answers', true],
      ['Physical theft of a data centre server', false],
      ['Expired TLS certificates on a load balancer', false],
      ['A misconfigured DNS record', false],
    ],
    vo: [
      'Prompt injection qua văn bản do người dùng cung cấp',
      'Đầu độc dữ liệu dùng để neo câu trả lời của mô hình',
      'Đánh cắp vật lý máy chủ trong trung tâm dữ liệu',
      'Chứng chỉ TLS hết hạn trên load balancer',
      'Bản ghi DNS bị cấu hình sai',
    ],
    e: [
      'Prompt injection and data poisoning exploit the fact that the model treats retrieved and supplied text as instructions or truth.',
      'Physical security, certificates, and DNS are general IT risks that exist with or without AI.',
    ],
    ve: [
      'Prompt injection và data poisoning khai thác đúng đặc điểm rằng mô hình coi văn bản được truy xuất và cung cấp là chỉ thị hoặc là sự thật.',
      'An ninh vật lý, chứng chỉ và DNS là rủi ro CNTT chung, tồn tại dù có AI hay không.',
    ],
  },
  {
    id: 167,
    topic: 'genai-threats',
    type: 'single',
    q: ['What is the purpose of red teaming a generative AI application before release?'],
    vq: ['Mục đích của việc red teaming một ứng dụng generative AI trước khi phát hành là gì?'],
    o: [
      ['Deliberately attempting to make the system fail or produce harmful output, so weaknesses are found before users do', true],
      ['Reducing the inference cost of the application', false],
      ['Increasing the size of the context window', false],
      ['Automatically translating the interface into more languages', false],
    ],
    vo: [
      'Cố tình tìm cách làm hệ thống thất bại hoặc sinh nội dung có hại, để phát hiện điểm yếu trước khi người dùng gặp phải',
      'Giảm chi phí suy luận của ứng dụng',
      'Tăng kích thước cửa sổ ngữ cảnh',
      'Tự động dịch giao diện sang nhiều ngôn ngữ hơn',
    ],
    e: [
      'Adversarial testing probes for jailbreaks, harmful content, data leakage, and injection paths under controlled conditions.',
      'It is a safety and security practice, not a cost or performance optimisation.',
    ],
    ve: [
      'Kiểm thử đối kháng dò tìm các lỗ hổng jailbreak, nội dung có hại, rò rỉ dữ liệu và đường tấn công injection trong điều kiện có kiểm soát.',
      'Đây là thực hành về an toàn và bảo mật chứ không phải tối ưu chi phí hay hiệu năng.',
    ],
  },

  /* -------------------------------------------------------- governance */
  {
    id: 168,
    topic: 'governance',
    type: 'single',
    q: ['What is data lineage?'],
    vq: ['Data lineage là gì?'],
    o: [
      ['A record of where data came from and how it was transformed along the way', true],
      ['The physical location of the data centre storing the data', false],
      ['The encryption algorithm applied to the data', false],
      ['The monthly cost of storing the data', false],
    ],
    vo: [
      'Bản ghi về nguồn gốc dữ liệu và các bước biến đổi nó đã trải qua',
      'Vị trí vật lý của trung tâm dữ liệu lưu dữ liệu đó',
      'Thuật toán mã hoá áp dụng cho dữ liệu',
      'Chi phí lưu trữ dữ liệu hằng tháng',
    ],
    e: [
      'Lineage answers "where did this number come from" and is essential for audits, reproducibility, and debugging a model.',
      'Physical location is data residency, which is a related but distinct governance concept.',
    ],
    ve: [
      'Lineage trả lời câu hỏi "con số này từ đâu ra" và là yếu tố thiết yếu cho kiểm toán, khả năng tái lập và gỡ lỗi mô hình.',
      'Vị trí vật lý là data residency, một khái niệm quản trị liên quan nhưng khác biệt.',
    ],
  },
  {
    id: 169,
    topic: 'governance',
    type: 'multi',
    q: ['Which elements belong to a data governance strategy for AI? (Choose TWO.)'],
    vq: ['Những thành phần nào thuộc chiến lược quản trị dữ liệu cho AI? (Chọn HAI.)'],
    o: [
      ['Defining data retention and deletion policies', true],
      ['Cataloguing datasets and recording their lineage', true],
      ['Allowing every employee unrestricted access to all datasets', false],
      ['Deleting audit logs at the end of each week', false],
      ['Storing production data only on personal laptops', false],
    ],
    vo: [
      'Định nghĩa chính sách lưu giữ và xoá dữ liệu',
      'Lập danh mục bộ dữ liệu và ghi lại nguồn gốc của chúng',
      'Cho mọi nhân viên truy cập không giới hạn vào tất cả bộ dữ liệu',
      'Xoá nhật ký kiểm toán vào cuối mỗi tuần',
      'Chỉ lưu dữ liệu production trên máy tính cá nhân',
    ],
    e: [
      'Retention policy and cataloguing with lineage are core governance components, alongside quality control, access control, and residency rules.',
      'Unrestricted access, log deletion, and uncontrolled local storage all defeat governance.',
    ],
    ve: [
      'Chính sách lưu giữ và lập danh mục kèm lineage là thành phần cốt lõi của quản trị dữ liệu, cùng với kiểm soát chất lượng, kiểm soát truy cập và quy định về nơi lưu trữ.',
      'Truy cập không giới hạn, xoá log và lưu trữ cục bộ không kiểm soát đều phá vỡ quản trị.',
    ],
  },
  {
    id: 170,
    topic: 'governance',
    type: 'single',
    q: [
      'A company needs a controlled process for approving models before they reach production, with a record of each version.',
      'Which capability supports this?',
    ],
    vq: [
      'Một công ty cần quy trình có kiểm soát để phê duyệt mô hình trước khi lên production, kèm bản ghi cho từng phiên bản.',
      'Năng lực nào hỗ trợ việc này?',
    ],
    o: [
      ['Amazon SageMaker Model Registry', true],
      ['Amazon S3 Glacier', false],
      ['AWS Lambda', false],
      ['Amazon SNS', false],
    ],
    vo: ['Amazon SageMaker Model Registry', 'Amazon S3 Glacier', 'AWS Lambda', 'Amazon SNS'],
    e: [
      'Model Registry versions models, stores their metadata, and carries an approval status used to gate deployment pipelines.',
      'Glacier is archival storage, Lambda is compute, and SNS is notification.',
    ],
    ve: [
      'Model Registry quản lý phiên bản mô hình, lưu metadata và mang trạng thái phê duyệt dùng để chặn hoặc mở luồng triển khai.',
      'Glacier là lưu trữ lâu dài, Lambda là dịch vụ tính toán, còn SNS là dịch vụ thông báo.',
    ],
    refs: [{ label: 'SageMaker Model Registry', url: `${DOC}/sagemaker/latest/dg/model-registry.html` }],
  },

  /* ----------------------------------------------- compliance-standards */
  {
    id: 171,
    topic: 'compliance-standards',
    type: 'single',
    q: ['Which regulation classifies AI systems by level of risk and imposes obligations accordingly?'],
    vq: ['Quy định nào phân loại hệ thống AI theo mức rủi ro và áp đặt nghĩa vụ tương ứng?'],
    o: [
      ['The EU AI Act', true],
      ['PCI DSS', false],
      ['ISO 9001', false],
      ['The AWS Acceptable Use Policy', false],
    ],
    vo: [
      'EU AI Act',
      'PCI DSS',
      'ISO 9001',
      'Chính sách sử dụng hợp lệ của AWS',
    ],
    e: [
      'The EU AI Act is the risk-tiered regulatory framework for AI systems in the European Union.',
      'PCI DSS governs payment card data and ISO 9001 covers quality management, neither of which is AI-specific.',
    ],
    ve: [
      'EU AI Act là khung pháp lý phân tầng theo rủi ro dành cho hệ thống AI trong Liên minh châu Âu.',
      'PCI DSS quản lý dữ liệu thẻ thanh toán và ISO 9001 nói về quản lý chất lượng, cả hai đều không dành riêng cho AI.',
    ],
  },
  {
    id: 172,
    topic: 'compliance-standards',
    type: 'single',
    q: ['A healthcare company in the United States processes patient records with an AI system. Which compliance framework applies?'],
    vq: ['Một công ty y tế ở Hoa Kỳ xử lý hồ sơ bệnh nhân bằng hệ thống AI. Khung tuân thủ nào áp dụng?'],
    o: [
      ['HIPAA', true],
      ['GDPR', false],
      ['PCI DSS', false],
      ['ISO 14001', false],
    ],
    vo: ['HIPAA', 'GDPR', 'PCI DSS', 'ISO 14001'],
    e: [
      'HIPAA governs protected health information in the United States. GDPR is the European personal-data regulation, PCI DSS covers card payments, and ISO 14001 is environmental management.',
      'Compliance requirements shape where data may be stored, who may access it, and what must be logged.',
    ],
    ve: [
      'HIPAA điều chỉnh thông tin y tế được bảo vệ tại Hoa Kỳ. GDPR là quy định về dữ liệu cá nhân của châu Âu, PCI DSS lo về thanh toán thẻ, còn ISO 14001 là quản lý môi trường.',
      'Yêu cầu tuân thủ định hình nơi dữ liệu được lưu, ai được truy cập và những gì phải được ghi nhật ký.',
    ],
  },
  {
    id: 173,
    topic: 'compliance-standards',
    type: 'tf_table',
    q: ['Decide whether each statement about AI compliance is true or false.'],
    vq: ['Xác định mỗi phát biểu sau về tuân thủ trong AI là đúng hay sai.'],
    subs: [
      { p: 'Compliance requirements can determine which AWS Region a workload must run in.', o: ['True', 'False'], a: 0 },
      { p: 'Using AWS transfers all compliance responsibility to AWS.', o: ['True', 'False'], a: 1 },
      { p: 'Some regulations require that automated decisions about individuals can be explained.', o: ['True', 'False'], a: 0 },
    ],
    vsubs: [
      { p: 'Yêu cầu tuân thủ có thể quyết định workload phải chạy ở AWS Region nào.', o: ['Đúng', 'Sai'] },
      { p: 'Dùng AWS là chuyển toàn bộ trách nhiệm tuân thủ sang cho AWS.', o: ['Đúng', 'Sai'] },
      { p: 'Một số quy định yêu cầu các quyết định tự động về cá nhân phải giải thích được.', o: ['Đúng', 'Sai'] },
    ],
    e: [
      'Data residency rules routinely dictate Region choice.',
      'Under the shared responsibility model, AWS provides compliant infrastructure but the customer remains accountable for how they use it.',
    ],
    ve: [
      'Quy định về nơi lưu trữ dữ liệu thường xuyên quyết định việc chọn Region.',
      'Theo mô hình trách nhiệm chung, AWS cung cấp hạ tầng tuân thủ nhưng khách hàng vẫn chịu trách nhiệm về cách mình sử dụng nó.',
    ],
  },

  /* -------------------------------------------- aws-governance-tools */
  {
    id: 174,
    topic: 'aws-governance-tools',
    type: 'single',
    q: ['An auditor asks for the AWS SOC 2 report. Where does the customer obtain it?'],
    vq: ['Một kiểm toán viên yêu cầu báo cáo SOC 2 của AWS. Khách hàng lấy nó ở đâu?'],
    o: [
      ['AWS Artifact', true],
      ['AWS Audit Manager', false],
      ['AWS CloudTrail', false],
      ['Amazon Macie', false],
    ],
    vo: ['AWS Artifact', 'AWS Audit Manager', 'AWS CloudTrail', 'Amazon Macie'],
    e: [
      'AWS Artifact is the self-service portal for downloading AWS compliance reports and agreements.',
      'Audit Manager is the opposite direction: it collects evidence about YOUR environment to produce YOUR audit reports.',
    ],
    ve: [
      'AWS Artifact là cổng tự phục vụ để tải báo cáo tuân thủ và các thoả thuận của AWS.',
      'Audit Manager đi theo chiều ngược lại: nó thu thập bằng chứng về MÔI TRƯỜNG CỦA BẠN để tạo BÁO CÁO KIỂM TOÁN CỦA BẠN.',
    ],
    refs: [{ label: 'AWS Artifact', url: `${DOC}/artifact/latest/ug/what-is-aws-artifact.html` }],
  },
  {
    id: 175,
    topic: 'aws-governance-tools',
    type: 'single',
    q: [
      'A company must continuously collect evidence that its AI workload meets a compliance framework and produce audit-ready reports.',
      'Which service should be used?',
    ],
    vq: [
      'Một công ty phải liên tục thu thập bằng chứng cho thấy workload AI của mình đáp ứng một khung tuân thủ và tạo báo cáo sẵn sàng cho kiểm toán.',
      'Nên dùng dịch vụ nào?',
    ],
    o: [
      ['AWS Audit Manager', true],
      ['AWS Artifact', false],
      ['Amazon Polly', false],
      ['AWS Step Functions', false],
    ],
    vo: ['AWS Audit Manager', 'AWS Artifact', 'Amazon Polly', 'AWS Step Functions'],
    e: [
      'Audit Manager automates evidence collection against prebuilt frameworks and assembles the resulting audit reports.',
      'This is the mirror image of Artifact, which delivers AWS own reports to you.',
    ],
    ve: [
      'Audit Manager tự động thu thập bằng chứng theo các khung dựng sẵn và lắp ghép thành báo cáo kiểm toán.',
      'Đây là hình ảnh phản chiếu của Artifact, vốn cung cấp cho bạn báo cáo của chính AWS.',
    ],
    refs: [{ label: 'AWS Audit Manager', url: `${DOC}/audit-manager/latest/userguide/what-is.html` }],
  },
  {
    id: 176,
    topic: 'aws-governance-tools',
    type: 'single',
    q: ['Which service continuously evaluates whether AWS resource configurations comply with defined rules?'],
    vq: ['Dịch vụ nào liên tục đánh giá xem cấu hình tài nguyên AWS có tuân thủ các quy tắc đã định hay không?'],
    o: [
      ['AWS Config', true],
      ['Amazon Kendra', false],
      ['AWS Glue', false],
      ['Amazon Textract', false],
    ],
    vo: ['AWS Config', 'Amazon Kendra', 'AWS Glue', 'Amazon Textract'],
    e: [
      'AWS Config records configuration state over time and evaluates it against rules, flagging non-compliant resources.',
      'Kendra is enterprise search, Glue is ETL, and Textract extracts document data.',
    ],
    ve: [
      'AWS Config ghi lại trạng thái cấu hình theo thời gian và đánh giá nó theo các quy tắc, đánh dấu những tài nguyên không tuân thủ.',
      'Kendra là tìm kiếm doanh nghiệp, Glue là ETL, còn Textract trích xuất dữ liệu tài liệu.',
    ],
    refs: [{ label: 'AWS Config', url: `${DOC}/config/latest/developerguide/WhatIsConfig.html` }],
  },
  {
    id: 177,
    topic: 'aws-governance-tools',
    type: 'multi',
    q: ['Which AWS resources help a team design a well-governed AI workload? (Choose TWO.)'],
    vq: ['Những tài nguyên nào của AWS giúp một nhóm thiết kế workload AI được quản trị tốt? (Chọn HAI.)'],
    o: [
      ['The AWS Well-Architected Framework and its Machine Learning Lens', true],
      ['AWS Trusted Advisor recommendations on security and cost', true],
      ['The Amazon retail product catalogue', false],
      ['The Amazon EC2 instance pricing page alone', false],
      ['Deleting all CloudTrail trails to simplify the environment', false],
    ],
    vo: [
      'AWS Well-Architected Framework và Machine Learning Lens của nó',
      'Khuyến nghị của AWS Trusted Advisor về bảo mật và chi phí',
      'Danh mục sản phẩm bán lẻ của Amazon',
      'Chỉ riêng trang giá instance của Amazon EC2',
      'Xoá toàn bộ trail của CloudTrail để đơn giản hoá môi trường',
    ],
    e: [
      'Well-Architected lenses give design guidance across operational excellence, security, reliability, performance, cost, and sustainability. Trusted Advisor checks a live account against best practices.',
      'Removing CloudTrail destroys the audit trail that governance depends on.',
    ],
    ve: [
      'Các lens của Well-Architected đưa ra hướng dẫn thiết kế xuyên suốt vận hành, bảo mật, độ tin cậy, hiệu năng, chi phí và tính bền vững. Trusted Advisor kiểm tra tài khoản đang chạy so với thực hành tốt nhất.',
      'Xoá CloudTrail là phá huỷ chính dấu vết kiểm toán mà quản trị phụ thuộc vào.',
    ],
    refs: [
      { label: 'AWS Well-Architected', url: `${AWS}/architecture/well-architected/` },
    ],
  },
];
