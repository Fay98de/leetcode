/**
 * 思路：
 * 1. 查找括号匹配的组
 * 2. 通过递归的方式，将匹配到组进行简化到最简单的情况
 * 3. 然后使用简单方式计算
 */

const handler: Record<string, (a: number, b: number) => number> = {
  '+': (a: number, b: number) => {
    return a + b
  },

  '-': (a: number, b: number) => {
    return a - b
  },
}

function simpleCalculate(s: string): number {
  let l = s.length
  let result = 0
  let sign = '+'
  let n = ''

  for (let i = 0; i < l; i++) {
    if (/[0-9]/.test(s[i])) {
      n += s[i]
      continue
    }
    // 可能会出现 5--2、5+-2 这两种情况
    if (n === '' && s[i] === '-') {
      sign = sign === '+' ? '-' : '+'
      continue
    }
    result = handler[sign](result, Number(n))
    sign = s[i]
    n = ''
  }
  result = handler[sign](result, Number(n))

  return result
}

function recursivelyCalculate(s: string): number {
  let l = s.length
  let stack: string[] = []
  let simpleString = ''
  let groupString = ''

  for (let i = 0; i < l; i++) {
    if (s[i] === ' ') continue
    if (s[i] === '(') {
      groupString = stack.length === 0 ? groupString : groupString + s[i]
      stack.push('(')
      continue
    }
    if (s[i] === ')') {
      stack.pop()
      if (stack.length === 0) {
        simpleString += recursivelyCalculate(groupString)
        groupString = ''
      } else {
        groupString += s[i]
      }
      continue
    }
    if (stack.length === 0) {
      simpleString += s[i]
    } else {
      groupString += s[i]
    }
  }

  return simpleCalculate(simpleString)
}

function calculate(s: string): number {
  return recursivelyCalculate(s)
}

export default calculate
