const { TreeNode } = require('../1.js')
const { tree } = require('./tree')

/**
 * 
 * @param {TreeNode} root 
 */
function postOrder(root) {
  const stack = []
  let visitedNode = root
  let currentNode = root
  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    }
    currentNode = stack[stack.length - 1] // 拿到栈顶元素
    if (currentNode.right && currentNode.right !== visitedNode) {
      /**
       * 栈顶元素的有没有右子节点
       * 如果有 右子节点有没有被访问过 如果没有
       * 右子节点变成CurrenNode
       * 
       * 如果没有被访问过 放进入栈等下下次循环访问
       */
      currentNode = currentNode.right
    } else {
      /**
       * 如果没有右子节点 或者 右子节点已经被访问过
       */
      console.log(currentNode.val)
      visitedNode = currentNode
      currentNode = null
      stack.pop()
    }
    /**
     * 如果已经访问过右子节点
     * 才可以访问父节点
     */
  }
}

postOrder(tree)