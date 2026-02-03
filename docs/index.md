---
layout: home
layoutClass: 'm-home-layout'

title: 陈老板的百宝箱
description: 好玩、好用、好牛的工具,尽在陈老板的百宝箱!
titleTemplate: 好玩、好用、好牛的工具,尽在陈老板的百宝箱!

hero:
  name: 陈老板的百宝箱
  text: 好玩 · 好用 · 好牛
  tagline: 精选全网优质工具，提升你的工作效率
  image:
    src: /brown.jpg
    alt: 查理布朗
  actions:
    - text: 工具导航
      link: /nav/
      theme: alt
    - text: java进化论
      link: /java/index
      theme: brand
    - text: 面试宝典
      link: /interview/
      theme: alt
    - text: 效率手册
      link: /efficiency/
      theme: brand

features:
  - icon: 🧰
    title: 工具导航
    details: 精选全网好用的网站/工具，覆盖工作/学习/生活全场景<br />每周更新，拒绝收藏吃灰
    link: /nav/
    linkText: 立即探索
  - icon: 🆕
    title: 每周工具速递
    details: 每周一款有趣/实用的工具深度测评✨<br />附使用场景+避坑指南，不做无效收藏
    link: /weekly-tools/
    linkText: 本周推荐
  - icon: ☕
    title: Java进化论
    details: 从入门到进阶，系统化梳理Java核心知识点<br />结合实战案例，拒绝纸上谈兵
    link: /java/
    linkText: 开始学习
  - icon: 📝
    title: 面试宝典
    details: 整理高频面试题+解题思路<small>（Java/通用岗）</small><br />不止背答案，更懂底层逻辑
    link: /interview/
    linkText: 刷题备战
  - icon: ⚡
    title: 效率手册
    details: 工具使用技巧+场景落地方案<br />把好工具用出最大价值，高效摸鱼
    link: /efficiency/
    linkText: 提效指南
  - icon: 🐞
    title: 踩坑记录
    details: 那些年踩过的技术/工具坑<br />帮你少走弯路，避坑指南
    link: /bug/
    linkText: 查看详情
  - icon: 💰
    title: 金主荣誉榜
    details: 超级无敌伟大的老板们聚集地👑<br />感谢支持，用爱发电，每周更新
    link: /boss/bossboss
    linkText: 膜拜老板
  - icon: 💯
    title: 咱就说陈老板这辈子也不容易
    details: '<small class="bottom-small">我的老朋友查理布朗，他从不放弃。</small>'
    link: /me/me
    linkText: 了解更多
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
