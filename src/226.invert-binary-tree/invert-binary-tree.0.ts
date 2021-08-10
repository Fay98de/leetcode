import TreeNode from '../data-structure/tree-node'

function invert(node: TreeNode | null) {
  if (node === null) return
  const temp = node.left
  node.left = node.right
  node.right = temp
  invert(node.left)
  invert(node.right)
}

function invertTree(root: TreeNode | null): TreeNode | null {
  invert(root)
  return root
}

export default invertTree
