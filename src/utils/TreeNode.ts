class TreeNode {
  static fromArray = function (arr: Array<number | null>) {
    let l = arr.length
    if (l === 0) return null

    let nodes: TreeNode[] = [new TreeNode(arr[0])]
    let i = 1 // arr 索引
    let j = 0 // nodes 索引
    while (i < l) {
      if (arr[i] === null) {
        nodes[j].left = null
      } else {
        nodes[j].left = new TreeNode(arr[i])
        nodes.push(nodes[j].left!)
      }
      i++
      if (i >= l) break
      if (arr[i] === null) {
        nodes[j].right = null
      } else {
        nodes[j].right = new TreeNode(arr[i])
        nodes.push(nodes[j].right!)
      }
      i++
      j++
    }
    return nodes[0]
  }

  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined || val === null ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default TreeNode
