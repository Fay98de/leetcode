/**
 * 递归
 */

import TreeNode from '../utils/TreeNode'

function preOrder(node: TreeNode | null, result: number[]) {
  if (node === null) return
  result.push(node.val)
  preOrder(node.left, result)
  preOrder(node.right, result)
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  preOrder(root, result)
  return result
}

export default preorderTraversal
