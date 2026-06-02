import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/bug/': [
    {
      text: '公众号杂谈',
      collapsed: false,
      items: [
        { text: 'What? FastExcel没了！', link: '/bug/fastexcel' },
        { text: '特朗普访华团再加一人：老黄，我 tm 来了！', link: '/bug/trump-visit-ceo-list' }
      ]
    }
  ],
  '/AI/tools/': [
    {
      text: 'AI工具手册',
      collapsed: false,
      items: [
        { text: '栏目介绍', link: '/AI/tools/' },
        { text: '每周工具速递', link: '/AI/tools/weekly-tools/' },
        { text: 'AI工具使用手册', link: '/AI/tools/usage-guide/' }
      ]
    }
  ],
  '/AI/prompts/': [
    {
      text: 'AI 提示词库',
      collapsed: false,
      items: [
        { text: '图片提示词库', link: '/AI/prompts/image/' },
        { text: '论文提示词库', link: '/AI/prompts/paper/' }
      ]
    }
  ],
  '/me/': [
    {
      text: '年度总结',
      collapsed: false,
      items: [
        { text: '2022年度总结', link: '/me/summary/2022' },
        { text: '关于作者', link: '/me/' }
      ]
    }
  ],
  '/AI/': [
    {
      text: 'AI大事件',
      collapsed: false,
      items: [

        {
          text: '2026-06',
          collapsed: false,
          items: [
            { text: '2026-06-02', link: '/AI/daily/cn/2026-06/2026-06-02.md' },
            { text: '2026-06-01', link: '/AI/daily/cn/2026-06/2026-06-01.md' }
          ]
        },

        {
          text: '2026-05',
          collapsed: true,
          items: [
            { text: '2026-05-28', link: '/AI/daily/cn/2026-05/2026-05-28.md' },
            { text: '2026-05-27', link: '/AI/daily/cn/2026-05/2026-05-27.md' },
            { text: '2026-05-26', link: '/AI/daily/cn/2026-05/2026-05-26.md' },
            { text: '2026-05-25', link: '/AI/daily/cn/2026-05/2026-05-25.md' },
            { text: '2026-05-24', link: '/AI/daily/cn/2026-05/2026-05-24.md' },
            { text: '2026-05-23', link: '/AI/daily/cn/2026-05/2026-05-23.md' },
            { text: '2026-05-22', link: '/AI/daily/cn/2026-05/2026-05-22.md' },
            { text: '2026-05-21', link: '/AI/daily/cn/2026-05/2026-05-21.md' },
            { text: '2026-05-20', link: '/AI/daily/cn/2026-05/2026-05-20.md' },
            { text: '2026-05-19', link: '/AI/daily/cn/2026-05/2026-05-19.md' },
            { text: '2026-05-18', link: '/AI/daily/cn/2026-05/2026-05-18.md' },
            { text: '2026-05-17', link: '/AI/daily/cn/2026-05/2026-05-17.md' },
            { text: '2026-05-16', link: '/AI/daily/cn/2026-05/2026-05-16.md' },
            { text: '2026-05-15', link: '/AI/daily/cn/2026-05/2026-05-15.md' },
            { text: '2026-05-14', link: '/AI/daily/cn/2026-05/2026-05-14.md' },
            { text: '2026-05-13', link: '/AI/daily/cn/2026-05/2026-05-13.md' },
            { text: '2026-05-12', link: '/AI/daily/cn/2026-05/2026-05-12.md' },
            { text: '2026-05-11', link: '/AI/daily/cn/2026-05/2026-05-11.md' },
            { text: '2026-05-10', link: '/AI/daily/cn/2026-05/2026-05-10.md' },
            { text: '2026-05-09', link: '/AI/daily/cn/2026-05/2026-05-09.md' },
            { text: '2026-05-08', link: '/AI/daily/cn/2026-05/2026-05-08.md' },
            { text: '2026-05-07', link: '/AI/daily/cn/2026-05/2026-05-07.md' },
            { text: '2026-05-06', link: '/AI/daily/cn/2026-05/2026-05-06.md' },
            { text: '2026-05-05', link: '/AI/daily/cn/2026-05/2026-05-05.md' },
            { text: '2026-05-04', link: '/AI/daily/cn/2026-05/2026-05-04.md' },
            { text: '2026-05-03', link: '/AI/daily/cn/2026-05/2026-05-03.md' },
            { text: '2026-05-02', link: '/AI/daily/cn/2026-05/2026-05-02.md' },
            { text: '2026-05-01', link: '/AI/daily/cn/2026-05/2026-05-01.md' }
          ]
        },

        {
          text: '2026-04',
          collapsed: true,
          items: [
            { text: '2026-04-30', link: '/AI/daily/cn/2026-04/2026-04-30.md' },
            { text: '2026-04-29', link: '/AI/daily/cn/2026-04/2026-04-29.md' },
            { text: '2026-04-28', link: '/AI/daily/cn/2026-04/2026-04-28.md' },
            { text: '2026-04-27', link: '/AI/daily/cn/2026-04/2026-04-27.md' },
            { text: '2026-04-26', link: '/AI/daily/cn/2026-04/2026-04-26.md' },
            { text: '2026-04-25', link: '/AI/daily/cn/2026-04/2026-04-25.md' },
            { text: '2026-04-24', link: '/AI/daily/cn/2026-04/2026-04-24.md' },
            { text: '2026-04-23', link: '/AI/daily/cn/2026-04/2026-04-23.md' },
            { text: '2026-04-22', link: '/AI/daily/cn/2026-04/2026-04-22.md' },
            { text: '2026-04-21', link: '/AI/daily/cn/2026-04/2026-04-21.md' },
            { text: '2026-04-20', link: '/AI/daily/cn/2026-04/2026-04-20.md' },
            { text: '2026-04-19', link: '/AI/daily/cn/2026-04/2026-04-19.md' },
            { text: '2026-04-18', link: '/AI/daily/cn/2026-04/2026-04-18.md' },
            { text: '2026-04-17', link: '/AI/daily/cn/2026-04/2026-04-17.md' },
            { text: '2026-04-16', link: '/AI/daily/cn/2026-04/2026-04-16.md' },
            { text: '2026-04-15', link: '/AI/daily/cn/2026-04/2026-04-15.md' },
            { text: '2026-04-14', link: '/AI/daily/cn/2026-04/2026-04-14.md' },
            { text: '2026-04-13', link: '/AI/daily/cn/2026-04/2026-04-13.md' },
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
            { text: '2026-04-01', link: '/AI/daily/cn/2026-04/2026-04-01.md' }
          ]
        },

        {
          text: '2026-03',
          collapsed: true,
          items: [
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
          ]
        }

      ]
    },
    {
      text: 'AI周报',
      collapsed: false,
      items: [

        {
          text: '2026-05',
          collapsed: false,
          items: [
            { text: '2026-05-11 周报', link: '/AI/weekly/cn/2026-05/2026-05-11-ai-signals-weekly-2026-w19-agent-economy-reasoning-infra.md' },
            { text: '2026-05-03 周报', link: '/AI/weekly/cn/2026-05/2026-05-03-hexi-2077-ai-signals-weekly-2026-w18.md' }
          ]
        },

        {
          text: '2026-04',
          collapsed: false,
          items: [
            { text: '2026-04-26 周报', link: '/AI/weekly/cn/2026-04/2026-04-26-hexi-2077-ai-signals-weekly-2026-w17-gpt5-5-nvidia-trust-deficit.md' },
            { text: '2026-04-19 周报', link: '/AI/weekly/cn/2026-04/2026-04-19-ai-compute-agents-trust-crisis-2026-w16.md' },
            { text: '2026-04-12 周报', link: '/AI/weekly/cn/2026-04/2026-04-12-ai-signal-weekly-2026-w15-agent-security-crisis.md' },
            { text: '2026-04-05 周报', link: '/AI/weekly/cn/2026-04/2026-04-05-deepseek-v4-huawei-ascend-ai-sycophancy-weekly-2026-w14.md' }
          ]
        },

        {
          text: '2026-03',
          collapsed: false,
          items: [
            { text: '2026-03-29 周报', link: '/AI/weekly/cn/2026-03/2026-03-29-hexi-2077-ai-deep-signal-weekly-2026-w13.md' },
            { text: '2026-03-22 周报', link: '/AI/weekly/cn/2026-03/2026-03-22-hexi-2077-ai-weekly-2026-w12.md' },
            { text: '2026-03-15 周报', link: '/AI/weekly/cn/2026-03/2026-03-15-ai-signal-weekly-2026-w11-anthropic-agent-ecosystem-war.md' },
            { text: '2026-03-08 周报', link: '/AI/weekly/cn/2026-03/2026-03-08-ai-weekly-2026-w10-gpt-5-4-militarization-claude-code.md' },
            { text: '2026-03-01 周报', link: '/AI/weekly/cn/2026-03/2026-03-01-hexi-2077-ai-signal-weekly-2026-w09-trillion-dollar-arms-race.md' }
          ]
        }

      ]
    }
  ]
}
