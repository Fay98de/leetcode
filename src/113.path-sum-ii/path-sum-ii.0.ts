import TreeNode from '../utils/TreeNode'

function getPath(
  node: TreeNode | null,
  targetSum: number,
  result: number[][],
  path: number[] = []
) {
  if (node === null) return
  path.push(node.val)
  if (node.left === null && node.right === null && node.val === targetSum) {
    result.push(path)
    return
  }
  getPath(node.left, targetSum - node.val, result, path.slice())
  getPath(node.right, targetSum - node.val, result, path.slice())
  return result
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = []
  getPath(root, targetSum, result)
  return result
}

export default pathSum
