function plusOne(digits: number[]): number[] {
  const l = digits.length

  for (let i = l - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] !== 0) return digits
  }
  digits = new Array(l + 1).fill(0)
  digits[0] = 1

  return digits
}

export default plusOne
