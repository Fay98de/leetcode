import TreeNode from '../utils/TreeNode'

function inOrder(node: TreeNode | null, result: number[]) {
  if (node === null) return
  inOrder(node.left, result)
  result.push(node.val)
  inOrder(node.right, result)
}

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  inOrder(root, result)
  return result
}

export default inorderTraversal
