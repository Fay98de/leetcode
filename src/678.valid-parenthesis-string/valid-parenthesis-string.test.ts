import checkValidString_0 from './valid-parenthesis-string.0'

const arr = [checkValidString_0]

arr.forEach((checkValidString, index) => {
  describe(`[678. 有效的括号字符串](valid-parenthesis-string) - ${index}`, () => {
    test(`() => true`, () => {
      const received = checkValidString('()')
      expect(received).toBe(true)
    })

    test(`(*) => true`, () => {
      const received = checkValidString('(*)')
      expect(received).toBe(true)
    })

    test(`(*)) => true`, () => {
      const received = checkValidString('(*))')
      expect(received).toBe(true)
    })
  })
})
