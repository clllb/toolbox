import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/bug/':[  // 注意：这里修正了原代码中 '/bug' 缺少末尾斜杠的问题，保持规范
    {
      text: '公众号杂谈',
      collapsed: false,
      items:[
          {text: 'What? FastExcel没了！', link: '/bug/fastexcel'}
      ]
    }
  ],
  '/me/':[
    {
      text: '年度总结',
      collapsed: false,
      items: [
        { text: '2022年度总结', link: '/me/summary/2022' },
        { text: '关于作者', link: '/me/' }
      ]
    }
  ],
  // --- 修改为 /AI/ ---
  '/AI/': [
    {
      text: 'AI日报',
      collapsed: false, 
      items: [
        { text: '2026-03-15', link: '/AI/daily/cn/2026-03/2026-03-15.md' },
        { text: '2026-03-14', link: '/AI/daily/cn/2026-03/2026-03-14.md' },
        { text: '2026-03-13', link: '/AI/daily/cn/2026-03/2026-03-13.md' },
        { text: '2026-03-12', link: '/AI/daily/cn/2026-03/2026-03-12.md' },
        { text: '2026-03-11', link: '/AI/daily/cn/2026-03/2026-03-11.md' },
        { text: '2026-03-10', link: '/AI/daily/cn/2026-03/2026-03-10.md' },
        { text: '2026-03-09', link: '/AI/daily/cn/2026-03/2026-03-09.md' },
        { text: '2026-03-08', link: '/AI/daily/cn/2026-03/2026-03-08.md' },
        { text: '2026-03-07', link: '/AI/daily/cn/2026-03/2026-03-07.md' },
        { text: '2026-03-06', link: '/AI/daily/cn/2026-03/2026-03-06.md' },
        { text: '2026-03-05', link: '/AI/daily/cn/2026-03/2026-03-05.md' },
        { text: '2026-03-04', link: '/AI/daily/cn/2026-03/2026-03-04.md' },
        { text: '2026-03-03', link: '/AI/daily/cn/2026-03/2026-03-03.md' },
        { text: '2026-03-02', link: '/AI/daily/cn/2026-03/2026-03-02.md' },
        { text: '2026-03-01', link: '/AI/daily/cn/2026-03/2026-03-01.md' }
        ],
    },
    {
      text: 'AI周报',
      collapsed: false,
      items: [
        { text: '2026-03-15 周报', link: '/AI/weekly/cn/2026-03-15-ai-signal-weekly-2026-w11-anthropic-agent-ecosystem-war.md' },
        { text: '2026-03-08 周报', link: '/AI/weekly/cn/2026-03-08-ai-weekly-2026-w10-gpt-5-4-militarization-claude-code.md' },
        { text: '2026-03-01 周报', link: '/AI/weekly/cn/2026-03-01-hexi-2077-ai-signal-weekly-2026-w09-trillion-dollar-arms-race.md' }
      ]
    }
  ]
    
    
}
