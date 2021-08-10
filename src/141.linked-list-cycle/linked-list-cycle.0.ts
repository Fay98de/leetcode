import ListNode from '../data-structure/list-node'

function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>()
  while (head) {
    if (set.has(head)) {
      return true
    }
    set.add(head)
    head = head.next
  }
  return false
}

export default hasCycle
