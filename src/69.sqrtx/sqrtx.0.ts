/**
 * 求解算术平方根的整数部分
 * 解题思路：在 0 ~ x 范围内进行二分查找，直到 l > r
 * @param {number} x
 * @returns {number}
 */
function mySqrt(x: number): number {
  let l = 0
  let r = x
  let result = 0

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (mid * mid <= x) {
      l = mid + 1
      result = mid
    } else {
      r = mid - 1
    }
  }

  return result
}

export default mySqrt
