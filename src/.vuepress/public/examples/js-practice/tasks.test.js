import test from 'node:test';
import assert from 'node:assert/strict';
import { countCompleted, countPending } from './tasks.js';

test('三条任务中两条已完成、一条待完成', () => {
  const tasks = [{ done: true }, { done: false }, { done: true }];
  assert.equal(countCompleted(tasks), 2);
  assert.equal(countPending(tasks), 1);
});
