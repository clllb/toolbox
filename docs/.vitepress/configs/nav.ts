import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '工具导航',
    link: '/nav/'
  },
  {
    text: 'AI相关',
    items: [
      { text: 'AI大事件', link: '/AI/daily/index' },
      { text: 'AI周报', link: '/AI/weekly/index' },
      { text: 'AI工具手册', link: '/AI/tools/' },
      { text: 'AI提示词库', link: '/AI/prompts/image/' },
    ],
  },
  { text: '百宝箱主页',
    link: '/'
  }
]
