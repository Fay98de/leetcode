import firstUniqChar_0 from './first-unique-character-in-a-string.0'

const Functions = [firstUniqChar_0]

Functions.forEach((firstUniqChar, index) => {
  describe(`[387. 字符串中的第一个唯一字符](first-unique-character-in-a-string) - ${index}`, () => {
    test(`leetcode => 0`, () => {
      const received = firstUniqChar('leetcode')
      expect(received).toBe(0)
    })

    test(`loveleetcode => 2`, () => {
      const received = firstUniqChar('loveleetcode')
      expect(received).toBe(2)
    })

    test(`aabb => -1`, () => {
      const received = firstUniqChar('aabb')
      expect(received).toBe(-1)
    })
  })
})
