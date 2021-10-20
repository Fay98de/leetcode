import reverseString_0 from './reverse-string.0'
import reverseString_1 from './reverse-string.1'

const arr = [reverseString_0, reverseString_1]

arr.forEach((reverseString, index) => {
  describe(`[344. 反转字符串](reverse-string) - ${index}`, () => {
    test(`['h', 'e', 'l', 'l', 'o'] => ['o', 'l', 'l', 'e', 'h']`, () => {
      const s = ['h', 'e', 'l', 'l', 'o']
      reverseString(s)
      expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
    })

    test(`['H', 'a', 'n', 'n', 'a', 'h'] => ['h', 'a', 'n', 'n', 'a', 'H']`, () => {
      const s = ['H', 'a', 'n', 'n', 'a', 'h']
      reverseString(s)
      expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
    })
  })
})
