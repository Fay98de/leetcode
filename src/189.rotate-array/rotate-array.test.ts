import rotate_0 from './rotate-array.0'
import rotate_1 from './rotate-array.1'
import rotate_2 from './rotate-array.2'

const rotateList = [rotate_0, rotate_1, rotate_2]

rotateList.forEach((rotate, index) => {
  describe(`[189.旋转数组](rotate-array) - ${index}`, () => {
    test(`[1, 2, 3, 4, 5, 6, 7], 3 => [5, 6, 7, 1, 2, 3, 4]`, () => {
      const received = [1, 2, 3, 4, 5, 6, 7]
      rotate(received, 3)
      expect(received).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    test(`[-1, -100, 3, 99], 2 => [3, 99, -1, -100]`, () => {
      const received = [-1, -100, 3, 99]
      rotate(received, 2)
      expect(received).toEqual([3, 99, -1, -100])
    })
  })
})
