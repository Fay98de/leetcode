import TreeNode from '../utils/TreeNode'

type MixedList = (TreeNode | number)[]

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const result: MixedList[] = [[root]]
  for (let i = 0; i < result.length; i++) {
    const childNodes: MixedList = []
    for (let j = 0; j < result[i].length; j++) {
      const node = result[i][j]
      if (typeof node === 'number') continue
      if (node.left !== null) {
        childNodes.push(node.left)
      }
      if (node.right !== null) {
        childNodes.push(node.right)
      }
      result[i][j] = node.val
    }
    if (childNodes.length > 0) {
      result.push(childNodes)
    }
  }
  return result as number[][]
}

export default levelOrder
