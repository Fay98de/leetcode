import ListNode from '../utils/ListNode'

function isPalindrome(head: ListNode | null): boolean {
  const nums = []
  while (head) {
    nums.push(head.val)
    head = head.next
  }
  let left = 0
  let right = nums.length - 1
  let result = true
  while (right > left) {
    if (nums[left] !== nums[right]) {
      result = false
      break
    }
    left++
    right--
  }
  return result
}

export default isPalindrome
