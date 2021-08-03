import search from './search-in-rotated-sorted-array.0'

const Functions = [search]

Functions.forEach((search, index) => {
  describe(`[33. 搜索旋转排序数组](search-in-rotated-sorted-array) - ${index}`, () => {
    test(`[4, 5, 6, 7, 0, 1, 2], 0 => 4`, () => {
      const received = search([4, 5, 6, 7, 0, 1, 2], 0)
      expect(received).toBe(4)
    })

    test(`[3, 1], 1 => 1`, () => {
      const received = search([3, 1], 1)
      expect(received).toBe(1)
    })

    test(`[4, 5, 6, 7, 0, 1, 2], 3 => -1`, () => {
      const received = search([4, 5, 6, 7, 0, 1, 2], 3)
      expect(received).toBe(-1)
    })

    test(`[1], 0 => -1`, () => {
      const received = search([1], 0)
      expect(received).toBe(-1)
    })
  })
})
