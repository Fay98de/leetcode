import TreeNode from '../data-structure/tree-node'
import isBalanced_0 from './balanced-binary-tree.0'
import isBalanced_1 from './balanced-binary-tree.1'

const { fromArray } = TreeNode

const Functions = [isBalanced_0, isBalanced_1]

Functions.forEach((isBalanced, index) => {
  describe(`[110. 平衡二叉树](balanced-binary-tree) - ${index}`, () => {
    test(`[3, 9, 20, null, null, 15, 7] => true`, () => {
      const node = fromArray([3, 9, 20, null, null, 15, 7])
      const received = isBalanced(node)
      expect(received).toBe(true)
    })

    test(`[1, 2, 2, 3, 3, null, null, 4, 4] => false`, () => {
      const node = fromArray([1, 2, 2, 3, 3, null, null, 4, 4])
      const received = isBalanced(node)
      expect(received).toBe(false)
    })

    test(`[] => true`, () => {
      const node = fromArray([])
      const received = isBalanced(node)
      expect(received).toBe(true)
    })

    test(`[1, 2, 2, 3, null, null, 3, 4, null, null, 4] => false`, () => {
      const node = fromArray([1, 2, 2, 3, null, null, 3, 4, null, null, 4])
      const received = isBalanced(node)
      expect(received).toBe(false)
    })
  })
})
