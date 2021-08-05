/**
 * 通过栈来实现
 */

function recursivelyCalculate(s: string, start: number) {
  let l = s.length
  let i = start
  let res = 0
  let num = 0
  let sign = 1

  while (i < l) {
    if (s[i] === ' ') {
      i++
      continue
    }
    if (/\d/.test(s[i])) {
      num = num * 10 + Number(s[i])
    } else if (s[i] === '+' || s[i] === '-') {
      res += sign * num
      num = 0
      sign = s[i] === '+' ? 1 : -1
    } else if (s[i] === '(') {
      const numItem = recursivelyCalculate(s, i + 1)
      num = numItem.val
      i = numItem.end
    } else if (s[i] === ')') {
      break
    }
    i++
  }
  res += sign * num

  return { val: res, end: i }
}

function calculate(s: string): number {
  return recursivelyCalculate(s, 0).val
}

export default calculate
