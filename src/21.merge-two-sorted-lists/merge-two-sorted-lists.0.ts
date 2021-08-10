import ListNode from '../data-structure/list-node'

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)
  let cur: ListNode | null = dummy
  let cur1 = l1
  let cur2 = l2
  while (cur1 || cur2) {
    if (!cur1) {
      cur!.next = cur2
      cur = cur2
      cur2 = cur2!.next
      continue
    }
    if (!cur2) {
      cur!.next = cur1
      cur = cur1
      cur1 = cur1!.next
      continue
    }
    if (cur1.val >= cur2.val) {
      cur!.next = cur2
      cur = cur2
      cur2 = cur2!.next
    } else {
      cur!.next = cur1
      cur = cur1
      cur1 = cur1!.next
    }
  }

  const ret = dummy.next
  dummy.next = null
  return ret
}

export default mergeTwoLists
