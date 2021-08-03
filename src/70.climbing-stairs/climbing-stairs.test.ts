import climbStairs_0 from './climbing-stairs.0'

const Functions = [climbStairs_0]

Functions.forEach((climbStairs, index) => {
  describe(`[70. 爬楼梯](climbing-stairs) - ${index}`, () => {
    test(`2 => 2`, () => {
      const received = climbStairs(2)
      expect(received).toBe(2)
    })

    test(`3 => 3`, () => {
      const received = climbStairs(3)
      expect(received).toBe(3)
    })

    test(`4 => 5`, () => {
      const received = climbStairs(3)
      expect(received).toBe(3)
    })
  })
})
