import ListNode from '../utils/ListNode'

function add(l1: ListNode | null, l2: ListNode | null, initialValue: number): ListNode | null {
  if (!l1 && !l2 && !initialValue) return null
  const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + initialValue
  return new ListNode(sum % 10, add(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor(sum / 10)))
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return add(l1, l2, 0)
}

export default addTwoNumbers
