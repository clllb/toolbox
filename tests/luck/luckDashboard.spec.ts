import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { nav } from '../../docs/.vitepress/configs/nav'
import {
  createActionAdvice,
  createLuckCard,
  createPengPitfall,
  monthKey,
  sceneAdvice,
} from '../../docs/.vitepress/theme/composables/useLuckDashboard'

const luckPageSource = readFileSync(
  resolve(__dirname, '../../docs/luck/index.md'),
  'utf-8',
)
const luckComponentSource = readFileSync(
  resolve(__dirname, '../../docs/.vitepress/theme/components/MLuckDashboard.vue'),
  'utf-8',
)

describe('luck dashboard', () => {
  it('adds a /luck/ page and Chinese navigation entry', () => {
    expect(luckPageSource).toContain('MLuckDashboard')
    expect(luckPageSource).toContain('title: 幸运卡片')

    expect(nav.some((item) => item.text === '幸运卡片' && item.link === '/luck/')).toBe(true)
  })

  it('keeps raw source details out of the hero area', () => {
    expect(luckComponentSource).not.toContain('数据来源')
    expect(luckComponentSource).not.toContain('页面与 Luck Skill 共用同一份 JSON')
  })

  it('uses month keys to read rolling Huangli JSON files', () => {
    expect(monthKey('2026-05-19')).toBe('2026-05')
  })

  it('translates Huangli data into a Chinese lucky card', () => {
    const card = createLuckCard({
      date: '2026-05-19',
      lunar: { text: '二零二六 丙午[马]年 四月小初三' },
      calendar: { weekday: '星期二' },
      day_quality: {
        black_yellow: '黑道日',
        twelve_officer: '建',
        peng_taboo: '癸不词讼 理弱敌强,巳不远行 财物伏藏',
      },
      directions: { wealth: '正南', joy: '东南' },
      zodiac: { western: '金牛座', clash: '蛇日冲猪' },
      clothing: {
        lucky: ['绿色', '青色'],
        supportive: ['黑色', '蓝色'],
        avoid: ['红色'],
      },
      activities: {
        good: ['纳财', '立券交易', '宴会'],
        bad: ['出行', '破土'],
      },
    })

    expect(card.title).toBe('幸运卡片')
    expect(card.luckyDirection).toContain('正南')
    expect(card.clothing.primary).toEqual(['绿色', '青色'])
    expect(card.doMore).toContain('纳财')
    expect(card.note).toContain('参考')
  })

  it('turns peng taboo into a practical pitfall note', () => {
    const pitfall = createPengPitfall({
      date: '2026-05-19',
      day_quality: {
        peng_taboo: '癸不词讼 理弱敌强,巳不远行 财物伏藏',
      },
    })

    expect(pitfall.title).toBe('今日避坑')
    expect(pitfall.body).toBe('少打嘴仗，出门看好随身物品。')
    expect(pitfall.source).toContain('癸不词讼')
  })

  it('translates Huangli fields into practical daily action advice', () => {
    const advice = createActionAdvice({
      date: '2026-05-19',
      day_quality: { black_yellow: '黑道日', twelve_officer: '建' },
      activities: {
        good: ['纳财', '立券交易'],
        bad: ['出行', '破土'],
      },
    })

    expect(advice.map((item) => item.label)).toEqual(['工作', '沟通', '生活'])
    expect(advice[0].body).toContain('小步')
    expect(advice[1].body).toContain('先对齐')
  })

  it('offers ten common scenario cues for a balanced grid', () => {
    const labels = sceneAdvice({
      date: '2026-05-19',
      activities: {
        good: ['纳财'],
        bad: ['出行'],
      },
    }).map((scene) => scene.label)

    expect(labels).toEqual([
      '发版',
      '面试',
      '签约',
      '写作',
      '打球',
      '出行',
      '谈薪',
      '学习',
      '整理',
      '见客户',
    ])
  })
})
