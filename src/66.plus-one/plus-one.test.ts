import plusOne_0 from './plus-one.0'
import plusOne_1 from './plus-one.1'

const plusOneList = [plusOne_0, plusOne_1]

plusOneList.forEach((plusOne, index) => {
  describe(`[66.加一](plus-one) - ${index}`, () => {
    test(`[1, 2, 3] => [1, 2, 4]`, () => {
      const received = plusOne([1, 2, 3])
      expect(received).toEqual([1, 2, 4])
    })
    test(`[4, 3, 2, 1] => [4, 3, 2, 2]`, () => {
      const received = plusOne([4, 3, 2, 1])
      expect(received).toEqual([4, 3, 2, 2])
    })
    test(`[0] => [1]`, () => {
      const received = plusOne([0])
      expect(received).toEqual([1])
    })
    test(`[9, 9] => [1, 0, 0]`, () => {
      const received = plusOne([9, 9])
      expect(received).toEqual([1, 0, 0])
    })
  })
})
