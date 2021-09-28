// 递归

function sum(n: number): number {
  if (n <= 0) return 0
  if (n <= 2) return 1
  return sum(n - 1) + sum(n - 2)
}

function fib(n: number): number {
  return sum(n)
}

export default fib
