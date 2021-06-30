function rotate(nums: number[], k: number): void {
  const l = nums.length
  const arr = new Array(l)
  for (let i = 0; i < l; i++) {
    arr[(i + k) % l] = nums[i]
  }
  for (let i = 0; i < l; i++) {
    nums[i] = arr[i]
  }
}

export default rotate
