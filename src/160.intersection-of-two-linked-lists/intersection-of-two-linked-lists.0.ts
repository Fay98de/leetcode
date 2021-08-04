import ListNode from 'src/utils/ListNode'

/**
 * 哈希存储
 * @param headA
 * @param headB
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const set = new Set<ListNode>()
  let temp = headA
  while (temp) {
    set.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp) {
    if (set.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}

export default getIntersectionNode
