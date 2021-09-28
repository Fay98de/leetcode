import ListNode from '../data-structure/list-node'
import mergeTwoLists_0 from './merge-two-sorted-lists.0'
import mergeTwoLists_1 from './merge-two-sorted-lists.1'
import mergeTwoLists_2 from './merge-two-sorted-lists.2'
import mergeTwoLists_3 from './merge-two-sorted-lists.3'

const { fromArray, toArray } = ListNode

const arr = [mergeTwoLists_0, mergeTwoLists_1, mergeTwoLists_2, mergeTwoLists_3]

arr.forEach((mergeTwoLists, index) => {
  describe(`[21. 合并两个有序链表](merge-two-sorted-lists) - ${index}`, () => {
    test(`[1, 2, 4], [1, 3, 4] => [1, 1, 2, 3, 4, 4]`, () => {
      const received = toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4])))
      expect(received).toEqual([1, 1, 2, 3, 4, 4])
    })

    test(`[], [] => []`, () => {
      const received = toArray(mergeTwoLists(fromArray([]), fromArray([])))
      expect(received).toEqual([])
    })

    test(`[], [1] => []`, () => {
      const received = toArray(mergeTwoLists(fromArray([]), fromArray([1])))
      expect(received).toEqual([1])
    })
  })
})
