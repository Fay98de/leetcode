import sort_0 from './sort.0'
import sort_1 from './sort.1'
import sort_2 from './sort.2'
import sort_3 from './sort.3'
import sort_4 from './sort.4'

const Functions = [sort_0, sort_1, sort_2, sort_3, sort_4]

Functions.forEach((sort, index) => {
  describe(`[排序](sort) - ${index}`, () => {
    test(`[5, 9, 3, 1, 2, 8, 4, 7, 6]`, () => {
      const list = [5, 9, 3, 1, 2, 8, 4, 7, 6]
      sort(list)
      expect(list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    test(`[]`, () => {
      const list: number[] = []
      sort(list)
      expect(list).toEqual([])
    })

    test(`[1]`, () => {
      const list = [1]
      sort(list)
      expect(list).toEqual([1])
    })

    test(`[2, 1]`, () => {
      const list = [2, 1]
      sort(list)
      expect(list).toEqual([1, 2])
    })
  })
})
