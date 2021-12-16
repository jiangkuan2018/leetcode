const { createTreeFromArray, TreeNode } = require('../index.js')
const tree = createTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12])
/**
 * 
 * @param {TreeNode} root 
 */
function middleOrder(root) {
  const stack = []
  let currentNode = root
  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode) // 循环收集currentNode入栈
      currentNode = currentNode.left // left most
      /**
       * 一直收集左子节点到结束 pop会取到最后一个左子节点
       * 访问这个节点 然后修改currentNode为被访问节点的右子节点
       * 如果right有值 下次循环会继续收集左子节点 直到为空
       */
    }
    const node = stack.pop() // 取栈顶的节点访问
    console.log(node.val)
    currentNode = node.right // 修改currentNode为访问节点的右子节点
  }
}

middleOrder(tree)

console.log('----------------------------')

/**
 * 
 * @param {TreeNode} tree 
 */
function recursive(tree) {
  if (tree === null) return
  recursive(tree.left)
  console.log(tree.val)
  recursive(tree.right)
}
recursive(tree)