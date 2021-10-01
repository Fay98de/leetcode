import minDistance_0 from './edit-distance.0'

const Functions = [minDistance_0]

Functions.forEach((minDistance, index) => {
  describe(`[72. 编辑距离](climbing-stairs) - ${index}`, () => {
    test(`'horse', 'ros' => 3`, () => {
      const received = minDistance('horse', 'ros')
      expect(received).toBe(3)
    })

    test(`'intention', 'execution' => 5`, () => {
      const received = minDistance('intention', 'execution')
      expect(received).toBe(5)
    })
  })
})
