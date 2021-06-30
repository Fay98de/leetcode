function rotate(nums: number[], k: number): void {
  const l = nums.length
  k = k % l
  let count = 0

  for (let start = 0; count < l; start++) {
    let i = start
    let temp1 = nums[i]
    let temp2
    do {
      const j = (i + k) % l
      temp2 = nums[j]
      nums[j] = temp1
      temp1 = temp2
      i = j
      count++
    } while (i !== start)
  }
}

export default rotate
