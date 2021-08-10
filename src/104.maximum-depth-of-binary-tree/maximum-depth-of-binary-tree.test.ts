import TreeNode from '../data-structure/tree-node'
import levelOrder_0 from './maximum-depth-of-binary-tree.0'
import levelOrder_1 from './maximum-depth-of-binary-tree.1'

const { fromArray } = TreeNode

const Collections = [levelOrder_0, levelOrder_1]

Collections.forEach((levelOrder, index) => {
  describe(`[104. 二叉树的最大深度](maximum-depth-of-binary-tree) - ${index}`, () => {
    test(`[3, 9, 20, null, null, 15, 7] => 3`, () => {
      const node = fromArray([3, 9, 20, null, null, 15, 7])
      const received = levelOrder(node)
      expect(received).toBe(3)
    })
  })
})
