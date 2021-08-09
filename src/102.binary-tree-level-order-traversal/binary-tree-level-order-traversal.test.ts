import TreeNode from '../utils/TreeNode'
import levelOrder_0 from './binary-tree-level-order-traversal.0'
import levelOrder_1 from './binary-tree-level-order-traversal.1'

const { fromArray } = TreeNode

const Functions = [levelOrder_0, levelOrder_1]

Functions.forEach((levelOrder, index) => {
  describe(`[102. 二叉树的层序遍历](binary-tree-level-order-traversal) - ${index}`, () => {
    test(`[3, 9, 20, null, null, 15, 7] => [[3], [9, 20], [15, 7]]`, () => {
      const node = fromArray([3, 9, 20, null, null, 15, 7])
      const received = levelOrder(node)
      expect(received).toEqual([[3], [9, 20], [15, 7]])
    })

    test(`[] => []`, () => {
      const node = fromArray([])
      const received = levelOrder(node)
      expect(received).toEqual([])
    })

    test(`[1] => [[1]]`, () => {
      const node = fromArray([1])
      const received = levelOrder(node)
      expect(received).toEqual([[1]])
    })
  })
})
