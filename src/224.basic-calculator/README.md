# [224. 基本计算器](https://leetcode-cn.com/problems/basic-calculator/)

`栈` `递归` `数学` `字符串`

## 题解

### 2. 栈

- 遇到 `(` 入栈。操作符和已计算得出的结果值都入栈
- 遇到 `)` 出栈。操作符 \* 右侧表达式 + 左侧表达式的计算值

参考：

- [如何想到用「栈」？思路来自于递归 - 基本计算器 - 力扣（LeetCode）](https://leetcode-cn.com/problems/basic-calculator/solution/ru-he-xiang-dao-yong-zhan-si-lu-lai-zi-y-gpca/)
  - 本题基于此解法进行优化成双栈，代码语义化更好

### 3. 递归

关键点：

- 函数调用就是天然的栈。优点为：调用结束时，自动出栈；函数有自己的作用域，无需手动维护和重置变量值。
- 遇到 `(` 需要新起一个栈进行计算，新起时，需要将当前指针位置 i 转递给下一个栈作为起始
- 遇到 `)` 退出循环
- 最后求值后返回值，同时返回当前循环的指针位置给上一个栈继续循环

参考：

- [如何想到用「栈」？思路来自于递归 - 基本计算器 - 力扣（LeetCode）](https://leetcode-cn.com/problems/basic-calculator/solution/ru-he-xiang-dao-yong-zhan-si-lu-lai-zi-y-gpca/)

## 小技巧

### 数字字符串转数字

```js
123 === ((0 * 10 + 1) * 10 + 2) * 10 + 3

let num = 0
for (let c of s) {
  num += num * 10 + c
}
```

### 操作符数字化

```js
// 加法
10 + 5 === 10 + 5 * +1

// 减法
10 - 5 === 10 + 5 * -1
```
