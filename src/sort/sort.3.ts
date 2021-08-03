import Heap from 'heap'

/**
 * 堆排序
 */
function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return

  const heap = new Heap<number>()

  for (let i = 0; i < list.length; i++) {
    heap.push(list[i])
  }
  for (let i = 0; i < list.length; i++) {
    list[i] = heap.pop()
  }
}

export default sort
