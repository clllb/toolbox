import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '今日顺了吗',
    link: '/luck/'
  },
  { text: '工具导航',
    link: '/nav/'
  },
  {
    text: 'AI相关',
    items: [
      { text: 'AI大事件', link: '/ai/daily/index' },
      { text: 'AI周报', link: '/ai/weekly/index' },
      { text: 'AI工具手册', link: '/ai/tools/' },
      { text: 'AI提示词库', link: '/ai/prompts/image/' },
    ],
  },
  { text: '百宝箱主页',
    link: '/'
  }
]
