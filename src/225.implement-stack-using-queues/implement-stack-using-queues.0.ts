class MyStack {
  private queues: Record<number, number[]> = {
    0: [],
    1: [],
  }

  i = 0 // 主队列

  constructor() {}

  push(x: number): void {
    const { i } = this
    const ii = Number(!i) // 辅队列
    this.queues[ii].push(x)
    let n = this.queues[i].shift()
    while (n) {
      this.queues[ii].push(n)
      n = this.queues[i].shift()
    }
    this.i = ii
  }

  pop(): number | undefined {
    const { i } = this
    return this.queues[i].shift()
  }

  top(): number | undefined {
    const { i } = this
    return this.queues[i][0]
  }

  empty(): boolean {
    const { i } = this
    return this.queues[i].length === 0
  }
}

export default MyStack
