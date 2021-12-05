const { TreeNode } = require('./1.js')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// const root = new TreeNode(1)
// root.right = new TreeNode(2)
// root.right.left = new TreeNode(3)

const root = new TreeNode(1)
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5))
root.right = new TreeNode(3, new TreeNode(6), new TreeNode(7))
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, res = []) {
  if (root) {
    inorderTraversal(root.left, res)
    res.push(root.val)
    inorderTraversal(root.right, res)
  }
  return res
}

// console.log(inorderTraversal(root))

function traverse(root) {
  const stack = []
  while (root !== null || stack.length) {
    while (root !== null) { // 将当前节点的所有左子节点全部放入栈中
      stack.push(root)
      root = root.left
    }
    if (stack.length) {
      root = stack.pop()
      console.log(root.val)
      root = root.right
    }
  }
}
console.log(traverse(root))