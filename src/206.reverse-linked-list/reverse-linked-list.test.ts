import ListNode from '../utils/ListNode'
import reverseList_0 from './reverse-linked-list.0'

const { fromArray, toArray } = ListNode

const Functions = [reverseList_0]

Functions.forEach((reverseList, index) => {
  describe(`[70. 爬楼梯](reverse-linked-list) - ${index}`, () => {
    test(`[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]`, () => {
      const node = fromArray([1, 2, 3, 4, 5])
      const received = toArray(reverseList(node))
      expect(received).toEqual([5, 4, 3, 2, 1])
    })

    test(`[1, 2] => [2, 1]`, () => {
      const node = fromArray([1, 2])
      const received = toArray(reverseList(node))
      expect(received).toEqual([2, 1])
    })
  })
})
