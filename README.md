# CodexGuide

面向中文初学者的 Codex 使用教程网站。内容从安装、登录和第一个任务开始，逐步覆盖 App、CLI、VS Code、权限、项目规则、Skills、Plugins、MCP 与常见实战场景。

## 本地运行

本项目使用 [VuePress](https://v2.vuepress.vuejs.org/) 和 pnpm。请先安装 Node.js 与 pnpm，然后执行：

```bash
pnpm install
pnpm dev
```

开发服务器启动后，终端会输出本地访问地址。

## 构建站点

```bash
pnpm build
```

构建产物位于 `src/.vuepress/dist/`。如需清除 VuePress 缓存并重新启动开发服务器，执行：

```bash
pnpm clean
```

## Cloudflare Pages 部署

在 Cloudflare Pages 中连接仓库后，使用以下构建设置：

- 构建命令：`pnpm build`
- 构建输出目录：`src/.vuepress/dist`

每次 push 都会触发 Cloudflare Pages 构建。构建开始时会自动生成 `sitemap.html`、标准的 `sitemap.xml` 与 `robots.txt`，新文章会自动收录到地图中并随部署上线。

## 项目结构

```text
src/
  README.md             站点首页
  learn/                教程文章
  .vuepress/
    config.ts           VuePress 配置
    navbar.ts           顶部导航
    sidebar.ts          教程侧边栏顺序
    public/images/      站点图片
CONTENT_GUIDE.md        文章图片与截图规范
```

## 更新内容

- 新文章放在 `src/learn/`，并在 `src/.vuepress/sidebar.ts` 中登记，确保可从侧边栏访问。
- 涉及模型、套餐、功能范围或安全策略时，请核对官方资料，并在文章中标明核对日期。
- 图片放在 `src/.vuepress/public/images/`，通过 `/images/...` 路径引用；截图命名与补图规则见 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)。
- 提交前运行 `pnpm build`，确认链接、配置和文档语法可正常生成站点。
