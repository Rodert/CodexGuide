import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CodexGuide",
  description: "面向小白的 Codex 中文使用教程",
  theme,
});
