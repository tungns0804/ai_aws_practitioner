/**
 * Bản tiếng Anh của phần nội dung học (tiêu đề phần thi, tiêu đề chủ đề, mô tả tổng quan).
 * Tách riêng khỏi categories.ts để file gốc tiếng Việt không bị phình to.
 *
 * English copy for the study screen (domain titles, topic titles, overviews).
 * Kept apart from categories.ts so the Vietnamese source stays readable.
 */

export interface EnDomain {
  title: string;
  intro: string;
}

export interface EnTopic {
  title: string;
  overview: string;
}

export const DOMAIN_EN: Record<string, EnDomain> = {
  d1: {
    title: 'Fundamentals of AI and ML',
    intro:
      'The theory base: telling AI, ML and deep learning apart, the three learning styles, the lifecycle of a model, and the catalogue of AWS managed AI services. The exam loves giving a business scenario and asking which service fits — knowing what each service does is guaranteed marks.',
  },
  d2: {
    title: 'Fundamentals of Generative AI',
    intro:
      'Core generative AI concepts — tokens, embeddings, transformers, foundation models — plus the advantages and limitations (hallucination above all) and the AWS stack for building generative AI applications, with Amazon Bedrock at its centre.',
  },
  d3: {
    title: 'Applications of Foundation Models',
    intro:
      'The heaviest-weighted domain. It covers choosing a model, building RAG on a vector store, tuning inference parameters, writing effective prompts and defending against prompt risks, customising models and evaluating output quality.',
  },
  d4: {
    title: 'Guidelines for Responsible AI',
    intro:
      'The AWS dimensions of responsible AI, how to detect and mitigate bias, and why models need to be transparent and explainable. This domain is concept-heavy — learn the definitions well and the questions follow.',
  },
  d5: {
    title: 'Security, Compliance, and Governance for AI Solutions',
    intro:
      'Securing AI systems with the familiar AWS toolkit (IAM, KMS, Macie, PrivateLink…), plus data governance, auditability and regulatory compliance. Many questions here are foundational AWS security knowledge applied to an AI context.',
  },
};

export const TOPIC_EN: Record<string, EnTopic> = {
  /* ---------- d1 ---------- */
  'ai-terms': {
    title: 'Core terms: AI, ML, deep learning, neural networks',
    overview:
      'AI is the broadest idea — machines imitating human cognitive ability. ML is a branch of AI that learns rules from data instead of being hand-coded. Deep learning is a branch of ML built on multi-layer neural networks, strongest on unstructured data (images, audio, text). Remember the nesting: AI ⊃ ML ⊃ Deep learning ⊃ Generative AI. Two operations to keep apart: training (building the model from data) and inference (using the finished model to predict on new data).',
  },
  'ai-datatypes': {
    title: 'Types of data used in AI',
    overview:
      'Labeled data carries the right answer and is required for supervised learning; unlabeled data has features only. Structured data means tables, CSV and relational databases; semi-structured means JSON and XML; unstructured means images, video, audio and free text. Time-series data drives forecasting. A frequent question shape: which data type suits which technique — images/audio/free text lean to deep learning, numeric tables lean to classic ML.',
  },
  'ml-types': {
    title: 'Supervised, unsupervised and reinforcement learning',
    overview:
      'Supervised learning uses labeled data for classification (categorical output) and regression (continuous numeric output). Unsupervised learning uses unlabeled data for clustering, dimensionality reduction and anomaly detection. Reinforcement learning trains an agent by trial and error against a reward signal, used in robotics, games and operational optimisation. Spotting them: labels present → supervised; "group similar customers without knowing the groups" → unsupervised; "maximise reward over time" → reinforcement.',
  },
  'ai-when': {
    title: 'When AI/ML is and is not the right answer',
    overview:
      'Use AI/ML when the problem is too complex for hard-coded rules, when you need predictions from historical data, or when you must process unstructured data at scale. Avoid it when business rules are already clear and stable (if/else is cheaper and exact), when the result must be deterministic and fully explainable, when cost outweighs benefit, or when quality data is missing. This is a classic trap — sometimes the correct answer is "do not use ML".',
  },
  'ml-technique-select': {
    title: 'Choosing the right ML technique',
    overview:
      'Map the business problem to a technique: predicting price/sales/temperature → regression; spam filtering, approve-or-reject decisions, image labelling → classification; customer segmentation with unknown groups → clustering; product suggestions → recommendation; demand over time → forecasting; unusual transactions → anomaly detection; recognising objects in pictures → computer vision; understanding user intent in a conversation → NLP.',
  },
  'aws-ai-services': {
    title: 'The catalogue of AWS managed AI services',
    overview:
      'Learn this mapping — the exam asks it repeatedly. Comprehend: text analysis (sentiment, entities, language, PII). Translate: machine translation. Polly: text to speech. Transcribe: speech to text. Rekognition: image and video analysis. Textract: text, tables and key/value pairs out of scanned documents. Lex: intent-based chatbots. Personalize: personalised recommendations. Kendra: natural-language enterprise search. Fraud Detector: online fraud detection. Amazon Q: generative AI assistant for business users and developers.',
  },
  'ai-capabilities-limits': {
    title: 'Capabilities and limitations of AI solutions',
    overview:
      'Model predictions are probabilistic, never certainties — error is always present. Output quality is capped by training-data quality ("garbage in, garbage out"). Models decay as live data drifts away from the training distribution (data drift / model drift), so monitoring and retraining are mandatory. Weigh training cost, inference latency and the explainability your industry demands.',
  },
  'ml-pipeline': {
    title: 'The ML development lifecycle',
    overview:
      'The standard sequence: frame the business problem → collect data → EDA (explore, clean, visualise) → feature engineering → train and tune hyperparameters → evaluate → deploy → monitor. Two terms asked constantly: overfitting (the model memorises the training set and fails on new data) and underfitting (the model is too simple and fails on both). Data is normally split into training, validation and test sets.',
  },
  'sagemaker-tools': {
    title: 'SageMaker tools stage by stage',
    overview:
      'Data Wrangler: prepare and transform data through a visual interface. Feature Store: shared feature repository for training and inference. Ground Truth: data labelling, optionally with human labellers. Autopilot: automatic algorithm and hyperparameter selection. JumpStart: catalogue of ready models and solutions. Canvas: no-code model building. Model Registry: model versioning. Clarify: bias detection and prediction explanations. Model Monitor: quality monitoring of models already in production.',
  },
  'ml-metrics': {
    title: 'Model metrics and business metrics',
    overview:
      'Classification: accuracy (overall hit rate — misleading on imbalanced data), precision (of the predicted positives, how many were right — matters when false alarms are costly), recall (of the real positives, how many were caught — matters when misses are dangerous, e.g. disease screening), F1 (balance of the two), AUC-ROC. Regression: RMSE, MAE. Business metrics: operating cost, ROI, conversion rate, customer satisfaction.',
  },
  mlops: {
    title: 'MLOps and running models in production',
    overview:
      'MLOps brings DevOps practice to ML: pipeline automation, versioning of models and data, testing, repeatable deployment, monitoring and retraining. The goals are reproducibility, faster time to market and early detection of quality decay. Two deployment options worth remembering: real-time endpoints (low latency, always on, billed hourly) and batch transform (processed in bulk, cheaper, no instant response needed).',
  },

  /* ---------- d2 ---------- */
  'gen-terms': {
    title: 'GenAI terms: tokens, embeddings, transformers, diffusion',
    overview:
      'A token is the smallest unit a model processes (a word or word fragment) and is the billing unit on Bedrock. An embedding is a numeric vector representation of text or images that preserves meaning, so similar content sits close together in vector space — the basis of semantic search and RAG. Chunking splits long documents before embedding. The transformer architecture with its attention mechanism underpins LLMs; diffusion models underpin image generation. Multimodal means accepting or producing more than one data type (text plus images).',
  },
  'foundation-models': {
    title: 'Foundation models and LLMs',
    overview:
      'A foundation model (FM) is a very large model pre-trained on a huge corpus, general purpose, and adaptable to many tasks without retraining from scratch. An LLM is an FM specialised in language. The FM lifecycle: data selection → pre-training → optimisation (fine-tuning, RLHF) → evaluation → deployment → monitoring and feedback. Key point: an FM has a knowledge cutoff and knows nothing after its training data ends.',
  },
  'gen-usecases': {
    title: 'Common generative AI use cases',
    overview:
      'The most common families: document summarisation, code generation and explanation, customer-support chatbots, translation, image and video generation, semantic search, information extraction, marketing copy, synthetic data generation and personalised experiences. What they share: the output is new content, not a number or a label — if the task only needs a predicted value, classic ML is the right answer.',
  },
  'gen-advantages': {
    title: 'Advantages of generative AI',
    overview:
      'Adapts to new tasks through a prompt alone, with no labelling and no retraining. One model serves many tasks. Dramatically shortens time to market and lowers the technical barrier — non-programmers can use it. Natural-language interaction makes the experience familiar. With a managed service such as Bedrock, the business never operates GPU infrastructure itself.',
  },
  'gen-limits': {
    title: 'Limitations and risks of generative AI',
    overview:
      'Hallucination — the model invents convincing but false information; this is the most-asked limitation, and the standard mitigation is RAG (grounding the model in real sources) plus human review. Other limits: non-deterministic output (the same prompt can differ), poor inherent transparency, knowledge cutoff, high inference cost, leakage risk when sensitive data goes into prompts, and the ability to reproduce bias present in training data.',
  },
  'gen-business-metrics': {
    title: 'Business metrics for generative AI',
    overview:
      'Measure the value delivered, not just the model: customer satisfaction (CSAT), conversion rate, incremental revenue, employee productivity, chatbot self-service success rate, average handling time, ROI against token and infrastructure cost, and cross-domain performance (the model doing well across several subject areas). Technical metrics judge the model; business metrics decide whether the project continues.',
  },
  bedrock: {
    title: 'Amazon Bedrock',
    overview:
      'Bedrock is a fully managed service offering foundation models from several providers (Anthropic, Meta, Mistral, Cohere, Stability AI, Amazon Nova/Titan…) behind a single API, with no infrastructure to manage. The pieces to remember: Knowledge Bases (built-in RAG), Agents (multi-step task orchestration), Guardrails (blocking unwanted content), Model Evaluation (comparing models), and custom models (fine-tuning and continued pre-training). Your data is not used to retrain the base models.',
  },
  'genai-other-services': {
    title: 'SageMaker JumpStart, Amazon Q and PartyRock',
    overview:
      'SageMaker JumpStart: catalogue of foundation models and sample solutions deployed into your own account with full infrastructure control — pick it when you need deep customisation. Amazon Q Business: a generative AI assistant answering questions over internal company data. Amazon Q Developer: a coding assistant inside the IDE. PartyRock: a no-code playground for small generative AI apps, useful for learning and experimenting. Bedrock suits serverless API-driven apps; JumpStart suits full control of model and infrastructure.',
  },
  'genai-infra': {
    title: 'Compute: Trainium, Inferentia and GPUs',
    overview:
      'AWS Trainium: purpose-built chip optimised for training large models, cheaper than GPUs for the same workload. AWS Inferentia: optimised for inference with a low cost per inference. GPU instances (P and G families) are for CUDA libraries or models that do not yet support AWS silicon. Choose by purpose: training → Trainium/P; large-scale inference → Inferentia. Running generative AI on AWS also brings built-in security and compliance, elasticity, ecosystem integration and faster time to market.',
  },
  'genai-cost': {
    title: 'Cost and tradeoffs of generative AI choices',
    overview:
      'Bedrock bills mainly per token (input plus output). On-demand: pay per use, good for uneven traffic. Provisioned throughput: capacity bought in advance, steady latency, good for large steady traffic — but wasteful at low volume, and required for some customised models. Batch inference is cheaper than real time when instant answers are not needed. Cost drivers: long prompts, large context windows, larger models, fine-tuning. Savings: pick the smallest adequate model, trim prompts, cache results and cap output length.',
  },

  /* ---------- d3 ---------- */
  'fm-selection': {
    title: 'Criteria for choosing a foundation model',
    overview:
      'Weigh cost (price per token), latency (smaller models answer faster), modality (text only or multimodal), model size against task complexity, customisation support, context-window length, compliance constraints and Region availability. The rule: the smallest model that still meets the quality bar — cheaper and faster. The exam often frames "tight budget / needs instant response" where the answer is a smaller model, not the most powerful one.',
  },
  rag: {
    title: 'RAG and vector databases on AWS',
    overview:
      'RAG (Retrieval Augmented Generation) retrieves relevant documents from your own store and injects them into the prompt so the model answers from real sources. This is the standard way to reduce hallucination, refresh knowledge and answer over internal data WITHOUT fine-tuning. AWS vector stores: Amazon OpenSearch Service (including Serverless), Amazon Aurora PostgreSQL with pgvector, Amazon RDS for PostgreSQL, Amazon Neptune Analytics, Amazon DocumentDB and Amazon MemoryDB. Bedrock Knowledge Bases packages the whole ingest → chunk → embed → retrieve flow.',
  },
  'inference-params': {
    title: 'Inference parameters: temperature, top-p, top-k, length',
    overview:
      'Temperature controls randomness: low values (near 0) give stable, consistent output suited to extraction and factual answers; high values give varied, creative output suited to marketing copy. Top-p (nucleus sampling) and top-k limit the candidate token pool — lower them for tighter output. Response length / max tokens caps output length and directly affects cost. Stop sequences tell the model where to end. Note: temperature does not make a model more factually accurate, only less random.',
  },
  agents: {
    title: 'Agents and multi-step task orchestration',
    overview:
      'Agents let a model plan for itself, call external APIs or functions (action groups), query knowledge bases and chain the results across several steps until the request is complete. Use them when the task touches other systems (placing an order, checking a shipment, updating a database) rather than only generating text. Bedrock Agents handle the orchestration while you declare the actions through Lambda and an API schema.',
  },
  'prompt-basics': {
    title: 'The building blocks of a good prompt',
    overview:
      'A complete prompt carries: an instruction (the explicit request), context (background and reference data), input data (the content to work on), an output indicator (the shape you want back) and a negative prompt (what must not happen). The more specific the prompt — role, audience, tone, length, format — the more consistent the result. Prompt templates standardise and reuse prompts inside an application.',
  },
  'prompt-techniques': {
    title: 'Zero-shot, few-shot and chain-of-thought',
    overview:
      'Zero-shot: instruction only, no examples. Few-shot (in-context learning): supply a handful of input-output examples so the model copies the format and style — the cheapest way to lift quality without fine-tuning. Chain-of-thought: ask the model to lay out its reasoning step by step, effective on logic and multi-step arithmetic. Keep the distinction clear: few-shot puts examples in the prompt at run time; fine-tuning updates the model weights and costs far more.',
  },
  'prompt-risks': {
    title: 'Prompt risks and defences',
    overview:
      'Prompt injection: a user smuggles malicious instructions into the input to hijack the model. Jailbreaking: bypassing safety rails to produce forbidden content. Prompt leaking / exposure: the model reveals its system prompt or sensitive data. Poisoning: corrupting the reference data. Defences: separate system instructions from user data, filter input and output with Bedrock Guardrails, apply least privilege to every tool an agent can call, and never put secrets in a prompt.',
  },
  'fm-training': {
    title: 'Stages of training a foundation model',
    overview:
      'Pre-training: learning from a vast unlabeled corpus to acquire language and general knowledge — extremely expensive and almost never done in-house. Continued pre-training: training an existing model further on unlabeled domain data so it learns the vocabulary of a field. Fine-tuning: training further on labeled prompt-completion pairs so it excels at a specific task. Escalate in this order as quality demands rise: prompt engineering → RAG → fine-tuning → training from scratch (increasing cost).',
  },
  'fine-tune-methods': {
    title: 'Instruction tuning, domain adaptation, transfer learning, RLHF',
    overview:
      'Instruction tuning: teaching the model to follow instructions using a prompt-response dataset. Domain adaptation: steering the model toward a narrow field (medicine, law, finance). Transfer learning: reusing the knowledge of a trained model for a new task, saving data and time. RLHF (Reinforcement Learning from Human Feedback): humans rank outputs so the model learns human preference and safety norms — the step that teaches a model to behave. Watch for catastrophic forgetting: over-aggressive fine-tuning erases general ability.',
  },
  'training-data': {
    title: 'Preparing data for model customisation',
    overview:
      'Fine-tuning data must be labeled, in the required format (usually JSONL prompt/completion pairs), representative of real situations, deduplicated and stripped of sensitive information (PII). Quality beats quantity: a few hundred clean, consistent samples usually beat tens of thousands of noisy ones. Remember the steps: curation, labelling, governance (provenance and usage rights), representativeness, and holding out a separate evaluation set.',
  },
  'fm-eval': {
    title: 'Approaches to evaluating a foundation model',
    overview:
      'Two main routes: automatic evaluation against benchmark datasets, and human evaluation — mandatory for subjective criteria such as tone, helpfulness and safety. Bedrock Model Evaluation supports both: automatic evaluation with built-in or your own datasets, and human evaluation using your own workforce or an AWS-managed one. Always evaluate on data that reflects your real business rather than public benchmarks alone.',
  },
  'fm-metrics': {
    title: 'ROUGE, BLEU, BERTScore and perplexity',
    overview:
      'ROUGE measures overlap with a reference and is used for summarisation. BLEU is used for machine translation. BERTScore compares meaning through embeddings rather than exact words, so it recognises different phrasings of the same idea. Perplexity measures how "surprised" a model is by a text — lower is better. Memorise the mapping: summarisation → ROUGE, translation → BLEU, semantic similarity → BERTScore.',
  },
  'fm-business-fit': {
    title: 'Evaluating against business objectives',
    overview:
      'A high benchmark score does not mean a successful project. Measure with business metrics: user satisfaction, share of requests resolved without human help, average handling time, incremental revenue, cost per use and overall ROI. Add a feedback loop: collect real user ratings, analyse the failures and improve prompts or reference data.',
  },

  /* ---------- d4 ---------- */
  'responsible-dims': {
    title: 'The eight AWS dimensions of responsible AI',
    overview:
      'AWS names eight dimensions: fairness (equitable treatment across groups), explainability (being able to justify an output), privacy and security (protecting data), safety (preventing harmful output), controllability (being able to monitor and steer the system), veracity and robustness (correct and stable even on odd inputs), governance (meeting regulation and internal standards), and transparency (users know they are dealing with AI and understand its limits). The exam often describes a scenario and asks which dimension it violates.',
  },
  'bias-detect': {
    title: 'Detecting and mitigating bias',
    overview:
      'SageMaker Clarify is the dedicated tool: it detects bias both pre-training (in the data) and post-training (in the predictions), and explains how much each feature contributed. Bedrock Guardrails filter harmful content, denied topics and sensitive information on both input and output. SageMaker Model Monitor tracks data drift and quality drift in production. Amazon Augmented AI (A2I) puts humans in the loop to review low-confidence predictions.',
  },
  'dataset-quality': {
    title: 'Dataset quality and representativeness',
    overview:
      'A good dataset is balanced across groups, representative of the real user population, carefully curated and inclusive. Under-represented data produces models that fail minority groups — the most common source of bias. Two balance errors to remember: high bias causes underfitting (model too simple), high variance causes overfitting (model memorises the training data). Practical effects of bias: unfair outcomes, degraded accuracy for some groups and legal exposure for the business.',
  },
  'responsible-tradeoffs': {
    title: 'Tradeoffs in choosing a responsible model',
    overview:
      'Tighter safety rails can refuse legitimate requests (false refusal) and reduce usefulness; looser ones raise the risk of harmful content. Bigger models are usually more accurate but costlier, slower and more energy hungry — sustainability is itself a responsible-choice criterion. Highly explainable models (decision trees, linear regression) tend to be less accurate than deep networks, so regulated industries have to accept that tradeoff.',
  },
  explainability: {
    title: 'Explainability, interpretability, black box vs white box',
    overview:
      'Interpretability: understanding the internal mechanism of the model — highest in "white box" models such as linear regression or decision trees. Explainability: justifying a specific output even when the internals are a "black box" (deep networks, LLMs) — achievable through tools such as SHAP inside SageMaker Clarify. The classic tradeoff: the more complex the model, the more accurate and the harder to explain. Healthcare, finance and hiring usually require explainability by law.',
  },
  'transparency-tools': {
    title: 'Transparency tools: AI Service Cards and Model Cards',
    overview:
      'AWS AI Service Cards: public AWS documents describing intended use cases, limitations, responsible design choices and performance evaluation for each AI service. SageMaker Model Cards: where you record your own model — purpose, training data, evaluation metrics, known risks — for audit and handover. Also relevant: data lineage, open-source models that the community can inspect, and documenting system limits for end users.',
  },
  'human-centered': {
    title: 'Human-centered design for explainable AI',
    overview:
      'The principles: keep a human in the loop for high-risk decisions, design interfaces that convey confidence honestly, allow feedback and appeal, and always disclose AI-generated content. Amazon Augmented AI (A2I) implements this by routing predictions below a confidence threshold to human reviewers. Collected feedback also becomes training signal for later improvement.',
  },

  /* ---------- d5 ---------- */
  'iam-security': {
    title: 'IAM and least privilege',
    overview:
      'Use IAM roles instead of hard-coded keys, grant only the permissions needed (least privilege), and separate duties by role (data scientist, deployment engineer, end user). For Bedrock and SageMaker, control who may invoke which model through IAM policies; identity-based policies for principals, resource-based policies for resources. AWS IAM Identity Center centralises identity. Remember the shared responsibility model: AWS secures the cloud infrastructure, you secure your data and configuration.',
  },
  'data-protection': {
    title: 'Data protection: encryption, Macie, PrivateLink, VPC',
    overview:
      'Encrypt at rest with AWS KMS and in transit with TLS. Amazon Macie discovers sensitive data (PII) in S3 automatically. AWS PrivateLink and VPC endpoints keep traffic to Bedrock and SageMaker inside a private network instead of the public internet. SageMaker can run in a VPC with no internet route. A rule specific to generative AI: never place secrets or personal data in a prompt; anonymise or tokenise sensitive data before sending it to a model.',
  },
  'ai-security-tools': {
    title: 'Monitoring and defence services',
    overview:
      'GuardDuty: threat detection from anomalous behaviour. Inspector: vulnerability scanning for workloads. Security Hub: one place for aggregated security findings. AWS WAF and Shield: blocking application-layer attacks and DDoS in front of the AI application. CloudTrail: records every API call — the audit trail for who invoked which model and when. AWS Config: tracks and evaluates resource configuration against rules. CloudWatch: operational logs and metrics.',
  },
  'genai-threats': {
    title: 'Security concerns unique to generative AI',
    overview:
      'Threats specific to the field: prompt injection and jailbreaking, data poisoning (of training data or the reference store), model inversion and membership inference (recovering training data from outputs), model theft, data leakage through prompts, and third-party model supply-chain dependence. Frameworks worth naming: OWASP Top 10 for LLM Applications and MITRE ATLAS. Controls: input/output filtering, rate limiting, thorough logging and adversarial testing (red teaming) before production.',
  },
  governance: {
    title: 'Data and model governance',
    overview:
      'The components: data lineage (tracing origin and transformations), cataloguing (for example with the AWS Glue Data Catalog), data quality control, retention policy (keeping and deleting on schedule), residency (which geography the data must stay in) and role-based access. For models: version them in the Model Registry, write a Model Card, and require approval before production release.',
  },
  'compliance-standards': {
    title: 'Compliance standards and regulation',
    overview:
      'Standards the exam names: ISO 27001 and ISO 42001 (AI management systems), SOC 1/2/3, PCI DSS for card data, HIPAA for US health data, GDPR for European personal data, the EU AI Act which grades AI systems by risk, and algorithm accountability laws. The principle: compliance requirements drive deployment Region, data storage design and how explainable the model must be.',
  },
  'aws-governance-tools': {
    title: 'AWS tools for audit and compliance',
    overview:
      'AWS Artifact: download AWS compliance reports and certifications (SOC, ISO, PCI). AWS Audit Manager: automatically collect evidence and produce audit reports against a framework. AWS Config: assess whether resource configuration complies with rules. CloudTrail: the audit log of every API call. AWS Trusted Advisor: recommendations on security, cost and performance. The pair people confuse: Artifact GETS AWS reports, Audit Manager CREATES reports about your own systems.',
  },
};
