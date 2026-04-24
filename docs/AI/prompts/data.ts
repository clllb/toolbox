export type PromptModelId = 'gpt-image-2' | 'nano-banana-2'

export type PromptCategoryId =
  | 'portrait'
  | 'landscape'
  | 'poster'
  | 'manga'
  | 'infographic'
  | 'brand-visual'
  | 'education'
  | 'layout-experiment'

export interface PromptLibraryModel {
  id: PromptModelId
  label: string
  available: boolean
  description: string
}

export interface PromptLibraryItem {
  id: string
  model: PromptModelId
  category: PromptCategoryId
  title: string
  image: string
  promptEn: string
  promptZh: string
  tags: string[]
  sourceTitle: string
  sourceUrl: string
  sourceDate: string
}

export const PROMPT_LIBRARY_MODELS: PromptLibraryModel[] = [
  {
    id: 'gpt-image-2',
    label: 'GPT image 2',
    available: true,
    description: 'OpenAI 官方案例整理',
  },
  {
    id: 'nano-banana-2',
    label: 'nano banana 2',
    available: false,
    description: '内容整理中',
  },
]

const OPENAI_SOURCE_TITLE = 'Introducing ChatGPT Images 2.0'
const OPENAI_SOURCE_URL = 'https://openai.com/index/introducing-chatgpt-images-2-0/'
const OPENAI_SOURCE_DATE = '2026-04-21'

export const PROMPT_LIBRARY_ITEMS: PromptLibraryItem[] = [
  {
    id: 'gpt-image-2-coastal-portrait',
    model: 'gpt-image-2',
    category: 'portrait',
    title: '海边抓拍人像',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/3VrMCLQjYjUUfVVcBlTOhI/a462f7273824ca481de556fc4f64e350/ChatGPT_Image_Apr_21__2026__03_31_09_PM.png',
    promptEn:
      'Create a cinematic candid portrait of a person in a brown jacket looking back toward the camera at a coastal roadside overlook, with misty cliffs, ocean water, a parked car, overcast daylight, soft film texture, and natural windblown hair.',
    promptZh:
      '生成一张电影感抓拍人像：人物穿棕色夹克，在海边公路观景点回头看向镜头；背景有薄雾山崖、海面与停着的汽车；阴天自然光、轻微胶片颗粒、被海风吹乱的头发，整体真实克制。',
    tags: ['人像', '摄影'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-thai-city-panorama',
    model: 'gpt-image-2',
    category: 'landscape',
    title: '泰国城市全景街景',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/2igYgWqTB6w06TQ6jXkB15/e1d4f9dd4c13446c207060cfefadf428/Slide_16_9_-_42.png',
    promptEn:
      'Generate a wide panoramic daytime city scene in Thailand with multilane traffic, taxis, buses, motorbikes, shopping centers, tall buildings, Thai-language signage, bright daylight, and the visual realism of a stitched urban panorama.',
    promptZh:
      '生成一张泰国城市白天全景街景图：多车道交通、出租车、公交车、摩托车、商场、高楼与泰文招牌同时出现；光线明亮，画面具有真实城市摄影的宽幅拼接感。',
    tags: ['风景', '城市'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-kizuna-matcha-poster',
    model: 'gpt-image-2',
    category: 'poster',
    title: '抹茶新品开业海报',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/5qHdeM2ayl03B0LOqEbIbw/7bb211ef29ee5e6dcad0a1af9f8f391c/ChatGPT_Image_Apr_21__2026__01_35_56_PM.png',
    promptEn:
      'Design a polished cafe launch poster for Kizuna Matcha opening in Brooklyn Heights, featuring modern Japanese-inspired branding, soft editorial typography, a premium iced strawberry matcha hero product, clean lifestyle composition, and print-ready promotional hierarchy.',
    promptZh:
      '设计一张 Kizuna Matcha 在 Brooklyn Heights 开业的精致咖啡品牌海报：现代日式品牌气质、柔和的编辑感字体、一杯高质感草莓抹茶作为主视觉，整体清爽高级，具备可直接用于宣传的版式层级。',
    tags: ['海报', '品牌'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-editorial-poster',
    model: 'gpt-image-2',
    category: 'poster',
    title: '法式拼贴编辑海报',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/7JvLMQ4xw5RMWP5A1P0WoI/76ef8f1f018a8a8cd7555fe0e2a8f7a7/Slide_16_9_-_9.png',
    promptEn:
      'Create a vintage French New Wave-inspired editorial poster for GPT Image 2.0 using torn-paper collage, red blue black and cream tones, cinematic portraits, bold typography, street-photography fragments, and a strong graphic point of view.',
    promptZh:
      '生成一张受法国新浪潮启发的复古编辑海报，用撕纸拼贴、红蓝黑米色配色、电影感肖像、粗体标题和街头摄影碎片来表现 GPT Image 2.0，整体要有鲜明的平面观点与杂志封面感。',
    tags: ['海报', '版式'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-japanese-fantasy-manga',
    model: 'gpt-image-2',
    category: 'manga',
    title: '日文奇幻漫画分镜',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/6foL89PA8tMjyK5gsBn2v5/6d4339966d01d6cf61563429948ecc38/Slide_16_9_-_31.png',
    promptEn:
      'Create a dramatic manga-style fantasy comic page in Japanese showing a young adventurer discovering a glowing magical feather pen in ancient ruins, with cinematic paneling, dynamic effects, detailed fantasy environments, and readable Japanese lettering.',
    promptZh:
      '创作一页日文奇幻漫画：年轻冒险者在古代遗迹中发现一支会发光的魔法羽毛笔；需要电影式分镜、动态特效、细致的奇幻场景与清晰可读的日文文字。',
    tags: ['漫画', '日文'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-wolves-infographic',
    model: 'gpt-image-2',
    category: 'infographic',
    title: '北美狼群杂志信息图',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/rA6vavM9x8N4c8PNUgxVo/96184ee9d6d2ebe513f61f9e71fe8316/Slide_16_9_-_24.png',
    promptEn:
      'Design a magazine-style infographic spread about wolves in North America, with a hero wildlife photo of three gray wolves in snow, myth-versus-fact callouts, maps, statistics, educational illustrations, and editorial page hierarchy.',
    promptZh:
      '设计一组关于北美狼群的杂志式信息图版面：主图为雪地中的三只灰狼，同时包含 myth vs. fact 对照、地图、统计数据、教育插图与清晰的编辑排版层级。',
    tags: ['信息图', '杂志'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-product-campaign-board',
    model: 'gpt-image-2',
    category: 'brand-visual',
    title: '韩屋民宿品牌物料板',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/5bdRejGcJ61PZ5sz7w2abT/ba6db9f48ea0ad3f39db39f7cd2a5801/ChatGPT_Image_Apr_21__2026__03_31_54_PM.png',
    promptEn:
      'Create a premium hospitality campaign board for a Korean hanok stay, combining serene lifestyle photography, elegant Korean typography, brochure-style panels, warm natural light, and market-ready travel advertising composition.',
    promptZh:
      '制作一组高端韩屋民宿品牌视觉物料：结合安静松弛的生活方式摄影、优雅的韩文字体、 brochure 式多面板排版、温暖自然光与可直接商用的旅行广告构图。',
    tags: ['品牌视觉', '旅行'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-cantor-diagonal-diagram',
    model: 'gpt-image-2',
    category: 'education',
    title: '康托对角线证明图解',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/4DKxAnMQ4yD25ij6cs4D9N/cf3e31ec8388b48aef63775b2c5ff67f/Slide_16_9_-_17.png',
    promptEn:
      'Design an elegant educational infographic explaining Cantor’s diagonalization proof step by step, with numbered sections, mathematical notation, highlighted diagonal digits, and a clean academic poster layout.',
    promptZh:
      '设计一张优雅的教育信息图，分步骤讲解康托对角线证明：需要编号步骤、数学符号、被高亮的对角元素，以及清晰、学术化的海报式排版。',
    tags: ['教育内容', '数学'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-2025-trends-layout',
    model: 'gpt-image-2',
    category: 'layout-experiment',
    title: '2025 设计趋势版式板',
    image:
      'https://images.ctfassets.net/kftzwdyauwt9/1nQvAq6j5cBgLk4h0QF4jL/148c85fecd0234766f4b7977924a5797/Slide_16_9_-_5.png',
    promptEn:
      'Create a polished infographic board that highlights six major design trends for 2025, including Analog + AI, Shape-Driven Layouts, Opulent Minimalism, Motion-First Design, Refined Grit, and Nature x Tech, with modular cards and presentation-ready hierarchy.',
    promptZh:
      '制作一张 polished 的 2025 设计趋势信息板，展示 Analog + AI、Shape-Driven Layouts、Opulent Minimalism、Motion-First Design、Refined Grit、Nature x Tech 六个方向；采用模块化卡片和可演示的清晰层级。',
    tags: ['版式实验', '趋势'],
    sourceTitle: OPENAI_SOURCE_TITLE,
    sourceUrl: OPENAI_SOURCE_URL,
    sourceDate: OPENAI_SOURCE_DATE,
  },
]
