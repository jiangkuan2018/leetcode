class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
}

module.exports = {
  TreeNode
}

const binaryTree = new BinaryTree()

function traverse(root) {
  // 前序遍历
  traverse(root.left)
  // 中序遍历
  traverse(root.right)
  // 后序遍历
}