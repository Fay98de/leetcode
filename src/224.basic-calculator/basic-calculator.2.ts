/**
 * 通过栈来实现
 */

function calculate(s: string): number {
  const resStack: number[] = []
  const signStack: number[] = []
  let res = 0
  let num = 0
  let sign = 1

  for (let c of s) {
    if (c === ' ') continue
    if (/\d/.test(c)) {
      num = num * 10 + Number(+c)
    } else if (c === '+' || c === '-') {
      res += sign * num
      num = 0
      sign = c === '+' ? 1 : -1
    } else if (c === '(') {
      resStack.push(res)
      signStack.push(sign)
      res = 0
      sign = 1
    } else if (c === ')') {
      res += sign * num
      num = 0
      res = resStack.pop()! + res * signStack.pop()!
    }
  }
  res += sign * num
  return res
}

export default calculate
