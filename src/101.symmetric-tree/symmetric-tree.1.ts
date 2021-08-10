import TreeNode from '../data-structure/tree-node'

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  let i = 0
  let nodes: (TreeNode | null)[][] = [[root]]

  while (nodes[i].length > 0) {
    nodes[i + 1] = []
    const right = nodes[i].length - 1
    for (let j = 0; j <= right; j++) {
      if (nodes[i][j]?.val !== nodes[i][right - j]?.val) return false
      if (nodes[i][j]) {
        nodes[i + 1].push(nodes[i][j]!.left)
        nodes[i + 1].push(nodes[i][j]!.right)
      }
    }
    i++
  }
  return true
}

export default isSymmetric
