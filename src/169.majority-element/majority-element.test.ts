import majorityElement_0 from './majority-element.0'

const Functions = [majorityElement_0]

Functions.forEach((majorityElement, index) => {
  describe(`[169. 多数元素](majority-element) - ${index}`, () => {
    test(`[3, 2, 3] => 3`, () => {
      const received = majorityElement([3, 2, 3])
      expect(received).toBe(3)
    })

    test(`[2, 2, 1, 1, 1, 2, 2] => 2`, () => {
      const received = majorityElement([2, 2, 1, 1, 1, 2, 2])
      expect(received).toBe(2)
    })
  })
})
