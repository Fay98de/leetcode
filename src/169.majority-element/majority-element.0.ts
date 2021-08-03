function majorityElement(nums: number[]): number {
  const l = nums.length
  const map: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] || 0
    map[nums[i]]++
  }

  let majority = nums[0]
  let keys = Object.keys(map)
  for (let key of keys) {
    if (map[+key] > map[majority]) {
      majority = +key
    }
  }

  return majority
}

export default majorityElement
