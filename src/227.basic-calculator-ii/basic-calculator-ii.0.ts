function calculate(s: string): number {
  const stack: number[] = []
  let res = 0
  let num = 0
  let sign = '+'

  function calcStack() {
    switch (sign) {
      case '+':
        stack.push(num)
        break
      case '-':
        stack.push(-num)
        break
      case '*':
        stack.push(stack.pop()! * num)
        break
      case '/':
        const divided = stack.pop()! / num
        stack.push(divided - (divided % 1))
        break
    }
  }

  for (let c of s) {
    if (c === ' ') continue
    if (/\d/.test(c)) {
      num = num * 10 + Number(c)
    }
    if (!/\d/.test(c)) {
      calcStack()
      sign = c
      num = 0
    }
  }
  calcStack()
  for (let n of stack) {
    res += n
  }
  return res
}

export default calculate
