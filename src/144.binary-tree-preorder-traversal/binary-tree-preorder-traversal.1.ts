/*
 * 栈
 */

import TreeNode from '../data-structure/tree-node'

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  if (root === null) return result
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.pop()!
    result.push(node.val)
    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }
  return result
}

export default preorderTraversal
