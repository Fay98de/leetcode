function checkValidString(s: string): boolean {
  const leftStack: number[] = []
  const asteriskStack: number[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftStack.push(i)
      continue
    }
    if (s[i] === '*') {
      asteriskStack.push(i)
      continue
    }
    if (leftStack.length > 0) {
      leftStack.pop()
    } else if (asteriskStack.length > 0) {
      asteriskStack.pop()
    } else {
      return false
    }
  }

  while (leftStack.length > 0 && asteriskStack.length > 0) {
    if (leftStack.pop()! > asteriskStack.pop()!) return false
  }
  return leftStack.length === 0
}

export default checkValidString
