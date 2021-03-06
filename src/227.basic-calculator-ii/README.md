# [227. 基本计算器 II](https://leetcode-cn.com/problems/basic-calculator-ii/)

## 题解

### 0. 栈

- 先将乘除全部计算完成，计算完成时入栈
- 遇到加减时，直接入栈
- 遇到乘除时，由于要优先计算乘除，因此需要将栈中的前一个值出栈，与后值进行乘除计算后，再入栈
- 循环完成后，仍剩余最后一个值需要进行计算和入栈
- 除法时需要注意：
  - 仅保留整数部分
  - 结果为负值的时候，不能使用 `Math.floor()` 取整数部分，需要通过 `n - n % 1` 或 `n | 1` 的方式来获得整数部分
