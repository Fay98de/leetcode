function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let m = Math.ceil((l + r) / 2)
    if (nums[m] === target) return m
    if (nums[l] < nums[m]) {
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
}

export default search
