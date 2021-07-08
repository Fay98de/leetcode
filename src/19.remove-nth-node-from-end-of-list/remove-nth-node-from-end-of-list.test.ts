import ListNode from '../utils/ListNode'
import removeNthFromEnd_0 from './remove-nth-node-from-end-of-list.0'
import removeNthFromEnd_1 from './remove-nth-node-from-end-of-list.1'

const { fromArray, toArray } = ListNode
const Functions = [removeNthFromEnd_0, removeNthFromEnd_1]

Functions.forEach((removeNthFromEnd, index) => {
  describe(`[19.删除链表的倒数第 N 个结点](remove-nth-node-from-end-of-list) - ${index}`, () => {
    test(`[1, 2, 3, 4, 5], 2 => [1, 2, 3, 5]`, () => {
      const received = toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2))
      expect(received).toEqual([1, 2, 3, 5])
    })

    test(`[1], 1 => []`, () => {
      const received = toArray(removeNthFromEnd(fromArray([1]), 1))
      expect(received).toEqual([])
    })

    test(`[1, 2], 1 => [1]`, () => {
      const received = toArray(removeNthFromEnd(fromArray([1, 2]), 1))
      expect(received).toEqual([1])
    })

    test(`[1, 2, 3], 3 => []`, () => {
      const received = toArray(removeNthFromEnd(fromArray([1, 2, 3]), 3))
      expect(received).toEqual([2, 3])
    })
  })
})
