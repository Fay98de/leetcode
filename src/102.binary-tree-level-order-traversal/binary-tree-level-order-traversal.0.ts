import TreeNode from '../utils/TreeNode'

function traversal(nodes: TreeNode[], result: number[][]) {
  const values = result[result.length - 1]
  const childNodes: TreeNode[] = []
  const childValues: number[] = []
  for (let node of nodes) {
    values.push(node.val)
    if (node.left !== null) {
      childNodes.push(node.left)
    }
    if (node.right !== null) {
      childNodes.push(node.right)
    }
  }
  if (childNodes.length > 0) {
    result.push(childValues)
    traversal(childNodes, result)
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const result: number[][] = [[]]
  traversal([root], result)
  return result
}

export default levelOrder
