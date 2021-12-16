const { createTreeFromArray, TreeNode } = require('../index.js')
const tree = createTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12])

/**
 * 
 * @param {TreeNode} root 
 * @returns {Array<number>}
 */
function levelOrder(root) {
  const queue = []
  const res = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    res.push(node.val)
  }
  return res
}

console.log(levelOrder(tree))