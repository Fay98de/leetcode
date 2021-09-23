class Solution {
  private w: number[]
  private total: number = 0

  constructor(w: number[]) {
    const l = w.length
    this.w = w
    for (let i = 0; i < l; i++) {
      this.total += w[i]
    }
  }

  pickIndex(): number {
    const { w } = this
    const rate = Math.random() * this.total
    let sum = 0
    let i = 0
    for (; i < w.length; i++) {
      sum += w[i]
      if (sum > rate) {
        break
      }
    }
    return i
  }
}

export default Solution
