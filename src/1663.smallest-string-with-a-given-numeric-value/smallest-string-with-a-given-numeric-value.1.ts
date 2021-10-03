/**
 * 获取最小字符串
 * 要获取最小字符串，字符串的开头要尽可能多地以 a 填充，要实现此，字符串的尾部要尽可能地填充 z
 * 中间可能有一个位于 a ~ z 之间的字符（不含 a 和 z）
 * 因此此字符串的大致格式可以用正则表示为 a*x?z*
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
function getSmallestString(n: number, k: number): string {
  const START_CHAR_CODE = 96 // 字母 a 前一位的 char code
  let zCount = Math.floor(k / 26)

  // 如果要填满 n 个字符，除去 z 外剩余的值不能小于 ax 的字母个数。因为每个字母至少为 1
  while (k - zCount * 26 < n - zCount) {
    zCount--
  }
  const axCount = n - zCount
  // aCount 可能为 0
  const aCount = axCount > 1 ? axCount - 1 : 0

  /**
   * 可能存在没有 x 的情况，此时 x 为 ''
   * 存在 x 时，x 的字母表索引为 k - zCount * 26 - aCount
   */
  const x = axCount === 0 ? '' : String.fromCharCode(k - zCount * 26 - aCount + START_CHAR_CODE)

  return 'a'.repeat(aCount) + x + 'z'.repeat(zCount)
}

export default getSmallestString
