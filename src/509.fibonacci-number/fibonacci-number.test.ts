import fib_0 from './fibonacci-number.0'
import fib_1 from './fibonacci-number.1'

const arr = [fib_0, fib_1]

arr.forEach((fib, index) => {
  describe(`[509. 斐波那契数](fibonacci-number) - ${index}`, () => {
    test(`fib(0) => 0`, () => {
      const received = fib(0)
      expect(received).toBe(0)
    })

    test(`fib(1) => 1`, () => {
      const received = fib(1)
      expect(received).toBe(1)
    })

    test(`fib(2) => 1`, () => {
      const received = fib(2)
      expect(received).toBe(1)
    })

    test(`fib(3) => 2`, () => {
      const received = fib(3)
      expect(received).toBe(2)
    })

    test(`fib(4) => 3`, () => {
      const received = fib(4)
      expect(received).toBe(3)
    })
  })
})
