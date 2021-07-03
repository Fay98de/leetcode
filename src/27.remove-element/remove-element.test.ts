import removeElement_0 from './remove-element.0'
import removeElement_1 from './remove-element.1'
import removeElement_2 from './remove-element.2'

const removeElementList = [removeElement_0, removeElement_1, removeElement_2]

removeElementList.forEach((removeElement, index) => {
  describe(`[27.移除元素](remove-element) - ${index}`, () => {
    test(`[3, 2, 2, 3], 3 => [2, 2], 2`, () => {
      const arr = [3, 2, 2, 3]
      const length = removeElement(arr, 3)
      const slicedArr = arr.slice(0, length)
      expect(slicedArr).toEqual([2, 2])
      expect(length).toBe(2)
    })

    test(`[0, 1, 2, 2, 3, 0, 4, 2], 2 => [0, 1, 4, 0, 3], 5`, () => {
      const arr = [0, 1, 2, 2, 3, 0, 4, 2]
      const length = removeElement(arr, 2)
      const slicedArr = arr.slice(0, length)
      expect(slicedArr).toEqual(expect.arrayContaining([0, 1, 3, 0, 4]))
      expect(length).toBe(5)
    })
  })
})
