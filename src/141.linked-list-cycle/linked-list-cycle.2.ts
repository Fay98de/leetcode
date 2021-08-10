import ListNode from '../data-structure/list-node'

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  let fast = head.next
  while (head && fast && fast.next) {
    if (fast === head) return true
    head = head.next
    fast = fast.next.next
  }
  return false
}

export default hasCycle
