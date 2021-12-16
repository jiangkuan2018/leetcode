const { TreeNode, createTreeFromArray, } = require("../algorithm/binaryTree/index.js")

// const tree = createTreeFromArray([1,2,3,4,null,null,5])
const tree = createTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.log(JSON.stringify(tree))
/**
 * 
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
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
 

提示：

节点总数 <= 1000
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const queue = [[root]]
  const res = [[root.val]]
  while (queue.length) {
    const layer = queue.shift()
    const tem = []
    layer.forEach((item) => {
      item.left && tem.push(item.left)
      item.right && tem.push(item.right)
    })
    console.log(tem.map(item => item.val), (res.length + 1) % 2 === 0)
    if (tem.length) {
      queue.push(tem)
      const resTem = tem.map((item) => item.val)
      if ((res.length + 1) % 2 === 0) {
        resTem.reverse()
      }
      res.push(resTem)
    }
  }
  return res
}
console.log(levelOrder(tree))
