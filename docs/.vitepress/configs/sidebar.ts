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

        { text: '2026-04-12', link: '/AI/daily/cn/2026-04/2026-04-12.md' },
        { text: '2026-04-11', link: '/AI/daily/cn/2026-04/2026-04-11.md' },
        { text: '2026-04-10', link: '/AI/daily/cn/2026-04/2026-04-10.md' },
        { text: '2026-04-09', link: '/AI/daily/cn/2026-04/2026-04-09.md' },
        { text: '2026-04-08', link: '/AI/daily/cn/2026-04/2026-04-08.md' },
        { text: '2026-04-07', link: '/AI/daily/cn/2026-04/2026-04-07.md' },
        { text: '2026-04-06', link: '/AI/daily/cn/2026-04/2026-04-06.md' },
        { text: '2026-04-05', link: '/AI/daily/cn/2026-04/2026-04-05.md' },
        { text: '2026-04-03', link: '/AI/daily/cn/2026-04/2026-04-03.md' },
        { text: '2026-04-02', link: '/AI/daily/cn/2026-04/2026-04-02.md' },
        { text: '2026-04-01', link: '/AI/daily/cn/2026-04/2026-04-01.md' },
        { text: '2026-03-31', link: '/AI/daily/cn/2026-03/2026-03-31.md' },
        { text: '2026-03-30', link: '/AI/daily/cn/2026-03/2026-03-30.md' },
        { text: '2026-03-29', link: '/AI/daily/cn/2026-03/2026-03-29.md' },
        { text: '2026-03-28', link: '/AI/daily/cn/2026-03/2026-03-28.md' },
        { text: '2026-03-27', link: '/AI/daily/cn/2026-03/2026-03-27.md' },
        { text: '2026-03-26', link: '/AI/daily/cn/2026-03/2026-03-26.md' },
        { text: '2026-03-25', link: '/AI/daily/cn/2026-03/2026-03-25.md' },
        { text: '2026-03-24', link: '/AI/daily/cn/2026-03/2026-03-24.md' },
        { text: '2026-03-23', link: '/AI/daily/cn/2026-03/2026-03-23.md' },
        { text: '2026-03-22', link: '/AI/daily/cn/2026-03/2026-03-22.md' },
        { text: '2026-03-21', link: '/AI/daily/cn/2026-03/2026-03-21.md' },
        { text: '2026-03-20', link: '/AI/daily/cn/2026-03/2026-03-20.md' },
        { text: '2026-03-19', link: '/AI/daily/cn/2026-03/2026-03-19.md' },
        { text: '2026-03-18', link: '/AI/daily/cn/2026-03/2026-03-18.md' },
        { text: '2026-03-17', link: '/AI/daily/cn/2026-03/2026-03-17.md' },
        { text: '2026-03-16', link: '/AI/daily/cn/2026-03/2026-03-16.md' },
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

        { text: '2026-04-05 周报', link: '/AI/weekly/cn/2026-04-05-deepseek-v4-huawei-ascend-ai-sycophancy-weekly-2026-w14.md' },
        { text: '2026-03-29 周报', link: '/AI/weekly/cn/2026-03-29-hexi-2077-ai-deep-signal-weekly-2026-w13.md' },
        { text: '2026-03-22 周报', link: '/AI/weekly/cn/2026-03-22-hexi-2077-ai-weekly-2026-w12.md' },
        { text: '2026-03-15 周报', link: '/AI/weekly/cn/2026-03-15-ai-signal-weekly-2026-w11-anthropic-agent-ecosystem-war.md' },
        { text: '2026-03-08 周报', link: '/AI/weekly/cn/2026-03-08-ai-weekly-2026-w10-gpt-5-4-militarization-claude-code.md' },
        { text: '2026-03-01 周报', link: '/AI/weekly/cn/2026-03-01-hexi-2077-ai-signal-weekly-2026-w09-trillion-dollar-arms-race.md' }
      ]
    }
  ]
    
    
}
