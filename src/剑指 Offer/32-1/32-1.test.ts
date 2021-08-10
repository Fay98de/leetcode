import TreeNode from '../../data-structure/tree-node'
import levelOrder_0 from './32-1.0'

const { fromArray } = TreeNode

const Collections = [levelOrder_0]

Collections.forEach((levelOrder, index) => {
  describe(`[剑指 Offer 32 - I. 从上到下打印二叉树] - ${index}`, () => {
    test(`[3, 9, 20, null, null, 15, 7] => [3, 9, 20, 15, 7]`, () => {
      const node = fromArray([3, 9, 20, null, null, 15, 7])
      const received = levelOrder(node)
      expect(received).toEqual([3, 9, 20, 15, 7])
    })
  })
})
