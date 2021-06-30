/**
 * 双指针法
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  if (nums.length < 3) return result
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > 0) {
        r--
        continue
      }
      if (sum < 0) {
        l++
        continue
      }
      result.push([nums[i], nums[l], nums[r]])
      while (l < r && nums[l] === nums[++l]) {}
      while (l < r && nums[r] === nums[--r]) {}
    }
  }

  return result
}

export default threeSum
