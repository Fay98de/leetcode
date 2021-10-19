/**
 * 优化判断质数的方法：
 * 一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于 sqrt(n)，一个大于等于 sqrt(n)。
 */

function isPrime(n: number) {
  const max = Math.sqrt(n)
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false
  }
  return true
}

function countPrimes(n: number): number {
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
}

export default countPrimes
