const { TreeNode } = require('./tree.js')

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
  console.log(JSON.stringify(root))
  return root
}

createTreeFromArray([3,9,20,null,null,15,7])