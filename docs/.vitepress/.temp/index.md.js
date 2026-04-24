import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"陈老板的百宝箱","titleTemplate":"好玩、好用、好牛的工具,尽在陈老板的百宝箱!","description":"好玩、好用、好牛的工具,尽在陈老板的百宝箱!","frontmatter":{"layout":"home","layoutClass":"m-home-layout","title":"陈老板的百宝箱","description":"好玩、好用、好牛的工具,尽在陈老板的百宝箱!","titleTemplate":"好玩、好用、好牛的工具,尽在陈老板的百宝箱!","hero":{"name":"陈老板的百宝箱","text":"好玩 · 好用 · 好牛","tagline":"精选全网优质工具，提升你的工作效率","image":{"src":"/brown.jpg","alt":"查理布朗"},"actions":[{"text":"工具导航","link":"/nav/","theme":"brand"},{"text":"AI工具手册","link":"/AI/tools/","theme":"alt"},{"text":"AI日报","link":"/AI/daily/index","theme":"brand"},{"text":"AI周报","link":"/AI/weekly/index","theme":"alt"}]},"features":[{"icon":"🧰","title":"工具导航","details":"精选全网好用的网站/工具，覆盖工作/学习/生活全场景<br />每周更新，拒绝收藏吃灰","link":"/nav/","linkText":"立即探索"},{"icon":"⚡️","title":"AI工具手册","details":"合并每周工具速递与 AI 工具使用手册<br />从发现新工具到真正用顺手，一站搞定","link":"/AI/tools/","linkText":"查看手册"},{"icon":"📝","title":"AI日报","details":"每日追踪 AI 圈重要动态与热门产品<br />帮你快速了解今天发生了什么","link":"/AI/daily/index","linkText":"每日总结"},{"icon":"🤖","title":"AI周报","details":"每周梳理重点趋势、产品更新与行业信号<br />把值得关注的内容集中看完","link":"/AI/weekly/index","linkText":"每周总结"},{"icon":"🆕","title":"公众号杂谈","details":"记录技术实践、工具体验和折腾随笔<br />不止避坑，也分享一些值得聊的事","link":"/bug/index","linkText":"查看详情"},{"icon":"💰","title":"金主荣誉榜","details":"超级无敌伟大的老板们聚集地👑<br />感谢支持，用爱发电，每周更新","link":"/boss/bossboss","linkText":"膜拜老板"},{"icon":"💯","title":"咱就说陈老板这辈子也不容易","details":"<small class=\\"bottom-small\\">我的老朋友查理布朗，他从不放弃。</small>","link":"/me/","linkText":"了解更多"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1774800561000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
