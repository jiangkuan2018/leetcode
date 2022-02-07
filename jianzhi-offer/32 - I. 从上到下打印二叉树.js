const { TreeNode, createTreeFromArray } = require('../algorithm/binaryTree/index.js')
const tree = createTreeFromArray([1,2,3,4,5,6,7])
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const target = queue.shift()
    if (target.left) {
      queue.push(target.left)
    }
    if (target.right) {
      queue.push(target.right) 
    }
    res.push(target.val)
  }
  // console.log(res)
  return res
}

levelOrder(tree)
// levelOrder()