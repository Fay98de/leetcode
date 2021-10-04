import TreeNode from '../data-structure/tree-node'

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const result: number[][] = []
  const nodes: TreeNode[] = [root]

  while (nodes.length > 0) {
    const values: number[] = []
    const levelSize = nodes.length
    for (let i = 0; i < levelSize; i++) {
      const node = nodes.shift()!
      values.push(node.val)
      if (node.left) nodes.push(node.left)
      if (node.right) nodes.push(node.right)
    }
    result.push(values)
  }

  return result
}

export default levelOrder
