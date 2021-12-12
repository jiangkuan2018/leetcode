const { TreeNode } = require('../1.js')

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.left.left = new TreeNode(8)
tree.left.left.right = new TreeNode(9)
tree.left.right = new TreeNode(5)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(7)


module.exports = {
  tree
}