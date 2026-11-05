---
title: Worktrees
---

# Worktrees

Git worktree 让同一个仓库拥有多个工作目录。例如，一个目录修 Bug，另一个目录尝试新布局；各自可以处于不同分支，不必反复切换同一个目录。

如果还不熟悉 Git，先读 [Git 与 GitHub](./31-git-github.md)。本节命令适用于已经有提交的 Git 仓库，普通空文件夹不能直接使用。

## 创建一个练习工作目录

在仓库根目录先查看状态，再创建新的分支和工作目录：

```bash
git status --short
git worktree add -b codex/layout-practice ../codex-layout-practice
git worktree list
```

`-b` 后面是新分支，最后是新目录的路径。如果同名分支或目录已经存在，先检查，不要为了重试而直接删除它们。

在 Codex 中选择新目录，确认目录和分支，再执行布局练习。

## 它隔离什么，不隔离什么

两个工作目录的文件改动分开，但仍属于同一个 Git 仓库。未提交改动不会因为新建 worktree 自动复制过去；依赖、环境文件和本地服务也可能需要单独准备。

因此，worktree 不是虚拟机，也不是安全沙盒。两个目录仍可能连接同一个数据库或外部服务。

## 用完如何整理

检查新目录中的修改，保存需要的提交或文件。确认没有要保留的未提交内容后，从另一个工作目录执行：

```bash
git worktree remove ../codex-layout-practice
```

如果提示目录不干净，先处理未保存内容，不要直接使用强制参数。删除 worktree 也不等于删除对应分支。

官方参考：[Git worktree](https://git-scm.com/docs/git-worktree)。下一节：[Git 与 GitHub](./31-git-github.md)。
