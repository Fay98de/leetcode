/**
 * 1. 第 i 组、第 row 行的第 1 个字符串索引值 index 为 `i * groupCount + row`
 * 2. 如果不是第 0 行和第 numRows - 1 行，会多 1 个字符串，该字符串的索引值为 index + 2 * (numRows - row) - 2
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  const l = s.length
  const groupCount = 2 * numRows - 2 // 每组多少个
  const groupNum = Math.ceil(l / groupCount) // 总共有多少组
  let ret = ''

  for (let row = 0; row < numRows; row++) {
    for (let i = 0; i < groupNum; i++) {
      let index = i * groupCount + row // 第 1 个字符串索引值
      if (!s[index]) break
      ret += s[index]
      if (row === 0 || row === numRows - 1) continue
      index += +2 * (numRows - row) - 2 // 第 2 个字符串索引值
      if (!s[index]) break
      ret += s[index]
    }
  }

  return ret
}

export default convert
