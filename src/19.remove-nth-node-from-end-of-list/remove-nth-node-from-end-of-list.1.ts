import ListNode from '../utils/ListNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = new ListNode(0, head)
  let prev = dummy
  let tail: ListNode | null = head

  for (let i = 0; i < n && tail; i++) {
    tail = tail.next
  }
  while (tail) {
    prev = prev.next!
    tail = tail.next
  }
  // 删除节点
  const cur = prev.next!
  prev.next = cur.next
  cur.next = null
  // 获取头节点
  head = dummy.next
  dummy.next = null
  return head
}

export default removeNthFromEnd
