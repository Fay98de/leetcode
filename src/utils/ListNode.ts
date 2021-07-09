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

  get tail() {
    let tail: ListNode = this
    while (tail.next instanceof ListNode) {
      tail = tail.next
    }
    return tail
  }

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  public tailTo(node: ListNode) {
    this.tail.next = node
  }

  public tailToIndex(index: number) {
    if (index < 0) return
    let i = 0
    let node: ListNode | null = this
    for (let i = 0; i < index && node; i++) {
      node = node.next
    }
    this.tail.next = node
  }
}

export default ListNode
