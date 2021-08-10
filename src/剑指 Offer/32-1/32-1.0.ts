import TreeNode from '../../data-structure/tree-node'

type MixedList = (TreeNode | number)[]

function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return []
  const result: MixedList = [root]

  for (let i = 0; i < result.length; i++) {
    const node = result[i] as TreeNode
    if (node.left !== null) {
      result.push(node.left)
    }
    if (node.right !== null) {
      result.push(node.right)
    }
    result[i] = node.val
  }

  return result as number[]
}

export default levelOrder
