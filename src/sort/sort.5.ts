function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * 以第一个元素为基准，小于基准的和 left 交换位置，之后交转 left 和 pivot 的位置
 * @param array
 * @param left 左指针，慢指针
 * @param right 右指针，快指针
 */
export function partition_1(array: number[], left: number, right: number) {
  const pivotIndex = left

  for (let i = left + 1; i <= right; i++) {
    if (array[i] < array[pivotIndex]) {
      left++
      swap(array, i, left)
    }
  }
  swap(array, pivotIndex, left)
  return left
}

/**
 * 以最后一个元素为基准，小于基准的和 left 交换位置，之后交转 left 和 pivot 的位置
 * @param array
 * @param left 左指针，慢指针
 * @param right 右指针，快指针
 */
export function partition_2(array: number[], left: number, right: number) {
  const pivotIndex = right

  for (let i = left; i < right; i++) {
    if (array[i] < array[pivotIndex]) {
      swap(array, i, left)
      left++
    }
  }
  swap(array, pivotIndex, left)
  return left
}

/**
 * 以第一个元素为基准，动态调整左右指针
 * @param array
 * @param left 左指针
 * @param right 右指针
 * @returns
 */
export function partition_3(array: number[], left: number, right: number) {
  const pivot = array[left]
  while (left < right) {
    while (left < right && array[right] > pivot) {
      right--
    }
    array[left] = array[right]
    while (left < right && array[left] <= pivot) {
      left++
    }
    array[right] = array[left]
  }
  array[left] = pivot
  return left
}

function quickSort(array: number[], left: number, right: number) {
  if (left < right) {
    const partitionIndex = partition_2(array, left, right)
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
}

/**
 * 快速排序
 */
function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return
  quickSort(list, 0, list.length - 1)
}

export default sort
