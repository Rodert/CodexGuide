import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

export default hopeTheme({
  navbar,
  sidebar,
  toc: true,
  footer: "CodexGuide | 面向小白的 Codex 中文使用教程",
  displayFooter: true,
  editLink: false,
  plugins: {
    slimsearch: true,
  },
});
