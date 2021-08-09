import TreeNode from '../utils/TreeNode'

function getHeight(node: TreeNode | null): number {
  if (node === null) return 0
  const leftHeight = getHeight(node.left)
  const rightHeight = getHeight(node.right)
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1
  } else {
    return Math.max(leftHeight, rightHeight) + 1
  }
}

function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) >= 0
}

export default isBalanced
