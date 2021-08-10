import TreeNode from '../data-structure/tree-node'

function merge(nodeA: TreeNode | null, nodeB: TreeNode | null): TreeNode | null {
  if (nodeA === null && nodeB === null) return null
  const node = new TreeNode((nodeA?.val || 0) + (nodeB?.val || 0))
  node.left = merge(nodeA?.left || null, nodeB?.left || null)
  node.right = merge(nodeA?.right || null, nodeB?.right || null)
  return node
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  return merge(root1, root2)
}

export default mergeTrees
