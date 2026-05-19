export interface HuangliRecord {
  date: string
  lunar?: {
    text?: string
  }
  calendar?: {
    weekday?: string
  }
  day_quality?: {
    peng_taboo?: string
    black_yellow?: string
    twelve_officer?: string
  }
  directions?: {
    wealth?: string
    joy?: string
    fortune?: string
  }
  clothing?: {
    lucky?: string[]
    supportive?: string[]
    neutral?: string[]
    not_recommended?: string[]
    avoid?: string[]
  }
  activities?: {
    good?: string[]
    bad?: string[]
  }
}

export interface LuckCard {
  title: string
  dateLabel: string
  tone: string
  luckyDirection: string
  clothing: {
    primary: string[]
    secondary: string[]
    avoid: string[]
  }
  doMore: string[]
  watch: string[]
  note: string
}

export interface ActionAdvice {
  label: string
  title: string
  body: string
}

export interface PengPitfall {
  title: string
  body: string
  source: string
}

export function monthKey(date: string): string {
  return date.slice(0, 7)
}

export function createLuckCard(record: HuangliRecord): LuckCard {
  const quality = record.day_quality?.black_yellow ?? '传统历法信号'
  const officer = record.day_quality?.twelve_officer
    ? `${record.day_quality.twelve_officer}日`
    : '今日节奏'
  const good = record.activities?.good?.slice(0, 5) ?? []
  const bad = record.activities?.bad?.slice(0, 5) ?? []
  const luckyColors = record.clothing?.lucky ?? []
  const supportiveColors = record.clothing?.supportive ?? []
  const avoidColors = record.clothing?.avoid ?? []
  const wealth = record.directions?.wealth
  const joy = record.directions?.joy

  return {
    title: '幸运卡片',
    dateLabel: [record.date, record.calendar?.weekday, record.lunar?.text]
      .filter(Boolean)
      .join(' · '),
    tone: `${quality} · ${officer}：把传统黄历信号翻译成今天的小选择。`,
    luckyDirection: [wealth && `财神 ${wealth}`, joy && `喜神 ${joy}`]
      .filter(Boolean)
      .join(' · ') || '今日未标注方位',
    clothing: {
      primary: luckyColors,
      secondary: supportiveColors,
      avoid: avoidColors,
    },
    doMore: good.length ? good : ['整理计划', '低风险推进'],
    watch: bad.length ? bad : ['重大决定前多做一次现实校验'],
    note:
      '参考 toolbox 黄历 JSON / cnlunar 计算；仅作传统文化、审美和娱乐参考，不替代专业判断。',
  }
}

export function createPengPitfall(record: HuangliRecord): PengPitfall {
  const source = record.day_quality?.peng_taboo ?? ''
  const notes: string[] = []

  if (source.includes('不词讼')) notes.push('少打嘴仗')
  if (source.includes('不远行')) notes.push('出门看好随身物品')
  if (source.includes('不开仓')) notes.push('钱和库存先别乱动')
  if (source.includes('不栽植')) notes.push('新计划先别急着扎根')
  if (source.includes('不修灶')) notes.push('厨房和流程少临时大改')
  if (source.includes('不剃头')) notes.push('形象大改先缓一缓')
  if (source.includes('不受田')) notes.push('资产类决定多核一遍')
  if (source.includes('不破券')) notes.push('票据合同别随手作废')
  if (source.includes('不经络')) notes.push('复杂关系先别硬扯')
  if (source.includes('不合酱')) notes.push('合作配方先别乱调')
  if (source.includes('不泱水')) notes.push('涉水涉风险的事多留心')
  if (source.includes('不问卜')) notes.push('别反复纠结同一个问题')
  if (source.includes('不穿井')) notes.push('别轻易往深坑里钻')
  if (source.includes('不哭泣')) notes.push('情绪上头时先停一停')

  return {
    title: '今日避坑',
    body: notes.length ? `${notes.slice(0, 2).join('，')}。` : '少冲动，多确认，重要决定慢半拍。',
    source,
  }
}

export function createActionAdvice(record: HuangliRecord): ActionAdvice[] {
  const good = record.activities?.good ?? []
  const bad = record.activities?.bad ?? []
  const cautiousDay =
    record.day_quality?.black_yellow === '黑道日' ||
    bad.includes('出行') ||
    bad.includes('破土')
  const tradeFriendly = good.includes('纳财') || good.includes('立券交易')

  return [
    {
      label: '工作',
      title: cautiousDay ? '小步推进，别临时开大坑' : '可以推进确定性任务',
      body: cautiousDay
        ? '适合小步修复、整理、灰度和收尾，把回滚方案放在手边。'
        : '适合把计划往前推一格，重要变更也要保留验证和监控。',
    },
    {
      label: '沟通',
      title: tradeFriendly ? '先对齐，再争取' : '先确认边界',
      body: tradeFriendly
        ? '先对齐条件，再谈资源、合作和收益，重要承诺要写清楚。'
        : '表达诉求前先确认对方状态，少硬碰硬，多留余地。',
    },
    {
      label: '生活',
      title: '给自己留一点余量',
      body: bad.includes('出行')
        ? '外出安排别卡太满，路线、天气和备选方案提前看一眼。'
        : '适合整理环境、清待办、复盘旧事，让今天轻一点。',
    },
  ]
}

export function sceneAdvice(record: HuangliRecord) {
  const good = record.activities?.good ?? []
  const bad = record.activities?.bad ?? []

  return [
    {
      id: 'launch',
      label: '发版',
      title: '小步上线，留好回滚',
      body: bad.includes('出行') || bad.includes('破土')
        ? '适合小步灰度、补监控、留回滚，不适合临时硬上大版本。'
        : '可以推进低风险发布，把验证、监控和回滚放在前面。',
    },
    {
      id: 'interview',
      label: '面试',
      title: '穿稳一点，说清一点',
      body: '优先用幸运色做主色，表达上少抢、多确认，把准备好的例子讲完整。',
    },
    {
      id: 'deal',
      label: '签约',
      title: '先对齐，再落笔',
      body: good.includes('立券交易') || good.includes('纳财')
        ? '谈合作可以更主动，但合同细节仍要逐条确认。'
        : '适合先对齐边界和价格，重要签署留给更确定的窗口。',
    },
    {
      id: 'writing',
      label: '写作',
      title: '先把草稿变真实',
      body: '今天先把结构落下来，少追求一句封神，多让文章能继续往前长。',
    },
    {
      id: 'sports',
      label: '打球',
      title: '先赢下一分',
      body: '别问玄学能不能包赢，先热身、控节奏、少上头。好运负责加一点气势，你负责把球打进去。',
    },
    {
      id: 'travel',
      label: '出行',
      title: '把路程留出余量',
      body: bad.includes('出行')
        ? '今天出门更适合保守安排，提前看路线，别把时间卡到极限。'
        : '可以安排外出，把交通、天气和备选路线提前确认好。',
    },
    {
      id: 'raise',
      label: '谈薪',
      title: '先摆事实，再谈期待',
      body: good.includes('纳财')
        ? '适合把成果、范围和市场价讲清楚，语气稳一点，筹码摆足一点。'
        : '先整理贡献和证据，正式开口前再多确认对方窗口。',
    },
    {
      id: 'study',
      label: '学习',
      title: '把注意力收回来',
      body: '适合做笔记、复盘错题、补基础。今天别贪多，学透一小块就算赚到。',
    },
    {
      id: 'tidy',
      label: '整理',
      title: '清掉一点旧负担',
      body: '适合整理文件、待办、桌面和计划。先让环境变清爽，脑子会跟着松一口气。',
    },
    {
      id: 'client',
      label: '见客户',
      title: '先稳住场，再推进事',
      body: '适合提前准备议程、案例和底线。见面时少即兴发挥，多用事实把信任垫起来。',
    },
  ]
}
