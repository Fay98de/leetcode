import ListNode from '../utils/ListNode'

let frontNode: ListNode

function checkRecursively(curentNode: ListNode | null) {
  if (curentNode !== null) {
    if (!checkRecursively(curentNode.next)) {
      return false
    }
    if (frontNode.val !== curentNode.val) {
      return false
    }
    frontNode = frontNode.next!
  }
  return true
}

function isPalindrome(head: ListNode | null): boolean {
  frontNode = head!
  return checkRecursively(head)
}

export default isPalindrome
