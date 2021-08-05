import calculate_0 from './basic-calculator.0'
import calculate_1 from './basic-calculator.1'
import calculate_2 from './basic-calculator.2'
import calculate_3 from './basic-calculator.3'

const Functions = [calculate_0, calculate_1, calculate_2, calculate_3]

Functions.forEach((calculate, index) => {
  describe(`[224. 基本计算器](basic-calculator) - ${index}`, () => {
    test(`'1 + 1' => 2`, () => {
      const received = calculate('1 + 1')
      expect(received).toBe(2)
    })

    test(`' 2-1 + 2 ' => 3`, () => {
      const received = calculate(' 2-1 + 2 ')
      expect(received).toBe(3)
    })

    test(`'(1+(4+5+2)-3)+(6+8)' => 23`, () => {
      const received = calculate('(1+(4+5+2)-3)+(6+8)')
      expect(received).toBe(23)
    })

    test(`'(10-(4+2)+3)-(1+2)' => 4`, () => {
      const received = calculate('(10-(4+2)+3)-(1+2)')
      expect(received).toBe(4)
    })

    test(`'(10-(4-2)+3)-(2-1)' => 10`, () => {
      const received = calculate('(10-(4-2)+3)-(2-1)')
      expect(received).toBe(10)
    })

    test(`'1000-(100-(10-5+3))+(100-(10-5+3))-(100+(10-5+3))' => 892`, () => {
      const received = calculate('1000-(100-(10-5+3))+(100-(10-5+3))-(100+(10-5+3))')
      expect(received).toBe(892)
    })

    test(`'2-(5-6)' => 3`, () => {
      const received = calculate('2-(5-6)')
      expect(received).toBe(3)
    })
  })
})
