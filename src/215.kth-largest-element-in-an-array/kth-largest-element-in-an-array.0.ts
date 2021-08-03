function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function partition(array: number[], left: number, right: number) {
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

function findKthIndex(nums: number[], left: number, right: number, position: number): number {
  const partitionIndex = partition(nums, left, right)
  if (position === partitionIndex) {
    return partitionIndex
  } else if (position > partitionIndex) {
    return findKthIndex(nums, partitionIndex + 1, right, position)
  } else {
    return findKthIndex(nums, left, partitionIndex - 1, position)
  }
}

function findKthLargest(nums: number[], k: number): number {
  const l = nums.length
  const position = l - k
  const index = findKthIndex(nums, 0, l - 1, position)
  return nums[index]
}

export default findKthLargest
