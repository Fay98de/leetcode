import calculate_0 from './basic-calculator-ii.0'

const Functions = [calculate_0]

Functions.forEach((calculate, index) => {
  describe(`[227. 基本计算器 II](basic-calculator-ii) - ${index}`, () => {
    test(`'3+2*2' => 7`, () => {
      const received = calculate('3+2*2')
      expect(received).toBe(7)
    })

    test(`' 3/2 ' => 1`, () => {
      const received = calculate(' 3/2 ')
      expect(received).toBe(1)
    })

    test(`' 3+5 / 2 ' => 5`, () => {
      const received = calculate(' 3+5 / 2 ')
      expect(received).toBe(5)
    })

    test(`'30+20*2' => 70`, () => {
      const received = calculate('30+20*2')
      expect(received).toBe(70)
    })

    test(`'14-3/2' => 13`, () => {
      const received = calculate('14-3/2')
      expect(received).toBe(13)
    })
  })
})
