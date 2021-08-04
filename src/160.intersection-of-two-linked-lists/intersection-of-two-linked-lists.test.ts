import ListNode from '../utils/ListNode'
import getIntersectionNode_0 from './intersection-of-two-linked-lists.0'
import getIntersectionNode_1 from './intersection-of-two-linked-lists.1'

const { fromArray, toArray } = ListNode

const Functions = [getIntersectionNode_0, getIntersectionNode_1]

Functions.forEach((getIntersectionNode, index) => {
  describe(`[160. 相交链表](intersection-of-two-linked-lists) - ${index}`, () => {
    test(`[4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5] => 2`, () => {
      const head = fromArray([8, 4, 5])!
      const headA = fromArray([4, 1])!
      const headB = fromArray([5, 0, 1])!
      headA.tailTo(head)
      headB.tailTo(head)
      const received = getIntersectionNode(headA, headB)
      expect(received!.val).toBe(8)
    })

    test(`[0, 9, 1, 2, 4], [3, 2, 4] => 2`, () => {
      const head = fromArray([2, 4])!
      const headA = fromArray([0, 9, 1])!
      const headB = fromArray([3])!
      headA.tailTo(head)
      headB.tailTo(head)
      const received = getIntersectionNode(headA, headB)
      expect(received!.val).toBe(2)
    })
  })
})
