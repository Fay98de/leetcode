// function reverse(arr: number[], start: number, end: number) {
//   const l = Math.floor((start + end) / 2)
//   for (let i = start; i <= l; i++) {
//     const j = start + end - i
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
// }

function reverse(arr: number[], start: number, end: number) {
  while (start < end) {
    const temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

function rotate(nums: number[], k: number): void {
  const l = nums.length
  k = k % l
  reverse(nums, 0, l - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, l - 1)
}

export default rotate
