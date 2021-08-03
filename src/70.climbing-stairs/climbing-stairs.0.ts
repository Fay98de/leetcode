function climbStairs(n: number): number {
  let p = 0
  let q = 0
  let r = 1

  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = p + q
  }

  return r
}

export default climbStairs
