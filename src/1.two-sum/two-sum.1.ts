function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - num1
    if (map.has(num2)) {
      return [i, map.get(num2)]
    }
    map.set(num1, i)
  }
  return []
}

export default twoSum
