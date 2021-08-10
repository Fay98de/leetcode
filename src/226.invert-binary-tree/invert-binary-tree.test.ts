import TreeNode from '../data-structure/tree-node'
import invertTree_0 from './invert-binary-tree.0'

const { fromArray, toArray } = TreeNode

const Collections = [invertTree_0]

Collections.forEach((invertTree, index) => {
  describe(`[226. 翻转二叉树](invert-binary-tree) - ${index}`, () => {
    test(`[4, 2, 7, 1, 3, 6, 9] => [4, 7, 2, 9, 6, 3, 1]`, () => {
      const node = fromArray([4, 2, 7, 1, 3, 6, 9])
      const received = toArray(invertTree(node))
      expect(received).toEqual([4, 7, 2, 9, 6, 3, 1])
    })
  })
})
