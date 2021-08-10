import ListNode from '../data-structure/list-node'

function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode = head!
  let fast: ListNode | null = head
  let pre: ListNode = head!
  let prepre: ListNode | null = null

  while (fast?.next) {
    pre = slow // 缓存 slow
    slow = slow.next! // 移动慢指针
    fast = fast.next.next // 移动快指针
    pre.next = prepre // 翻转前半部分
    prepre = pre // 缓存 pre
  }
  let left: ListNode | null = pre
  // 长度为奇数，遍历结束时，slow 正好位于中心节点，fast 正好位于末尾节点
  // 长度为偶数，遍历结束时，slow 正好为右半部分第 1 个节点，fast 正好移出末尾为 null
  let right: ListNode | null = fast ? slow.next : slow
  while (left && right) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}

export default isPalindrome
