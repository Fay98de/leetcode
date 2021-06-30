/**
 * 进阶
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 双指针法
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const result: number[] = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
      continue
    }
    if (nums1[i] > nums2[j]) {
      j++
      continue
    }
    result.push(nums1[i])
    i++
    j++
  }

  return result
}

export default intersect
