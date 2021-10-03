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
 * 分区。目的是选一个基准值，将数组转换成小于基准值的数、基准值、大于基准值的数，总共 3 部分
 * 此实现中，选择最后一个元素为基准值
 * 初始划分点为 left
 * 遍历数组，将小于基准值的元素放到数组左侧，同时每移动一个元素，划分点就右移 1 位
 * 最后将基准值交换到划分点的位置
 * @export
 * @param {number[]} array
 * @param {number} left 数组左侧索引
 * @param {number} right 数组右侧索引
 * @returns {number} 划分点的索引
 */
export function partition_2(array: number[], left: number, right: number) {
  const pivotIndex = right // 基准值的索引
  let partitionIndex = left // 划分点的索引

  for (let i = left; i < right; i++) {
    // 小于基准值时
    if (array[i] < array[pivotIndex]) {
      swap(array, i, partitionIndex) // 将当前元素和划分点的元素交换，同时划分点的索引右移 1 位
      partitionIndex++ // 划分点的索引右移 1 位
    }
  }
  swap(array, pivotIndex, partitionIndex) // 将基准值交换到划分点
  return partitionIndex
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
