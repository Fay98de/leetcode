import TreeNode from '../data-structure/tree-node'
import inorderTraversal_0 from './binary-tree-inorder-traversal.0'
import inorderTraversal_1 from './binary-tree-inorder-traversal.1'

const { fromArray } = TreeNode

const Functions = [inorderTraversal_0, inorderTraversal_1]

Functions.forEach((inorderTraversal, index) => {
  describe(`[94. 二叉树的中序遍历](binary-tree-inorder-traversal) - ${index}`, () => {
    test(`[1, null, 2, 3] => [1, 3, 2]`, () => {
      const node = fromArray([1, null, 2, 3])
      const received = inorderTraversal(node)
      expect(received).toEqual([1, 3, 2])
    })

    test(`[] => []`, () => {
      const node = fromArray([])
      const received = inorderTraversal(node)
      expect(received).toEqual([])
    })

    test(`[1] => [1]`, () => {
      const node = fromArray([1])
      const received = inorderTraversal(node)
      expect(received).toEqual([1])
    })

    test(`[1, 2] => [2, 1]`, () => {
      const node = fromArray([1, 2])
      const received = inorderTraversal(node)
      expect(received).toEqual([2, 1])
    })

    test(`[1, null, 2] => [1, 2]`, () => {
      const node = fromArray([1, null, 2])
      const received = inorderTraversal(node)
      expect(received).toEqual([1, 2])
    })

    test(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]`, () => {
      const node = fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
      const received = inorderTraversal(node)
      expect(received).toEqual([8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15])
    })
  })
})
