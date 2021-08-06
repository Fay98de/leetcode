import TreeNode from '../utils/TreeNode'
import isSymmetric_0 from './symmetric-tree.0'
import isSymmetric_1 from './symmetric-tree.1'

const { fromArray } = TreeNode

const Collections = [isSymmetric_0, isSymmetric_1]

Collections.forEach((isSymmetric, index) => {
  describe(`[101. 对称二叉树](symmetric-tree) - ${index}`, () => {
    test(`[1, 2, 2, 3, 4, 4, 3] => true`, () => {
      const node = fromArray([1, 2, 2, 3, 4, 4, 3])
      const received = isSymmetric(node)
      expect(received).toBe(true)
    })

    test(`[1, 2, 2, null, 3, null, 3] => true`, () => {
      const node = fromArray([1, 2, 2, null, 3, null, 3])
      const received = isSymmetric(node)
      expect(received).toBe(false)
    })

    test(`[3, 4, 4, 5, null, null, 5, 6, null, null, 6] => true`, () => {
      const node = fromArray([3, 4, 4, 5, null, null, 5, 6, null, null, 6])
      const received = isSymmetric(node)
      expect(received).toBe(true)
    })

    test(`1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5] => true`, () => {
      const node = fromArray([1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5])
      const received = isSymmetric(node)
      expect(received).toBe(true)
    })

    test(`[1, 2, 2, 3, 4, 4, 3, 5, null, 7, 8, 8, null, 6, 5] => true`, () => {
      const node = fromArray([1, 2, 2, 3, 4, 4, 3, 5, null, 7, 8, 8, null, 6, 5])
      const received = isSymmetric(node)
      expect(received).toBe(false)
    })
  })
})
