import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

export default hopeTheme({
  navbar,
  sidebar,
  toc: true,
  footer: `
    <div class="site-footer">
      <div class="site-footer__brand">
        <strong>CodexGuide</strong>
        <span>面向小白的 Codex 中文使用教程</span>
      </div>
      <nav class="site-footer__links" aria-label="常用资源">
        <a href="https://platform.openai.com/docs/guides/image-generation" target="_blank" rel="noopener noreferrer">AI 画图</a>
        <a href="https://chatgpt.com/codex" target="_blank" rel="noopener noreferrer">AI 编程</a>
        <a href="https://openai.com/sora/" target="_blank" rel="noopener noreferrer">AI 视频</a>
        <a href="https://www.youtube.com/@OpenAI/videos" target="_blank" rel="noopener noreferrer">Codex 视频教程</a>
        <a href="/learn/23-skills.html">Skills</a>
        <a href="/learn/59-resources.html">全部资源</a>
      </nav>
      <div class="site-footer__meta"><a href="/sitemap.xml">网站地图</a></div>
    </div>`,
  displayFooter: true,
  editLink: false,
  plugins: {
    slimsearch: true,
  },
});
