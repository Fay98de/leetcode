function shortestToChar(s: string, c: string): number[] {
  const l = s.length
  const ans: number[] = []
  let prev = -Infinity

  for (let i = 0; i < l; i++) {
    prev = s[i] === c ? i : prev
    ans[i] = i - prev
  }

  prev = Infinity
  for (let i = l - 1; i >= 0; i--) {
    prev = s[i] === c ? i : prev
    ans[i] = Math.min(ans[i], prev - i)
  }

  return ans
}

export default shortestToChar
