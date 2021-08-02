import ListNode from '../utils/ListNode'
import addTwoNumbers_0 from './add-two-numbers.0'

const { fromArray, toArray } = ListNode
const Functions = [addTwoNumbers_0]

Functions.forEach((addTwoNumbers, index) => {
  describe(`[2. 两数相加](add-two-numbers)`, () => {
    test(`[2, 4, 3], [5, 6, 4] => [7, 0, 8]`, () => {
      const l1 = fromArray([2, 4, 3])
      const l2 = fromArray([5, 6, 4])
      const result = toArray(addTwoNumbers(l1, l2))
      expect(result).toEqual([7, 0, 8])
    })

    test(`[0], [0] => [0]`, () => {
      const l1 = fromArray([0])
      const l2 = fromArray([0])
      const result = toArray(addTwoNumbers(l1, l2))
      expect(result).toEqual([0])
    })

    test(`[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9] => [8, 9, 9, 9, 0, 0, 0, 1]`, () => {
      const l1 = fromArray([9, 9, 9, 9, 9, 9, 9])
      const l2 = fromArray([9, 9, 9, 9])
      const result = toArray(addTwoNumbers(l1, l2))
      expect(result).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    })
  })
})
