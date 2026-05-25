<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'

import {
  createActionAdvice,
  createLuckCard,
  createPengPitfall,
  monthKey,
  sceneAdvice,
  type HuangliRecord,
} from '../composables/useLuckDashboard'

interface MonthPayload {
  days: Record<string, HuangliRecord>
}

interface LatestPayload {
  generated_at: string
  months: string[]
  source: string
  timezone: string
  version: string
}

const selectedDate = ref(formatShanghaiDate(new Date()))
const latest = ref<LatestPayload | null>(null)
const monthData = ref<MonthPayload | null>(null)
const loading = ref(true)
const error = ref('')

const selectedRecord = computed(() => monthData.value?.days?.[selectedDate.value])
const card = computed(() => (selectedRecord.value ? createLuckCard(selectedRecord.value) : null))
const scenes = computed(() => (selectedRecord.value ? sceneAdvice(selectedRecord.value) : []))
const actionAdvice = computed(() =>
  selectedRecord.value ? createActionAdvice(selectedRecord.value) : [],
)
const pengPitfall = computed(() =>
  selectedRecord.value ? createPengPitfall(selectedRecord.value) : null,
)

watch(selectedDate, () => {
  void loadSelectedDate()
})

onMounted(() => {
  void loadLatest()
})

function formatShanghaiDate(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)

  const year = parts.find((part) => part.type === 'year')?.value
  const month = parts.find((part) => part.type === 'month')?.value
  const day = parts.find((part) => part.type === 'day')?.value

  return `${year}-${month}-${day}`
}

function shiftDate(days: number) {
  const next = new Date(`${selectedDate.value}T00:00:00+08:00`)
  next.setUTCDate(next.getUTCDate() + days)
  selectedDate.value = formatShanghaiDate(next)
}

async function loadLatest() {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch(withBase('/huangli/data/latest.json'))
    if (!response.ok) throw new Error('latest.json unavailable')
    latest.value = await response.json()
    await loadSelectedDate()
  } catch {
    error.value = '暂时无法读取幸运数据，请稍后再试。'
  } finally {
    loading.value = false
  }
}

async function loadSelectedDate() {
  if (!latest.value) return

  const targetMonth = monthKey(selectedDate.value)
  if (!latest.value.months.includes(targetMonth)) {
    monthData.value = null
    error.value = '这个日期不在当前滚动数据范围内。'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await fetch(withBase(`/huangli/data/${targetMonth}.json`))
    if (!response.ok) throw new Error(`${targetMonth}.json unavailable`)
    monthData.value = await response.json()

    if (!monthData.value?.days?.[selectedDate.value]) {
      error.value = '没有找到这一天的幸运数据。'
    }
  } catch {
    monthData.value = null
    error.value = '暂时无法读取幸运数据，请稍后再试。'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="luck-dashboard">
    <header class="luck-shell">
      <div class="intro">
        <p class="eyebrow">
          <a href="https://github.com/clllb/luck-skill" target="_blank" rel="noopener">
            Luck Skill
          </a>
        </p>
        <h1>今日顺了吗</h1>
        <p class="intro-copy">把黄历里的宜忌、方位和五行穿衣，翻译成今天能直接参考的小建议。</p>
      </div>
    </header>

    <div class="date-bar">
      <div class="date-controls">
        <button type="button" @click="selectedDate = formatShanghaiDate(new Date())">今天</button>
        <button type="button" @click="shiftDate(1)">明天</button>
        <button type="button" @click="shiftDate(2)">后天</button>
      </div>
    </div>

    <p v-if="loading" class="state">正在读取幸运数据...</p>
    <p v-else-if="error" class="state">{{ error }}</p>

    <template v-else-if="card">
      <div class="dashboard-grid">
        <article class="daily-card">
          <div class="card-topline">
            <p>{{ card.dateLabel }}</p>
            <span>{{ selectedRecord?.day_quality?.black_yellow }}</span>
          </div>
          <h2>{{ card.title }}</h2>
          <p class="tone">{{ card.tone }}</p>

          <div class="direction-dial">
            <span>幸运方位</span>
            <strong>{{ card.luckyDirection }}</strong>
          </div>

          <div class="summary-columns">
            <section>
              <h3>适合多做</h3>
              <ul>
                <li v-for="item in card.doMore" :key="item">{{ item }}</li>
              </ul>
            </section>
            <section>
              <h3>少做/注意</h3>
              <ul>
                <li v-for="item in card.watch" :key="item">{{ item }}</li>
              </ul>
            </section>
          </div>

          <section v-if="pengPitfall" class="pitfall-panel">
            <span>{{ pengPitfall.title }}</span>
            <strong>{{ pengPitfall.body }}</strong>
            <p>彭祖百忌：{{ pengPitfall.source }}</p>
          </section>
        </article>

        <aside class="side-stack">
          <section class="color-panel">
            <h2>今日穿衣</h2>
            <div class="color-row">
              <span>大吉</span>
              <strong>{{ card.clothing.primary.join(' / ') }}</strong>
            </div>
            <div class="color-row">
              <span>次吉</span>
              <strong>{{ card.clothing.secondary.join(' / ') }}</strong>
            </div>
            <div class="color-row muted">
              <span>少用</span>
              <strong>{{ card.clothing.avoid.join(' / ') }}</strong>
            </div>
          </section>

          <section class="action-panel">
            <h2>今日行动建议</h2>
            <article v-for="item in actionAdvice" :key="item.label" class="action-item">
              <span>{{ item.label }}</span>
              <strong>{{ item.title }}</strong>
              <p>{{ item.body }}</p>
            </article>
          </section>
        </aside>
      </div>

      <section class="scene-panel">
        <div class="section-heading">
          <p class="eyebrow">场景建议</p>
          <h2>把幸运变成下一步行动</h2>
        </div>
        <div class="scene-grid">
          <article v-for="scene in scenes" :key="scene.id" class="scene-card">
            <span>{{ scene.label }}</span>
            <h3>{{ scene.title }}</h3>
            <p>{{ scene.body }}</p>
          </article>
        </div>
      </section>

      <section class="skill-promo">
        <h2>AI 接入</h2>
        <p>把这个 Skill 装进你的 AI 助手，随时问"今天顺不顺"。</p>
        <div class="skill-table">
          <div class="skill-row">
            <span>Skill</span>
            <strong>
              <a href="https://github.com/clllb/luck-skill" target="_blank" rel="noopener">
                Luck Skill（黄历 Skill）
              </a>
            </strong>
          </div>
          <div class="skill-row">
            <span>安装</span>
            <strong>
              跟 AI 助手说：
              <code>安装 https://github.com/clllb/luck-skill</code>
            </strong>
          </div>
        </div>
      </section>

      <section class="data-panel">
        <h2>数据说明</h2>
        <div class="data-copy">
          <p>来源：{{ latest?.source }} · {{ latest?.timezone }}</p>
          <p>覆盖：{{ latest?.months.join(' / ') }}</p>
          <p>{{ card.note }}</p>
        </div>
      </section>
    </template>
  </section>
</template>

<style scoped lang="scss">
.luck-dashboard {
  --luck-surface: var(--vp-c-bg-soft);
  --luck-surface-strong: var(--vp-c-bg-alt);
  --luck-text: var(--vp-c-text-1);
  --luck-muted: var(--vp-c-text-2);
  --luck-line: var(--vp-c-divider);
  --luck-accent: var(--vp-c-brand-1);
  --luck-accent-2: #2f7d61;
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px 0 48px;
  color: var(--luck-text);
}

.luck-shell {
  display: block;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--luck-accent);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
}

.eyebrow a {
  color: inherit;
  text-decoration: none;
}

.eyebrow a:hover {
  text-decoration: underline;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 620px;
  margin-bottom: 12px;
  font-size: clamp(34px, 6vw, 56px);
  line-height: 1.08;
  letter-spacing: 0;
}

.intro-copy {
  max-width: 680px;
  margin-bottom: 0;
  color: var(--luck-muted);
  font-size: 16px;
  line-height: 1.75;
}

.date-bar,
.daily-card,
.color-panel,
.action-panel,
.data-panel,
.scene-card {
  border: 1px solid var(--luck-line);
  border-radius: 8px;
  background: var(--luck-surface);
}

label span {
  display: block;
  margin-bottom: 10px;
  color: var(--luck-muted);
  font-size: 12px;
  font-weight: 700;
}

.data-panel p,
.scene-card p {
  color: var(--luck-muted);
  line-height: 1.65;
}

.date-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

button,
input {
  border: 1px solid var(--luck-line);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--luck-text);
  font: inherit;
}

button {
  min-height: 38px;
  padding: 0 16px;
  cursor: pointer;
}

button.active,
button:hover {
  border-color: var(--luck-accent);
  background: var(--luck-accent);
  color: #fff;
}

.date-bar {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: end;
  margin: 22px 0;
  padding: 16px;
}

input {
  min-height: 40px;
  padding: 0 14px;
}

.state {
  padding: 28px;
  border: 1px dashed var(--luck-line);
  border-radius: 8px;
  color: var(--luck-muted);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.8fr);
  gap: 20px;
}

.daily-card {
  padding: clamp(22px, 4vw, 34px);
}

.card-topline {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--luck-muted);
}

.card-topline p {
  margin-bottom: 0;
}

.card-topline span {
  white-space: nowrap;
  color: var(--luck-accent);
  font-weight: 700;
}

.daily-card h2 {
  margin-bottom: 14px;
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.12;
  letter-spacing: 0;
}

.tone {
  max-width: 760px;
  color: var(--luck-muted);
  font-size: 16px;
  line-height: 1.7;
}

.direction-dial {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  min-height: 132px;
  margin: 28px 0;
  border: 1px solid var(--luck-line);
  border-radius: 8px;
  background: var(--luck-surface-strong);
  padding: 22px;
}

.direction-dial span {
  color: var(--luck-muted);
  font-size: 13px;
}

.direction-dial strong {
  display: block;
  font-size: clamp(22px, 4vw, 34px);
  line-height: 1.2;
}

.summary-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.summary-columns section {
  border-top: 1px solid var(--luck-line);
  padding-top: 18px;
}

.pitfall-panel {
  margin-top: 28px;
  border: 1px solid var(--luck-line);
  border-radius: 8px;
  background: var(--vp-c-bg);
  padding: 22px;
}

.pitfall-panel span {
  display: block;
  margin-bottom: 10px;
  color: var(--luck-accent);
  font-size: 13px;
  font-weight: 800;
}

.pitfall-panel strong {
  display: block;
  margin-bottom: 10px;
  color: var(--luck-text);
  font-size: clamp(22px, 4vw, 34px);
  line-height: 1.25;
}

.pitfall-panel p {
  margin-bottom: 0;
  color: var(--luck-muted);
  line-height: 1.65;
}

.summary-columns h3,
.color-panel h2,
.action-panel h2,
.data-panel h2,
.scene-card h3 {
  margin-bottom: 12px;
  font-size: 18px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  border: 1px solid var(--luck-line);
  border-radius: 999px;
  padding: 7px 11px;
  color: var(--luck-muted);
  background: var(--vp-c-bg);
}

.side-stack {
  display: grid;
  gap: 20px;
  align-content: start;
}

.color-panel,
.action-panel,
.data-panel {
  padding: 22px;
}

.action-panel {
  display: grid;
  gap: 16px;
}

.action-item {
  border-top: 1px solid var(--luck-line);
  padding-top: 14px;
}

.action-item span {
  display: block;
  margin-bottom: 6px;
  color: var(--luck-accent);
  font-size: 13px;
  font-weight: 800;
}

.action-item strong {
  display: block;
  margin-bottom: 6px;
  color: var(--luck-text);
}

.action-item p {
  margin-bottom: 0;
  color: var(--luck-muted);
  line-height: 1.65;
}

.color-row {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 12px;
  padding: 14px 0;
  border-top: 1px solid var(--luck-line);
}

.color-row span {
  color: var(--luck-muted);
}

.color-row strong {
  color: var(--luck-accent-2);
}

.color-row.muted strong {
  color: var(--luck-muted);
}

.scene-panel {
  margin-top: 32px;
}

.scene-panel + .skill-promo {
  margin-top: 32px;
}

.skill-promo {
  border: 1px solid var(--luck-line);
  border-radius: 8px;
  background: var(--luck-surface);
  padding: 22px;
}

.skill-promo h2 {
  margin-bottom: 8px;
  font-size: 18px;
}

.skill-promo p {
  margin-bottom: 16px;
  color: var(--luck-muted);
  font-size: 14px;
}

.skill-table {
  display: grid;
  gap: 1px;
}

.skill-row {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 12px;
  padding: 14px 0;
  border-top: 1px solid var(--luck-line);
}

.skill-row span {
  color: var(--luck-muted);
  font-size: 13px;
}

.skill-row strong {
  color: var(--luck-text);
  font-size: 14px;
  line-height: 1.6;
}

.skill-row a {
  color: var(--luck-accent);
  text-decoration: none;
}

.skill-row a:hover {
  text-decoration: underline;
}

.skill-row code {
  border: 1px solid var(--luck-line);
  border-radius: 4px;
  background: var(--vp-c-bg);
  padding: 1px 6px;
  font-size: 13px;
  word-break: break-all;
}

.skill-promo + .data-panel {
  margin-top: 18px;
}

.scene-panel + .data-panel {
  margin-top: 18px;
}

.scene-panel + .data-panel h2 {
  margin-bottom: 10px;
}

.data-copy {
  display: grid;
  grid-template-columns: minmax(180px, 0.8fr) minmax(180px, 0.8fr) minmax(280px, 1.4fr);
  gap: 14px;
}

.data-copy p {
  margin-bottom: 0;
}

.section-heading {
  margin-bottom: 16px;
}

.section-heading h2 {
  font-size: clamp(26px, 4vw, 42px);
}

.scene-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.scene-card {
  padding: 18px;
}

.scene-card span {
  color: var(--luck-accent);
  font-size: 13px;
  font-weight: 800;
}

@media (max-width: 920px) {
  .luck-dashboard {
    padding-top: 8px;
  }

  .luck-shell,
  .dashboard-grid,
  .summary-columns,
  .data-copy {
    grid-template-columns: 1fr;
  }

  .scene-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .date-bar,
  .card-topline {
    align-items: stretch;
    flex-direction: column;
  }

  .scene-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 38px;
  }
}
</style>
