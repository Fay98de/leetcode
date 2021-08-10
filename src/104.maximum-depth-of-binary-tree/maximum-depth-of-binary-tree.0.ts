import TreeNode from '../data-structure/tree-node'

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

export default maxDepth
