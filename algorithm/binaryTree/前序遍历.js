const { TreeNode } = require('./1.js')

// const root = new TreeNode(3)
// root.right = new TreeNode(1, new TreeNode(2))

// const root = new TreeNode(1)
// root.left = new TreeNode(2, new TreeNode(3))
// root.right = new TreeNode(4, new TreeNode(5))

const root = new TreeNode(1)
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5))
root.right = new TreeNode(3, new TreeNode(6), new TreeNode(7))

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root, res = []) {
  if (root !== null) {
    res.push(root.val)
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
  }
  return res
}

console.log(preorderTraversal(root))


function traverse(root) {
  let res = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
}
console.log(traverse(root))