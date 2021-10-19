/**
 * 最基础的方法：遍历
 */

function isPrime(n: number) {
  for (let i = 2; i < n; i++) {
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
