function convert(s: string, numRows: number): string {
  const l = s.length
  if (numRows === 1 || numRows === l) return s
  const groupCount = 2 * numRows - 2
  const result = new Array(numRows).fill('')
  for (let i = 0; i < l; i++) {
    let index = i % groupCount
    result[index < numRows ? index : groupCount - index] += s[i]
  }
  return result.join('')
}

export default convert
