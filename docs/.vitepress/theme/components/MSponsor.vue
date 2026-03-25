<script setup lang="ts">
import { ref } from 'vue'

// 控制弹窗显示状态
const isModalOpen = ref(false)

// 打开弹窗
const openModal = () => {
  isModalOpen.value = true
}

// 关闭弹窗
const closeModal = () => {
  isModalOpen.value = false
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
          class="sponsor-action-btn"
        >
          ⭐ Star 本项目
        </a>
        <a href="/boss/bossboss.html" class="sponsor-action-btn">🏆 查看打赏风云榜</a>
      </div>
    </div>

    <!-- 2. 👑 陈老板的小生意 -->
    <div class="sponsor-item">
      <div class="sponsor-title">👑 陈老板的小生意</div>
      <div class="sponsor-actions">
        <!-- 按钮 1: AI 中转站 (已更新文案) -->
        <button @click="openModal" class="sponsor-action-btn" type="button">
          💻 全网最稳定的
          <br />
          AI 中转站 (加微信赠2美元试用)
        </button>

        <!-- 按钮 2: 数据爬取 (已更新文案) -->
        <a
          href="https://get.brightdata.com/vol1zp"
          target="_blank"
          rel="noopener noreferrer"
          class="sponsor-action-btn"
        >
          📡 全网最好用的
          <br />
          数据爬取代理 (注册赠2美元额度)
        </a>
      </div>
    </div>

    <!-- 3. 公众号二维码 -->
    <div class="sponsor-item">
      <div class="sponsor-title">📢 关注公众号</div>
      <img src="/gzh.png" alt="公众号二维码" class="sponsor-img" />
    </div>

    <!-- 4. 弹窗模态框 -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-backdrop" @click="handleBackdropClick">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>

          <!-- 弹窗内容容器 -->
          <div class="modal-body">
            <div class="modal-title">🤖 AI 中转站 - 联系微信</div>

            <!-- 图片容器，确保居中 -->
            <div class="modal-image-wrapper">
              <!-- 请确保 wx.jpg 放在 docs/public 目录下 -->
              <img src="/wx.jpg" alt="微信二维码" class="modal-img" />
            </div>

            <p class="modal-desc">扫码添加微信，备注"AI 试用"即送2美元试用</p>
          </div>
        </div>
      </div>
    </Transition>
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
  padding: 10px 12px; /* 稍微增加上下内边距以适应两行文字 */
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  /* 【关键修改】允许文字换行，不再强制单行 */
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  line-height: 1.4; /* 调整行高让两行文字更美观 */

  /* 重置 button 默认样式 */
  font-family: inherit;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
}

/* 悬停效果 */
.sponsor-action-btn:hover {
  background: var(--vp-c-brand-lightest);
  border-color: var(--vp-c-brand-light);
  color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 点击激活效果 */
.sponsor-action-btn:active {
  transform: translateY(0);
  background: var(--vp-c-brand-lighter);
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

/* --- 弹窗样式 --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center; /* 【关键修改】确保内部内容居中 */
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
  align-items: center; /* 【关键修改】Flex 布局垂直居中 */
  width: 100%;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  width: 100%;
}

/* 【新增】图片包裹层，确保绝对居中 */
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
  display: block; /* 防止图片底部留白 */
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
