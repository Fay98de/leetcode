import TreeNode from '../utils/TreeNode'

function getHeight(node: TreeNode | null): number {
  if (node === null) return 0
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

export default isBalanced
