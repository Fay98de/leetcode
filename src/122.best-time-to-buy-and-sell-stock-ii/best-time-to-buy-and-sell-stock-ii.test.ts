import maxProfit_0 from './best-time-to-buy-and-sell-stock-ii.0'
import maxProfit_1 from './best-time-to-buy-and-sell-stock-ii.1'

const maxProfitList = [maxProfit_0, maxProfit_1]

maxProfitList.forEach((maxProfit, index) => {
  describe(`[122.买卖股票的最佳时机 II](best-time-to-buy-and-sell-stock-ii) - ${index}`, () => {
    test(`[7, 1, 5, 3, 6, 4] => 7`, () => {
      const received = maxProfit([7, 1, 5, 3, 6, 4])
      expect(received).toBe(7)
    })

    test(`[1, 2, 3, 4, 5] => 4`, () => {
      const received = maxProfit([1, 2, 3, 4, 5])
      expect(received).toBe(4)
    })

    test(`[7, 6, 4, 3, 1] => 0`, () => {
      const received = maxProfit([7, 6, 4, 3, 1])
      expect(received).toBe(0)
    })

    test(`[2, 4, 1] => 2`, () => {
      const received = maxProfit([2, 4, 1])
      expect(received).toBe(2)
    })
  })
})
