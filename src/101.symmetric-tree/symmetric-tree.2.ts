import TreeNode from '../data-structure/tree-node'

function check(a: TreeNode | null, b: TreeNode | null): boolean {
  const queue: (TreeNode | null | undefined)[] = []
  queue.push(a)
  queue.push(b)
  while (queue.length > 0) {
    const node1 = queue.shift()
    const node2 = queue.shift()
    if (!node1 && !node2) continue
    if (!node1 || !node2 || node1.val !== node2.val) return false
    queue.push(node1.left)
    queue.push(node2.right)
    queue.push(node1.right)
    queue.push(node2.left)
  }
  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}

export default isSymmetric
