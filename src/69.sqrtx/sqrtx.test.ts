import mySqrt_0 from './sqrtx.0'

const arr = [mySqrt_0]

arr.forEach((mySqrt, index) => {
  describe(`[69. Sqrt(x)](sqrtx)`, () => {
    test(`0 => 0`, () => {
      const received = mySqrt(0)
      expect(received).toBe(0)
    })

    test(`1 => 1`, () => {
      const received = mySqrt(1)
      expect(received).toBe(1)
    })

    test(`4 => 2`, () => {
      const received = mySqrt(4)
      expect(received).toBe(2)
    })

    test(`8 => 2`, () => {
      const received = mySqrt(8)
      expect(received).toBe(2)
    })

    test(`10 => 3`, () => {
      const received = mySqrt(10)
      expect(received).toBe(3)
    })
  })
})
