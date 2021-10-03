function getSmallestString(n: number, k: number): string {
  const A_CHAR_CODE = 97
  let zCount = Math.floor(k / 26)
  let axCount = n - zCount
  if (axCount === 0) {
    return 'z'.repeat(zCount)
  }
  let left = k - zCount * 26
  while (axCount > left) {
    zCount--
    axCount = n - zCount
    left = k - zCount * 26
  }
  let aCount = axCount > 1 ? axCount - 1 : 0
  let xIndex = k - zCount * 26 - aCount
  let xCharCode = xIndex - 1 + A_CHAR_CODE

  return 'a'.repeat(aCount) + String.fromCharCode(xCharCode) + 'z'.repeat(zCount)
}

export default getSmallestString
