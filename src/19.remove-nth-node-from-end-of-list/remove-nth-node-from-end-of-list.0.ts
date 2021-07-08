import ListNode from '../utils/ListNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const arr: ListNode[] = []
  let ret: ListNode | null = head

  while (head) {
    arr.push(head)
    head = head.next
  }

  const i = arr.length - n
  const prev = i - 1
  // const next = i + 1

  if (prev < 0) {
    ret = arr[i].next
    arr[i].next = null
  } else {
    arr[prev].next = arr[i].next
    arr[i].next = null
  }
  return ret
}

export default removeNthFromEnd
