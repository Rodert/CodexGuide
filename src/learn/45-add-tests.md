---
title: 补测试模板
---

# 补测试模板

测试的价值是发现行为错误，不是让测试文件数量增加。先确认项目使用什么测试工具，再围绕输入、输出和边界补齐缺口。

```text
请为 [函数或模块] 补充测试。
关键行为：[正常输入时应该发生什么]
边界与错误：[空值、非法值、失败分支等]
兼容要求：[已有调用和约定]

先阅读实现、现有测试和测试命令。
沿用已有框架，不重复测试同一行为，不随意新增依赖。
优先覆盖容易回归且影响明确的行为。
不要为了让测试通过而修改业务需求或删除断言。
运行相关测试，报告命令、结果和仍未覆盖的场景。
如果项目没有测试框架，先给出最小方案和引入成本。
```

## 什么是有意义的用例

先做一个无需第三方测试框架的练习。下载 [JavaScript 练习包](/examples/js-practice.zip)，解压到独立目录；从 [Node.js 官网](https://nodejs.org/) 安装 22 或更高版本。在该目录打开终端，先运行 `node --version`，再运行 `npm test`。初始预期为 1 个通过、0 个失败，且无需安装依赖。

把模板中的模块填写为 `tasks.js`，说明“只有 done 严格等于 true 算完成，缺少 done 算待完成，统计不修改输入”。然后要求 Codex 补充空数组、全部完成、非布尔值和输入不变的测试。

看不懂测试时，可以先手动在现有 `tasks.test.js` 末尾追加下面四条；文件开头已有 `test`、`assert` 和两个函数的导入，不要重复粘贴导入行：

```javascript
test('空数组的两种计数都是零', () => {
  assert.equal(countCompleted([]), 0);
  assert.equal(countPending([]), 0);
});

test('全部完成时没有待完成任务', () => {
  const tasks = [{ done: true }, { done: true }];
  assert.equal(countCompleted(tasks), 2);
  assert.equal(countPending(tasks), 0);
});

test('只有布尔值 true 算完成', () => {
  const tasks = [{ done: true }, { done: 'true' }, {}];
  assert.equal(countCompleted(tasks), 1);
  assert.equal(countPending(tasks), 2);
});

test('统计不改变输入', () => {
  const tasks = [{ done: false }, { done: true }];
  const before = structuredClone(tasks);
  countCompleted(tasks);
  countPending(tasks);
  assert.deepEqual(tasks, before);
});
```

保存后再次执行 `npm test`。按本页追加四条后，应为 5 个通过、0 个失败。`assert.equal` 是比较实际值与预期值；`deepEqual` 用来比较结构内容。失败时先读失败用例名和实际/预期差异，不要把预期值改成错误结果。

例如验证注册接口：合法输入成功、重复账号被拒绝、缺失必要字段有明确错误。只检查“函数被调用一次”，可能没有覆盖用户真正关心的结果。

回归测试应该能捕获已知 Bug。不要把当前实现的错误结果照抄为预期，也不要只断言输出“存在”。

## 什么时候不用急着建测试框架

个人静态页改一句文案，可能通过预览和链接检查就足够。涉及数据处理、接口和复杂状态时，自动化测试更有价值。让验证成本与风险相称。

下一节：[AGENTS.md 模板](./46-write-agents-md.md)。
