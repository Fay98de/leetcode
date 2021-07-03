/**
 * 可以不考虑删除后剩余元素的顺序
 */
function removeElement(nums: number[], val: number): number {
  const l = nums.length
  let i = 0
  let j = l

  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j - 1]
      j--
    } else {
      i++
    }
  }

  return i
}

export default removeElement
