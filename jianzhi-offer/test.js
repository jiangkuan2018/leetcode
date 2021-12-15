const { tree, TreeNode } = require('../algorithm/binaryTree/tree.js')
const newTree = new TreeNode(3)
newTree.left = new TreeNode(9)
newTree.right = new TreeNode(20)
newTree.right.left = new TreeNode(15)
newTree.right.right = new TreeNode(7)


/**
 * 
  例如:
  给定二叉树: [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：

  [
    [3],
    [20,9],
    [15,7]
  ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  const res = []
  const queue = [[root]]
  while (queue.length) {
    const nodes = queue.shift()
    const tem1 = []
    const tem2 = []
    nodes.forEach((node) => {
      tem1.push(node.val)
      if (node.right) {
        tem2.push(node.right)
      }
      if (node.left) {
        tem2.push(node.left)
      }
    })
    if (tem1.length) {
      res.push(tem1)
    }
    if (tem2.length) {
      if (res.length % 2 === 0) {
        tem2.reverse()
      }
      queue.push(tem2)
    }
  }
  return res
}

// console.log(levelOrder(newTree))
console.log(levelOrder(tree))