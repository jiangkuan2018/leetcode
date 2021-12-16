class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * 根据数组生成二叉树
 * @param {Array<number | null>} arr 
 * @returns {TreeNode}
 */
 function createTreeFromArray(arr) {
  const root = new TreeNode(arr.shift())
  const queue = [root]
  while (queue.length && arr.length) {
    const node = queue.shift()
    const leftVal = arr.shift()
    const rightVal = arr.shift()
    if (leftVal) {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
    }
    if (rightVal) {
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }
  }
  return root
}

module.exports = {
  TreeNode,
  createTreeFromArray
}