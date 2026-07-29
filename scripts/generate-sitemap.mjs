import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const sourceDir = join(process.cwd(), "src", "learn");
const siteDir = join(process.cwd(), "src");
const publicDir = join(siteDir, ".vuepress", "public");
const htmlSitemapFile = join(siteDir, "sitemap.md");
const xmlSitemapFile = join(publicDir, "sitemap.xml");
const robotsFile = join(publicDir, "robots.txt");
const siteUrl = "https://codex-zh.net";

const sections = [
  { title: "新手入门", end: 12 },
  { title: "使用方式与项目管理", end: 22 },
  { title: "扩展、权限与协作", end: 34 },
  { title: "实战教程", end: 39 },
  { title: "模板与问题排查", end: 55 },
  { title: "参考资料", end: Infinity },
];

const files = (await readdir(sourceDir))
  .map((name) => {
    const match = /^(\d+)-(.+)\.md$/.exec(name);
    return match && { name, order: Number(match[1]), slug: match[1] + "-" + match[2] };
  })
  .filter(Boolean)
  .sort((a, b) => a.order - b.order);

const articles = await Promise.all(
  files.map(async ({ name, order, slug }) => {
    const content = await readFile(join(sourceDir, name), "utf8");
    const title = /^#\s+(.+)$/m.exec(content)?.[1];

    if (!title) throw new Error(`缺少一级标题：src/learn/${name}`);

    return { order, slug, title };
  }),
);

let sectionIndex = 0;
const groups = sections.map(({ title }) => ({ title, articles: [] }));

for (const article of articles) {
  while (article.order > sections[sectionIndex].end) sectionIndex += 1;
  groups[sectionIndex].articles.push(article);
}

const htmlSitemap = [
  "---",
  "title: 网站地图",
  "description: CodexGuide 全部教程文章索引。",
  "---",
  "",
  "# 网站地图",
  "",
  ...groups.flatMap(({ title, articles }) =>
    articles.length === 0
      ? []
      : [
          `## ${title}`,
          "",
          ...articles.map(({ slug, title: articleTitle }) =>
            `- [${articleTitle}](/learn/${slug}.html)`,
          ),
          "",
        ],
  ),
].join("\n");

const urls = [
  "/",
  "/learn/",
  "/sitemap.html",
  ...articles.map(({ slug }) => `/learn/${slug}.html`),
];

const xmlSitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${siteUrl}${url}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

const robots = ["User-agent: *", "Allow: /", `Sitemap: ${siteUrl}/sitemap.xml`, ""].join("\n");

await Promise.all([
  writeFile(htmlSitemapFile, htmlSitemap, "utf8"),
  writeFile(xmlSitemapFile, xmlSitemap, "utf8"),
  writeFile(robotsFile, robots, "utf8"),
]);

console.log(`已生成网站地图：${articles.length} 篇文章，${urls.length} 个 URL`);
