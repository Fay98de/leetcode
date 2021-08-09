import TreeNode from '../utils/TreeNode'

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  if (root === null) return result
  const stack: TreeNode[] = []
  let prev: TreeNode | null = null
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    if (root.right === null || root.right === prev) {
      result.push(root.val)
      prev = root
      root = null
    } else {
      stack.push(root)
      root = root.right
    }
  }
  return result
}

export default postorderTraversal
