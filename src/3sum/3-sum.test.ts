import threeSum_0 from './3-sum.0'

const threeSumList = [threeSum_0]

threeSumList.forEach((threeSum, index) => {
  describe(`[三数之和](3sum) - ${index}`, () => {
    test('[-1, 0, 1, 2, -1, -4] => [[-1, -1, 2], [-1, 0, 1]]', () => {
      const received = threeSum([-1, 0, 1, 2, -1, -4])
      expect(received).toEqual([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    })

    test('[] => []', () => {
      const received = threeSum([])
      expect(received).toEqual([])
    })

    test('[0] => []', () => {
      const received = threeSum([0])
      expect(received).toEqual([])
    })
  })
})
