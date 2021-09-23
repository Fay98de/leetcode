// 二分法

class Solution {
  private w: number[] = []
  private total: number = 0

  constructor(w: number[]) {
    const l = w.length
    let total = 0
    for (let i = 0; i < l; i++) {
      total += w[i]
      this.w[i] = total
    }
    this.total = total
  }

  pickIndex(): number {
    const { w } = this
    const x = Math.round(Math.random() * this.total)
    let l = 0
    let r = w.length - 1
    while (l < r) {
      const mid = Math.floor((r + l) / 2)
      if (w[mid] < x) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }
}

export default Solution
