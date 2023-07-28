const { TreeNode } = require('../algorithm/binaryTree/index.js')
const newTree = new TreeNode(3)
newTree.left = new TreeNode(9)
newTree.right = new TreeNode(20)
newTree.right.left = new TreeNode(15)
newTree.right.right = new TreeNode(7)
/**
 * 
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

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
  [9,20],
  [15,7]
]
 

提示：

节点总数 <= 1000
 * 
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
  let queue = []
  queue.push([root])
  while (queue.length) {
    const layer = queue.shift()
    const tem = []
    layer.forEach(node => {
      if (node.left) {
        tem.push(node.left)
      }
      if (node.right) {
        tem.push(node.right)
      }
    })
    res.push(layer.map(item => item.val))
    if (tem.length) {
      queue.push(tem)
    }
  }
  console.log(res)
  return res
}

// levelOrder(tree)
levelOrder(newTree)