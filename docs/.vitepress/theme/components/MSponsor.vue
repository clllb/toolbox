<script setup lang="ts">
// 赞助组件 - 展示 Star 链接、打赏榜单链接和公众号二维码
</script>

<template>
  <div class="m-sponsor">
    <!-- Star + 打赏组合 -->
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

    <!-- 公众号二维码（保留图片） -->
    <div class="sponsor-item">
      <div class="sponsor-title">📢 关注公众号</div>
      <img src="/gzh.png" alt="公众号二维码" class="sponsor-img" />
    </div>
  </div>
</template>

<style scoped>
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

/* 新增：按钮样式 */
.sponsor-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sponsor-action-btn {
  display: block;
  padding: 8px 12px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: all 0.2s ease;
}

.sponsor-action-btn:hover {
  background: var(--vp-c-brand-lightest);
  border-color: var(--vp-c-brand-light);
  color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
}

/* 保留原图片样式（用于公众号） */
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
</style>
