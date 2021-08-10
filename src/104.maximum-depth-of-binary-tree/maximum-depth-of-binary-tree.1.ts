import TreeNode from '../data-structure/tree-node'

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  const queue: TreeNode[] = [root]
  let depth = 0

  while (queue.length > 0) {
    let l = queue.length
    while (l > 0) {
      const node = queue.shift()!
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      l--
    }
    depth++
  }
  return depth
}

export default maxDepth
