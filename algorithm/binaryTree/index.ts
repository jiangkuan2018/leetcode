
type TreeNodeType = TreeNode | null
export type TreeNodeVal = number | string

export class TreeNode {
  val: TreeNodeVal
  left: TreeNodeType
  right: TreeNodeType
  constructor(val: TreeNodeVal, left?: TreeNodeType, right?: TreeNodeType) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

export function createTreeFromArray(arr: TreeNodeVal[]): TreeNode {
  const val = arr.shift() as TreeNodeVal
  const root = new TreeNode(val)
  const queue = [root]
  while (queue.length && arr.length) {
    const node = queue.shift()
    const leftVal = arr.shift()  as TreeNodeVal
    const rightVal = arr.shift()  as TreeNodeVal
    if (node) {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }
  }
  return root
}