function longestCommonPrefix(strs: string[]): string {
  let result = ''

  if (strs.length === 0) return result
  if (strs.length === 1) return strs[0]

  for (let i = 0; i < strs[0].length; i++) {
    let isCommon = true
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        isCommon = false
        break
      }
    }
    if (!isCommon) break
    result += strs[0][i]
  }

  return result
}

export default longestCommonPrefix
