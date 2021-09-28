// 递归

import ListNode from '../data-structure/list-node'

function merge(l1: ListNode | null, l2: ListNode | null, dummy: ListNode) {
  if (!l1 || !l2) {
    dummy.next = l1 || l2
    return
  }
  if (l1.val <= l2.val) {
    dummy.next = l1
    merge(l1.next, l2, dummy.next)
  } else {
    dummy.next = l2
    merge(l1, l2.next, dummy.next)
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)

  merge(l1, l2, dummy)

  const ret = dummy.next
  dummy.next = null
  return ret
}

export default mergeTwoLists
