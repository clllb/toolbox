import type { NavLink, WeeklyIndex } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const WEEKLY_INDEX: WeeklyIndex[] = [
  { weekNumber: 1, dateRange: '2026.02.09 - 2026.02.15', title: '第一期' }
]

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
        weekNumber: 1
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
        weekNumber: 1
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
        weekNumber: 1
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
        weekNumber: 1
      },
    ]
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/assets/logo-1-DXR4uO3F.png',
        title: '摸摸鱼热榜',
        desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
        weekNumber: 1,
      },
      
    ]
  },
]
