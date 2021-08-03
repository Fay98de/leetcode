import findKthLargest_0 from './kth-largest-element-in-an-array.0'

const Functions = [findKthLargest_0]

Functions.forEach((findKthLargest, index) => {
  describe(`[215. 数组中的第K个最大元素](kth-largest-element-in-an-array) - ${index}`, () => {
    test(`[3, 2, 1, 5, 6, 4], 2 => 5`, () => {
      const received = findKthLargest([3, 2, 1, 5, 6, 4], 2)
      expect(received).toBe(5)
    })

    test(`[3, 2, 3, 1, 2, 4, 5, 5, 6], 4 => 4`, () => {
      const received = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
      expect(received).toBe(4)
    })
  })
})
