function twoSum(nums: number[], target: number): number[] {
  const numsMap: Record<number, number[]> = {}
  nums.forEach((n, index) => {
    numsMap[n] = numsMap[n] || []
    numsMap[n].push(index)
  })
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    const b = target - a
    const aIndexList = numsMap[a]
    const bIndexList = numsMap[b]
    if (aIndexList === undefined || bIndexList === undefined) {
      continue
    }
    if (a !== b) {
      return [aIndexList[0], bIndexList[0]]
    }
    if (aIndexList[1] !== undefined) {
      return aIndexList
    }
  }
  return []
}

export default twoSum
