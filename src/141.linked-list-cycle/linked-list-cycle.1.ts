import ListNode from '../utils/ListNode'

function hasCycle(head: ListNode | null): boolean {
  try {
    JSON.stringify(head)
  } catch (ex) {
    return true
  }
  return false
}

export default hasCycle
