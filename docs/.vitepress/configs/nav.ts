import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '工具导航',
    link: '/nav/'
  },
  {
    text: 'Java进化论',
    items: [
      { text: '基础篇', link: '/java/base/data-structure' },
      { text: '进阶篇', link: '/java/advanced/concurrency' },
      { text: '实战练习', link: '/java/practice/design-patterns' },
    ],
  },
  { text: '百宝箱主页',
    link: 'index.md'
  }
]
