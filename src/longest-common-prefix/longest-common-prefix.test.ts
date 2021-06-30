import longestCommonPrefix_0 from './longest-common-prefix.0'

const longestCommonPrefixList = [longestCommonPrefix_0]

longestCommonPrefixList.forEach((longestCommonPrefix, index) => {
  describe(`[最长公共前缀](longest-common-prefix) - ${index}`, () => {
    test("['flower', 'flow', 'flight'] => 'fl'", () => {
      const received = longestCommonPrefix(['flower', 'flow', 'flight'])
      expect(received).toBe('fl')
    })

    test("['dog', 'racecar', 'car'] => ''", () => {
      const received = longestCommonPrefix(['dog', 'racecar', 'car'])
      expect(received).toBe('')
    })

    test("[] => ''", () => {
      const received = longestCommonPrefix([])
      expect(received).toBe('')
    })

    test("['abc'] => ''", () => {
      const received = longestCommonPrefix(['abc'])
      expect(received).toBe('abc')
    })
  })
})
