<script setup lang="ts">
import { ref } from 'vue'

// 控制弹窗显示状态
const isModalOpen = ref(false)

// 打开弹窗
const openModal = () => {
  isModalOpen.value = true
  // 使用 requestAnimationFrame 确保在下一帧设置样式
  requestAnimationFrame(() => {
    document.body.style.overflow = 'hidden'
  })
}

// 关闭弹窗
const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

// 点击背景遮罩层也可以关闭
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}
</script>

<template>
  <div class="m-sponsor">
    <!-- 1. Star + 打赏组合 -->
    <div class="sponsor-item sponsor-links">
      <div class="sponsor-title">🔥 欢迎老板 Star 或打赏</div>
      <div class="sponsor-actions">
        <a
          href="https://github.com/clllb/toolbox"
          target="_blank"
          rel="noopener noreferrer"
          class="sponsor-action-btn sponsor-action-btn-primary"
        >
          ⭐ Star 本项目
        </a>
        <a href="/boss/bossboss.html" class="sponsor-action-btn sponsor-action-btn-static">
          🏆 查看打赏风云榜
        </a>
      </div>
    </div>

    <!-- 2. 👑 陈老板的小生意 -->
    <div class="sponsor-item">
      <div class="sponsor-title">👑 陈老板的小生意</div>
      <div class="sponsor-actions">
        <!-- 按钮 1: AI 中转站 -->
        <button
          @click="openModal"
          class="sponsor-action-btn sponsor-action-btn-primary"
          type="button"
        >
          💻 全网最稳定的
          <br />
          AI 中转站 (加微信赠 2 美元试用)
        </button>

        <!-- 按钮 2: 数据爬取 -->
        <a
          href="https://get.brightdata.com/vol1zp"
          target="_blank"
          rel="noopener noreferrer"
          class="sponsor-action-btn sponsor-action-btn-static"
        >
          📡 全网最好用的
          <br />
          数据爬取代理 (注册赠 2 美元额度)
        </a>
      </div>
    </div>

    <!-- 3. 公众号二维码 -->
    <div class="sponsor-item">
      <div class="sponsor-title">📢 关注公众号</div>
      <img src="/gzh.png" alt="公众号二维码" class="sponsor-img" />
    </div>

    <!-- 4. 弹窗模态框 -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isModalOpen" class="modal-backdrop" @click="handleBackdropClick">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeModal">&times;</button>
            <div class="modal-body">
              <div class="modal-title">🤖 AI 中转站 - 联系微信</div>
              <div class="modal-image-wrapper">
                <img src="/wx.jpg" alt="微信二维码" class="modal-img" />
              </div>
              <p class="modal-desc">扫码添加微信，备注"AI 试用"即送 2 美元试用</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* --- 容器与标题样式 --- */
.m-sponsor {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.sponsor-item {
  margin-bottom: 16px;
}

.sponsor-item:last-child {
  margin-bottom: 0;
}

.sponsor-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  text-align: center;
}

/* --- 按钮组样式 --- */
.sponsor-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* --- 核心按钮样式 --- */
.sponsor-action-btn {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  line-height: 1.4;
  font-family: inherit;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
}

/* 主题色按钮样式（跟随全局主题变化） */
.sponsor-action-btn-primary {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.sponsor-action-btn-primary:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider);
  color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.sponsor-action-btn-primary:active {
  transform: translateY(0);
  background: var(--vp-c-bg-alt);
}

/* 静态颜色按钮样式（灰色背景，黑色文字） */
.sponsor-action-btn-static {
  color: #000;
  border-color: var(--vp-c-divider);
  background: #f5f5f5;
}

.sponsor-action-btn-static:hover {
  background: #e8e8e8;
  border-color: var(--vp-c-divider);
  color: #000;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.sponsor-action-btn-static:active {
  transform: translateY(0);
  background: #f5f5f5;
}

/* --- 图片样式 --- */
.sponsor-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.sponsor-img:hover {
  transform: scale(1.05);
}

/* --- 弹窗样式（使用 Teleport 挂载到 body） --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 90%;
  width: 320px;
  position: relative;
  animation: slideUp 0.3s ease-out;
  border: 1px solid var(--vp-c-divider);
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  z-index: 10;
}

.modal-close:hover {
  color: var(--vp-c-brand);
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  width: 100%;
}

.modal-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.modal-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 4px;
  background: #fff;
  display: block;
}

.modal-desc {
  margin-top: 4px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  width: 100%;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
