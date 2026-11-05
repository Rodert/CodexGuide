# CodexGuide 内容与截图约定

## 图片目录

将教程图片放入 `src/.vuepress/public/images/`，文章中通过绝对路径引用：

```md
![选择工作目录](/images/getting-started/04-select-workspace.png)
```

## 截图标记

文章中的下面注释不会显示在网站页面上，用于提示后续补图：

```md
<!-- MEDIA: screenshot | file: images/getting-started/04-select-workspace.png | capture: Codex App 中选择练习文件夹后的项目界面 -->
```

补图时保留文件名，将注释替换为对应的 Markdown 图片即可。涉及账号、项目路径、密钥、个人信息或真实客户数据时，截图前先打码。

## 实操文章约定

- 保留既有标题、编号与导航，按主题改正文，不为统一格式机械增加重复段落。
- 概念篇提供容易核对的小例子；操作篇说明前置条件、执行位置、步骤、预期结果和失败后的下一步。
- 明确哪些内容发给 Codex、哪些在终端执行；模板里的占位项要告诉读者替换。
- 入门使用个人网页，进阶测试使用独立 JavaScript 练习包，不默认读者已有复杂项目。
- 练习源文件放在 public/examples，修改源文件后同步更新对应 ZIP，并验证解压后的命令。
- 只能把实际执行过的检查写成通过；未核对的产品配置、未运行的远程 CI、未补的截图都单独记录。
- 逐章修改和跳过原因写入 docs/writing-progress.md，保留前轮记录，不把初稿完成写成版本事实已核实。
