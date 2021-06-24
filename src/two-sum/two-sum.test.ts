import twoSum_0 from './two-sum.0'
import twoSum_1 from './two-sum.1'

const twoSumList = [twoSum_0, twoSum_1]

twoSumList.forEach((twoSum, index) => {
  describe(`[两数之和](two-sum) - ${index}`, () => {
    test('[3, 3], 6 => [0, 1]', () => {
      const received = twoSum([3, 3], 6)
      expect(received).toEqual(expect.arrayContaining([0, 1]))
    })

    test('[-3, 4, 3, 90], 0 => [0, 2]', () => {
      const received = twoSum([-3, 4, 3, 90], 0)
      expect(received).toEqual(expect.arrayContaining([0, 2]))
    })

    test('[3, 2, 4], 6 => [0, 2]', () => {
      const received = twoSum([3, 2, 4], 6)
      expect(received).toEqual(expect.arrayContaining([1, 2]))
    })
  })
})
