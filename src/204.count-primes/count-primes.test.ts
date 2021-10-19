import countPrimes_0 from './count-primes.0'
import countPrimes_1 from './count-primes.1'
import countPrimes_2 from './count-primes.2'

const arr = [countPrimes_0, countPrimes_1, countPrimes_2]

arr.forEach((countPrimes, index) => {
  describe(`[204. 计数质数](count-primes) - ${index}`, () => {
    test(`0 => 0`, () => {
      const received = countPrimes(0)
      expect(received).toBe(0)
    })

    test(`1 => 0`, () => {
      const received = countPrimes(1)
      expect(received).toBe(0)
    })

    test(`2 => 0`, () => {
      const received = countPrimes(2)
      expect(received).toBe(0)
    })

    test(`3 => 1`, () => {
      const received = countPrimes(3)
      expect(received).toBe(1)
    })

    test(`6 => 3`, () => {
      const received = countPrimes(6)
      expect(received).toBe(3)
    })

    test(`10 => 4`, () => {
      const received = countPrimes(10)
      expect(received).toBe(4)
    })

    test(`10000 => 1229`, () => {
      const received = countPrimes(10000)
      expect(received).toBe(1229)
    })
  })
})
