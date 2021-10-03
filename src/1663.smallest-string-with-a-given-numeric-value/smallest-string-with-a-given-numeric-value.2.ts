/**
 * 获取最小字符串
 * 贪心算法：
 * 1. 所有的字符都填充 a
 * 2. 计算 z 的个数：(k - n) / 25 的整数部分
 * 3. 计算 a 的个数
 * 4. 计算 a ~ z 中间的字母
 * 5. 拼装字符
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
function getSmallestString(n: number, k: number): string {
  const A_CHAR_CODE = 97
  const zCount = Math.floor((k - n) / 25)
  const axCount = n - zCount
  const aCount = axCount > 1 ? axCount - 1 : 0
  const x = axCount === 0 ? '' : String.fromCharCode(((k - n) % 25) + A_CHAR_CODE)
  return 'a'.repeat(aCount) + x + 'z'.repeat(zCount)
}

export default getSmallestString
