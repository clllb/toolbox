import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // --- 修改为 /AI/ ---
  '/AI/': [
    {
      text: 'AI日报',
      collapsed: false, 
      items: [
        
        { text: '2026-03-01', link: '/AI/daily/cn/2026-03/2026-03-01' }
      ]
    },
    {
      text: 'AI工具',
      collapsed: false,
      items: [
        { text: '工具列表', link: '/AI/tools/' }
      ]
    },
    {
      text: 'AI周报',
      collapsed: false,
      items: [
        { text: '2026-03-15周报', link: '/AI/weekly/cn/2026-03-15-ai-signal-weekly-2026-w11-anthropic-agent-ecosystem-war' }
      ]
    }
  ],
  
  // --- 其他保持不变 ---
  '/me/':[
    {
      text: '年度总结',
      collapsed: false,
      items: [
        { text: '2022年度总结', link: '/me/summary/2022' },
        { text: '关于作者', link: '/me/' }
      ],
    }
  ],
  '/bug/':[  // 注意：这里修正了原代码中 '/bug' 缺少末尾斜杠的问题，保持规范
    {
      text: '公众号杂谈',
      collapsed: false,
      items:[
          {text: 'What? FastExcel没了！', link: '/bug/fastexcel'}
      ]
    }
  ]
}