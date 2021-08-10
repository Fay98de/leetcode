import TreeNode from '../data-structure/tree-node'
import hasPathSum_0 from './path-sum.0'

const { fromArray } = TreeNode

const Collections = [hasPathSum_0]

Collections.forEach((hasPathSum, index) => {
  describe(`[112. 路径总和](path-sum) - ${index}`, () => {
    test(`[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22 => true`, () => {
      const node = fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
      const received = hasPathSum(node, 22)
      expect(received).toBe(true)
    })

    test(`[1, 2, 3], 5 => false`, () => {
      const node = fromArray([1, 2, 3])
      const received = hasPathSum(node, 22)
      expect(received).toBe(false)
    })

    test(`[1, 2], 0 => false`, () => {
      const node = fromArray([1, 2])
      const received = hasPathSum(node, 22)
      expect(received).toBe(false)
    })
  })
})
