import TreeNode from '../utils/TreeNode'

function postOrder(node: TreeNode | null, result: number[]) {
  if (node === null) return
  postOrder(node.left, result)
  postOrder(node.right, result)
  result.push(node.val)
}

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  postOrder(root, result)
  return result
}

export default postorderTraversal
