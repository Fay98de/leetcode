import getSmallestString_0 from './smallest-string-with-a-given-numeric-value.0'
import getSmallestString_1 from './smallest-string-with-a-given-numeric-value.1'
import getSmallestString_2 from './smallest-string-with-a-given-numeric-value.2'

const arr = [getSmallestString_0, getSmallestString_1, getSmallestString_2]

arr.forEach((getSmallestString, index) => {
  describe(`[1663. 具有给定数值的最小字符串](smallest-string-with-a-given-numeric-value) - ${index}`, () => {
    test(`n = 3, k = 27 => 'aay'`, () => {
      const received = getSmallestString(3, 27)
      expect(received).toBe('aay')
    })
    test(`n = 5, k = 73 => 'aaszz'`, () => {
      const received = getSmallestString(5, 73)
      expect(received).toBe('aaszz')
    })

    test(`n = 5, k = 130 => 'zzzzz'`, () => {
      const received = getSmallestString(5, 130)
      expect(received).toBe('zzzzz')
    })

    test(`n = 85, k = 2159  => 'aayzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'`, () => {
      const received = getSmallestString(85, 2159)
      expect(received).toBe(
        'aayzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
      )
    })
  })
})
