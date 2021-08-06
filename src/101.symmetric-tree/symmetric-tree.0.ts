import TreeNode from '../utils/TreeNode'

function recursivelyCheck(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
  if (nodeA === null && nodeB === null) return true
  // if (nodeA === null || nodeB === null) return false
  if (nodeA?.val !== nodeB?.val) return false
  return recursivelyCheck(nodeA!.left, nodeB!.right) && recursivelyCheck(nodeB!.left, nodeA!.right)
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  return recursivelyCheck(root.left, root.right)
}

export default isSymmetric
