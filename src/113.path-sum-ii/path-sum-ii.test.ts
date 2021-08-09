import TreeNode from '../utils/TreeNode'
import pathSum_0 from './path-sum-ii.0'

const { fromArray } = TreeNode

const Collections = [pathSum_0]

Collections.forEach((pathSum, index) => {
  describe(`[113. 路径总和 II](path-sum-ii) - ${index}`, () => {
    test(`[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22 => [[5, 4, 11, 2], [5, 8, 4, 5]]`, () => {
      const node = fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
      const received = pathSum(node, 22)
      expect(received).toEqual([
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ])
    })

    test(`[1, 2, 3], 5 => []`, () => {
      const node = fromArray([1, 2, 3])
      const received = pathSum(node, 5)
      expect(received).toEqual([])
    })

    test(`[1, 2], 0 => []`, () => {
      const node = fromArray([1, 2])
      const received = pathSum(node, 0)
      expect(received).toEqual([])
    })
  })
})
