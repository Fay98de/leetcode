import TreeNode from '../data-structure/tree-node'
import mergeTrees_0 from './merge-two-binary-trees.0'

const { fromArray, toArray } = TreeNode

const Collections = [mergeTrees_0]

Collections.forEach((mergeTrees, index) => {
  describe(`[617. 合并二叉树](merge-two-binary-trees) - ${index}`, () => {
    test(`[1, 3, 2, 5], [2, 1, 3, null, 4, null, 7] => [3, 4, 5, 5, 4, null, 7]`, () => {
      const nodeA = fromArray([1, 3, 2, 5])
      const nodeB = fromArray([2, 1, 3, null, 4, null, 7])
      const received = toArray(mergeTrees(nodeA, nodeB))
      expect(received).toEqual([3, 4, 5, 5, 4, null, 7])
    })
  })
})
