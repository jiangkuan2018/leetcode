const { createTreeFromArray } = require('../algorithm/binaryTree/index.js')

const root1 = createTreeFromArray([2,1,4])
const root2 = createTreeFromArray([1,0,3])

console.log(JSON.stringify(root1))
console.log(JSON.stringify(root2))

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const list1 = []
  const list2 = []
  const inorder = (root, list) => {
    if (root!==null) {
      inorder(root.left, list)
      list.push(root.val)
      inorder(root.right, list)
    }
  }
  inorder(root1, list1)
  inorder(root2, list2)
  return [...list1, ...list2].sort((a, b) => a - b)
}

const res = getAllElements(root1, root2)
console.log(res)