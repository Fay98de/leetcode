function plusOne(digits: number[]): number[] {
  const l = digits.length
  let n = 1

  for (let i = l - 1; n === 1; i--) {
    if (i < 0) {
      digits.unshift(n)
      break
    }
    let v = digits[i] + n
    if (v >= 10) {
      v -= 10
      n = 1
    } else {
      n = 0
    }
    digits[i] = v
  }

  return digits
}

export default plusOne
