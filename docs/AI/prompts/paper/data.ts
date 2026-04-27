export type PaperPromptModelId = 'gpt-5-5'

export const PAPER_PROMPT_PRIMARY_TAGS = [
  '写作',
  '润色',
  '翻译',
  '综述',
  '代码',
  '分析',
] as const

export type PaperPromptPrimaryTagId = (typeof PAPER_PROMPT_PRIMARY_TAGS)[number]

export interface PaperPromptLibraryModel {
  id: PaperPromptModelId
  label: string
  available: boolean
  description: string
}

export interface PaperPromptLibraryItem {
  id: string
  model: PaperPromptModelId
  title: string
  promptEn: string
  promptZh: string
  tags: string[]
  sourceTitle: string
  sourceUrl: string
  sourceDate: string
}

export const PAPER_PROMPT_LIBRARY_MODELS: PaperPromptLibraryModel[] = [
  {
    id: 'gpt-5-5',
    label: 'GPT-5.5',
    available: true,
    description: '论文辅助提示词',
  },
]

const SOURCE_TITLE = '社区整理'
const SOURCE_URL = 'https://github.com'
const SOURCE_DATE = '2026-04-27'

export const PAPER_PROMPT_LIBRARY_ITEMS: PaperPromptLibraryItem[] = [
  {
    id: 'paper-academic-polish',
    model: 'gpt-5-5',
    title: '学术论文润色',
    promptEn:
      'Please polish the following academic text for clarity, coherence, and formal tone. Fix grammar and awkward phrasing but preserve my original meaning. Do not change the technical terms. Output the revised version only:\n\n[ Paste your text here ]',
    promptZh:
      '请对以下学术文本进行润色，提升表达的清晰度、连贯性和正式感。修正语法和生硬表达，但保留原始含义。不要修改专业术语。只输出修改后的版本：\n\n[ 在此粘贴文本 ]',
    tags: ['润色', '写作'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-literature-review',
    model: 'gpt-5-5',
    title: '文献综述生成',
    promptEn:
      'I am writing a literature review on the topic of "[ Your Topic ]". Based on the following list of papers (titles and abstracts), help me:\n1. Group them into 3-5 thematic categories\n2. Write a 2-3 paragraph synthesis for each category comparing methods, findings, and limitations\n3. Identify research gaps\n\nPapers:\n[ Paste paper list here ]',
    promptZh:
      '我正在撰写关于「[ 你的主题 ]」的文献综述。根据以下论文列表（标题和摘要），请帮我：\n1. 将它们分为 3-5 个主题类别\n2. 为每个类别写 2-3 段综合分析，比较方法、发现和局限性\n3. 指出研究空白\n\n论文列表：\n[ 在此粘贴论文列表 ]',
    tags: ['综述', '写作'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-abstract-writing',
    model: 'gpt-5-5',
    title: '论文摘要撰写',
    promptEn:
      'Write a structured abstract (250-300 words) for the following research paper draft. The abstract should include: Background, Methods, Key Results, and Conclusion. Use clear and concise academic language:\n\n[ Paste your paper or outline here ]',
    promptZh:
      '为以下研究论文草稿撰写结构化摘要（250-300 字）。摘要应包含：背景、方法、主要结果和结论。使用清晰简洁的学术语言：\n\n[ 在此粘贴论文或大纲 ]',
    tags: ['写作', '分析'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-translation-en-zh',
    model: 'gpt-5-5',
    title: '论文英译中',
    promptEn:
      'Translate the following academic abstract from English to Chinese. Use standard Chinese academic terminology. Keep the translation accurate and formal. Preserve any citations as-is:\n\n[ Paste English text here ]',
    promptZh:
      '将以下学术摘要从英文翻译为中文。使用标准的中文术语。保持翻译准确、正式。引用保持原样：\n\n[ 在此粘贴英文文本 ]',
    tags: ['翻译', '写作'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-data-analysis-python',
    model: 'gpt-5-5',
    title: '数据分析代码',
    promptEn:
      'I have a dataset in CSV format with the following columns: [ describe columns ]. I want to:\n1. Clean missing values\n2. Compute descriptive statistics\n3. Generate a correlation heatmap\n4. Run a simple linear regression of [ Y ] on [ X ]\n\nWrite Python code using pandas, matplotlib, and scikit-learn. Add inline comments explaining each step.',
    promptZh:
      '我有一个 CSV 格式的数据集，包含以下列：[ 描述列名 ]。我想：\n1. 清洗缺失值\n2. 计算描述性统计\n3. 生成相关性热力图\n4. 对 [ Y ] 关于 [ X ] 做简单线性回归\n\n请用 pandas、matplotlib 和 scikit-learn 编写 Python 代码，并添加行内注释解释每一步。',
    tags: ['代码', '分析'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-experiment-design',
    model: 'gpt-5-5',
    title: '实验设计建议',
    promptEn:
      'I want to design an experiment to test the hypothesis: "[ Your Hypothesis ]". Please suggest:\n1. Independent and dependent variables\n2. Control variables\n3. Sample size estimation method\n4. A step-by-step experimental procedure\n5. Potential confounds and how to mitigate them',
    promptZh:
      '我想设计一个实验来验证假设：「[ 你的假设 ]」。请给出以下建议：\n1. 自变量和因变量\n2. 控制变量\n3. 样本量估算方法\n4. 逐步的实验流程\n5. 可能的混淆因素及应对方法',
    tags: ['写作', '分析'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-related-work-section',
    model: 'gpt-5-5',
    title: '相关工作章节',
    promptEn:
      'Help me write a "Related Work" section for my paper on "[ Your Topic ]". I have the following key references:\n\n[ List 5-8 paper titles with brief notes on each ]\n\nWrite 3-4 paragraphs that: compare and contrast existing approaches, highlight how they differ from my work, and position my contribution.',
    promptZh:
      '帮我写一篇关于「[ 你的主题 ]」的论文的"相关工作"章节。我有以下关键参考文献：\n\n[ 列出 5-8 篇论文标题及简要笔记 ]\n\n请写 3-4 段，对比现有方法、突出它们与我工作的区别，并定位我的贡献。',
    tags: ['综述', '写作'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'paper-response-to-reviewers',
    model: 'gpt-5-5',
    title: '审稿意见回复',
    promptEn:
      'I received the following reviewer comments on my paper. Help me draft a professional point-by-point response. For each comment:\n1. Acknowledge the concern\n2. Explain what we changed (or politely defend our choice)\n3. Indicate where in the revised manuscript the change was made\n\nReviewer comments:\n[ Paste comments here ]',
    promptZh:
      '我收到了以下审稿意见。帮我起草一份专业的逐条回复。对于每条意见：\n1. 确认问题\n2. 说明我们做了什么修改（或委婉地解释我们的选择）\n3. 指出修改稿中改动所在的位置\n\n审稿意见：\n[ 在此粘贴意见 ]',
    tags: ['写作', '润色'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
]
