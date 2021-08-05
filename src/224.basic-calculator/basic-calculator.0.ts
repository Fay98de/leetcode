function calculate(s: string): number {
  const ops = [1]
  let sign = 1

  let ret = 0
  const n = s.length
  let i = 0
  while (i < n) {
    if (s[i] === ' ') {
      i++
    } else if (s[i] === '+') {
      sign = ops[ops.length - 1]
      i++
    } else if (s[i] === '-') {
      sign = -ops[ops.length - 1]
      i++
    } else if (s[i] === '(') {
      ops.push(sign)
      i++
    } else if (s[i] === ')') {
      ops.pop()
      i++
    } else {
      let num = ''
      while (i < n && /[0-9]/.test(s[i])) {
        num += s[i]
        i++
      }
      ret += sign * Number(num)
    }
  }
  return ret
}

export default calculate
