import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '陈老板的百宝箱',
  description: '好玩、好用、好牛的工具尽在陈老板的百宝箱！',
  head,

  lastUpdated: true,
  cleanUrls: false,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image:{
      lazyLoading:true
    }
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/brown.jpg',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/clllb/toolbox' }],

    footer: {
      message: '转载请注明出处',
      copyright: 'Copyright © 2026-present 陈老老老板<br><a href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2026000903号-1</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'clllb.chenlaoban-toolbox',
    },

    comment: {
      repo: 'clllb/toolbox',
      repoId: 'R_kgDOQ6y11A',
      category: 'General',
      categoryId: 'DIC_kwDOQ6y11M4C1O0E',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'BYXOHW1SIS',         // 替换为你的 Algolia App ID
        apiKey: '475e7da1f8e68c6b5287080e4c8cc503', // 替换为你的 Search-Only API Key
        indexName: 'toolbox',  // 替换为你的 Index 名称
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    }
  },

  vite: {
    plugins: [MarkdownPreview()],
  },

  sitemap: {
    hostname: 'https://toolguide.top' 
  }
})
