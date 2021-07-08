import ListNode from '../utils/ListNode'

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)
  let cur: ListNode = dummy
  let cur1 = l1
  let cur2 = l2
  while (cur1 || cur2) {
    if (cur1) {
      cur.next = cur1
      if (cur2 && cur1.val > cur2.val) {
        cur.next = cur2
        cur2 = cur2.next
      } else {
        cur1 = cur1.next
      }
      cur = cur.next
    } else {
      cur.next = cur2
      if (cur2) {
        cur = cur2
        cur2 = cur2.next
      }
    }
  }

  const ret = dummy.next
  dummy.next = null
  return ret
}

export default mergeTwoLists
