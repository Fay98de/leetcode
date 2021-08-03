function firstUniqChar(s: string): number {
  const map: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === i) {
      return i
    } else {
      delete map[s[i]]
    }
  }

  return -1
}

export default firstUniqChar
