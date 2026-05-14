<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const isModalOpen = ref(false)

const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
}

const openModal = () => {
  isModalOpen.value = true
  requestAnimationFrame(lockBodyScroll)
}

const closeModal = () => {
  isModalOpen.value = false
  unlockBodyScroll()
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

onBeforeUnmount(unlockBodyScroll)
</script>

<template>
  <div class="home-service-banner-wrapper">
    <button class="home-service-banner" type="button" @click="openModal">
      <span class="home-service-copy">
        <strong>找工具、学 AI、买 Token、用代理，就找陈老板！</strong>
        <small>AI 中转站 / GPT 会员 / 数据获取 / 代理服务，稳定靠谱，有售后，做人要有良心</small>
      </span>
      <span class="home-service-action">微信咨询</span>
    </button>

    <Teleport to="body">
      <Transition name="home-service-fade">
        <div v-if="isModalOpen" class="home-service-modal-backdrop" @click="handleBackdropClick">
          <div
            class="home-service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-service-modal-title"
          >
            <button
              class="home-service-modal-close"
              type="button"
              aria-label="关闭"
              @click="closeModal"
            >
              &times;
            </button>
            <div class="home-service-modal-body">
              <div id="home-service-modal-title" class="home-service-modal-title">
                微信咨询陈老板
              </div>
              <img src="/wx.jpg" alt="陈老板微信二维码" class="home-service-modal-img" />
              <p class="home-service-modal-desc">
                扫码添加微信，备注 AI / Token / Gpt / 数据代理获取即可。
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.home-service-banner-wrapper {
  width: 100%;
  max-width: 1152px;
  margin: -18px auto 34px;
  padding: 0 24px;
}

.home-service-banner {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  overflow: hidden;
  border: 1px solid rgba(62, 175, 124, 0.28);
  border-radius: 18px;
  padding: 18px 20px;
  color: var(--vp-c-text-1);
  text-align: left;
  background: radial-gradient(circle at 12% 20%, rgba(62, 175, 124, 0.18), transparent 32%),
    linear-gradient(135deg, rgba(62, 175, 124, 0.1), rgba(255, 183, 77, 0.12)), var(--vp-c-bg-soft);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.home-service-banner::after {
  position: absolute;
  inset: 1px;
  border-radius: 17px;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.28), transparent 44%);
  content: '';
  pointer-events: none;
}

.home-service-banner:hover {
  border-color: rgba(62, 175, 124, 0.5);
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.home-service-banner:focus-visible {
  outline: 3px solid rgba(62, 175, 124, 0.35);
  outline-offset: 3px;
}

.home-service-copy {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 6px;
}

.home-service-copy strong {
  font-size: 18px;
  line-height: 1.35;
}

.home-service-copy small {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.55;
}

.home-service-action {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  border-radius: 999px;
  padding: 9px 16px;
  color: #fff;
  background: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 10px 24px rgba(62, 175, 124, 0.26);
}

.home-service-modal-backdrop {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

.home-service-modal {
  position: relative;
  width: min(340px, 100%);
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  padding: 24px;
  background: var(--vp-c-bg);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.24);
  animation: home-service-slide-up 0.25s ease-out;
}

.home-service-modal-close {
  position: absolute;
  top: 10px;
  right: 14px;
  border: 0;
  padding: 0;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  font-size: 26px;
  line-height: 1;
}

.home-service-modal-close:hover {
  color: var(--vp-c-brand-1);
}

.home-service-modal-body {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.home-service-modal-title {
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 700;
}

.home-service-modal-img {
  width: 210px;
  height: 210px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 6px;
  background: #fff;
  object-fit: contain;
}

.home-service-modal-desc {
  margin: 14px 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.home-service-fade-enter-active,
.home-service-fade-leave-active {
  transition: opacity 0.2s ease;
}

.home-service-fade-enter-from,
.home-service-fade-leave-to {
  opacity: 0;
}

@keyframes home-service-slide-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  .home-service-banner-wrapper {
    margin: -6px auto 26px;
    padding: 0 24px;
  }

  .home-service-banner {
    align-items: stretch;
    flex-direction: column;
    gap: 14px;
    padding: 16px;
  }

  .home-service-copy strong {
    font-size: 16px;
  }

  .home-service-copy small {
    font-size: 13px;
  }

  .home-service-action {
    align-self: flex-start;
  }
}
</style>
