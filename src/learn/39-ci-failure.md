---
title: 用 Codex 修复 CI
---

# 用 Codex 修复 CI

本地运行正常，CI 仍然失败，常见原因是环境、命令或依赖不同。先看失败步骤和第一条有意义的错误，不要只截取最后一句“任务失败”。

## 先准备一个能运行的练习

下载 [JavaScript 练习包](/examples/js-practice.zip)，解压并安装 Node.js 22 或更高版本。在包含 `package.json` 的目录运行：

```bash
npm run check
npm test
```

初始测试应为 1 个通过、0 个失败；没有第三方依赖，不需要先运行 `npm install`。如果连基线都不能通过，先按 [CLI 问题](./51-cli.md) 排查，不要继续制造故障。

包中包含 `.github/workflows/check.yml`。将解压目录的内容作为一个独立 GitHub 练习仓库的根目录上传，而不是再套一层目录。可先本地保存：

```bash
git init
git add package.json tasks.js tasks.test.js README.md .github/workflows/check.yml
git commit -m "添加任务统计练习"
```

再按 [Git 与 GitHub](./31-git-github.md) 创建空仓库、配置远程和推送。打开仓库的 Actions 页面，等待这次检查完成。若账户或仓库不允许运行 Actions，本节先完成本地部分，远程结果记为未验证。

## 收集最小信息

准备失败的运行记录、对应提交、工作流文件和错误上下文。日志中的令牌、连接串和账号信息要隐藏。

```text
分析这次 CI 失败。先确认失败步骤和对应提交，
对照工作流、依赖锁文件和项目脚本定位原因。
不要跳过测试、删除检查或放宽断言来让 CI 变绿。
做最小修复，说明本地验证和仍需 CI 确认的内容。
```

## 示例：找不到构建脚本

在练习副本先执行 `npm run build`：这个包只有 `check` 和 `test`，所以会失败。若要观察同样的 CI 故障，可以把工作流中的 `npm run check` 临时改成 `npm run build`，提交并推送这处练习改动，再去 Actions 查看失败步骤。

假设日志出现：

```text
Missing script: "build"
```

先对照工作流执行 `npm run build` 的目录，以及该目录下 `package.json` 的 `scripts`。可能是工作目录错了、脚本改名了，或工作流从其他项目照搬而来。

如果脚本在子目录，就修正执行位置；如果项目需要构建却缺少实现，就补齐真实构建流程。不要新增一个只输出“成功”的假脚本。

在这个练习中，任务只是语法检查和测试，不需要构建，正确修复是把错误步骤恢复为 `npm run check`，保留后面的 `npm test`。修复后本地检查通过，再推送并检查新一次 Actions 结果。

## 修复后验证什么

用同样的工作目录、运行时和安装方式复现失败命令。检查是否改动了无关锁文件，再提交需要的修复。

重新触发 CI 后，确认运行的是包含修复的新提交，并查看原失败步骤和后续步骤。只看本地成功，不能写成“CI 已通过”。

**完成标准：** 原因对应日志证据；修复保留检查价值；最终报告分清本地已验证和远程待验证。

下一节：[第一次修改项目](./40-first-task-template.md)。
