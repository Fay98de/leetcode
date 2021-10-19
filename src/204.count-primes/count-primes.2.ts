/**
 * 直接根据数学规律进行计算：
 * 大于等于 5 的质数一定和 6 的倍数相邻。例如 5 和 7，11 和 13，17 和 19
 * 但是注意：6 的倍数的相邻两侧并不是一定都是质数
 * 此时判断质数可以以 6 为步长快进，加快判断速度。原因是：假如要判定的数为 n，
 * 则 n 必定是 6x-1 或 6x+1 的形式，对于循环中 6i-1，6i，6i+1, 6i+2，6i+3，6i+4，
 * 其中如果n能被 6i，6i+2，6i+4 整除，则 n 至少得是一个偶数，但是 6x-1 或 6x+1 的形式明显是一个奇数，故不成立；
 * 另外，如果 n 能被 6i+3 整除，则 n 至少能被 3 整除，但是 6x 能被 3 整除，故 6x-1 或 6x+1（即n）不可能被3整除，故不成立。
 * 综上，循环中只需要考虑 6i-1 和 6i+1 的情况，即循环的步长可以定为 6
 */

function isPrime(n: number) {
  const max = Math.sqrt(n)
  for (let i = 5; i <= max; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

function countPrimes(n: number): number {
  let count = n > 3 ? 2 : n > 2 ? 1 : 0

  let temp = 6

  while (temp - 1 < n) {
    if (isPrime(temp - 1)) count++
    if (temp + 1 >= n) break
    if (isPrime(temp + 1)) count++
    temp += 6
  }

  return count
}

export default countPrimes
