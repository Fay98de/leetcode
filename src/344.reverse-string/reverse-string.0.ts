// 双指针
function reverseString(s: string[]): void {
  if (s.length <= 1) return
  let left = Math.floor((s.length - 1) / 2)
  let right = Math.ceil((s.length - 1) / 2)
  let temp: string

  while (left >= 0 && right <= s.length - 1) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left--
    right++
  }
}

export default reverseString
