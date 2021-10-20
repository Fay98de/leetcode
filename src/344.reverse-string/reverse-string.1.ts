// 双指针
function reverseString(s: string[]): void {
  if (s.length <= 1) return
  let left = 0
  let right = s.length - 1
  let temp: string

  while (left < right) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}

export default reverseString
