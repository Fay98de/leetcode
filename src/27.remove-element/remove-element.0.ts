function removeElement(nums: number[], val: number): number {
  const l = nums.length
  let count = 0
  let temp: number

  for (let i = 0; i < l; i++) {
    if (nums[i] === val) {
      nums[i] = NaN
      count++
    } else {
      temp = nums[i]
      nums[i] = NaN
      nums[i - count] = temp
    }
  }

  return l - count
}

export default removeElement
