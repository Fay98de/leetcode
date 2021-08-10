import ListNode from '../data-structure/list-node'

function hasCycle(head: ListNode | null): boolean {
  try {
    JSON.stringify(head)
  } catch (ex) {
    return true
  }
  return false
}

export default hasCycle
