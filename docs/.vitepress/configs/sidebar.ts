import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/java/': [
    {
      text: 'Java进化论基础篇',
      collapsed: false,
      items: [
        { text: '数据结构', link: '/java/base/data-structure' },
        { text: '循环语句', link: '/java/base/loop-statements' },
      ],
    },
    {
      text: 'Java进化论进阶篇',
      collapsed: false,
      items: [
        { text: '并发编程', link: '/java/advanced/concurrency' },
        { text: 'JVM虚拟机', link: '/java/advanced/jvm' },
      ],
    },
    {
      text: 'Java实战练习',
      collapsed: false,
      items: [
        { text: '设计模式', link: '/java/practice/design-patterns' },
        { text: 'SpringBoot', link: '/java/practice/spring-boot' },
      ],
    },
  ],
}
