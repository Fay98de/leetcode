function removeElement(nums: number[], val: number): number {
  const l = nums.length
  let j = 0 // j 为过滤后的数组长度

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }

  return j
}

export default removeElement
