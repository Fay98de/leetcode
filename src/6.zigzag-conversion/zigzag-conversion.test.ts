import convert_0 from './zigzag-conversion.0'
import convert_1 from './zigzag-conversion.1'

const convertList = [convert_0, convert_1]

convertList.forEach((convert, index) => {
  describe(`[6. Z 字形变换](zigzag-conversion) - ${index}`, () => {
    test(`PAYPALISHIRING, 3 => PAHNAPLSIIGYIR`, () => {
      const received = convert('PAYPALISHIRING', 3)
      expect(received).toBe('PAHNAPLSIIGYIR')
    })

    test(`PAYPALISHIRING, 4 => PINALSIGYAHRPI`, () => {
      const received = convert('PAYPALISHIRING', 4)
      expect(received).toBe('PINALSIGYAHRPI')
    })

    test(`A, 1 => A`, () => {
      const received = convert('A', 1)
      expect(received).toBe('A')
    })

    test(`AB, 1 => AB`, () => {
      const received = convert('AB', 1)
      expect(received).toBe('AB')
    })

    test(`ABCDE, 5 => ABCDE`, () => {
      const received = convert('ABCDE', 5)
      expect(received).toBe('ABCDE')
    })
  })
})
