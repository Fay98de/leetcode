import shortestToChar_0 from './shortest-distance-to-a-character.0'

const arr = [shortestToChar_0]

arr.forEach((shortestToChar, index) => {
  describe(`[821. 字符的最短距离](shortest-distance-to-a-character) - ${index}`, () => {
    test(`'loveleetcode', 'e' => [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]`, () => {
      const received = shortestToChar('loveleetcode', 'e')
      expect(received).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
    })

    test(`'aaab', 'b' => [3, 2, 1, 0]`, () => {
      const received = shortestToChar('aaab', 'b')
      expect(received).toEqual([3, 2, 1, 0])
    })
  })
})
