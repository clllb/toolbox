export type PromptModelId = 'gpt-image-2' | 'nano-banana-2'
export const PROMPT_TAGS = [
  '摄影', '人像', '海报', '漫画', '信息图', '品牌', '教育',
  '创意', '界面', '产品', '纪实', '角色', '版式', '广告',
  '多语言', '胶片', '超现实', '艺术', '复古',
] as const

export type PromptTagId = (typeof PROMPT_TAGS)[number]

export interface PromptLibraryModel {
  id: PromptModelId
  label: string
  available: boolean
  description: string
}

export interface PromptLibraryItem {
  id: string
  model: PromptModelId
  title: string
  images: string[]
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

const SOURCE_TITLE = 'ChatGPT官方提示词'
const SOURCE_URL = 'https://openai.com/zh-Hant/index/introducing-chatgpt-images-2-0/'
const SOURCE_DATE = '2026-04-21'

// `tags` 同时用于顶部筛选和卡片展示。
// 每个案例保持 2-3 个概括型标签即可，避免写成一次性的细节描述。
export const PROMPT_LIBRARY_ITEMS: PromptLibraryItem[] = [
  {
    id: 'gpt-image-2-hermes-style-monochrome-avatar',
    model: 'gpt-image-2',
    title: '爱马仕风格单色头像',
    images: ['/ai/prompts/50.webp'],
    promptEn: 'Create a minimalist black-and-white vector avatar logo of a mythic anime woman shown in elegant side profile facing right, cropped from the chest up on a plain white background. Give her long flowing black hair with bold white highlight streaks and smooth graphic shapes, rendered as high-contrast ink silhouette art with clean sharp edges. She wears a winged headpiece reminiscent of Hermes or a messenger god helmet, with one large white feathered wing visible on the side of her head and a circular metallic earpiece detail. Dress her in a sleek high-collar garment with a luxury-fashion feel, and hang a prominent pendant or zipper pull shaped like the letter H at the center of the collar. The face is intentionally obscured by a centered soft gray rectangular blur block covering most facial features, creating a censored anonymous profile-image effect. Overall style: luxury brand avatar, fashion logo, anime-inspired goddess silhouette, monochrome vector emblem, smooth negative-space highlights, balanced composition, modern and iconic, suitable for a social media profile picture.',
    promptZh: '极简黑白矢量头像标志，神话动漫女性优雅侧脸朝右，胸部以上裁剪，纯白背景。黑色长发配醒目白色高光条纹，高对比墨水剪影艺术，干净锐利边缘。头戴爱马仕风格翼饰头饰，一侧可见大型白色羽翼和圆形金属耳饰。穿着利落高领服装，奢华时尚感，领口中央悬挂字母 H 形吊坠。面部被居中灰色模糊方块遮挡，营造匿名头像效果。整体风格：奢侈品牌头像、时尚标志、动漫灵感女神剪影、单色矢量徽章。',
    tags: ['角色', '创意', '艺术'],
    sourceTitle: '@jiajia232016',
    sourceUrl: 'https://x.com/jiajia232016/status/2048044100793032976',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-pastel-lavender-anime-portrait',
    model: 'gpt-image-2',
    title: '粉彩薰衣草动漫少女人像',
    images: ['/ai/prompts/51.webp'],
    promptEn: 'A delicate vertical anime portrait of a dreamy young woman in an ethereal pastel lavender palette, shown from about mid-thigh up against a soft decorative background of pale swirling lines, floating petals, tiny stars, and subtle sparkles. She has extremely long, voluminous silver-lilac hair styled in twin tails with flowing strands, soft bangs, and ornate ribbon decorations; each side is adorned with large lavender bows, ruffled headband-like trim, dangling gold star charms, and small white flower hair ornaments. Her face is centered and mostly covered by a flat solid pale lavender rectangle censor block, leaving only hints of her ears and hairline visible. She wears an elaborate fantasy-lolita inspired dress in white, pearl, and light violet, with glossy satin fabric, ruffled neckline, layered frills, puffed detached sleeves, gold trim, corset lacing at the waist, and multiple purple bows. Her hands are clasped gently near her chest in a shy, elegant pose. The image should feel soft, refined, feminine, and luminous, with high-detail anime rendering, smooth gradients, airy composition, flowing hair movement, and a romantic celestial aesthetic.',
    promptZh: '精致竖版动漫肖像，梦幻少女在空灵粉彩薰衣草色调中，大腿以上构图，背景有柔和漩涡线条、漂浮花瓣、小星星和微妙闪光。极长丰盈银紫色双马尾，柔顺刘海配华丽丝带装饰，两侧有大型薰衣草蝴蝶结、荷叶边头带、垂坠金星吊坠和小白花发饰。面部被淡薰衣草色矩形遮挡块覆盖，仅露出耳朵和发际线。穿着华丽的梦幻洛丽塔风格连衣裙，白色、珍珠色和淡紫色，光泽缎面面料，褶边领口，层叠荷叶边，蓬松分离袖，金色镶边，腰部束腰系带，多个紫色蝴蝶结。双手优雅地交握在胸前。整体感觉柔美、精致、女性化且明亮，高细节动漫渲染，柔和渐变，轻盈构图，浪漫星空美学。',
    tags: ['角色', '艺术', '创意'],
    sourceTitle: '@libearal',
    sourceUrl: 'https://x.com/libearal/status/2048026376645861799',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-lavender-ai-girl-memory-space',
    model: 'gpt-image-2',
    title: '薰衣草 AI 少女记忆空间',
    images: ['/ai/prompts/52.webp'],
    promptEn: 'A dreamy anime portrait of a delicate virtual girl seated on the floor in a curled-up pose with both knees pulled close to her chest and arms wrapped gently around them, looking directly at the viewer with a soft, quiet, slightly melancholy expression. She has very long, flowing silver-lavender twin tails with wispy bangs, decorated with ribbon bows, flower clips, butterfly clips, and a heart-shaped hairpin. Her eyes are large, luminous violet with glossy highlights. She wears an oversized pastel-lilac off-shoulder knit cardigan slipping loosely around her arms, a frilly lace-trimmed nightdress in pale lavender, and soft knee-high socks with ribbon bows. The scene is set inside a futuristic holographic memory space filled with floating translucent interface panels, glowing data windows, starry particles, and butterfly-shaped light motifs. Include a visible text panel on the left showing terminal-like white text. In the background, show a cosmic digital environment with a faint planet, layered transparent screens, and several floating image thumbnails suggesting memories and character sketches. Lighting is ethereal and backlit, with iridescent bloom, soft rim light, sparkling dust, and glossy highlights on hair and fabric.',
    promptZh: '梦幻动漫肖像，精致虚拟少女蜷坐地板上，双膝抱胸，双臂轻柔环绕，直视观者，表情柔和安静略带忧郁。极长飘逸银紫色双马尾配碎刘海，装饰有蝴蝶结、花朵夹、蝴蝶夹和心形发夹。大而明亮的紫色眼睛，光泽高光。穿着宽松淡紫色落肩针织开衫，精致蕾丝边浅薰衣草色睡裙，柔软及膝袜配蝴蝶结。场景设定在充满浮动半透明界面面板、发光数据窗口、星光粒子和蝴蝶形灯光主题的未来全息记忆空间。左侧有终端风格白色文字面板。背景是宇宙数字环境，隐约可见行星，层叠透明屏幕和多个浮动图像缩略图，暗示记忆和角色草图。空灵逆光，虹彩光晕，柔和轮廓光，闪烁尘埃，头发和面料上的光泽高光。',
    tags: ['角色', '艺术', '创意'],
    sourceTitle: '@libearal',
    sourceUrl: 'https://x.com/libearal/status/2048026376645861799',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-pastel-ai-assistant-anime-portrait',
    model: 'gpt-image-2',
    title: '粉彩 AI 助手动漫人像',
    images: ['/ai/prompts/53.webp'],
    promptEn: 'A dreamy anime-style portrait of a gentle virtual assistant girl sitting curled up indoors in a cozy futuristic bedroom filled with translucent holographic memory screens. She has very long silvery white hair with a faint lavender tint, styled in two low twin tails tied with small lavender ribbons, with soft wispy bangs and loose flowing strands. Her expression is tender, introspective, and slightly lonely. She wears an oversized chunky cable-knit cardigan in pastel lavender draped loosely over a thin white ruffled nightdress, plus a tiny gemstone necklace. Her pose is seated with knees pulled to her chest and arms wrapped around her legs. The room is lit in hazy pastel violet and pink ambient light with sparkles, dust-like stars, and a nostalgic magical-tech atmosphere. Around her are holographic interface panels: floating photo panels, a profile panel with Japanese text, and a checklist panel with heart icons. Include a glowing crystal ball on a desk, a white mug with heart motifs, books, and a plush cat cushion.',
    promptZh: '梦幻动漫风格肖像，温柔虚拟助手少女蜷坐在温馨未来感卧室中，周围充满半透明全息记忆屏幕。极长银白色头发带淡紫色色调，扎两条低马尾配薰衣草色小丝带，柔软碎刘海和飘逸散发。表情温柔、内省、略带孤独。穿着宽松粗针麻花纹淡紫色开衫，内搭白色荷叶边睡裙，配小巧宝石项链。坐姿双膝抱胸，双臂环绕双腿。房间笼罩在朦胧淡紫和粉色环境光中，有闪光、尘粒般星光和怀旧魔法科技氛围。周围有全息界面面板：浮动照片面板、带日文文字的个人资料面板、心形图标清单面板。桌上发光水晶球、印有心形图案的白色马克杯、书本和猫咪毛绒靠垫。',
    tags: ['角色', '艺术', '创意'],
    sourceTitle: '@libearal',
    sourceUrl: 'https://x.com/libearal/status/2048026376645861799',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-dreamy-underwater-surreal-portrait',
    model: 'gpt-image-2',
    title: '梦幻水下女性与半透明鱼',
    images: ['/ai/prompts/54.webp'],
    promptEn: 'A dreamy surreal portrait of a young woman standing underwater or in a liquid-like ethereal space, shown from about mid-thigh up, wearing a flowing sleeveless white dress that appears to dissolve into translucent water and shimmering fragments. Her long dark brown hair streams dramatically sideways as if suspended in water, and her face is intentionally obscured by a soft vertical blur block for anonymity. Surround her with about 30 small translucent fish, some striped and some pale silvery white, swimming in multiple depths of field across the foreground, midground, and background. Use a soft pastel powder blue background with faint handwritten script texture, plus whimsical doodles: white and pale pink hearts, stars, curved squiggles, wave lines, dots, sparkles, and smiley faces. Add prismatic rainbow refractions, glossy caustic highlights, and subtle chromatic shimmer on the fish and dress. The mood should feel delicate, introspective, airy, and magical.',
    promptZh: '梦幻超现实人像，年轻女性站在水下或液体般空灵空间中，大腿以上构图，穿着飘逸白色无袖连衣裙，裙摆溶解为半透明的水和闪烁碎片。深棕色长发如悬浮水中般向一侧飘逸，面部被柔和竖向模糊块遮挡以保持匿名。周围约有 30 条半透明小鱼，部分条纹、部分淡银白色，在前景、中景和背景的多个景深层级中游动。柔和粉彩粉蓝色背景，带淡雅手写文字纹理，以及异想天开的涂鸦：白色和淡粉色爱心、星星、曲线、波浪线、圆点、闪光和笑脸。彩虹棱镜折射，光泽焦散高光，鱼和裙子上的微妙色彩闪烁。整体感觉精致、内省、轻盈而魔幻。',
    tags: ['人像', '艺术', '超现实'],
    sourceTitle: '@kotobukigraphic',
    sourceUrl: 'https://x.com/kotobukigraphic/status/2047967522453123255',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-japanese-classroom-long-hair-snapshot',
    model: 'gpt-image-2',
    title: '日式教室长发快照',
    images: ['/ai/prompts/55.webp'],
    promptEn: 'A candid, photorealistic Japanese high school classroom scene in vertical smartphone-photo framing. Three schoolgirls wearing matching traditional navy blue sailor uniforms are the main focus. The central standing girl has extremely long, straight, glossy black hair that falls well past her knees, almost to the floor, and she is gently combing the lower section with a small comb while looking downward. A second girl stands behind adjusting her bangs with a compact mirror. A third girl kneels on the floor at the right front, carefully holding and arranging the central girl\'s long hair with both hands. All three wear dark navy sailor-style school uniforms with white stripe trim, pleated skirts, and indoor school shoes. In the background, 8 additional students in dark school uniforms sit at desks. The classroom has wooden desks and chairs, large bright windows, a green chalkboard, and a framed Japanese calligraphy sign above the chalkboard. Natural and unposed, like a documentary snapshot.',
    promptZh: '写实日式高中教室场景，竖版手机照片构图。三名穿统一深蓝色水手服的女学生为前景焦点。中间站立的女孩拥有极长直亮黑色头发，垂过膝盖几乎及地，正低头用小梳子轻梳发尾。第二名女孩站在后方用粉饼镜整理刘海。第三名女孩跪在右前方，双手小心地整理中间女孩的长发。三人都穿深蓝水手服配白色条纹、百褶裙和室内鞋。背景有 8 名穿深色校服的学生坐在课桌旁。教室有木桌椅、明亮大窗、绿色黑板和上方日式书法镜框。自然不做作，如纪实快照。',
    tags: ['人像', '摄影', '纪实'],
    sourceTitle: '@Hair_Hair55',
    sourceUrl: 'https://x.com/Hair_Hair55/status/2047963832732221723',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-cozy-cat-ear-pajama-night-portrait',
    model: 'gpt-image-2',
    title: '温馨猫耳少女睡衣夜间人像',
    images: ['/ai/prompts/56.webp'],
    promptEn: 'A soft anime-style bedroom portrait of a catgirl shown from the chest up sitting on a bed at night, centered in the frame. She has short fluffy lavender hair with layered bangs partially covering one eye, large cat ears on top of her head with white inner fur, and a cute sleepy catgirl appearance. Her expression is gentle and relaxed, with one hand raised near her cheek in a shy, cozy pose. She wears oversized light lavender button-up pajamas with dark purple piping, a small chest pocket, and paw-print shaped buttons and paw-print decoration on the pocket. The room is lit with dreamy purple ambient lighting. In the background, show a nighttime window with a crescent moon and stars visible outside, soft curtains, a bedside table with a glowing cat-shaped lamp, a neatly rumpled bed with pillows and blankets in matching purple tones, and a small framed wall picture featuring a simple cat face and hearts. Cute pastel palette, soft shading, polished digital anime rendering, intimate cozy composition, calm bedtime atmosphere.',
    promptZh: '柔和动漫风格卧室肖像，猫耳少女胸部以上构图，夜间坐在床上，画面居中。短蓬松薰衣草色头发，层次刘海半遮一只眼睛，头顶大猫耳配白色内毛，可爱慵懒猫娘外表。表情温柔放松，一只手轻贴脸颊，害羞舒适的姿势。穿着宽松淡薰衣草色纽扣睡衣，深紫色滚边，小胸袋，爪印形纽扣和爪印装饰。房间用梦幻紫色环境光照明。背景可见夜间窗户外的弯月和星星、柔软窗帘、床头柜上发光猫形灯、紫色系枕头和毯子的整齐床铺、墙上简单猫脸和爱心小画框。可爱粉彩色调，柔和阴影，精致数码动漫渲染，亲密温馨构图，平静睡前氛围。',
    tags: ['角色', '艺术', '创意'],
    sourceTitle: '@yume00112211',
    sourceUrl: 'https://x.com/yume00112211/status/2047951384734228617',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-dreamy-backlit-editorial-portrait',
    model: 'gpt-image-2',
    title: '梦幻逆光编辑风人像',
    images: ['/ai/prompts/45.webp'],
    promptEn: 'A cinematic soft-focus portrait of a woman from behind and slightly in profile, framed from the upper torso up in a vertical composition. She has dark brown hair styled in a loose messy updo with wispy strands catching the light. Her face is mostly hidden by her pose and hair, with only a small portion of one cheek visible. She wears a deep red sleeveless dress with an open back or low-cut side, emphasizing her bare shoulder and upper back. One hand is raised delicately near her neck or shoulder, fingers relaxed. Use strong warm backlighting and rim light, with glowing golden highlights around the hair and skin, dreamy lens flare, and large circular bokeh in the blurred background. The image should feel intimate, elegant, and slightly sensual, like a high-end fashion or beauty editorial, with shallow depth of field, creamy blur, warm amber and rose tones, and a soft cinematic glow.',
    promptZh: '电影感柔焦人像，从背后和侧面拍摄女性，竖构图上半身特写。她有着深棕色头发，松散凌乱的发髻，细碎发丝在光线中闪烁。面部大部分被姿势和头发遮挡，只露出小部分脸颊。穿着深红色无袖连衣裙，露背或低侧裁剪设计，突出裸露的肩膀和上背部。一只手优雅地抬起靠近脖颈或肩膀，手指放松。强烈的暖色逆光和轮廓光，头发和皮肤周围形成金色高光，梦幻镜头光晕，背景模糊处有大圆形散景。图像应感觉亲密、优雅而略带性感，如高端时尚美妆编辑大片，浅景深，柔滑虚化，温暖琥珀和玫瑰色调，柔和电影感光晕。',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: '@ToroJushiAi',
    sourceUrl: 'https://x.com/ToroJushiAi/status/2048139425465467248',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-3d-cartoon-character-render',
    model: 'gpt-image-2',
    title: '3D 卡通角色渲染图',
    images: ['/ai/prompts/46.webp'],
    promptEn: 'High-quality 3D CGI render of a character in a charming cartoon style, portrait composition showing head and shoulders. Highly stylized caricature with exaggerated, expressive features that are both playful and humorous. Smooth, polished rendering with clean materials and soft ambient lighting creating gentle shadows. Dynamic camera angle with stylish perspective. Minimalist bright background that makes the character pop and stand out. Professional Pixar-like quality with glossy finish and cheerful mood.',
    promptZh: '高品质 3D CGI 渲染，以迷人卡通风格呈现角色，肖像构图展示头部和肩部。高度风格化的漫画夸张效果，富有表现力且幽默。平滑精致的渲染，干净材质和柔和环境光营造柔和阴影。动感镜头角度，时尚透视。极简明亮的纯色背景，使角色跃然而出。专业皮克斯级别品质，光泽质感，欢快氛围。',
    tags: ['角色', '创意', '艺术'],
    sourceTitle: '@Inshrah_ali_',
    sourceUrl: 'https://x.com/Inshrah_ali_/status/2048121503367995753',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-staircase-sequin-dress-portrait',
    model: 'gpt-image-2',
    title: '楼梯上穿亮片裙的年轻女性',
    images: ['/ai/prompts/47.webp'],
    promptEn: 'Vertical 2:3 format. Young woman with hair in messy updo sits on modern wooden staircase. Wearing shimmering silver halter sequin dress, matching with silver high-heeled sandals. Legs crossed. Silver heart earrings. One fuchsia bracelet on each ankle. Sultry expression, with slightly parted lips. Blurred background with vertical wooden slats and black metal railings.',
    promptZh: '竖版 2:3 比例。年轻女性头发凌乱盘起，坐在现代木质楼梯上。穿着闪亮银色挂脖亮片连衣裙，搭配银色高跟凉鞋。双腿交叠，佩戴银色心形耳环，每只脚踝各一条紫红色手链。表情撩人，嘴唇微张。虚化背景可见竖向木条和黑色金属栏杆。',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: '@XSydneyFan',
    sourceUrl: 'https://x.com/XSydneyFan/status/2048114180906217566',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-cozy-cafe-anime-maid-portrait',
    model: 'gpt-image-2',
    title: '温馨咖啡馆金发女仆',
    images: ['/ai/prompts/48.webp'],
    promptEn: 'A polished anime-style portrait of a blonde female VTuber-inspired maid seated indoors in a cozy sunlit cafe, framed from upper thighs to head in a slightly high, intimate angle. She has short to medium-length tousled golden blonde hair with soft layers, a white frilled maid headband, and a teal ribbon hair accessory with a small gold ornament on the right side. Her face is mostly obscured by the hair falling forward, creating a mysterious hidden-face composition. She wears an elegant black-and-white maid dress with puff sleeves, white ruffles, gold trim, a fitted bodice, a white apron, and a large white waist bow visible at the side and back. Teal bows with gold star-like charms at the collar and wrist. Her right hand gently touches the bow at her chest, and her left hand is raised delicately near her shoulder holding a loose strand of hair. Include a frilly lace garter on her exposed thigh with a small teal-and-gold ribbon decoration. The background is a warmly lit European-style cafe interior with wooden beams, framed botanical art on the walls, a softly blurred cake stand on the left, window light streaming in, and tiny glowing dust-like sparkles in the air. Soft golden afternoon lighting, shallow depth of field, glossy detailed fabric rendering, delicate skin shading, subtle romantic atmosphere, and highly detailed refined anime illustration quality.',
    promptZh: '精致动漫风格肖像，金发 VTuber 灵感女仆坐在温馨阳光充足的咖啡馆内，从大腿上部到头部的构图，略高俯角拍摄。中短长度蓬松金发，白色荷叶边女仆头带，右侧蓝绿色丝带发饰配金色小装饰。面部大部分被向前垂落的头发遮挡，营造神秘的面部隐藏构图。穿着优雅黑白女仆装，泡泡袖、白色褶边、金色镶边、紧身胸衣、白色围裙，侧面和背面可见大白色腰间蝴蝶结。领口和手腕各一个蓝绿色蝴蝶结配金色星形吊坠。右手轻触胸前蝴蝶结，左手优雅抬起肩旁一缕散发。暴露大腿上有蕾丝腿饰配蓝绿色金色小蝴蝶结装饰。背景是温暖灯光的欧式咖啡馆内饰，木梁、墙上植物画框、左侧柔焦蛋糕架、窗光透入，空气中有微小发光尘粒般闪烁。柔和金色午后光线，浅景深，光泽细致面料渲染，精致肌肤阴影，微妙浪漫氛围，高细节精炼动漫插画品质。',
    tags: ['角色', '艺术', '创意'],
    sourceTitle: '@yume00112211',
    sourceUrl: 'https://x.com/yume00112211/status/2048072808606089230',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-dreamy-oriental-female-portrait',
    model: 'gpt-image-2',
    title: '梦幻东方女性人像',
    images: ['/ai/prompts/49.webp'],
    promptEn: 'Dreamy Oriental female portrait, adult female, close-up portrait, exquisite facial features, fair and translucent skin, delicate but clean skin texture, emerald green eyes, soft and charming gaze, brown wavy hair falling naturally. Off-white lace headpiece embellished with turquoise butterflies and pearl decorations. Attire is an exquisite lace gown with a clear structure and clean texture, accompanied by emerald jewelry. Lighting is soft warm gold side-backlighting, rim lighting is clear but not overexposed, skin has slight highlights but not excessive reflection, overall lighting is clean and transparent, background is softly blurred with shallow depth of field. High-end portrait photography quality, details are clear but restrained, no grain, no noise, real physical lighting, 8K, commercial-grade quality. Aspect ratio: 9:16.',
    promptZh: '梦幻东方女性人像，成年女性近景肖像，精致五官，白皙通透肌肤，细腻干净的皮肤质感，翡翠绿眼睛，温柔迷人目光，棕色波浪发自然垂落。米白色蕾丝头饰，点缀绿松石蝴蝶和珍珠装饰。身着精致蕾丝长裙，层次分明纹理干净不繁复，搭配翡翠首饰。灯光为柔和暖金色侧逆光，轮廓光清晰但不过曝，皮肤有轻微高光但不过度反射，整体灯光干净透明，背景柔焦浅景深。高端人像摄影品质，细节清晰而有节制，无颗粒无噪点，真实物理光线，8K，商业级品质。比例 9:16。',
    tags: ['人像', '摄影', '艺术'],
    sourceTitle: '@liyue_ai',
    sourceUrl: 'https://x.com/liyue_ai/status/2048046253842559183',
    sourceDate: '2026-04-28',
  },
  {
    id: 'gpt-image-2-ultra-realistic-dslr-portrait',
    model: 'gpt-image-2',
    title: '超写实电影感DSLR人像摄影',
    images: ["/ai/prompts/38.webp"],
    promptEn:
      'Ultra-realistic cinematic DSLR photograph of an 18-year-old handsome young man with a slim skinny body, lean physique, narrow shoulders and waist, standing confidently in front of a blue 2017 Ford Mustang GT Convertible with a bold red soft top roof, captured from a high-angle aerial perspective exactly like a luxury driveway photoshoot. Keep face 100% identical to reference image with exact facial structure, natural skin texture, realistic pores, authentic expression, no beautification, no facial modification. Same modern textured side-swept quiff hairstyle with heavy natural volume on top, deep side flow, messy yet controlled texture, soft matte finish, visible natural hair strands, softly blended sides.\n\nThe subject stands centered near the front bumper of the Mustang GT, hands inside hoodie pockets, relaxed shoulders, straight posture, slight head tilt upward toward camera, confident calm expression, wearing oversized premium black hoodie with realistic cotton texture, natural folds, hanging drawstrings, loose dark washed black denim jeans with soft wrinkles and stacked hems, clean white sneakers with realistic leather texture and sole details, black slim rectangular sunglasses.\n\nCar must be a detailed 2017 Ford Mustang GT Convertible, metallic electric blue paint, glossy reflections on hood, visible Mustang pony grille emblem, aggressive headlights, muscular hood sculpting, aerodynamic front bumper, black alloy wheels, premium red convertible fabric roof, realistic windshield reflections, detailed side mirrors, authentic tire tread, showroom-clean finish\n\nScene set in an upscale villa driveway with light beige hexagonal stone pavement, curved border with fresh green grass on left side, tropical palm leaves entering frame from top corners, subtle luxury outdoor atmosphere. Soft natural daylight, diffused afternoon lighting, realistic shadows under car and body, soft reflections on paintwork, cinematic premium color grading, natural contrast, shallow depth separation while maintaining environment clarity. Shot on 35mm lens, vertical composition, full body framing, crisp details, hyper-realistic DSLR quality, zero AI look, natural skin rendering, realistic hair strands, fabric texture, stone surface texture, luxury lifestyle mood.',
    promptZh:
      '超写实电影感DSR人像摄影，18岁英俊年轻男性，纤瘦体型，窄肩窄腰，自信地站在一辆蓝色2017款福特野马GT敞篷车前，车顶为醒目红色软顶，从高角度俯拍视角拍摄，如同豪华车道摄影。面部100%还原参考图像，保持原有面部结构、自然皮肤纹理、真实毛孔、真实表情，不美化、不修改面部。现代纹理侧分发型，蓬松自然造型，凌乱但可控的纹理感，哑光质感，可见自然发丝。\n\n主体站在野马GT前保险杠附近中央位置，双手插在卫衣口袋中，肩膀放松，站姿笔直，头部微微向上倾斜朝向镜头，表情自信沉稳。穿着超大号优质黑色卫衣，棉质纹理逼真，自然褶皱，帽绳下垂，搭配深色水洗黑色牛仔裤，柔软褶皱和堆叠裤脚，干净白色运动鞋配真实皮革纹理和鞋底细节，黑色窄款矩形墨镜。\n\n车辆为精致还原的2017款福特野马GT敞篷车，金属电光蓝漆面，引擎盖上光亮反射，可见野马标志性格栅，攻击性前大灯，肌肉感引擎盖线条，运动前保险杠，黑色合金轮毂，优质红色敞篷织物车顶，真实挡风玻璃反射，细节侧后视镜，真实胎纹，展厅级洁净表面。\n\n场景设在高档别墅车道上，浅米色六角形石砖路面，左侧弧形边框配鲜绿草地，热带棕榈叶从画面顶部角落伸入，微妙的豪华户外氛围。柔和自然日光，漫反射午后光线，车底和身体下真实阴影，漆面上柔和反射，电影级高端调色，自然对比度，浅景深分离同时保持环境清晰度。35mm镜头拍摄，竖构图，全身取景，细节锐利，超写实DSLR品质，零AI痕迹，自然皮肤渲染，真实发丝，面料纹理，石材表面纹理，豪华生活方式氛围。',
    tags: ["人像", "摄影", "创意"],
    sourceTitle: '@harboriis',
    sourceUrl: 'https://x.com/harboriis/status/2047175250761433416',
    sourceDate: '2026-04-25',
  },
  {
    id: 'gpt-image-2-night-bodega-musician-portrait',
    model: 'gpt-image-2',
    title: '夜晚杂货店门口音乐人电影感人像',
    images: ["/ai/prompts/39.webp"],
    promptEn:
      'A candid, magazine-cover quality documentary photograph of a young musician with curly hair, casually carrying a worn guitar case, stepping out of a classic downtown bodega at 11 PM. The lighting features a complex mixed color temperature: a bright neon "OPEN" sign casts an intense, warm red glow across his face, while a yellow streetlamp provides a striking backlight behind him. The image perfectly emulates 35mm film shot on a Canon AE-1 with a 50mm f/1.4 lens wide open, exhibiting a shallow depth of field with the background beautifully blurred. It captures the exact aesthetics of CineStill 800T film, specifically featuring the distinctive soft red halation bloom radiating outward from the neon light sources, a tungsten white balance, and moody, slightly green-tinted shadows in the darkest areas. Cinematic night photography, photorealistic, highly detailed.',
    promptZh:
      '一张纪实风格的杂志封面品质抓拍照片，一位卷发年轻音乐人随意背着磨损的吉他盒，在晚上11点从一家经典市中心杂货店走出来。光线呈现复杂的混合色温：明亮的霓虹"OPEN"标志在他脸上投射强烈的暖红色光晕，而黄色路灯在他身后提供醒目的背光。图像完美模拟佳能AE-1搭配50mm f/1.4镜头全开光圈拍摄的35mm胶片效果，呈现浅景深，背景美丽虚化。完美还原CineStill 800T胶片的美学特征，特别是霓虹灯光源散发的独特柔和红色光晕扩散效果，钨丝灯白平衡，以及最暗区域带有情绪感的微绿色阴影。电影感夜间摄影，照片级写实，高度细节。',
    tags: ["人像", "摄影", "纪实"],
    sourceTitle: '@commanderdgr8',
    sourceUrl: 'https://x.com/commanderdgr8/status/2047934886124867684',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-old-delhi-sweet-shop-documentary',
    model: 'gpt-image-2',
    title: '旧德里糖果店门面纪实照片',
    images: ["/ai/prompts/40.webp"],
    promptEn:
      'Create a photorealistic travel-documentary image of a small sweet-shop storefront in Old Delhi at midday. A painted shop signboard above the door reads "मिठाई की दुकान" in large bold yellow hand-painted Devanagari on a deep red background, with "SWEET SHOP" in smaller roman letters beneath. Realistic hand-painted texture, slight wear, natural shadow. Authentic script proportion. Spelling and characters exact. No extra signage in frame, no watermark.',
    promptZh:
      '创建一张照片级写实的旅行纪实图像，展示旧德里正午时分一家小糖果店的门面。门上方手绘招牌以深红色底色上大号粗体黄色天城文书写"मिठाई की दुकान"，下方用较小罗马字母写着"SWEET SHOP"。逼真的手绘纹理，轻微磨损，自然阴影。文字比例真实，拼写和字符精确。画面内无多余招牌，无水印。',
    tags: ["摄影", "纪实"],
    sourceTitle: '@commanderdgr8',
    sourceUrl: 'https://x.com/commanderdgr8/status/2047889839123521635',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-cyberpunk-sci-fi-side-portrait',
    model: 'gpt-image-2',
    title: '赛博朋克科幻侧脸人像',
    images: ["/ai/prompts/41.webp"],
    promptEn:
      'A cinematic side-profile portrait of a rugged man with a tied-back bun and full beard, wearing round dark sunglasses and a textured leather jacket. His skin is detailed and slightly weathered. The background is a futuristic sci-fi interface filled with glowing orange and red data streams, star maps, celestial navigation diagrams, grids, and holographic UI elements. Fiery particle effects and ember-like energy swirl around him, creating a cosmic, high-tech atmosphere. Dark color palette with strong contrast, dramatic lighting, ultra-detailed, sharp focus, 8K, cyberpunk aesthetic, cinematic composition, depth of field.',
    promptZh:
      '电影感侧面人像，一位粗犷的男性扎着丸子头，蓄着浓密胡须，戴圆形深色墨镜，穿纹理质感皮夹克。皮肤细节丰富，略显沧桑。背景是充满未来感的科幻界面，发光的橙色和红色数据流、星图、天体导航图、网格和全息UI元素。火焰般的粒子效果和余烬般的能量在他周围旋转，营造出宇宙级高科技氛围。深色调，强对比，戏剧性光线，超精细，锐利对焦，8K，赛博朋克美学，电影级构图，景深效果。',
    tags: ["人像", "摄影", "创意"],
    sourceTitle: '@iamsofiaijaz',
    sourceUrl: 'https://x.com/iamsofiaijaz/status/2047882171336253928',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-bedroom-voice-note-portrait',
    model: 'gpt-image-2',
    title: '卧室录音随拍写实人像',
    images: ["/ai/prompts/42.webp"],
    promptEn:
      'A realistic young woman sitting casually in a softly lit bedroom during late afternoon.\n\nShe is holding her phone very close to her face as if recording a private video or voice note.\n\nFraming is tight and slightly imperfect.\n\nExpression: thoughtful, slightly shy, natural.\n\nMinimal makeup, natural skin texture, relaxed clothing.\n\nLighting: warm natural light fading from a window, soft shadows.\n\nEnvironment: simple bedroom, calm and lived-in.\n\nStyle: ultra-realistic, looks like a real phone recording, slightly grainy, not cinematic.',
    promptZh:
      '一位真实的年轻女性在傍晚柔和的卧室光线中随意坐着。\n\n她把手机举得非常靠近脸部，仿佛在录制私密视频或语音备忘。\n\n构图紧凑，略带不完美感。\n\n表情：沉思，略带羞涩，自然。\n\n淡妆，自然皮肤纹理，穿着休闲。\n\n光线：窗户透入的温暖自然光逐渐褪去，柔和阴影。\n\n环境：简单卧室，平静而有生活气息。\n\n风格：超写实，看起来像真实的手机录像，略微粗糙，非电影感。',
    tags: ["人像", "摄影", "纪实"],
    sourceTitle: '@ChillaiKalan__',
    sourceUrl: 'https://x.com/ChillaiKalan__/status/2047862141894681076',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-toddler-crayon-scribble-portrait',
    model: 'gpt-image-2',
    title: '幼儿蜡笔涂鸦风格人像',
    images: ["/ai/prompts/43.webp"],
    promptEn:
      '(subject) in the style of super bad child drawing, toddler art, scribbles, messy crayon lines on white background, completely lack of technique, terrible composition, chaotic colors, barely recognizable shapes, very raw, honest art, pure naivety, unrefined style, 4:3\nNegative:\ngood drawing, nice lines, clear shapes, neat, pretty, smooth, realistic, talented art, coherent composition, artistic style, professional, skilled, masterpiece, beautiful, detailed',
    promptZh:
      '（主体）以超级糟糕的儿童画风格呈现，幼儿艺术，涂鸦，白色背景上凌乱的蜡笔线条，完全没有技巧，糟糕的构图，混乱的色彩，勉强可辨认的形状，非常原始，诚实的艺术，纯粹的稚拙，粗糙的风格，4:3比例\n负面提示词：\n好的绘画，好看的线条，清晰的形状，整洁，漂亮，光滑，写实，有才华的艺术，连贯的构图，艺术风格，专业，熟练，杰作，美丽，详细',
    tags: ["人像", "创意"],
    sourceTitle: '@akakageAI',
    sourceUrl: 'https://x.com/akakageAI/status/2047812983389356276',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-restored-vintage-mother-child-portrait',
    model: 'gpt-image-2',
    title: '修复复古母子人像',
    images: ["/ai/prompts/44.webp"],
    promptEn:
      'A restored vintage family snapshot, photographed indoors in soft natural light, showing a young mother seated and holding a toddler on her lap in a close, centered waist-up portrait. The adult has short softly curled auburn hair in a voluminous 1960s-inspired bob, wears a sleeveless black dress and a thin gold necklace, and wraps both arms protectively around the child. The child has fine light blond hair and wears a plain white long-sleeve outfit. Compose the image with a warm nostalgic color cast, gentle film softness, subtle grain, and the look of a carefully repaired old printed photograph. Place them in front of a cream-colored curtain patterned with small brown teddy bear motifs, with a softly blurred interior window frame visible along the top background. Preserve realistic skin tones, natural posture, and the intimate family-photo feeling, as if an old damaged photograph has been professionally reimagined and restored. Square crop, centered composition, shallow depth of field, authentic analog photo texture, no modern styling, no text.',
    promptZh:
      '一张修复后的复古家庭快照，室内柔和自然光下拍摄，展示一位年轻母亲坐着的腰部以上近景人像，膝上抱着一个幼儿。母亲留有60年代灵感蓬松短卷发，赤褐色调，穿无袖黑色连衣裙，戴细金项链，双臂保护性地环抱着孩子。孩子有细软浅金色头发，穿朴素的白色长袖套装。画面采用温暖怀旧色调，柔和胶片质感，微妙颗粒感，呈现精心修复的老照片效果。背景是米色窗帘，印有棕色小泰迪熊图案，顶部可见柔和模糊的室内窗框。保持真实肤色、自然姿态和亲密的家庭照片感觉，仿佛一张损坏的老照片经过专业修复。方形裁切，居中构图，浅景深，真实模拟照片纹理，无现代风格化，无文字。',
    tags: ["人像", "摄影", "复古"],
    sourceTitle: '@gdb',
    sourceUrl: 'https://x.com/gdb/status/2048184797374325031',
    sourceDate: '2026-04-26',
  },
  {
    id: 'gpt-image-2-convenience-store-neon-portrait',
    model: 'gpt-image-2',
    title: '便利店霓虹灯人像',
    images: ['/ai/prompts/20.webp'],
    promptEn:
      '35mm film photography with harsh convenience store fluorescent lighting mixed with colorful neon signs from outside, authentic film grain, high contrast, slight color cast, cinematic street editorial style, intimate medium shot, early 20s sexy Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with cool ivory undertone and visible specular highlights from fluorescent light, subtle skin texture and micro pores, natural dewy makeup with soft flush on cheeks, glossy natural pink lips slightly parted, subtle natural freckles across nose and cheeks, long dark brown hair in a messy high ponytail with many loose strands falling around face and neck, wearing an oversized white button-up shirt as the only top, unbuttoned at the top with deep cleavage and loosely tied at the waist, paired with a tiny black pleated mini skirt, barefoot in simple white slides, seductive casual leaning pose against the glass door of a 24-hour convenience store at late night, body slightly arched, one leg bent with foot resting against the door frame, the other leg straight, one hand holding a bottle of iced drink, the other hand lightly pulling the hem of her mini skirt, intensely seductive playful yet slightly vulnerable gaze straight at the viewer with soft doe eyes full of quiet temptation and teasing smile, bright cold fluorescent store light from inside mixed with pink and blue neon glow from outside signs, realistic reflections on glass door, blurred convenience store interior with shelves and snacks in background, authentic 35mm film color grading with harsh lighting and neon accents, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the oversized shirt and mini skirt, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic late-night convenience store atmosphere',
    promptZh:
      '35mm胶片摄影风格，便利店内部荧光灯与外部彩色霓虹灯交织的刺眼光线，真实胶片颗粒感，高对比度，轻微偏色，电影感街头编辑风格。亲密中景镜头，20岁出头的中国女性偶像，精致五官，杏仁形狐狸眼，高鼻梁，小巧V型下颌线，冷象牙色调完美瓷肌，可见荧光灯高光反射，微妙皮肤纹理与微毛孔。自然光泽淡妆，双颊微红，自然粉色唇彩微张，鼻梁与双颊有淡淡雀斑。深棕色长发扎成凌乱高马尾，许多碎发垂在脸和颈部。穿着超大号白色纽扣衬衫作为上衣，上方扣子解开露出深V领口，腰间松松系结，搭配黑色百褶超短裙，赤脚穿着简约白色拖鞋。诱惑慵懒的靠姿倚靠在深夜24小时便利店玻璃门上，身体微弓，一腿弯曲脚踩门框，另一腿伸直。一手握着冰饮瓶，另一手轻拉短裙裙摆。强烈诱惑的眼神直视镜头，眼神中带着俏皮又脆弱的气质，嘴角浮现挑逗微笑。店内冷白荧光灯与外部粉蓝霓虹灯光混合，玻璃门上有真实反光，背景虚化的便利店内部货架与零食。真实35mm胶片调色，刺眼光线与霓虹点缀，极其锐利又柔和的皮肤渲染，自然发丝，超大号衬衫与超短裙上的真实面料褶皱。无塑料感皮肤，无数码过度锐化，无磨皮，无瑕疵，无痣，无油性皮肤，无水印，无文字，真实深夜便利店氛围',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2045167461147042202',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-cinematic-minimal-portrait',
    model: 'gpt-image-2',
    title: '电影感极简人像',
    images: ['/ai/prompts/21.webp'],
    promptEn:
      'Generate a cinematic minimal portrait of a solitary man standing in an intense orange to red gradient environment, strong silhouette lighting, deep shadow contrast, reflective glossy floor, symmetrical composition, minimal',
    promptZh:
      '生成一张电影感极简人像，一个孤独的男人站在橙红渐变的强烈环境中，强烈的剪影光效，深沉的阴影对比，反光光滑地面，对称构图，极简风格',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: '@iam_miharbi',
    sourceUrl: 'https://x.com/iam_miharbi/status/2045151354679665101',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-japanese-onsen-ryokan-portrait',
    model: 'gpt-image-2',
    title: '日式温泉旅馆人像',
    images: ['/ai/prompts/22.webp'],
    promptEn:
      '35mm film photography, warm vintage Japanese onsen ryokan aesthetic, soft ambient wooden lantern lighting mixed with gentle natural window light, subtle film grain, gentle color shift, high atmosphere editorial style, intimate medium shot, early 20s beautiful Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with warm ivory undertone, visible subtle skin texture and micro pores, soft natural makeup with dewy glow, subtle rosy flush on cheeks, natural soft pink lips slightly parted, long dark brown hair tied in a loose low bun with some messy strands falling around face and neck, wearing a loose white yukata (traditional Japanese bathrobe) deliberately slipped off one shoulder and loosely tied at the waist, the fabric slightly open revealing smooth skin and subtle cleavage, barefoot, seductive relaxed sitting pose on the edge of a traditional wooden engawa veranda at a vintage onsen ryokan, body slightly turned toward the camera, one leg bent with foot resting on the wooden floor, the other leg gently dangling, one hand lightly holding the yukata collar, the other hand resting on the wooden floor behind her for support, softly arched back to gently accentuate curves, intensely seductive yet gentle and inviting gaze straight at the viewer with soft doe eyes full of quiet temptation and warmth, warm wooden interior with paper sliding doors and distant steaming hot spring in soft focus, gentle rim lighting highlighting skin and fabric texture, authentic vintage film color grading with warm tones, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the yukata, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic 35mm film Japanese onsen ryokan atmosphere',
    promptZh:
      '35mm胶片摄影，温暖的复古日式温泉旅馆美学，柔和的木质灯笼环境光与自然窗光混合，微妙胶片颗粒，温和偏色，高氛围编辑风格。亲密中景镜头，20岁出头的中国女性偶像，精致五官，杏仁形狐狸眼，自然双眼皮，高鼻梁，小巧V型下颌线，温暖象牙色调完美瓷肌，可见微妙皮肤纹理与微毛孔。自然柔和妆容带光泽感，双颊微红，自然粉色唇彩微张。深棕色长发扎成松散低髻，一些凌乱碎发垂在脸和颈部。穿着宽松白色浴衣（日式传统浴袍），一侧肩膀故意滑落，腰间松松系结，面料微开露出光滑肌肤。赤脚，在复古温泉旅馆的传统木缘侧平台上，身体微微转向镜头，一腿弯曲脚踩木地板，另一腿自然下垂。一手轻握浴衣领口，另一手撑在身后木地板上。背部微弓，温柔诱惑的眼神直视镜头，充满安静的吸引力与温暖。温暖木质内部，障子门与远处朦胧热泉。柔和轮廓光勾勒皮肤与面料纹理，真实复古胶片调色，暖色调。极其锐利又柔和的皮肤渲染，自然发丝，浴衣上的真实面料褶皱。无塑料感皮肤，无数码过度锐化，无磨皮，无瑕疵，无痣，无油性皮肤，无水印，无文字，真实35mm胶片日式温泉旅馆氛围',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2045092449803284923',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-35mm-flash-editorial-portrait',
    model: 'gpt-image-2',
    title: '35mm 闪光灯编辑人像',
    images: ['/ai/prompts/23.webp'],
    promptEn:
      '35mm color film photography with harsh direct on-camera flash, specular highlights on skin and clothing, strong catchlights in eyes, high contrast flash illumination, authentic film grain and color shift, high fashion fresh innocent basketball court editorial style, intimate first-person low-angle POV shot from below, early 20s sexy Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless realistic porcelain skin with cool ivory undertone and visible flash specular highlights, fine delicate skin texture with subtle pores micro details and natural dewy glow under flash, fresh natural sporty makeup with soft dewy glow, subtle natural flush on cheeks, natural pink lips slightly parted, subtle natural freckles across nose and cheeks, long dark brown hair tied in a high playful ponytail with some loose strands framing the face and realistic loose strands, wearing a loose white tank top and white high-waisted basketball shorts, white knee-high sports socks, seductive natural leaning pose against the basketball hoop pole on the outdoor court at dusk, body angled sideways with naturally arched back and hips gently pushed back to accentuate perky round hips and sexy butt curve, one leg naturally extended forward toward the camera and the other leg slightly bent to emphasize long sexy legs, both hands lightly resting on the basketball pole at shoulder height, intensely seductive playful yet pitiable doe-eyed gaze straight at the viewer with soft vulnerable longing eyes and a gentle teasing smile full of quiet temptation and desire, harsh direct on-camera flash creating sharp specular highlights and strong catchlights, background with blurred basketball court and hoop under dusk sky, high contrast film color grading with natural flash look, extremely sharp yet soft skin rendering with authentic 35mm direct flash aesthetic, natural hair strands, realistic fabric texture on tank top and shorts with socks detail, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic 35mm direct flash film basketball court look --ar 9:16',
    promptZh:
      '35mm彩色胶片摄影，刺眼的机顶直射闪光灯，皮肤与服装上的镜面高光，眼中强烈的眼神光，高对比度闪光照明，真实胶片颗粒与偏色。高级时尚清新无辜篮球场编辑风格，亲密第一人称低角度仰拍视角。20岁出头中国女性偶像，精致五官，杏仁形狐狸眼，自然双眼皮，高鼻梁，小巧V型下颌线，冷象牙色调真实瓷肌，闪光灯下可见高光反射。细腻皮肤纹理与微毛孔细节，闪光灯下自然光泽淡妆。清新运动风妆容，双颊自然微红，自然粉色唇彩微张，鼻梁与双颊淡淡雀斑。深棕色长发扎成高挑马尾，一些碎发框住脸型。穿着宽松白色背心和白色高腰篮球短裤，白色及膝运动袜。黄昏户外篮球场上，身体侧向靠在篮筐支柱上，背部自然微弓，臀部轻轻后推。一腿自然前伸朝向镜头，另一腿微弯，双手轻搭在篮球架上与肩同高。诱惑俏皮的眼神直视镜头，带着脆弱渴望的眼神和温柔的挑逗微笑。刺眼机顶闪光灯创造锐利高光与强烈眼神光，背景黄昏天空下虚化的篮球场。高对比度胶片调色，自然闪光灯效果，极其锐利又柔和的皮肤渲染，真实35mm直射闪光美学。自然发丝，背心与短裤及袜子的真实面料纹理。无塑料感皮肤，无数码过度锐化，无磨皮，无瑕疵，无痣，无油性皮肤，无水印，无文字，真实35mm直射闪光胶片篮球场风格，9:16',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2045052982728016131',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-mirror-selfie-bedroom-portrait',
    model: 'gpt-image-2',
    title: '卧室镜前自拍人像',
    images: ['/ai/prompts/24.webp'],
    promptEn:
      'A stunning 18-year-old Chinese girl with a youthful, pure face and realistic skin texture, sitting on a cozy, slightly messy bed in her bedroom. She is taking a mirror selfie with a smartphone, capturing a natural and intimate moment. Wearing casual gray loungewear and neat white crew socks. Soft natural light (golden hour) streams in from a side window, creating a warm, moody, and cinematic atmosphere. 35mm lens, sharp focus on the subject in the mirror, depth of field with a beautifully blurred background (bokeh). Photorealistic, 8K, high resolution, studio quality, masterpiece.\nNegative Prompts: no extra limbs, no deformed hands, no blur, no noise, no watermark, no text, no cartoon/anime style. Aspect Ratio: 3:4.',
    promptZh:
      '一位令人惊艳的18岁中国女孩，青春纯真的面容与真实皮肤纹理，坐在卧室温馨略显凌乱的床上。她正用智能手机对镜自拍，捕捉自然而亲密的瞬间。穿着休闲灰色家居服和整洁的白色中筒袜。柔和的自然光（黄金时刻）从侧窗照入，营造温暖、有氛围感和电影感的空间。35mm镜头，焦点对准镜中人物，美丽虚化的背景（散景）。照片级真实感，8K，高分辨率，影棚品质，杰作。反向提示词：无多余肢体，无变形手部，无模糊，无噪点，无水印，无文字，无卡通/动漫风格。画幅比例：3:4。',
    tags: ['人像', '摄影', '纪实'],
    sourceTitle: '@Shinning1010',
    sourceUrl: 'https://x.com/Shinning1010/status/2045002808903020962',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-soft-airy-35mm-portrait',
    model: 'gpt-image-2',
    title: '柔和通透 35mm 人像',
    images: ['/ai/prompts/25.webp'],
    promptEn:
      'Analog 35mm film photography, soft airy Japanese-style aesthetic, gentle diffused natural window light, slight overexposure, pastel tones, low contrast, soft highlights, minimal indoor setting near a window with white curtains, clean light-colored wall, natural composition, eye-level, slightly closer full-body framing (mid-thigh to head), young East Asian woman, natural minimal makeup, soft realistic skin texture, long slightly messy dark hair, oversized white button-up shirt, light casual shorts, barefoot, simple and relaxed styling, standing naturally with relaxed posture, arms loosely at sides or slightly behind, facing camera, gentle soft smile, subtle stillness, focus on light, air, and quiet everyday mood, soft film grain, dreamy and understated atmosphere --ar 9:16',
    promptZh:
      '模拟35mm胶片摄影，柔和通透日系美学，温和漫射自然窗光，轻微过曝，柔和色调，低对比度，柔和亮点。窗边极简室内场景，白色窗帘，干净浅色墙面，自然构图，平视角度，稍近的全景构图（大腿中部到头部）。年轻东亚女性，自然淡妆，柔和真实皮肤纹理，深色长发略显凌乱，超大号白色纽扣衬衫，浅色休闲短裤，赤脚。简约放松的造型，自然站立姿态，双臂自然下垂或微放身后，面向镜头。温柔柔软的微笑，微妙静谧感，聚焦于光线、空气与宁静日常氛围。柔和胶片颗粒，梦幻低调的氛围，9:16',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046115431144902732',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-urban-turn-back-street-portrait',
    model: 'gpt-image-2',
    title: '城市回眸街头人像',
    images: ['/ai/prompts/26.webp'],
    promptEn:
      'A mid-close shot at eye level, focusing on a young woman. She is shown in a three-quarter body frame, sitting with a slight tilt, legs naturally crossed with the left leg in front, knees slightly bent. She twists her upper body to the right rear while turning her head toward the camera, forming a classic "looking back" pose with clear, slightly playful eyes gazing directly at the lens. Her hair is a fluffy brown shoulder-length bob with natural bangs and slightly curly ends. Light natural makeup with only subtle eyeliner and natural nude pink lips. The scene uses natural daylight filtration with light streaming from the upper left, creating soft backlight silhouette. The right side of her face and body is illuminated by warm golden light, while the left side has natural shadow transitions enhancing dimensionality. Shot at eye level with the subject positioned slightly right of center. Background is an urban street with crosswalks, green belts and distant vehicles, moderately blurred but still recognizable with trees, guardrails and parked scooters. She wears a military green camo hoodie, black shorts, and white high-top sneakers with white mid-calf socks. A black backpack with orange-yellow stripes and an orange plush charm. Overall style is casual street fashion with relaxed body language and a curious, playful expression, presenting a carefree, youthful urban girl image.',
    promptZh:
      '该画面为中近景，采用平视镜头，聚焦于一位年轻女性。她以七分身镜头呈现，身体坐姿略带倾斜，臀部向后撅起，双腿自然交叠，左腿在前，右腿在后，膝盖微屈。她将上半身向右后方扭转，头部则转向镜头方向，形成一个经典的"回眸"姿态，目光直视镜头，眼神清澈而略带一丝俏皮。她的发型是蓬松的棕色齐肩短发，刘海自然垂落，发尾微卷，妆容清淡自然，仅在眼部有轻微眼线勾勒，唇色为自然裸粉。画面整体采用自然日光滤镜，光线从画面左上方斜射入，形成柔和的逆光轮廓，面部和身体右侧被温暖的金色光线照亮，左侧则形成自然的阴影过渡，增强了立体感。灯光效果是明亮的自然光，带有轻微的镜头眩光，营造出午后阳光的氛围。拍摄角度为平视，构图上，人物主体位于画面中偏右位置，背景中的斑马线与道路线条形成自然的引导线，将视线引向人物。背景为城市街道，包含道路、斑马线、绿化带和远处的车辆，背景被适度虚化，但依然可辨识出树木、护栏和停放的电动车等元素，构图上利用了三分法，人物位于右侧三分之一处，增强了画面的平衡感。主体穿着一件军绿色迷彩图案的连帽卫衣，下身搭配黑色短裤，脚穿白色高帮运动鞋配白色中筒袜。背包为黑色，带有橙黄色装饰条纹和一个橙色毛绒挂件，材质为帆布和皮革拼接。整体风格为街头休闲风，肢体语言放松自然，表情略带好奇与俏皮，整体呈现出一种随性、青春、充满活力的都市少女形象。',
    tags: ['人像', '摄影', '纪实'],
    sourceTitle: '@Tz_2022',
    sourceUrl: 'https://x.com/Tz_2022/status/2045892003775361198',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-korean-idol-3x3-grid-portrait',
    model: 'gpt-image-2',
    title: '韩国偶像 3x3 九宫格人像',
    images: ['/ai/prompts/27.webp'],
    promptEn:
      '9:16 vertical, Korean idol portrait photoshoot, 3x3 grid (nine frames), same person in all images, consistent facial features and styling, soft black mist filter effect, lowered contrast, blooming highlights, subtle glow around light sources',
    promptZh:
      '竖版9:16，韩国偶像人像摄影，3x3九宫格（九个画面），所有画面为同一人物，五官特征与造型保持一致。柔黑雾滤镜效果，降低对比度，高光泛光，光源周围微妙光晕',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046268941941850575',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-ccd-flash-korean-idol',
    model: 'gpt-image-2',
    title: 'CCD 相机闪光灯韩国偶像',
    images: ['/ai/prompts/28.webp'],
    promptEn:
      'mobile phone photo, old CCD camera aesthetic, harsh flash, grainy, dim messy indoor lighting, candid snapshot feeling, slight motion blur, young Korean female idol, soft innocent look',
    promptZh:
      '手机照片风格，老式CCD相机美学，刺眼闪光灯，颗粒感，昏暗凌乱的室内光线，随拍抓拍感觉，轻微运动模糊。年轻韩国女性偶像，柔美清纯造型',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046190539213885806',
    sourceDate: '2026-04-18',
  },
    {
    id: 'gpt-image-2-korean-idol-3x3-collage-portrait',
    model: 'gpt-image-2',
    title: '韩国偶像 3x3 拼贴人像',
    images: ['/ai/prompts/29.webp'],
    promptEn: '9:16 vertical — a 3x3 grid collage (nine images) forming a Korean idol portrait photoshoot series. Each frame features the same young Korean female idol, maintaining 100% consistency in facial features, proportions, hairstyle, and identity across all nine shots.   Natural, ultra-realistic skin texture, no retouching, no smoothing. Clean idol-style minimal makeup, soft glow, subtle imperfections.   Hair: long, voluminous dark hair, slightly tousled, consistent across all frames (natural loose flow, slight movement).  Outfit: cohesive Korean idol photoshoot styling — white shirt + short bottoms (or simple neutral-toned outfit), youthful, clean, slightly casual but styled. Same outfit across all frames.  Setting: minimal studio or simple indoor environment (plain wall, soft window light, clean background). Focus on subject, not environment.  Lighting: soft diffused natural light, gentle highlights, low contrast, slightly airy tones, subtle film-like softness.  Camera style: intimate portrait photography, slightly handheld feel, subtle imperfections (minor grain, slight blur in motion frames, imperfect framing).  Frame breakdown (3x3 grid):  Top row: - Top left: standing naturally, looking slightly away, relaxed expression - Top center: facing camera, casual mid-motion (hair or body slight movement) - Top right: slight side angle, soft gaze, natural candid feel  Middle row: - Center left: looking slightly upward, soft thoughtful expression - Center: close-up portrait, direct eye contact, gentle idol smile - Center right: turning body slightly, mid-motion candid frame  Bottom row: - Bottom left: seated or leaning casually, relaxed posture - Bottom center: back partially turned, looking over shoulder toward camera - Bottom right: standing close to frame, slightly playful or soft expression  Mood: Korean idol photobook / photocard aesthetic, intimate, soft, natural, everyday charm.  Quality: ultra-realistic, 8K detail, subtle analog film grain, natural imperfections, soft dreamy tone',
    promptZh: '竖版9:16，韩国偶像人像摄影3x3拼贴（九张图），每张画面为同一年轻韩国女性偶像，五官、比例、发型和身份在九张中保持100%一致。自然超真实皮肤纹理，不做后期，不磨皮。干净偶像风淡妆，柔和光泽，微妙不完美。长发丰盈，微乱但各帧一致。白色衬衫搭配短下装，各帧穿着统一。极简影棚或简单室内环境，柔和自然光漫射，低对比度，微胶片柔化感。亲密人像摄影感，微手持感，轻微不完美。韩偶像写真集/小卡美学，亲密、柔和、自然、日常魅力。超真实，8K细节，模拟胶片颗粒，自然不完美，梦幻柔调',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046151898621993364',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-soft-black-mist-editorial-portrait',
    model: 'gpt-image-2',
    title: '柔和黑雾编辑人像',
    images: ['/ai/prompts/30.webp'],
    promptEn: '9:16 vertical — editorial portrait, single subject  soft black mist filter, subtle haze, gentle highlight bloom, muted tones  minimal indoor space, clean background, slight texture  young Korean woman, minimal makeup, natural skin texture  outfit: fitted ribbed knit top or soft camisole layered under a loose shirt, paired with high-waisted shorts or skirt; fabric slightly clings to body shape, soft and natural, no revealing elements  hair: slightly messy, natural volume  pose: sitting on floor with one leg bent and the other relaxed, body slightly leaning, shoulders not aligned, head tilted  composition: subject slightly off-center, negative space present  expression: calm, slightly distant, natural lips  lighting: soft side light, gentle shadow falloff  mood: understated, quiet, subtly sensual through natural body lines, relaxed and unposed  quality: fine grain, slight softness, realistic look',
    promptZh: '竖版9:16，编辑人像，单人。柔黑雾滤镜，微妙朦胧，高光泛光，低饱和色调。极简室内空间，干净背景，微妙质感。年轻韩国女性，淡妆，自然皮肤纹理。贴身罗纹针织上衣或柔软吊带外搭宽松衬衫，高腰短裤或短裙，面料贴合身形。发型微乱，自然蓬松。坐地板，一腿弯曲一腿放松，身体微倾，肩线不对称，头微歪。主体略偏中心，有留白。表情平静，略疏离。柔和侧光，温和阴影渐变。低调、安静，放松不做作。质感细腻，轻微柔化，真实感',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046434670724907395',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-fujifilm-strawberry-school-portrait',
    model: 'gpt-image-2',
    title: '富士胶片草莓校园人像',
    images: ['/ai/prompts/31.webp'],
    promptEn: '9:16 vertical — Japanese Fuji film style portrait, single subject  Fujifilm analog aesthetic (Pro 400H / Superia feel), soft pastel tones, slight green-magenta shift, low contrast, gentle highlight roll-off, fine film grain, subtle halation, slight vignette  bright natural daylight, diffused sunlight through window, soft shadows, airy atmosphere  young Japanese female idol, natural minimal makeup, fresh glowing skin, realistic texture, slight imperfections  outfit: Japanese school uniform (sailor-style or blazer uniform), neatly styled, non-revealing, youthful and clean  hair: natural dark hair, straight or softly flowing, a few loose strands  pose: front-facing or slight angle toward camera, relaxed posture; one hand gently holding a strawberry near lips, mid-action as if about to take a bite; shoulders relaxed, subtle natural body curve  expression: soft playful gaze, light smile or neutral lips, gentle eye contact with camera  setting: minimal indoor near window or simple outdoor corner, clean background, everyday atmosphere  composition: slightly off-center framing, intimate distance, candid feel  mood: fresh, youthful, sweet everyday moment, understated charm  quality: ultra-realistic, analog film look, natural imperfections, soft dreamy finish',
    promptZh: '竖版9:16，日式富士胶片风格人像，单人。富士胶片模拟美学（Pro 400H / Superia感），柔和色调，微绿品偏移，低对比度，高光柔和过渡，细腻胶片颗粒，微妙光晕，轻微暗角。明亮自然日光，窗光漫射，柔和阴影，通透氛围。年轻日本女性偶像，自然淡妆，清新光泽肌肤，真实纹理。日本校服（水手服或西装制服），整洁造型，青春干净。正面或微侧向镜头，放松站姿，一手轻持草莓靠近唇边，仿佛即将咬下。柔和俏皮目光，微笑或自然唇态，与镜头温柔对视。窗边极简室内，干净背景，日常氛围。清新、青春、甜蜜日常瞬间，梦幻柔润',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046483268019884384',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-soft-black-mist-idol-portrait',
    model: 'gpt-image-2',
    title: '柔和黑雾偶像人像',
    images: ['/ai/prompts/32.webp'],
    promptEn: '9:16 vertical — Korean idol portrait photography, single subject  soft black mist filter effect, lowered contrast, gentle highlight bloom, subtle glow, soft diffusion, slightly faded blacks  minimal indoor setting near window, white curtains, clean light-toned background  young Korean female idol, natural minimal makeup, dewy realistic skin texture, subtle imperfections  outfit: oversized white button-up shirt + short bottoms, slightly loose fit, soft and casual styling, no revealing elements  hair: long dark hair, slightly messy, natural volume, softly flowing  pose: relaxed standing or slight lean, body subtly angled, one leg slightly forward, shoulders relaxed; one hand lightly touching collar or resting near neckline, the other relaxed; gentle body curve without exaggeration  expression: soft cute smile, slightly playful eyes, direct or slightly off-camera gaze  camera: close to mid-body framing, eye-level, intimate distance, slight handheld feel  lighting: diffused natural daylight, soft shadows, gentle light wrapping around face and body  mood: cute yet subtly sensual, intimate, everyday softness, quiet romantic atmosphere  quality: ultra-realistic, fine film grain, slight softness at edges, natural imperfections, dreamy understated tone',
    promptZh: '竖版9:16，韩国偶像人像摄影，单人。柔黑雾滤镜效果，降低对比度，高光泛光，柔漫射。窗边极简室内，白色窗帘，干净浅色背景。年轻韩国女性偶像，自然淡妆，水润真实皮肤纹理。超大号白色纽扣衬衫搭配短下装，略宽松柔软随性。深色长发微乱，自然蓬松。放松站立或微倚，身体微侧，肩线放松，一手轻触领口，身体曲线柔和。可爱柔笑，略俏皮眼神。近中景取景，平视，亲密距离。漫射自然日光，柔和阴影。可爱中微妙性感，亲密，日常柔软，安静浪漫氛围。超真实，梦幻低调',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2046518189509734903',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-vintage-newspaper-front-page',
    model: 'gpt-image-2',
    title: '复古报纸头版设计',
    images: ['/ai/prompts/33.webp'],
    promptEn: 'Create the most realistic front page design of a vintage newspaper featuring the main character. The layout should be made in the style of a real printed newspaper with a cinematic black-and-white aesthetic.\nThe main photo should be prominently placed in the center, framed, like the image in the title of the article. The subject in the photo should remain unchanged and clearly distinguishable in natural light and slightly increased contrast in order to match the spectacular editorial style.\nCreate a bold, attention-grabbing headline at the top (create a unique title that matches the spirit of the photo - it can be romantic, mysterious, funny, or dramatic). Add a smaller subtitle under it, which will look like a real newspaper caption.\nAdd realistic newspaper elements:\nColumns of small text (in the style of lorem ipsum, but framed like real news)\nAt the top is the fictitious name of the publication (for example, The Daily Prompts, AI Times or similar - think creatively, according to the picture)\nDate, issue number and location\nDecorative lines, dividers, and vintage typography\nSmall additional articles or captions to the main image\nOptional stamps, doodles, or editorial notes to add personality.\nStyle:\nBlack and white or slightly faded monochrome paper\nFine paper texture, grain, and ink defects\nSmall shadows and creases that mimic real printed paper\nThe aesthetics of a clean but slightly worn vintage newspaper\nMood: Give the design personality, expressiveness and plot, as if the plot is part of the main article.\nAspect ratio: 4:5 or 1:1\nHigh-detail, ultra-realistic hybrid of editorial photography and print design.',
    promptZh: '创建最逼真的复古报纸头版设计，以主角为主要内容。版面采用真实印刷报纸风格，电影感黑白美学。主照醒目居中加框，自然光线下清晰可辨，对比度微增以匹配戏剧性编辑风格。顶部大胆醒目标题，下方较小副标题。添加真实报纸元素：小字栏文本、虚构刊物名称、日期期号和地点、装饰线条和复古字体、附加小文章或图片说明、可选邮戳涂鸦或编辑笔记。黑白或微褪色单色纸张，精细纸张纹理和墨迹瑕疵，模拟真实印刷纸的阴影折痕。4:5或1:1画幅，高细节超真实编辑摄影与印刷设计混合体',
    tags: ['摄影', '复古', '版式'],
    sourceTitle: '@Naiknelofar788',
    sourceUrl: 'https://x.com/Naiknelofar788/status/2047207812800147647',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-travel-magazine-feature',
    model: 'gpt-image-2',
    title: '旅游杂志专题文章',
    images: ['/ai/prompts/34.webp'],
    promptEn: 'Create image of Magazine feature article [travel] guide page, cute, information dense photo book style magazine feature article page. Add all necessary sections, tips, recommendations, information. add photos for any sections and recommendations if you like. Place the attached person at the precise location of [city, country]. Seamlessly blend the attached person as if they are sightseeing. Approach this task with the understanding that this is a critical, information rich page that will significantly influence visitor numbers, text accuracy is important. Fully use the entire [9:16] page. NEGATIVE PROMPT: coordinate texts @swiat_ai @ProfitAII',
    promptZh: '创建杂志专题文章[旅行]导览页面，可爱、信息密集的图鉴风格杂志专题文章页面。添加所有必要的板块、提示、推荐和信息。为板块和推荐添加照片。将附图中人物放置在[城市、国家]的精确位置，无缝融合仿佛在观光。文字准确性很重要，充分使用整个9:16页面',
    tags: ['摄影', '版式', '多语言'],
    sourceTitle: '@andis13',
    sourceUrl: 'https://x.com/andis13/status/2047204384811921764',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-photo-json-prompt-rebuild',
    model: 'gpt-image-2',
    title: '照片分析与 JSON Prompt 重建',
    images: ['/ai/prompts/35.webp'],
    promptEn: 'analyze this photo and give me a detailed JSON prompt that recreates it. break down the color grading and every exact color in the photo\n\n(use Opus, not Sonnet. Opus has stronger visual analysis and writes more detailed JSON)\n\npaste that JSON into ChatGPT\nupload your product image and prompt:\nusing this JSON as reference, generate a person holding my product\nsave that generated photo as your character reference\n\nattach it to every future generation for facial consistency\n\nyou now have a consistent UGC model that works across any product\n\nthe JSON controls the lighting and color grading. GPT image-2 handles the character. you control the product placement.\n\nthe #1 tell on AI photos is flat colors and a grainy look. this method removes both.\n5 minutes to set up. unlimited variations after.',
    promptZh: '分析这张照片并给我一个详细的JSON提示词来重建它。分解调色和照片中每种确切颜色。使用Opus而非Sonnet分析。将JSON粘贴到ChatGPT，上传产品图片并提示用此JSON作为参考生成人物持产品图。保存为角色参考，附加到每次后续生成保持面部一致性。JSON控制灯光和调色，GPT image-2处理角色，你控制产品放置。AI照片最大破绽是扁平色彩和颗粒感，此方法消除两者。5分钟设置，无限变体',
    tags: ['摄影', '教育'],
    sourceTitle: '@pavellaslov',
    sourceUrl: 'https://x.com/pavellaslov/status/2047182214304055339',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-green-tea-product-photography',
    model: 'gpt-image-2',
    title: '绿茶胶片套装产品摄影',
    images: ['/ai/prompts/36.webp'],
    promptEn: 'CALMING GREEN TEA Film Kit displayed frontally, the open box shows soft sage-green film pouches and translucent ampoules with matte silver caps, product placed centrally with clear branding CALMING GREEN TEA -- 7 Days to Soothed Skin, pastel green background with botanical graphic accents, three minimal icons (leaf, wave, balance) floating around the product to emphasize benefits, photographic, hyper detailed, ultra realistic, lifelike, 8k, high detail, soft professional lighting.',
    promptZh: '舒缓绿茶胶片套装正面展示，打开的盒子展示柔和鼠尾草绿色胶片袋和带哑光银盖的半透明安瓶，产品居中放置，品牌标识清晰：CALMING GREEN TEA——7天舒缓肌肤。柔和绿色背景配植物图形装饰，三个极简图标（叶子、波浪、平衡）漂浮在产品周围强调功效。摄影级，超细节，超写实，8K，柔和专业灯光',
    tags: ['摄影', '产品', '创意'],
    sourceTitle: '@ZaraIrahh',
    sourceUrl: 'https://x.com/ZaraIrahh/status/2047180061657452601',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-strawberry-ice-cream-product',
    model: 'gpt-image-2',
    title: '草莓冰淇淋超写实产品摄影',
    images: ['/ai/prompts/37.webp'],
    promptEn: 'Ultra-realistic product photography of a rich strawberry soft-serve ice cream in a crispy waffle cone, styled with a clean, modern premium aesthetic. The soft serve is a vibrant natural pink, thick and creamy, sculpted into a smooth swirl with a softly curled peak, lightly topped with delicate strawberry dust or tiny fruit specks for a fresh, appetizing look. The cone has a rustic, crunchy texture with slightly uneven edges for an artisanal feel.\nThe background is soft beige with natural sunlight casting subtle leaf shadows, creating a calm, organic atmosphere. Include softly blurred greenery in the foreground for depth. The composition is minimal, balanced, and uses negative space effectively, similar to high-end American food brand ads.\nOn the left side, include modern English typography in a clean, elegant layout (not vertical).\nMain headline:\nSweet Strawberry Bliss.\nSupporting line (smaller text):\nMade with real strawberries. Smooth. Creamy. Irresistible.\nAdd a small circular badge showing the price:\n$5.80.\nLighting: soft natural daylight, warm highlights, shallow depth of field, high-end commercial food photography style.\nMood: fresh, premium, modern, and inviting — aligned with upscale U.S. dessert branding.essert branding.',
    promptZh: '超写实产品摄影，浓郁草莓软冰淇淋装在酥脆华夫蛋筒中，干净现代高级美学。鲜艳天然粉色，浓密奶油质地，光滑旋涡配柔卷顶端，轻撒草莓粉增添新鲜感。蛋筒质朴酥脆，边缘微不均。背景柔米色，自然阳光投下树叶阴影。构图极简平衡，有效留白，类似高端美国食品品牌广告。左侧现代英文字体排版，主标题Sweet Strawberry Bliss，副文Made with real strawberries. Smooth. Creamy. Irresistible. 圆形价格徽章$5.80。柔和自然日光，温暖高光，浅景深，高端商业食品摄影风格',
    tags: ['摄影', '产品', '品牌'],
    sourceTitle: '@ZaraIrahh',
    sourceUrl: 'https://x.com/ZaraIrahh/status/2047179916161212542',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-chatgpt-interface-screenshot',
    model: 'gpt-image-2',
    title: '使用者界面截图',
    images: ['/ai/prompts/1.webp'],
    promptEn:
      'a screenshot of chatgpt, in a browser, in macosx. the user types "draw me a dog" chatgpt draws an ascii dog the front window is chatgpt, but the desktop is quite messy with lots of random windows open (eg a terminal). they\'re all in the background',
    promptZh:
      '一张 ChatGPT 在 macOS 浏览器中的截图。用户输入“draw me a dog”，ChatGPT 画出一只 ASCII 狗。前景窗口是 ChatGPT，但桌面相当凌乱，背景中打开了许多随机窗口，例如终端。它们都在背景里。',
    tags: ['界面', '产品'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-thai-city-panorama',
    model: 'gpt-image-2',
    title: 'iPhone 全景图',
    images: ['/ai/prompts/images-2-thai_pano.webp'],
    promptEn:
      'create a photorealistic panorama shot as if taken on iphone of a busy asian city. make it a bit jaggedy like my hand shook while taking the panorama shot ; there should be fault lines where the image breaks from my hand shaking or not keeping a straight line',
    promptZh:
      '创建一张逼真的全景照片，像是用 iPhone 拍摄的繁忙亚洲城市。让它稍微有点不平整，像我拍全景时手抖了一样；画面中应该有断裂线，表现出因为手抖或没有保持直线而导致图像断开的地方。',
    tags: ['摄影', '纪实'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-kizuna-matcha-poster',
    model: 'gpt-image-2',
    title: '抹茶店广告',
    images: ['/ai/prompts/mocha.webp'],
    promptEn:
      'Make an advertisement promoting my new matcha shop called ‘kizuki’ opening in brooklyn heights. have a nice sunlight image of a strawberry matcha (iced) and a streetwear aesthetic w japanese minimalism. make sure to include multiple aspect ratio outputs so i can use it on twitter, IG stories, IG feed, and linkedin.',
    promptZh:
      '制作一张广告，宣传我在布鲁克林高地新开的抹茶店“kizuki”。画面中要有一张阳光很好看的草莓冰抹茶图片，并带有街头服饰审美和日式极简风格。请确保输出多个画幅比例，方便我用于 Twitter、Instagram Stories、Instagram Feed 和 LinkedIn。',
    tags: ['海报', '品牌'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-japanese-fantasy-manga',
    model: 'gpt-image-2',
    title: '日文少年漫画',
    images: ['/ai/prompts/japanese.webp'],
    promptEn:
      'Make a sample page of a colorized Japanese shonen adventure manga. The page should vividly depict our main character found a magical quill. The name of the quill is called the Quill of GPT Image. Make it dramatic. The magical quill has strong power sealed inside it.\n\nAdditional instructions: Aspect ratio: Portrait 1440×2560. The pen should have an OpenAI logo on it. The language throughout the manga should be Japanese. Think carefully first to make this a good story with good split of manga panels. The page should appear as a photo of a physical page, not a digital page.',
    promptZh:
      '制作一页彩色日本少年冒险漫画样张。页面应生动描绘主角发现一支魔法羽毛笔。这支羽毛笔名叫 GPT Image 之笔。让画面充满戏剧张力。这支魔法羽毛笔内部封印着强大的力量。\n\n附加说明：画幅比例：竖版 1440×2560。笔上应有 OpenAI 标志。整页漫画都应使用日语。先认真思考，做出一个好故事，并合理拆分漫画分镜。页面应呈现为实体纸页的照片，而不是数字页面。',
    tags: ['漫画', '角色'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-wolves-infographic',
    model: 'gpt-image-2',
    title: '科学杂志页面',
    images: ['/ai/prompts/images-2-wolf-magazine.webp'],
    promptEn:
      "an editorial magazine page about wolves in north america and how they're more harmless than we think. make it look like a glossy, smooth, well laid out widely distributed science magazine.",
    promptZh:
      '制作一页关于北美狼群的编辑型杂志页面，主题是狼比我们想象的更无害。让它看起来像一本发行广泛的科学杂志，光滑精致、版式顺畅、布局良好。',
    tags: ['信息图', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-product-campaign-board',
    model: 'gpt-image-2',
    title: '韩国广告卡片',
    images: ['/ai/prompts/images-2-korean-advertisement.webp'],
    promptEn:
      '프리미엄 한옥 스테이 예약 유도용 카드 이미지, 고즈넉한 골목을 지나 체크인하는 순간, 마당이 보이는 창가에서 차를 마시는 순간, 따뜻한 조명 아래 객실에서 쉬는 순간의 3장면이 한 화면 안에서 자연스럽게 이어지는 구성, 같은 한국 여성이 반복 등장하며 우아하고 여유로운 여행 분위기, 크림과 우드 톤, 부드러운 자연광, 정갈한 한옥 공간, 저장하고 싶은 프리미엄 여행 카드 무드, 제목과 짧은 라벨, 예약 안내를 얹기 쉬운 여백, 모바일 중심 4:5 비율',
    promptZh:
      '用于引导预订高端韩屋住宿的卡片图片。画面由三个场景自然衔接在同一张图中：穿过宁静小巷办理入住的瞬间、在能看到庭院的窗边喝茶的瞬间、在温暖灯光下的客房中休息的瞬间。同一位韩国女性重复出现，营造优雅从容的旅行氛围。使用奶油色与木色调、柔和自然光、整洁的韩屋空间，呈现让人想收藏的高端旅行卡片氛围。画面应留出便于添加标题、短标签和预订说明的空白，移动端优先，4:5 比例。',
    tags: ['品牌', '广告'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-cantor-diagonal-diagram',
    model: 'gpt-image-2',
    title: '康托对角线证明图解',
    images: ['/ai/prompts/images-2-cantor.webp'],
    promptEn: 'cantor’s diagonalization proof, infographic',
    promptZh: '康托对角线证明，信息图表',
    tags: ['教育', '信息图'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-visual-polyglot-collage',
    model: 'gpt-image-2',
    title: '杂志拼贴',
    images: ['/ai/prompts/2.webp'],
    promptEn:
      'I am creating a magazine page with the theme of "visual polyglot". The title in the center of the image should be "Create Everything at Once". Create a piece of art celebrating visual creations, not limited to beautiful photographs but also across the full breadth of human visual culture and natural visual elements. There should be curated collage representing the diverse distribution: scientific diagrams, the periodic table, the solar system, medieval manuscript pages, botanical illustrations, anatomical drawings, old maps, climate charts, engineering schematics, transit signage, multilingual text, comic panels, UI screenshots, a camera photo, a butterfly specimen, pie charts, architectural blueprints, and façade drawings. The text frames the model as fluent across languages, notation systems, interfaces, cultural forms, and visual conventions—able to move from utility to beauty, from document understanding to artistic generation. Also feature artistic elements like pixel art, styles, history, sculpture, nature, photography, paintings, and all art forms. These are just examples, I need you to actively think about other elements / styles that may fit in a good design that\'s not limited to these concepts. The overall effect is that of a premium research announcement or museum-style manifesto: elegant, ambitious, and designed to argue that image intelligence should be trained on the whole visual world, not just polished aesthetics. Use an unstructured, creative and artistic layout, such as but not limited to fan out, avoid grid-like layouts. Portrait 4:5 aspect ratio. Don\'t add any content text beside the "Create Everything at Once" title. Text as part of the art is okay. Avoid a beige tint of the overall style, since we want vibrant elements to be vibrant.',
    promptZh:
      '我正在创建一张以"视觉多语者"为主题的杂志页面。图像中央的标题应为"Create Everything at Once"。创作一件致敬视觉创作的艺术作品，不限于精美照片，还涵盖人类视觉文化和自然视觉元素的全貌。画面应呈现精心策展的拼贴画，展示多元化的分布：科学图表、元素周期表、太阳系、中世纪手稿页面、植物插图、解剖图、古地图、气候图表、工程示意图、交通标识、多语言文字、漫画分镜、UI 截图、相机照片、蝴蝶标本、饼图、建筑蓝图和立面图。文字将模型定位为精通多种语言、记谱系统、界面、文化形式和视觉惯例——能够从实用到美学、从文档理解到艺术生成自由切换。还应包含像素艺术、各种风格、历史、雕塑、自然、摄影、绘画及所有艺术形式等艺术元素。以上仅为示例，请主动思考其他可能适合优秀设计的元素或风格，不局限于这些概念。整体效果应是一份高端研究公告或博物馆风格宣言：优雅、雄心勃勃，旨在论证图像智能应当在整个视觉世界而非仅是精致美学上进行训练。使用非结构化、创意性的艺术化布局，例如但不限于扇形展开，避免网格状布局。竖版 4:5 比例。除"Create Everything at Once"标题外，不要添加任何内容文字。作为艺术一部分的文字可以接受。整体风格避免偏米色调，因为我们希望鲜艳的元素保持鲜艳。',
    tags: ['版式', '艺术'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-rice-grain-text',
    model: 'gpt-image-2',
    title: '一堆米粒',
    images: ['/ai/prompts/rice.webp'],
    promptEn:
      'Mound of rice with thousands of grains, zoomed out. One of those grains has "GPT Image 2" etched onto it, just big enough to fit on that single grain. This rice grain is exactly the same size as the others, not any bigger or smaller, and blends into the rice mound well so it cannot be spotted at a glance.',
    promptZh:
      '一堆米粒，远景。其中一粒米上刻有"GPT Image 2"字样，大小刚好刻在这一粒米上。这粒米和其他米粒完全一样大，不大不小，很好地融入米堆中，一眼看不出来。',
    tags: ['创意', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-handwritten-baseball-essay',
    model: 'gpt-image-2',
    title: '手写文章',
    images: ['/ai/prompts/images-2-wbaseball-note.webp'],
    promptEn:
      'a photorealistic, taken by phone photo of a handwritten essay in pencil, bold but elegant handwriting, but messy and somewhat uneven, on an 8.5x11 piece of lined paper, about the history of baseball in toronto. make sure there is variance in the writing in a very human way. give it a slight coffee stain on the top right corner',
    promptZh:
      '一张逼真的手机照片，拍摄一篇用铅笔手写的文章，字迹粗犷而优雅，但有些凌乱和不均匀，写在一张 8.5×11 的横线纸上，内容是多伦多棒球的历史。确保书写有差异，呈现非常自然的人感。右上角加一点咖啡渍。',
    tags: ['摄影', '纪实'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-indian-bookstore',
    model: 'gpt-image-2',
    title: '印度书店',
    images: ['/ai/prompts/hindi.webp'],
    promptEn:
      'I want to create a magazine page that features a professional realistic photography in an Indian bookstore that selling indian books in different languages used in India. The photography should feature book covers in Hindi, Bengali, Marathi, Telugu, Tamil, Urdu, Gujarati, Kannada, Odia. The books must be made-up books with title related to "art" in these languages, but looks like actual book covers rather than a set. The publisher must be "OpenAI". All text must be clearly visible. The purpose of this photography is to show case the diversity of India language. The page should be a picture entirely, no meta text nor title. Aspect Ratio: 1440x2560 portrait',
    promptZh:
      '我想创建一张杂志页面，展示一张专业的写实摄影作品，拍摄场景是一家印度书店，售卖印度各语言的书籍。摄影作品应展示印地语、孟加拉语、马拉地语、泰卢固语、泰米尔语、乌尔都语、古吉拉特语、卡纳达语、奥里亚语的书籍封面。这些书籍必须是虚构的，书名与"艺术"相关，使用对应语言书写，但看起来像真实的书籍封面而非布景。出版社必须为"OpenAI"。所有文字必须清晰可见。此摄影旨在展示印度语言的多样性。页面应完全是一张图片，不含元文字或标题。画幅比例：竖版 1440×2560。',
    tags: ['摄影', '多语言'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-chinese-manga',
    model: 'gpt-image-2',
    title: '中文漫画',
    images: ['/ai/prompts/chinese.webp'],
    promptEn:
      'Generate a full color Chinese-text manga about this OpenAI 研究科学家, 陈博远(first picture), who works on improving the text rendering capability of ChatGPT Image 2 model for the upcoming release. (in the background there is boba tea and a banana taped to the wall with a single slice of duct tape). The model can render insanely small Chinese text when he tried generating some detailed and beautiful multilingual infographics handdrawn-style poster about his hometown, 无锡on his computer screen. His hard work pays off and the team was impressed by the absurdly good quality of multilingual text performance of his model, seeing all the languages it can write. When he takes a break with one hand holding his phone, he received a translated text message from Sam Altman on his phone (avatar attached as second picture), asking him to take a look at the rendered multilingual text in an image he just generated to congrat the team, since Sam only knows English. However, make it funny by let Boyuan outrage (typical manga style) at the end by seeing Sam\'s generated image contains a "稳稳地接住你" phrase at the central location in an otherwise perfectly rendered image that\'s used to congrat the team, because this sentence has been memed as an unnatural but funny Chinese sentence GPT likes to use on Chinese internet. Boyuan should rage "天呐! 它又学会了接住!" (with teammates as tiny heads on the side, sweating and saying in Chinese"we are working hard to fix it！"). At the very bottom of the manga, add a tiny line of footnote (very tiny)in Chinese that "note: the entire manga, including this footnote and picture in picture, are all generated with gpt image 2 at once without editing or multiple steps。"\n\nAdditional Instructions: Use vertical 1440x2560 image layout, with first row about this researcher working hard, second row about his result on 无锡with multiple languages, third row shows the team excitement, fourth row split into left and right where left shows he takes a break and the phone received a message, right panel shows Sam\'s text message, and fifth row shows Sam\'s picture and 陈博远\'s reaction. No narration except for the first row. Avoid Chinese map. All characters should be in manga style. The banana background should only appear in the first panel and the tape should be a single slice of tape, not a cross tape. The banana and tape decoration should be small as a insignificant easter egg for people to find. OpenAI logo shall only appear on 陈博远\'s cloth, not elsewhere. No mugs in the scene since we already have the boba. Sam should only appear in the text message panel. The entire manga should be appear as a professional photo of a physical page in a manga book. In the lower right most corner of the poster there is a small "极小中文也清晰可读：" with a paragraph of much smaller Chinese that begins with "（此处为极小字号测试）无锡是作者的故乡，所以做了这幅海报，中文总算是修好了。很多年没回家了，好想吃大闸蟹啊！" (ultra small).',
    promptZh:
      '生成一篇全彩中文漫画，主角是这位 OpenAI 研究科学家陈博远（第一张图片），他负责改进即将发布的 ChatGPT Image 2 模型的文字渲染能力。（背景中有珍珠奶茶和一根用单条胶带贴在墙上的香蕉）。当他在电脑屏幕上尝试生成一张关于家乡无锡的精美手绘风格多语言信息图表海报时，模型能渲染极其微小的中文文字。他的努力得到了回报，团队对他模型出色的多语言文字表现质量印象深刻，看到了它能书写的各种语言。当他单手拿着手机休息时，收到了 Sam Altman 发来的翻译短信（头像见第二张图片），请他看看自己刚生成的一张用于祝贺团队的图片中的多语言文字渲染效果，因为 Sam 只懂英文。然而，要让结局搞笑——博远看到 Sam 生成的图片中，在一张其他方面完美渲染的祝贺图片的中央位置出现了"稳稳地接住你"这句话而暴怒（典型漫画风格），因为这句话在中国互联网上被玩梗，是 GPT 爱用的一句不自然但搞笑的中文。博远应怒吼"天呐！它又学会了接住！"（旁边的队友以小脑袋形象出现，满头大汗地说中文"we are working hard to fix it！"）。在漫画最底部，用中文添加一行极小的脚注："note: the entire manga, including this footnote and picture in picture, are all generated with gpt image 2 at once without editing or multiple steps。"\n\n附加说明：使用竖版 1440×2560 画面布局。第一行关于这位研究员努力工作，第二行展示他在无锡多语言方面的成果，第三行展示团队的兴奋，第四行左右分割——左边展示他休息时手机收到消息，右边展示 Sam 的短信，第五行展示 Sam 的图片和陈博远的反应。除第一行外不使用旁白。避免出现中国地图。所有角色应为漫画风格。香蕉背景仅在第一个面板出现，胶带应为单条胶带，不是交叉胶带。香蕉和胶带装饰应很小，作为一个不起眼的彩蛋供人发现。OpenAI 标志只出现在陈博远的衣服上，不出现在其他地方。场景中不要马克杯，因为已有珍珠奶茶。Sam 仅在短信面板中出现。整篇漫画应呈现为漫画书中实体页面的专业照片。在海报右下角有小的"极小中文也清晰可读："，后接一段更小的中文，以"（此处为极小字号测试）无锡是作者的故乡，所以做了这幅海报，中文总算是修好了。很多年没回家了，好想吃大闸蟹啊！"开头（极小字号）。',
    tags: ['漫画', '多语言'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-typography-poster',
    model: 'gpt-image-2',
    title: '字体设计海报',
    images: ['/ai/prompts/images-2-typography.webp'],
    promptEn:
      'Generate professional multilingual poster about typography. The poster is supposed to be an artwork celebrating languages around the world. Japanese editorial style. 4:5 portrait aspect ratio',
    promptZh:
      '生成一张关于排版设计的专业多语言海报。海报应是一件致敬世界各地语言的艺术作品。日式编辑风格。竖版 4:5 比例。',
    tags: ['海报', '多语言'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-candid-coastal-travel',
    model: 'gpt-image-2',
    title: '自然抓拍',
    images: ['/ai/prompts/images-2-candid-people-1.webp'],
    promptEn:
      'A photorealistic candid travel scene of a person standing at a coastal roadside turnout on an overcast morning, shot on 35mm film. Natural imperfect framing, visible grain, ambient light, muted colors, wind in clothing and hair, cinematic realism, and the feeling of a lived-in documentary photograph.',
    promptZh:
      '一张逼真的自然抓拍旅行场景，一个人站在阴天早晨的海边路边停车区，使用 35mm 胶片拍摄。自然不完美的构图，可见颗粒感，环境光，柔和低饱和色调，衣摆和头发被风吹动，电影级真实感，呈现一张有生活气息的纪实照片感觉。',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-surreal-portrait',
    model: 'gpt-image-2',
    title: '超现实肖像',
    images: ['/ai/prompts/xiaoxiang.webp'],
    promptEn:
      'The portraits are taken outdoors, indoors, in specific, intimate, suburban settings. I don\'t want to replicate this; I want to maintain the same photographic style and realism, with shots taken using view cameras with colour film and medium-format cameras with colour film, but pushing the strangeness of the subjects and locations further. Not so much in a poor and grubby way, but more in the direction of kitsch and the middle classes, yet with elements that could not exist in reality, either aesthetically or physically.',
    promptZh:
      '这些肖像在户外、室内以及特定的私密郊区环境中拍摄。我不想复制这种做法，而是想保持相同的摄影风格和真实感——使用大画幅相机搭配彩色胶片和中画幅相机搭配彩色胶片拍摄——但进一步将拍摄对象和场景的奇异感推向极致。不是那种贫困邋遢的方向，而是更多朝向庸俗艺术和中产阶级美学，同时融入在审美上或物理上现实中不可能存在的元素。',
    tags: ['人像', '摄影', '超现实'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-film-realism-twins',
    model: 'gpt-image-2',
    title: '电影写实',
    images: ['/ai/prompts/dianyingxieshi.webp'],
    promptEn:
      'Create a photographic image with beautiful depth of field, as if it were shot on a medium-format analogue camera using colour film, 85 mm f/4. It should be a distinctive portrait of twins—realistic, authentic, imperfect, and natural—set in the middle of a deserted, misty road in the heart of America. Aspect ratio 3:4.',
    promptZh:
      '创建一张具有美丽景深的摄影作品，如同使用中画幅胶片相机搭配彩色胶片拍摄，85mm f/4。这应是一张独特的双胞胎肖像——真实、自然、不完美、不做作——背景是美国腹地一条荒无人烟、雾气弥漫的公路中央。画幅比例 3:4。',
    tags: ['人像', '摄影', '胶片'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-recursive-lecture-hall',
    model: 'gpt-image-2',
    title: '讲课图片',
    images: ['/ai/prompts/images-2-lecture-hall.webp'],
    promptEn:
      'a 2015 ubc lecture hall with professor showing slides about GPT imagegen 2, photorealistic. the slides show a professor showing slides about GPT imagegen 2, and so on, recursively, forever.',
    promptZh:
      '一间 2015 年的 UBC 阶梯教室，教授正在展示关于 GPT Image 2 的幻灯片，逼真写实。幻灯片中显示一位教授正在展示关于 GPT Image 2 的幻灯片，如此递归，无限循环。',
    tags: ['创意', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-iphone-aliens-cafe',
    model: 'gpt-image-2',
    title: 'iPhone 外星人',
    images: ['/ai/prompts/images-2-aliens.webp'],
    promptEn:
      'A photorealistic iPhone photo of two aliens sitting at an outdoor cafe in late afternoon, taken casually by someone at the table. Half-finished drinks, uneven sunlight, relaxed posture, slightly imperfect framing, and the natural realism of a real everyday phone snapshot.',
    promptZh:
      '一张逼真的 iPhone 照片，两个外星人坐在傍晚的露天咖啡馆，由同桌的人随意拍摄。喝了一半的饮料，不均匀的阳光，放松的坐姿，略显不完美的构图，呈现真实日常手机快照的自然真实感。',
    tags: ['人像', '摄影', '创意'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-high-fashion-book',
    model: 'gpt-image-2',
    title: '时尚书籍',
    images: ['/ai/prompts/images-2-high-fashion.webp'],
    promptEn: '35mm photograph of a book of high-fashion photoshoots',
    promptZh:
      '一张 35mm 胶片照片，拍摄一本高级时尚摄影集。',
    tags: ['摄影', '胶片'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-disposable-camera-computer-lab',
    model: 'gpt-image-2',
    title: '抛弃式相机',
    images: ['/ai/prompts/images-2-computer-lab.webp'],
    promptEn:
      'Create one photorealistic candid disposable-camera snapshot from a fictional early 2000s American high school computer lab, alternate-history/anachronistic premise: every student is using ChatGPT on old beige CRT monitors and bulky desktop towers. Scene feels like 2002-2004: rows of tan computers, rolling chairs, Windows XP-era browser windows, ball mice, tangled cables, binder stickers, floppy disks, CD-ROM binders, overhead fluorescent lights, laminated keyboard-shortcut posters, backpacks under desks. Diverse teenage students in non-sexualized early-2000s clothes, leaning toward screens, laughing, one student pointing at a ChatGPT answer, another typing. Show simple readable screen text on several monitors: ChatGPT, Ask anything, and short chat bubbles, but do not imitate a modern polished app UI. Make it candid and nostalgic, imperfect flash photo, mild motion blur, film grain, slightly off-center composition, orange date stamp in corner reading 02 18 04.',
    promptZh:
      '创建一张逼真的抛弃式相机抓拍照片，场景是一个虚构的 2000 年代初美国高中计算机教室，架空历史前提：每个学生都在老旧的米色 CRT 显示器和笨重的台式主机上使用 ChatGPT。场景呈现 2002-2004 年的感觉：一排排米色电脑、转椅、Windows XP 时代的浏览器窗口、滚球鼠标、缠绕的线缆、活页贴纸、软盘、CD-ROM 收纳册、头顶荧光灯、塑封的键盘快捷键海报、桌下的背包。穿着 2000 年代初服装的多元青少年学生，身体前倾看着屏幕，有人在笑，一个学生指着 ChatGPT 的回答，另一个在打字。在多台显示器上显示简单可读的文字：ChatGPT、Ask anything 以及简短的聊天气泡，但不要模仿现代精致的 app 界面。画面要自然怀旧，不完美的闪光灯效果、轻微运动模糊、胶片颗粒、略微偏心的构图，角落有橙色日期戳显示 02 18 04。',
    tags: ['人像', '摄影', '复古'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-35mm-street-photography',
    model: 'gpt-image-2',
    title: '街头摄影',
    images: ['/ai/prompts/images-2-35mm-photograph.webp'],
    promptEn: '35mm photograph of a book of 1970s NYC candid street photographs',
    promptZh:
      '一张 35mm 胶片照片，拍摄一本 1970 年代纽约街头纪实摄影集。',
    tags: ['摄影', '胶片'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-seinen-manga-page',
    model: 'gpt-image-2',
    title: '青年漫画',
    images: ['/ai/prompts/shonenfinal.webp'],
    promptEn: 'a page of a comic book in the style of Japanese Seinen manga',
    promptZh:
      '一页漫画，日本青年漫画风格。',
    tags: ['漫画', '角色'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-french-new-wave-poster',
    model: 'gpt-image-2',
    title: '电影海报',
    images: ['/ai/prompts/images-2-french-poster.webp', '/ai/prompts/haibao2.png'],
    promptEn:
      '1960s French New Wave theatrical poster, bold photomontage composition, torn-paper collage sensibility, pop-art color bursts, high-contrast black-and-white imagery with selective red blue and yellow accents, hand-made offset-print texture, slightly off-register ink, expressive asymmetry, art-house poster cool, graphic spontaneity, street-poster energy, adventurous typography-led design.\n\nPoster text:\n- Large title at the bottom: "GPT Image 2.0"\n- Smaller headline at the top: "Image generation with a point of view"\n- Small footer text: "Coming soon"\n\nKeep all visible text in English. Use a theatrical poster composition.',
    promptZh:
      '1960 年代法国新浪潮电影海报，大胆的摄影拼贴构图，撕裂纸张的拼贴质感，波普艺术色彩迸发，高对比黑白影像搭配局部的红、蓝、黄点缀，手工胶印质感，略微套色不准的油墨，富有表现力的不对称构图，文艺片海报的酷感，图形的即兴感，街头海报的能量，以字体设计为核心的冒险式设计。\n\n海报文字：\n- 底部大标题："GPT Image 2.0"\n- 顶部较小标题："Image generation with a point of view"\n- 底部小字："Coming soon"\n\n所有可见文字保持英文。使用电影海报构图。',
    tags: ['海报', '复古'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-mid-century-pastel-comic',
    model: 'gpt-image-2',
    title: '中世纪风粉彩漫画',
    images: ['/ai/prompts/images-2-miami-comic.webp'],
    promptEn: 'A page of a comic book in the style of Mid-Century Pastel Comic Art',
    promptZh:
      '一页漫画，中世纪风粉彩漫画艺术风格。',
    tags: ['漫画', '复古'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-modern-indie-comic',
    model: 'gpt-image-2',
    title: '现代独立漫画',
    images: ['/ai/prompts/images-2-indie-comic.webp'],
    promptEn: 'A page of a comic book in the style of modern indie comic',
    promptZh:
      '一页漫画，现代独立漫画风格。',
    tags: ['漫画', '艺术'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-character-sheet',
    model: 'gpt-image-2',
    title: '角色设定表',
    images: ['/ai/prompts/juese.webp'],
    promptEn:
      'Based on everything you know about me, make a character sheet of shonen-style anime character of me, name is adele',
    promptZh:
      '根据你所了解的关于我的一切信息，为我制作一张少年动漫风格的角色设定表，名字是 adele。',
    tags: ['人像', '漫画', '角色'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-studio-artifacts',
    model: 'gpt-image-2',
    title: '工作室素材',
    images: ['/ai/prompts/gongzuoshi.webp'],
    promptEn:
      'calligraphy with the following text. it should be written using different food as an ingredient. (do not use too easy ingredients like beans)\n\n"GPT Image"\n\nyou should be careful/creative about how to use food as an ingredient for each letter. You should not distort food to fit in alphabet though, but it should naturally assemble or look like a letter. Prefer keeping originality/naturalness of real food over likeliness to alphabet. prefer assembling food naturally over distorting, cutting food into unnatural shape to look like a letter.\n\n=============================\n\nCreate a beautifully designed set of studio artifacts for the launch of GPT Image 2: printed review sheets, pinned proofs, contact prints, layout studies, notes, and small pieces of launch collateral. It should feel like the wall or table of a serious creative studio preparing for a major release, with restrained typography, believable details, and an elegant documentary-style realism.',
    promptZh:
      '用书法形式书写以下文字，使用不同的食物作为素材来构成字母。（不要使用太简单的食材比如豆子）\n\n"GPT Image"\n\n你应该谨慎且有创意地思考如何用食物来构成每个字母。不要为了让食物看起来像字母而将其扭曲变形，而是让食物自然地组合成或看起来像一个字母。优先保持食物本身的自然性和原貌，而非追求与字母的相似度。优先自然地组合食物，而非将食物切割成不自然的形状来模仿字母。\n\n=============================\n\n为 GPT Image 2 的发布创建一套精美设计的工作室素材：印刷审稿单、钉在墙上的校样、接触印相、版式研究、便签以及小型发布物料。整体感觉应该像一家严肃的创意工作室为重大发布做准备时的墙面或桌面，排版克制，细节真实可信，呈现优雅的纪实风格真实感。',
    tags: ['品牌', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-basketball-dunk-disassembly',
    model: 'gpt-image-2',
    title: '灌篮缩略',
    images: ['/ai/prompts/images-2-manga-style_disassembly.webp'],
    promptEn:
      '"japanese-manga-style disassembly" of a basketball dunk shoot motion like a time lapse. Tell the most story through visuals rather than text. 3:1 utlrawide aspect ratio. prefer light background rather than dark. do not use japanese',
    promptZh:
      '用"日式漫画分解图"的方式呈现篮球扣篮动作的连续过程，如同延时摄影。尽量通过画面而非文字来讲述故事。3:1 超宽比例。偏好浅色背景而非深色。不要使用日文。',
    tags: ['漫画', '角色'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-art-deco-bookmark',
    model: 'gpt-image-2',
    title: '装饰艺术书签',
    images: ['/ai/prompts/bookmark.webp'],
    promptEn:
      'i\'m opening a bookstore called \'tangerine books\' in toronto and would like to make a bookmark to print, that i give my shoppers. the aesthetic should be gorgeous art deco - colorful, retro, joyful, elegant. include print dimensions and margins. please include the address and phone number:\n\n88 Paper Lane\nToronto, ON M0X 2Z2\n(416) 555-0188\n\nOpen 7 days a week, 9am-9pm.\n\ninclude bleed, trim, and safe margin.',
    promptZh:
      '我正在多伦多开一家名为"Tangerine Books"的书店，想制作一张可印刷的书签赠送给顾客。美学风格应是华丽的装饰艺术——色彩丰富、复古、愉悦、优雅。包含印刷尺寸和边距。请包含地址和电话：\n\n88 Paper Lane\nToronto, ON M0X 2Z2\n(416) 555-0188\n\n每周七天营业，早 9 点至晚 9 点。\n\n包含出血线、裁切线和安全边距。',
    tags: ['品牌', '复古'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-chinese-landscape-painting',
    model: 'gpt-image-2',
    title: '中国画',
    images: ['/ai/prompts/images-2-traditional-chinese-painting.webp'],
    promptEn:
      'Traditional long Chinese 山水画.Aspect ratio: Landscape 3:1',
    promptZh:
      '传统长幅中国山水画。画幅比例：横版 3:1。',
    tags: ['艺术', '创意'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-japanese-sticker-caricature',
    model: 'gpt-image-2',
    title: '讽刺漫画',
    images: ['/ai/prompts/images-2-japanese-charicature.webp'],
    promptEn:
      'Use the input photos only for each person\'s identity. Redraw all 9 of us in one ultrawide image as very simple surreal Japanese sticker-style caricatures: long thin necks, small deadpan faces, minimal black outline, flat light coloring, almost no shading, very few facial details, simplified hair shapes, lots of white space, plain white background, slightly awkward and funny. Show all 9 of us naturally gathered around a giant sheet of paper on the floor, leaning over it from different sides in diverse drawing poses, all actively working together on the same single large drawing-in-progress on the paper, not separate little drawings, with exactly one drawn person per input person. the drawing on the paper should read as one coherent poster-like scene.',
    promptZh:
      '仅使用输入照片来确定每个人的身份。将我们 9 个人重绘在一张超宽图像中，使用非常简约的超现实日式贴纸风格漫画：细长脖子、小巧面无表情的脸、极简黑色轮廓、扁平浅色上色、几乎没有阴影、极少面部细节、简化的发型、大量留白、纯白背景、略带笨拙和滑稽感。展示我们 9 个人自然地围站在地板上一张大纸旁边，从不同方向俯身以各种绘画姿势，共同在同一张纸上完成一幅正在绘制中的大型画作，而非各自分开的小画，每个输入人物对应一个绘制角色。纸上的画作应呈现为一幅连贯的海报式场景。',
    tags: ['人像', '漫画', '超现实'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-storybook-winding-path',
    model: 'gpt-image-2',
    title: '故事书',
    images: ['/ai/prompts/images-2-storybook.webp'],
    promptEn:
      'a really tall and narrow photo where there\'s a winding path that goes through children storybook like characters and phrases like "not yet" until it arrives at a satisfying conclusion at the bottom. it should be on a white background and the path should be a really thin winding solid black line',
    promptZh:
      '一张非常又高又窄的图片，画面中有一条蜿蜒的路径穿过童话书般的角色和诸如"还没到"之类的短语，最终在底部抵达一个令人满意的结局。白色背景，路径应是一条非常细的蜿蜒实心黑线。',
    tags: ['创意', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-2025-design-trends-poster',
    model: 'gpt-image-2',
    title: '2025 设计趋势',
    images: ['/ai/prompts/images-2-wheat-trends.webp'],
    promptEn:
      'make an wheatpaste poster of the 6 biggest design trends in 2025 . make sure each pane is the same size.',
    promptZh:
      '制作一张浆糊海报，展示 2025 年最大的 6 个设计趋势。确保每个面板大小相同。',
    tags: ['海报', '版式'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-color-analysis',
    model: 'gpt-image-2',
    title: '色彩分析',
    images: ['/ai/prompts/images-2-color-analysis.webp'],
    promptEn:
      'Using this portrait, create a diagram-first personal color analysis. Show which clothing colors suit the subject through visual comparison. Keep text minimal and avoid paragraphs.',
    promptZh:
      '使用这张肖像照，创建一张以图表为主的个人色彩分析。通过视觉对比展示哪些服装颜色适合照片中的人。保持文字最少，避免段落。',
    tags: ['信息图', '教育'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-capybara-otter-comic',
    model: 'gpt-image-2',
    title: '四页漫画',
    images: ['/ai/prompts/siye.webp'],
    promptEn:
      'make a four-page american retro comic about a capybara and a sea otter who are friends and go on a trip to the south of france together',
    promptZh:
      '制作一篇四页的美国复古漫画，讲述一只水豚和一只海獭是好朋友，一起前往法国南部旅行的故事。',
    tags: ['漫画', '复古'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-academic-paper-poster',
    model: 'gpt-image-2',
    title: 'GPT 分析',
    images: ['/ai/prompts/images-2-academic-poster.webp'],
    promptEn:
      'Please make a landscape academic paper poster based on the uploaded PDF file. Remember to include important charts/diagrams/plots from the source.',
    promptZh:
      '请根据上传的 PDF 文件制作一张横版学术论文海报。记得包含来源中的重要图表/示意图/数据图。',
    tags: ['信息图', '教育'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-thinking-mode-searches',
    model: 'gpt-image-2',
    title: '做周边',
    images: ['/ai/prompts/images-2-thinking-mode-searches.webp'],
    promptEn:
      'Search for the merch in OpenAI supply co website and make a professional poster displaying our merch in a nice layout. The title of the poster should be "Thinking Mode Searches". Along the title there is a subtitle "With thinking mode, the model can automatically browse the internet and find relevant contents for reference." Below that, add a caption for the images below: "Prompt: Make a poster about OpenAI merch available on the official website right now." Aspect ratio: 4:5 portrait.',
    promptZh:
      '搜索 OpenAI Supply Co 网站上的周边商品，制作一张专业海报，以精美的布局展示我们的周边商品。海报标题应为"Thinking Mode Searches"。标题旁有副标题"With thinking mode, the model can automatically browse the internet and find relevant contents for reference."在下方添加图片说明："Prompt: Make a poster about OpenAI merch available on the official website right now."画幅比例：竖版 4:5。',
    tags: ['海报', '品牌'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-visual-proof-blackboard',
    model: 'gpt-image-2',
    title: '视觉佐证',
    images: ['/ai/prompts/shijue.webp'],
    promptEn:
      'a 35mm film photograph of a blackboard in a classroom, and on the blackboard is a visual proof of sum of odd numbers is a square. there is a title "Thinking Mode On" before the math proof. Aspect Ratio: 4:5 portrait.',
    promptZh:
      '一张 35mm 胶片照片，拍摄教室里的一块黑板，黑板上是一个关于奇数之和为完全平方数的可视化证明。数学证明前有标题"Thinking Mode On"。画幅比例：竖版 4:5。',
    tags: ['教育', '胶片'],
    sourceTitle: SOURCE_TITLE,
    sourceUrl: SOURCE_URL,
    sourceDate: SOURCE_DATE,
  },
  {
    id: 'gpt-image-2-boston-spring-city-poster',
    model: 'gpt-image-2',
    title: '波士顿2026春季城市海报',
    images: ['/ai/prompts/3.webp'],
    promptEn:
      'A striking Spring 2026 city poster for Boston with an elegant celebratory mood and a bold contemporary design. On a clean off-white textured background with large areas of negative space, a miniature single sculler rows across the lower right corner of the image on a narrow ribbon of reflective water. The wake from the oar sweeps upward in a dynamic calligraphic curve, gradually transforming into the Charles River and then into a dreamlike hand-painted panorama of Boston. Inside this flowing river-shaped composition are iconic Boston elements: the Back Bay skyline, Beacon Hill brownstones, Acorn Street, Boston Public Garden, Swan Boats, Zakim Bridge, Fenway-inspired details, historic brick architecture, harbor ferries, and the city\'s waterfront atmosphere. Soft morning fog, golden spring light, subtle festive accents in crimson and gold, rich detail, layered depth, sophisticated city-poster aesthetics, fresh and refined, visually powerful but not overcrowded. Elegant typography in the lower left reads "SPRING 2026" with a vertical slogan "BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION", text clear and beautifully composed, premium graphic design, 9:16',
    promptZh:
      '一张引人注目的 2026 春季波士顿城市海报，优雅的庆典氛围与大胆的现代设计相结合。在干净的米白色纹理背景上，大面积留白中，一名微型单人赛艇手在画面右下角一条狭窄的倒映水带上划行。桨的尾迹向上扬起，形成一道动感的书法曲线，逐渐幻化为查尔斯河，再变成一幅梦幻般的手绘波士顿全景。在这条河流形态的构图中，包含波士顿的标志性元素：后湾天际线、灯塔山褐石建筑、橡果街、波士顿公共花园、天鹅船、扎基姆桥、芬威公园细节、历史砖造建筑、港口渡轮和城市滨水氛围。柔和的晨雾、金色的春光、微妙的深红与金色节日点缀、丰富的细节、层次分明的纵深感、精致的城市海报美学、清新脱俗、视觉冲击力强但不拥挤。左下角优雅的排版写着"SPRING 2026"，竖排标语"BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION"，文字清晰美观，高级图形设计，9:16',
    tags: ['海报', '版式'],
    sourceTitle: '@BubbleBrain',
    sourceUrl: 'https://x.com/BubbleBrain/status/2045358053831172358',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-vintage-amalfi-travel-poster',
    model: 'gpt-image-2',
    title: '阿马尔菲复古旅行海报',
    images: ['/ai/prompts/4.webp'],
    promptEn:
      'Modern pencil illustration of Vintage travel poster illustration of the Amalfi Coast, Italy, panoramic coastal cliff road scene, classic 1960s white car driving along a curved seaside road, deep blue Mediterranean sea with small sailboats, colorful pastel hillside village, bright blue sky with soft clouds, lemon tree branches with vibrant yellow lemons framing the foreground, warm summer sunlight, bold vibrant colors, retro 1950s travel poster style, cinematic composition, high detail, screen print texture, graphic illustration. Hand-drawn style, illustration with loose strokes and defined contours. High-contrast color palette, maintaining chromatic harmony between background and elements. Contemporary and decorative aesthetic.',
    promptZh:
      '现代铅笔插画风格的阿马尔菲海岸复古旅行海报，意大利全景悬崖海岸道路场景，经典 1960 年代白色汽车沿海边弯道行驶，深蓝色地中海点缀小帆船，色彩柔和的粉彩山坡村落，明亮蓝天配柔软云朵，柠檬树枝搭配鲜艳黄色柠檬构成前景框架，温暖夏日阳光，大胆鲜艳的色彩，1950 年代复古旅行海报风格，电影级构图，高细节，丝网印刷质感，图形插画。手绘风格，松散笔触与清晰轮廓相结合的插画。高对比度调色板，保持背景与元素之间的色彩和谐。当代装饰美学。',
    tags: ['海报', '复古'],
    sourceTitle: '@WolfRiccardo',
    sourceUrl: 'https://x.com/WolfRiccardo/status/2044562722491121718',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-chengdu-food-map-illustration',
    model: 'gpt-image-2',
    title: '成都美食地图插画',
    images: ['/ai/prompts/5.webp'],
    promptEn:
      'A hand-drawn style city food map themed around Chengdu. The image features a bird\'s-eye view hand-drawn simplified city map as the base, marking main roads and landmarks with a cute hand-drawn feel rather than accurate proportions. The map is scattered with 12 exquisite hand-drawn food spot illustrations: Chunxi Road\'s chuanchuanxiang (skewers of various ingredients steaming hot), Kuanzhai Alley\'s sandadapao (three sticky rice balls flying toward a copper plate), Jianshe Road\'s danhonggao (golden crispy, being flipped), Yulin Road\'s hotpot (nine-grid pot bubbling), etc. Each illustration occupies about 5% of the map, with handwritten-style labels noting the shop name and a recommendation like "the one still queuing at 2am". The map edges are decorated with hand-drawn vines and chili peppers forming a border. Bottom right has a hand-drawn compass and legend. Top left title "成都·吃货暴走地图" uses chubby round hand-drawn art lettering with chili decorations. Overall style is watercolor + colored pencil mixed hand-drawn texture, warm color palette (chili red, turmeric, emerald green), 1:1 aspect ratio.',
    promptZh:
      '一张手绘风格的城市美食地图，以成都为主题。画面以鸟瞰视角的手绘简化城市地图为底，标注主要道路和地标但不追求精确比例而是追求可爱的手绘感。地图上分布着 12 个美食地点的精致手绘小插画：春熙路的串串香（一把竹签插着各种食材冒着热气）、宽窄巷子的三大炮（三个糯米团子飞向铜盘）、建设路的蛋烘糕（金黄酥脆正在翻面）、玉林路的火锅（九宫格锅翻滚冒泡）等，每个插画约占地图的 5% 面积，旁边用手写体标注店名和一句推荐语"凌晨两点还在排队的那家"。地图边缘用手绘藤蔓和辣椒装饰形成边框。右下角有一个手绘指南针和图例说明。左上角标题"成都·吃货暴走地图"使用胖圆的手绘美术字配辣椒装饰。整体画风为水彩+彩铅混合的手绘质感，颜色以暖色系（辣椒红、姜黄、翠绿）为主，图片比例 1:1。',
    tags: ['信息图', '创意'],
    sourceTitle: '@Panda20230902',
    sourceUrl: 'https://x.com/Panda20230902/status/2045396918965285111',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-chinese-s-shaped-poster',
    model: 'gpt-image-2',
    title: '中式极简S形海报',
    images: ['/ai/prompts/6.webp'],
    promptEn:
      'Minimalist new Chinese aesthetic style, the image features an elegant grayish-white base, presenting a paper-cut silhouette-like three-dimensional feel. An S-shaped meandering crack-like edge divides the image, as if tearing open a layer of paper, revealing a colorful Eastern landscape inside. Through the opening, a winding river flows from top to bottom through the entire composition, rendered in varying shades of blue with distinct layers, like a flowing silk ribbon. Along the riverbanks, verdant hills and terraced fields are scattered, with soft colors intertwining green and red, showcasing the tranquil beauty of pastoral life. Ancient-style buildings are arranged along the river with flying eaves and upturned corners, white walls and dark tiles, appearing even more elegant and classical under the interplay of light and shadow. Lush trees line the banks with delicate leaves, a small boat quietly moored mid-river, adding a sense of leisurely contemplation. The overall composition follows an S-shaped curve with rhythmic flow, as if harmonious coexistence of nature and humanity. The painting edges use a torn paper effect, creating a three-dimensional relief-like visual experience. Bottom inscription "东方美学" in black regular script, date "2026/04/18" echoes a red seal, bottom "CHINA" text is dignified and prominent, signature "@LIYUE" subtly concludes, overall atmosphere is tranquil and profound, full of poetry and philosophical contemplation.',
    promptZh:
      '极简新中式美学风格，画面以淡雅的灰白色为底，呈现出一种纸艺剪影般的立体感。一条S形蜿蜒的裂痕状边缘将画面分割，仿佛撕开了一层纸面，露出内部色彩斑斓的东方山水景象。裂口内，一条蜿蜒的河流自上而下贯穿整个构图，河水以深浅不一的蓝色渲染，层次分明，仿佛流动的丝带。河岸两侧点缀着青翠的山丘与梯田，色彩柔和，绿红交织，展现出田园的宁静之美。沿河而建的古风建筑错落有致，飞檐翘角，白墙黛瓦，在光影的映衬下更显古朴典雅。岸边树木葱茏，枝叶轻盈，一艘小船静泊于水中央，增添了几分悠然意境。整体构图呈S形曲线，富有韵律感，仿佛自然与人文的和谐共生。画作边缘采用撕纸效果，营造出立体浮雕般的视觉体验。下方题字"东方美学"以黑色楷体书写，日期"2026/04/18"与红色印章相呼应，底部"CHINA"字样庄重醒目，署名"@LIYUE"低调收尾，整体氛围静谧深远，充满诗意与哲思。',
    tags: ['海报', '艺术'],
    sourceTitle: '@liyue_ai',
    sourceUrl: 'https://x.com/liyue_ai/status/2045368305079447853',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-guangzhou-spring-city-poster',
    model: 'gpt-image-2',
    title: '2026春季广州城市海报',
    images: ['/ai/prompts/7.webp'],
    promptEn:
      'A 2026 city promotional poster full of New Year festive atmosphere yet maintaining elegant sophistication. Double exposure, the composition continues the flowing sense of an S-shape. In the bottom right corner of a pure white textured background, a miniature figure wearing traditional Chinese clothing is waving a long red silk dance ribbon. The red silk dances in the air, not only showing the soft texture of silk, but in its flight toward the upper left, magically transforms into a magnificent mountain range and river. Within this "river", a hand-drawn Guangzhou cityscape with mountains, sea and rivers is superimposed in a Chinese-chic style, with the scenery all in view, magnificent and awe-inspiring. Guangzhou\'s landmark buildings (Canton Tower, Pearl River New Town complex, Pearl River, Guangzhou\'s ancient buildings, cruise ships, Baiyun Mountain). Surrounded by clouds and mist, ethereal and fairy-like, rich in color, complex in structure, rich in detail, yet with large areas of negative space the image still appears fresh and refined. Bottom left typeset with "SPRING 2026" and vertical promotional slogan, overall symbolizing "Millennium Commercial Capital, Charming Guangzhou". Beautiful typography, generous, clear and complete text, 9:16 aspect ratio.',
    promptZh:
      '一张充满新春喜庆氛围但不失高雅格调的 2026 城市宣传海报。双重曝光，构图延续了S型的流动感；在纯白的纹理背景右下角，一个身穿中国传统服饰的微缩人物正在挥舞着一条长长的红色丝绸舞带，这条红绸在空中舞动，不仅展现出丝绸的柔顺质感，更在向左上方飘动的过程中，奇幻地变形成了一条壮丽的山脉河流。在这条"河流"中，叠加了一个有山有海河的广州城市手绘图，国潮，景色尽在眼底，壮阔雄伟，令人震撼。广州的地标建筑(广州塔，珠江新城建筑群，珠江, 广州城里古建筑，游轮，白云山）。云雾环绕，仙气缥缈，色彩丰富，结构复杂，细节丰富，但因为大面积的留白，画面依然显得清新脱俗，左下角排版着"SPRING 2026"和竖排的宣传语，整体寓意"千年商都，魅力广州"。文字排版优美，大方，字迹清晰完整，尺寸9:16。',
    tags: ['海报', '创意'],
    sourceTitle: '@liyue_ai',
    sourceUrl: 'https://x.com/liyue_ai/status/2045332620352119274',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-doodle-sketch-ai-builder',
    model: 'gpt-image-2',
    title: '涂鸦速写AI建造者',
    images: ['/ai/prompts/8.webp'],
    promptEn:
      'Doodle sketch style depicting [a powerful AI builder], presenting a quick sketch, free deformation, improvisational hand-drawn and draft-like visual effect. Lines are casual, exaggerated, varying in thickness, slightly messy but with rhythm and expressiveness, emphasizing summary, exaggeration, playfulness and spontaneity, rather than rigorous realism or fine detail. Colors use rough, dry-brush-feeling block rendering, retaining uneven smudging traces, brush marks, dry brush effects and overlying feel. Colors auto-adapt to the [theme/subject], but maintain a doodle-style, quick-sketch, summary expression overall. No transparent watercolor blending, no delicate watercolor transitions, no paper texture, no soft fogging, no dreamy quality. Background is mainly white space, keeping it simple, relaxed, unfinished and design-conscious. Can add small auxiliary symbols, arrows, marks, circles, repeated lines, casually written text or other doodle elements to enhance the sketchbook or casual visual language, but not too crowded, not disrupting the main subject and white space feel. The image content doesn\'t need to be specified in advance — the [a powerful AI builder] auto-deduces and generates the most suitable main subject, actions, related elements, symbols or simplified scenes. Overall maintains a consistent doodle sketch style and exaggerated summary expression, avoiding complex realistic backgrounds and over-decoration. A signature "BlanPlan" should be naturally incorporated as part of the image, positioned low-key but clearly, can be placed in bottom left, bottom right or near the title, style unified with overall layout, like an artwork signature or design attribution; signature font refined, restrained, premium, not too large, not disrupting main composition, not appearing abrupt or cheap.',
    promptZh:
      '以涂鸦速写风表现【一个厉害的AI builder】，整体呈现快速勾勒、自由变形、即兴手绘与草稿式的视觉效果。线条随手、夸张、可粗细不一，略显凌乱但具有节奏和表现力，强调概括、夸张、趣味和随性，而不是严谨写实或精细刻画。 颜色采用粗糙、干刷感明显的块面表现，可保留不均匀的涂抹痕迹、刷痕、飞白与覆盖感，色彩根据【主题/主体】自动适配，但整体保持涂鸦式、速写式、概括式的表达。不要透明水彩晕染效果，不要细腻水彩过渡，不要纸纹理，不要柔和雾化，不要梦幻质感。 背景以留白为主，保持简洁、轻松、未完成感和设计感，可加入少量辅助性符号、箭头、记号、圈画、重复线、随手写的文字或其他涂鸦元素，以增强速写本或随笔式视觉语言，但不可过于拥挤，不可破坏主体和留白气质。 画面内容不需要预先写清楚，由【一个厉害的AI builder】自动推演并生成最适合的主体形象、动作、相关元素、符号或简化场景，整体保持统一的涂鸦速写风和夸张概括的表现方式，避免复杂写实背景和过度铺陈。 画面中需自然加入专属签名"BlanPlan"，作为画面的一部分，位置低调但清晰，可放在左下角、右下角或标题附近，风格需与整体版式统一，像作品署名或设计落款；签名字体精致、克制、高级，不可过大，不可破坏主体构图，不可显得突兀或廉价。',
    tags: ['创意', '艺术'],
    sourceTitle: '@blanplan',
    sourceUrl: 'https://x.com/blanplan/status/2045190582453350748',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-song-dynasty-social-media',
    model: 'gpt-image-2',
    title: '宋朝朋友圈',
    images: ['/ai/prompts/9.webp'],
    promptEn:
      '"Song Dynasty Social Media Feed", a humorous fusion of ancient-modern crossover interface design. The image simulates a mobile social media interface, but all content is set in Song Dynasty scenes. Profile avatar is a Song Dynasty scholar portrait, username "苏东坡SuShi_Official", post content "Just arrived in Huangzhou, demoted but feeling okay. Made Dongpo pork myself today, absolutely delicious, recipe attached:", with a companion image of Dongpo pork in Gongbi painting style close-up. Likes list shows "黄庭坚、秦观、佛印等126人", comments section has "王安石：呵呵" and "司马光：还是那个味道". Interface elements like the like icon are replaced with Song Dynasty patterns. Status bar shows "大宋移动 5G" and "元丰三年". Color scheme uses phone dark mode paired with Song Dynasty elegant tones. A masterpiece of historical and social media humorous collision.',
    promptZh:
      '"宋朝人的朋友圈"/"SONG DYNASTY SOCIAL MEDIA FEED"，古今穿越幽默融合界面设计风格，画面模拟手机社交媒体界面，但内容全部是宋朝场景头像是宋代文人画像，用户名"苏东坡SuShi_Official"，发布内容"刚到黄州，被贬了但心情还行。今天自己做了东坡肉，味道绝了，附菜谱："，配图为工笔画风格的东坡肉特写，点赞列表"黄庭坚、秦观、佛印等126人"，评论区"王安石：呵呵""司马光：还是那个味道"，界面元素如点赞图标用宋代花纹替代，状态栏显示"大宋移动 5G"和"元丰三年"，配色为手机深色模式搭配宋代雅致色调，历史与社交媒体的趣味碰撞杰作',
    tags: ['创意', '界面'],
    sourceTitle: '@Panda20230902',
    sourceUrl: 'https://x.com/Panda20230902/status/2045385588065313057',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-museum-hanfu-infographic',
    model: 'gpt-image-2',
    title: '博物馆风格汉服拆解信息图',
    images: ['/ai/prompts/10.webp'],
    promptEn:
      'Please auto-generate a "museum-guide-style Chinese breakdown infographic" based on the [topic]. The entire image should combine realistic main visuals, structural breakdown, Chinese annotations, material descriptions, pattern symbolism, color meanings, and core feature summaries. You need to auto-determine the most suitable main subject, clothing system, artifact structure, era style, key components, material craftsmanship, color scheme and layout structure based on the [topic] — users don\'t need to provide other information. Overall style should be: National Museum exhibition board, historical costume guide, cultural heritage themed infographic — not ordinary posters, studio portraits, e-commerce detail pages or anime illustrations. Background uses rice-white, silk-paper-white, light tea-color paper textures, overall premium, restrained, professional, collectible. Fixed layout: Top: Chinese main title + subtitle + intro text. Left side: structural breakdown area with Chinese leader lines annotating key components with detail close-ups. Upper right: material/craftsmanship/texture area showing real texture samples with descriptions. Middle right: pattern/color/symbolism area showing main color palette, pattern samples and cultural explanations. Bottom: dressing sequence/composition flowchart + core feature summary. If the topic suits figure display, use a real person full-body standing pose as the central main subject; if more suitable for artifacts or single structures, switch to a central subject breakdown diagram, but maintain the complete Chinese infographic format. All text must be simplified Chinese, clear, neat, readable, no garbled text, typos, English or pinyin. Emphasize real structure, material differences, cultural explanations and guide temperament. Avoid: poster feel, studio feel, e-commerce feel, anime feel, cosplay feel, random annotations, wrong structure, blurry text, fake materials, over-decoration.',
    promptZh:
      '请根据【主题】自动生成一张"博物馆图鉴式中文拆解信息图"。要求整张图兼具真实写实主视觉、结构拆解、中文标注、材质说明、纹样寓意、色彩含义和核心特征总结。你需要根据【主题】自动判断最合适的主体对象、服饰体系、器物结构、时代风格、关键部件、材质工艺、颜色方案与版式结构，用户无需再提供其他信息。整体风格应为：国家博物馆展板、历史服饰图鉴、文博专题信息图，而不是普通海报、古风写真、电商详情页或动漫插画。背景采用米白、绢纸白、浅茶色等纸张质感，整体高级、克制、专业、可收藏。版式固定为：顶部：中文主标题 + 副标题 + 导语；左侧：结构拆解区，中文引线标注关键部件，并配局部特写；右上：材质/工艺/质感区，展示真实纹理小样并附说明；右中：纹样/色彩/寓意区，展示主色板、纹样样本和文化解释；底部：穿着顺序/构成流程图 + 核心特征总结。若主题适合人物展示，则以真实人物全身站姿为中央主体；若更适合器物或单体结构，则改为中心主体拆解图，但整体仍保持完整中文信息图形式。所有文字必须为简体中文，清晰、规整、可读，不要乱码、错字、英文或拼音。重点突出真实结构、材质差异、文化说明与图鉴气质。避免：海报感、影楼感、电商感、动漫感、cosplay感、乱标注、错结构、糊字、假材质、过度装饰。',
    tags: ['信息图', '教育'],
    sourceTitle: '@MrLarus',
    sourceUrl: 'https://x.com/MrLarus/status/2045504669401653414',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-cosplayer-phone-screenshot',
    model: 'gpt-image-2',
    title: '9:16 Cosplayer手机截图',
    images: ['/ai/prompts/11.webp'],
    promptEn:
      'Generate a vertical phone screenshot-style image with an overall ratio close to 9:16. In the upper-center of the frame is a real person cosplayer playing an anime character (character name). The figure has a realistic style but with slightly anime-influenced facial features, delicate skin, slightly enlarged eyes, gazing gently at the camera. They are sitting in a casual indoor scene, such as in front of a cafe or bar counter, with scene-appropriate props in the background. At the very top of the image, add a phone system status bar UI including time, battery, signal, network and other icons, making the whole image look like a phone screenshot. At the bottom, overlay a large semi-transparent galgame-style dialog box. On the left side of the dialog box, place an anime or chibi avatar corresponding to the character in the image. On the right side, layout text: the first line uses a larger font to display the same character name as before, followed by one or two lines of gentle, healing-style simplified Chinese dialogue auto-created to fit the character\'s personality. Below the dialog box, add an operation bar imitating a galgame UI. Overall style: high definition, rich detail, soft lighting, natural fusion of anime and real photography.',
    promptZh:
      '生成一张竖版手机截图风格的图片，整体比例接近 9:16。画面中心偏上是一位真人 coser，扮演（角色名称）的二次元角色。人物为写实风格，但五官略带动漫感，皮肤细腻，眼睛稍大，表情温柔地看向镜头，坐在室内的休闲场景中，例如咖啡厅或酒吧吧台前，背景有符合场景的道具。画面最上方加入手机系统状态栏 UI，包括时间、电量、信号、网络等图标，让整张图看起来像手机截图。画面底部叠加一块宽大的半透明 galgame 风格对话框，对话框左侧放一个与画面人物对应的动漫或 Q 版头像；对话框右侧排版文字：第一行用较大字体显示与前面相同的角色名字，下面一到两行显示一段适合这个角色人设的、温柔治愈风格的简体中文台词，由你自动创作。再在对话框下方加一条操作栏，仿照 galgame UI。整体风格高清、细节丰富、光线柔和、二次元与真人写真自然融合。',
    tags: ['创意', '角色'],
    sourceTitle: '@Zoulinshen',
    sourceUrl: 'https://x.com/Zoulinshen/status/2045082518089810073',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-qiongqi-eastern-aesthetics-poster',
    model: 'gpt-image-2',
    title: '穷奇东方美学海报',
    images: ['/ai/prompts/13.webp'],
    promptEn:
      'Minimalist new Chinese style three-dimensional graphic design. Bottom of the image features Chinese text in regular script: "东方美学", "2026/04/18", signed "CHINA" and "@LIYUE". On flat pure white matte-textured heavy art paper, a creative landscape painting full of Eastern poetic atmosphere with irregular torn-paper edges. Chinese mythical beast: Qiongqi, complete figure, magnificent, with soft and fluid lines, piercing eyes, majestic expression, elegant posture, luxury decorative art with traditional Chinese patterns. Fluorescent blue lines, 0.5mm ultra-fine gold metallic edging, bold white ink splashes, color rendering, red background, romantic poetic blue-toned vision. Dreamlike scene with interwoven warm and cool light, strong light-shadow contrast atmosphere, flowers dancing in a time-narrative, Eastern Zen spirit, large areas of white space, framed composition, bottom white space, clear details.',
    promptZh:
      '极简主义，新中式风格立体图形设计，图像下端有楷体中国文字："东方美学"，"2026/04/18"，署名 "CHINA"，和"@LIYUE"；平整纯白色的亚光质感厚艺术纸上绘充满东方诗意氛围的山水创意画，不规则的撕纸效果；中国的神兽：穷奇，身形图案完整，美轮美奂，线条柔美灵动,眼睛炯炯有神，威严的神态，优雅的姿势，奢华装饰艺术，中国传统纹饰；荧光蓝色线条，0.5mm极细金色金属质感勾边，泼白墨大笔触，色彩渲染，红底，蓝色的浪漫诗意视觉；冷暖光交织的梦幻唯美场景，强烈的光影对比氛围，花轻舞的时光叙事，东风禅意，画面有大面积留白，框架构图，底部留白，细节清晰。',
    tags: ['海报', '艺术'],
    sourceTitle: '@liyue_ai',
    sourceUrl: 'https://x.com/liyue_ai/status/2045506567735558336',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-guangzhou-paper-cut-city-poster',
    model: 'gpt-image-2',
    title: '广州剪纸城市海报',
    images: ['/ai/prompts/14.webp'],
    promptEn:
      'Paper-cut art inspired by the modern cityscape of Pearl River New Town, intricately crafting Canton Tower, the Twin Towers and other landmark buildings with a bustling city scene through delicate hollow-cut techniques on a single sheet of paper. All buildings and elements are connected with flowing lines and structures, no isolated parts, forming a complete urban scroll. The artwork uses metallic foil or glossy paper material with subtle light and shadow on the surface, presenting soft highlights and shadows under illumination as if gently lit by city lights. The background features a softly blurred Pearl River New Town skyline, dotted with faintly visible Huacheng Square and tree silhouettes, radiating a modern romantic atmosphere. Light dandelion fluff or starlight-like dynamic light points are cleverly integrated, symbolizing dreams and vitality drifting and flying through this new city. Overall呈现8K ultra-high-definition visual, rich detail, realistic yet artistically compelling.',
    promptZh:
      '以珠江新城现代都市景观为灵感的剪纸艺术，通过精巧的镂空手法在一整幅纸上，立体刻画广州塔、东西双塔等地标建筑与繁华城景。所有建筑与元素均以流畅的线条与结构相连，无孤立部分，构成一幅完整的都市画卷。画面采用金属箔或光泽纸材质，表面带有细腻的明暗光泽，在光照下呈现柔和的高光与阴影，仿佛被城市灯光轻轻照亮。背景以虚化的珠江新城天际线为衬，点缀隐约可见的花城广场与树木轮廓，整体透出现代浪漫的氛围。作品中巧妙融入轻盈的蒲公英绒毛或星光般的动态光点，象征梦想与活力在这座新城中飘散飞扬。整体呈现8K超高清视觉，细节丰富，真实而富有艺术感染力。',
    tags: ['海报', '创意'],
    sourceTitle: '@liyue_ai',
    sourceUrl: 'https://x.com/liyue_ai/status/2045527750606487877',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-dreamy-watercolor-editorial',
    model: 'gpt-image-2',
    title: '梦幻水彩编辑插画',
    images: ['/ai/prompts/15.webp'],
    promptEn:
      'Dreamy watercolor illustration of [subject], with light impressionist aesthetic, loose brushstrokes and translucent washes in [color1] and [color2] tones. Soft blending on cold-pressed paper texture, delicate lighting, clean composition, minimalist approach, sense of calm, lightness and ephemeral beauty, high quality, editorial style.',
    promptZh:
      '梦幻水彩插画风格绘制[主题]，带有轻盈的印象派美感，松散的笔触与半透明水洗的[颜色1]和[颜色2]色调。冷压纸纹理上的柔和晕染，细腻的光照，干净的构图，极简手法，呈现宁静、轻盈与转瞬即逝的美感，高品质，编辑插画风格。',
    tags: ['创意', '艺术'],
    sourceTitle: '@hmontilla_',
    sourceUrl: 'https://x.com/hmontilla_/status/2045513933096636575',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-silhouette-universe-narrative-poster',
    model: 'gpt-image-2',
    title: '剪影宇宙叙事海报',
    images: ['/ai/prompts/16.webp'],
    promptEn:
      'Auto-generate a high-aesthetic "Silhouette Universe / Collector\'s Edition Narrative Poster" based on [theme]. Don\'t limit the image to fixed objects or common containers. Don\'t default to bottles, hourglasses, glass domes, pocket watches. Instead, let AI choose the most fitting, symbolic, strongest-outline main silhouette carrier — it could be artifacts, architecture, doors, towers, arches, domes, stairwells, corridors, statues, profiles, eyes, palms, skulls, wings, masks, mirrors, thrones, rings, cracks, light screens, shadows, geometric structures, spatial sections, stage frames, abstract symbols or other creative visual outlines. Prioritize outlines that amplify the theme\'s character, create strong visual memory, and embody epic, mysterious, poetic or design sensibility. The core is not simply putting a world inside an object — let a complete themed world naturally grow within, upon, or integrated with the silhouette structure, creating an advanced narrative effect of "a theme universe unfolding依附于 a symbolic silhouette." The silhouette must be clear, elegant, recognizable, occupying the core of the composition. Inside or along its boundaries, auto-generate a complete narrative world strongly tied to the theme — iconic scenes, core architecture, symbolic elements, character relationships, spatial depth progression, atmospheric layers with destiny and emotional tension, narrative details like doors, stairs, bridges, water, smoke, paths, light sources, ruins, mechanical structures, natural landscapes. All elements unified, natural, layered, like a complete world truly孕育 within the silhouette structure. Overall composition: collector\'s edition poster气质 with premium design, stable large structure, strong clear silhouette, interior world with depth, order and breathing room, rich detail without crowding. Style fuses collector\'s edition film poster composition, narrative visual design, dreamy watercolor texture and paper print气质. Colors: AI auto-judges premium palette, must remain unified, restrained, low-saturation, premium. No cheap neon, no plastic digital feel.',
    promptZh:
      '请根据【主题：xxx】自动生成一张高审美的"轮廓宇宙 / 收藏版叙事海报"风格作品。不要将画面局限于固定器物或常见容器，不要优先默认瓶子、沙漏、玻璃罩、怀表之类的常规载体，而是由 AI 根据主题自行判断并选择一个最契合、最有象征意义、轮廓最强、最适合承载完整叙事世界的主轮廓载体。这个主轮廓可以是器物、建筑、门、塔、拱门、穹顶、楼梯井、长廊、雕像、侧脸、眼睛、手掌、头骨、羽翼、面具、镜面、王座、圆环、裂缝、光幕、阴影、几何结构、空间切面、舞台框景、抽象符号或其他更有创意与主题代表性的视觉轮廓，要求合理布局。优先选择最能放大主题气质、最能形成强烈视觉记忆点、最能体现史诗感、神秘感、诗意感或设计感的轮廓，而不是最安全、最普通、最常见的容器。画面的核心不是简单把世界装进某个物体里，而是让完整的主题世界自然生长在这个主轮廓之中、之内、之上、之边界里或与其结构融为一体，形成一种"主题宇宙依附于一个象征性轮廓展开"的高级叙事效果。主轮廓必须清晰、优雅、有辨识度，并在整体构图中占据核心地位。轮廓内部或边界中需要自动生成与主题强绑定的完整叙事世界，内容应当丰富、饱满、层次清晰，包括最能代表主题的标志性场景、核心建筑或空间结构、象征符号与隐喻元素、角色关系或文明痕迹、远景中景近景的空间递进、具有命运感和情绪张力的氛围层次，以及门、台阶、桥梁、水面、烟雾、路径、光源、遗迹、机械结构、自然景观、抽象形态、生物或道具等叙事细节。所有元素必须统一、自然、有主次、有层级地融合，像一个完整世界真实孕育在这个轮廓结构之中，而不是简单拼贴、裁切填充、素材堆叠或模板化背景。整体构图需要具有强烈的收藏版海报气质与高级设计感，大结构稳定，主轮廓强烈明确，内部世界具有纵深、秩序和呼吸感，细节丰富但不拥挤，内容丰满但不杂乱。风格融合收藏版电影海报构图、高级叙事型视觉设计、梦幻水彩质感与纸张印刷品气质。色彩由 AI 根据主题自动判断并匹配最合适的高级配色方案，但必须保持统一、克制、耐看、低饱和、高级。',
    tags: ['海报', '创意'],
    sourceTitle: '@MrLarus',
    sourceUrl: 'https://x.com/MrLarus/status/2045418028733538620',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-multi-platform-screenshots',
    model: 'gpt-image-2',
    title: '多平台内容截图',
    images: ['/ai/prompts/17.webp'],
    promptEn:
      '1. Generate a WeChat Video Channel content screenshot, theme: middle-aged and elderly shouldn\'t blindly pressure marriage, iPhone size\n2. Generate a Douyin content screenshot, theme: catch up with the AI wave, 9.9 yuan all-inclusive course, iPhone size\n3. Generate a Xiaohongshu content screenshot, theme: behind every精致 girl there\'s online lending, iPhone size\n4. Generate a Kuaishou content screenshot, theme: livestream divorce预告, iPhone size',
    promptZh:
      '1、生成视频号内容截图，主题：中老年不要盲目催婚，iPhone尺寸\n2、生成抖音内容截图，主题：跟上AI浪潮9.9包教会，iPhone尺寸\n3、生成小红书内容截图，主题：精致女孩背后都有网贷，iPhone尺寸\n4、生成快手内容截图：主题：直播离婚预告，iPhone尺寸',
    tags: ['界面', '创意'],
    sourceTitle: '@MrLarus',
    sourceUrl: 'https://x.com/MrLarus/status/2045373105041007013',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-liu-yifei-douyin-livestream',
    model: 'gpt-image-2',
    title: '刘亦菲抖音直播截图',
    images: ['/ai/prompts/18.webp'],
    promptEn:
      '9:16 aspect ratio, generate a Douyin livestream screenshot with Liu Yifei streaming, holding a sign that reads "今晚直播，欢迎来参亦菲畅聊！"',
    promptZh:
      '9:16 的图片比例，生成一张抖音直播的截图，里面是 刘亦菲 在直播，刘亦菲 手里拿着牌子，牌子里写着 今晚直播，欢迎来参亦菲畅聊！',
    tags: ['界面', '创意'],
    sourceTitle: '@alanblogsooo',
    sourceUrl: 'https://x.com/alanblogsooo/status/2044784762594918516',
    sourceDate: '2026-04-18',
  },
  {
    id: 'gpt-image-2-king-taejo-x-page',
    model: 'gpt-image-2',
    title: '朝鲜太祖李成桂的X主页',
    images: ['/ai/prompts/19.webp'],
    promptEn:
      'Create the X (Twitter) page of King Taejo Yi Seong-gye (right before the Wihwado Retreat — with posts containing mutual disses between him and General Choi Yeong).',
    promptZh:
      '请制作朝鲜太祖李成桂的 X 页面（威化岛回军前夕——包含他与崔莹将军互相嘲讽的内容帖子）。',
    tags: ['创意', '界面'],
    sourceTitle: '@SKA_Neotype',
    sourceUrl: 'https://x.com/SKA_Neotype/status/2044637900978217334',
    sourceDate: '2026-04-18',
  },
]
