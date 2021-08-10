import ListNode from 'src/data-structure/list-node'

/**
 * 哈希存储
 * @param headA
 * @param headB
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pA = headA
  let pB = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}

export default getIntersectionNode
