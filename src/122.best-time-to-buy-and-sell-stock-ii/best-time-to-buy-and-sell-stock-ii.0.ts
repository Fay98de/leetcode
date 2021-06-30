/**
 * 买卖股票的最佳时机 II
 */
function maxProfit(prices: number[]): number {
  let result = 0
  let buy: number | undefined = undefined
  let i = 0

  while (prices[i] !== undefined) {
    if (buy === undefined) {
      if (prices[i] < (prices[i + 1] || 0)) {
        buy = prices[i]
      }
    } else {
      if (prices[i] > (prices[i + 1] || 0)) {
        result += prices[i] - buy
        buy = undefined
      }
    }
    i++
  }

  return result
}

export default maxProfit
