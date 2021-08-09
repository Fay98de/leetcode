import TreeNode from '../utils/TreeNode'

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: TreeNode[] = []
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    result.push(root.val)
    root = root.right
  }
  return result
}

export default inorderTraversal
