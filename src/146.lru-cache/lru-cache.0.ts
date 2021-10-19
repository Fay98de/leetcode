class LinkedListNode<T> {
  value: T
  prev?: LinkedListNode<T>
  next?: LinkedListNode<T>

  constructor(value: T) {
    this.value = value
  }
}

class LRUCache {
  private capacity: number
  private size: number = 0
  private cache: Record<number, LinkedListNode<number[]>> = {}
  private head: LinkedListNode<number[]> = new LinkedListNode([-1, -1])
  private tail: LinkedListNode<number[]> = new LinkedListNode([-2, -2])

  constructor(capacity: number) {
    this.capacity = capacity
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  private insertBefore(node: LinkedListNode<number[]>, target: LinkedListNode<number[]>) {
    node.prev && (node.prev.next = node.next)
    node.next && (node.next.prev = node.prev)
    node.prev = target.prev
    node.next = target
    target.prev && (target.prev.next = node)
    target.prev = node
  }

  get(key: number): number {
    const { cache, tail } = this
    const node = cache[key]

    if (!node) return -1

    this.insertBefore(node, tail)

    return node.value[1]
  }

  put(key: number, value: number): void {
    const { capacity, size, cache, head, tail } = this
    let node = cache[key]

    if (node) {
      node.value = [key, value]
      this.insertBefore(node, tail)
      return
    }

    node = new LinkedListNode([key, value])
    cache[key] = node

    this.insertBefore(node, tail)

    if (size >= capacity) {
      const key = head.next!.value[0]
      delete cache[key]
      head.next = head.next!.next
      head.next!.prev = head
    } else {
      this.size++
    }
  }
}

export default LRUCache
