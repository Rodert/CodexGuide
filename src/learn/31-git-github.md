---
title: Git 与 GitHub
---

# Git 与 GitHub

Git 用于记录文件版本，GitHub 是托管仓库和协作的平台。先在本地保存版本，再决定是否上传；二者不是同一个操作。

## 先记住四个词

| 名称 | 含义 |
| --- | --- |
| 工作区 | 你正在编辑的文件 |
| 暂存 | 选出这次提交要包含的改动 |
| Commit | 在本地记录一次版本 |
| Push | 把本地提交上传到远程仓库 |

还会遇到 Branch（分支）和 PR（合并请求）：前者组织不同开发路线，后者方便别人审查一组提交。Push 不等于合并，也不一定等于网站部署完成。

## 保存网页练习的第一个版本

先确认已安装 Git，并在 `codex-first-project` 中打开终端。若它还不是仓库，可以执行：

```bash
git init
git status
git add index.html style.css
git diff --cached
git commit -m "创建个人介绍网页"
```

`git diff --cached` 显示即将提交的内容。首次提交若提示缺少姓名和邮箱，先按 Git 的提示配置身份；不要把别人的身份照抄进去。

只为当前练习仓库配置时，可在该目录运行下面两条命令，先把引号里的内容换成自己的提交身份，再重新执行 `git commit`：

```bash
git config user.name "你的显示名"
git config user.email "你的提交邮箱"
```

邮箱会写入提交记录；需要保护私人邮箱时，使用 GitHub 账户提供的提交隐私邮箱。这里不用 `--global`，避免顺手改掉其他项目的身份设置。

这些命令在练习目录内运行，不是在 Codex 的聊天输入区。提交成功通常会显示提交摘要；再运行 `git log -1 --oneline`，应该能看到刚写的说明。用 `git status` 检查是否还有未保存到版本里的文件。

## 让 Codex 协助提交

```text
检查当前 Git 状态，说明这次准备提交哪些文件。
只提交本次网页改动，写清提交说明；暂时不要推送。
```

提交前确认没有密钥、环境文件或与本次任务无关的内容。新手先明确文件名，避免不看范围就暂存所有文件。

## 什么时候推送

先创建或确认远程仓库，用 `git remote -v` 检查目标，再确认当前分支和仓库可见性。远程连接、账号认证设置好后，再让 Codex 推送明确的分支。

第一次上传独立练习项目，可以这样做：

1. 在自己的 GitHub 账户创建空仓库 `codex-first-project`，选择合适可见性，不预先生成 README，避免产生另一段初始历史。
2. 复制仓库给出的 HTTPS 或 SSH 地址。在本地先检查 `git remote -v`；仅在没有远程且确定是这个新练习仓库时添加。
3. 按下面示例替换账户名，再依次执行。现有团队仓库不要照此改分支或远程。

```bash
git branch -M main
git remote add origin https://github.com/YOUR_NAME/codex-first-project.git
git push -u origin main
```

`YOUR_NAME` 必须换成你的 GitHub 用户名。推送需要有效认证，按可信客户端或 GitHub 的提示完成，不把令牌贴到聊天里。若提示远程已存在或历史冲突，先检查原因，不直接强制推送。

**完成检查：** 用 `git log -1` 能看到刚才的本地提交。上传之后，还要检查远程是否出现该提交。

下一节：[自动化与 CI](./32-automation.md)。
