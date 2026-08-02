import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

export default hopeTheme({
  navbar,
  sidebar,
  toc: true,
  footer:
    'CodexGuide | 面向小白的 Codex 中文使用教程 | <a href="/sitemap.xml">网站地图</a>',
  displayFooter: true,
  repo: "https://github.com/Rodert/CodexGuide",
  editLink: true,
  editLinkText: "在 GitHub 上编辑此页",
  plugins: {
    slimsearch: true,
  },
});
