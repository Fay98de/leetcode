import TreeNode from '../utils/TreeNode'
import preorderTraversal_0 from './binary-tree-preorder-traversal.0'
import preorderTraversal_1 from './binary-tree-preorder-traversal.1'

const { fromArray } = TreeNode

const Functions = [preorderTraversal_0, preorderTraversal_1]

Functions.forEach((preorderTraversal, index) => {
  describe(`[144. 二叉树的前序遍历](binary-tree-preorder-traversal) - ${index}`, () => {
    test(`[1, null, 2, 3] => [1, 2, 3]`, () => {
      const node = fromArray([1, null, 2, 3])
      const received = preorderTraversal(node)
      expect(received).toEqual([1, 2, 3])
    })

    test(`[] => []`, () => {
      const node = fromArray([])
      const received = preorderTraversal(node)
      expect(received).toEqual([])
    })

    test(`[1] => [1]`, () => {
      const node = fromArray([1])
      const received = preorderTraversal(node)
      expect(received).toEqual([1])
    })

    test(`[1, 2] => [1, 2]`, () => {
      const node = fromArray([1, 2])
      const received = preorderTraversal(node)
      expect(received).toEqual([1, 2])
    })

    test(`[1, null, 2] => [1, 2]`, () => {
      const node = fromArray([1, null, 2])
      const received = preorderTraversal(node)
      expect(received).toEqual([1, 2])
    })
  })
})
