import TreeNode from '../data-structure/tree-node'

function hasSum(node: TreeNode | null, targetSum: number): boolean {
  if (node === null) return false
  if (node.left === null && node.right === null) {
    return node.val === targetSum
  }
  return hasSum(node.left, targetSum - node.val) || hasSum(node.right, targetSum - node.val)
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return hasSum(root, targetSum)
}

export default hasPathSum
