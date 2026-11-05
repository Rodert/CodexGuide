// 练习约定：tasks 是对象数组；done 严格等于 true 才表示完成。
export function countCompleted(tasks) {
  let count = 0;
  for (const task of tasks) {
    if (task.done === true) {
      count += 1;
    }
  }
  return count;
}

export function countPending(tasks) {
  let count = 0;
  for (const task of tasks) {
    if (task.done !== true) {
      count += 1;
    }
  }
  return count;
}
