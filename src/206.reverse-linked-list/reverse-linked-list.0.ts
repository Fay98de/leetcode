import ListNode from 'src/utils/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let temp: ListNode | null = head

  while (head) {
    temp = temp ? temp.next : null
    head.next = pre
    pre = head
    head = temp
  }
  return pre
}

export default reverseList
