import ListNode from '../utils/ListNode'

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)
  let cur: ListNode = dummy

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 || l2

  const ret = dummy.next
  dummy.next = null
  return ret
}

export default mergeTwoLists
