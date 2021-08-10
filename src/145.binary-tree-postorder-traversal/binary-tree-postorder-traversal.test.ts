import TreeNode from '../data-structure/tree-node'
import postorderTraversal_0 from './binary-tree-postorder-traversal.0'
import postorderTraversal_1 from './binary-tree-postorder-traversal.1'

const { fromArray } = TreeNode

const Functions = [postorderTraversal_0, postorderTraversal_1]

Functions.forEach((postorderTraversal, index) => {
  describe(`[145. 二叉树的后序遍历](binary-tree-postorder-traversal) - ${index}`, () => {
    test(`[1, null, 2, 3] => [3, 2, 1]`, () => {
      const node = fromArray([1, null, 2, 3])
      const received = postorderTraversal(node)
      expect(received).toEqual([3, 2, 1])
    })

    test(`[] => []`, () => {
      const node = fromArray([])
      const received = postorderTraversal(node)
      expect(received).toEqual([])
    })

    test(`[1] => [1]`, () => {
      const node = fromArray([1])
      const received = postorderTraversal(node)
      expect(received).toEqual([1])
    })

    test(`[1, 2] => [2, 1]`, () => {
      const node = fromArray([1, 2])
      const received = postorderTraversal(node)
      expect(received).toEqual([2, 1])
    })

    test(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]`, () => {
      const node = fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      const received = postorderTraversal(node)
      expect(received).toEqual([8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1])
    })
  })
})
