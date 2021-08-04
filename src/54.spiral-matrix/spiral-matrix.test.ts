import spiralOrder_0 from './spiral-matrix.0'

const Functions = [spiralOrder_0]

Functions.forEach((spiralOrder, index) => {
  describe(`[54. 螺旋矩阵](spiral-matrix) - ${index}`, () => {
    test(`[[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [1, 2, 3, 6, 9, 8, 7, 4, 5]`, () => {
      const received = spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
      expect(received).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
    })

    test(`[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] => [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`, () => {
      const received = spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
      expect(received).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    })
  })
})
