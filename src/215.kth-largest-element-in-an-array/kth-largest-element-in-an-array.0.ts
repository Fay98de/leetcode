function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
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
function partition(array: number[], left: number, right: number) {
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
 * 查找第 K 个最小元素
 * @param {number[]} nums
 * @param {number} left 数组左侧索引
 * @param {number} right 数组右侧索引
 * @param {number} kth 第 K 个元素索引
 * @returns {number}
 */
function findKthIndex(nums: number[], left: number, right: number, kth: number): number {
  const partitionIndex = partition(nums, left, right) // 对数组进行分区，获取划分点的索引值

  if (kth === partitionIndex) {
    // 如果划分点等于 kth，那么划分点正好是第 K 个最小元素
    return partitionIndex
  } else if (kth > partitionIndex) {
    // 如果划分点的索引值小于 kth，继续对划分点右侧进行分区
    return findKthIndex(nums, partitionIndex + 1, right, kth)
  } else {
    // 如果划分点的索引值大于 kth，继续对划分点左侧进行分区
    return findKthIndex(nums, left, partitionIndex - 1, kth)
  }
}

/**
 * 查找第 K 个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function findKthLargest(nums: number[], k: number): number {
  const l = nums.length
  const kth = l - k
  const index = findKthIndex(nums, 0, l - 1, kth) // 转换成查找第 l - k 最小元素
  return nums[index]
}

export default findKthLargest
