/**
 * 基础题解
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, number> = {}
  const result: number[] = []
  for (const n of nums1) {
    map[n] = (map[n] || 0) + 1
  }
  for (const n of nums2) {
    if (map[n] > 0) {
      result.push(n)
      map[n]--
    }
  }
  return result
}

export default intersect
