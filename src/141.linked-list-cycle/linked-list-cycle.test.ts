import ListNode from '../data-structure/list-node'
import hasCycle_0 from './linked-list-cycle.0'
import hasCycle_1 from './linked-list-cycle.1'
import hasCycle_2 from './linked-list-cycle.2'

const { fromArray, toArray } = ListNode
const Functions = [hasCycle_0, hasCycle_1, hasCycle_2]

Functions.forEach((hasCycle, index) => {
  describe(`[141. 环形链表](linked-list-cycle) - ${index}`, () => {
    test(`[3, 2, 0, -4], 1 => true`, () => {
      const node = fromArray([3, 2, 0, -4])
      node?.tailToIndex(1)
      const received = hasCycle(node)
      expect(received).toBe(true)
    })

    test(`[1, 2], 0 => true`, () => {
      const node = fromArray([1, 2])
      node?.tailToIndex(0)
      const received = hasCycle(node)
      expect(received).toBe(true)
    })

    test(`[1], -1 => false`, () => {
      const node = fromArray([1])
      node?.tailToIndex(-1)
      const received = hasCycle(node)
      expect(received).toBe(false)
    })
  })
})
