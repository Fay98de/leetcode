class ListNode {
  static fromArray = function (arr: number[]) {
    let node: ListNode | null = null

    for (let i = arr.length - 1; i >= 0; i--) {
      const temp: ListNode = new ListNode(arr[i], node)
      node = temp
    }

    return node
  }

  static toArray = function (node: ListNode | null) {
    const arr: number[] = []

    while (node) {
      arr.push(node.val)
      node = node.next
    }

    return arr
  }

  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default ListNode
