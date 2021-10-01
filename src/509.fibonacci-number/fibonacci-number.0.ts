// 动态规划遍历

function fib(n: number): number {
  if (n < 2) return n
  let num0 = 0
  let num1 = 1
  let num = 0
  for (let i = 2; i <= n; i++) {
    num = num0 + num1
    num0 = num1
    num1 = num
  }
  return num
}

export default fib
