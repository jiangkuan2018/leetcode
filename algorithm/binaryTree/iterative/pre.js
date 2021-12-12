const { TreeNode } = require('../1.js')
const { tree } = require('./tree')

/**
 * 非递归迭代二叉树
 * @param {TreeNode} root 
 */
function preOrderItertion(root) {
  const stack = [] // 使用栈暂存二叉树节点
  stack.push(root) // 首先在栈底部存放根节点

  while(stack.length) { // 循环访问栈顶的元素
    const target = stack.pop() // 取出元素
    console.log(target.val)
    if (target.right) { // 先放置右子节点
      stack.push(target.right)
    }
    if (target.left) { 
      /**
       * 再放置左子节点 当下次循环开始 left在栈顶 pop会取到left的值 
       * 判断条件先放right 再放left
       * 一直优先将left节点放置在栈顶
       * 如果left截止 为空了
       * 再读取stack内的right节点
       * 当栈的长度为1时说明左子树的节点已经访问完毕
       * stack的最后一位是右子树的开始节点
       * */ 
      stack.push(target.left)
    }
  }
}

preOrderItertion(tree)
console.log('------------------------------------')
/**
 * 
 * @param {TreeNode} root 
 */
function recursive(root) {
  if (root === null) {
    return
  }
  console.log(root.val)
  recursive(root.left)
  recursive(root.right)
}
recursive(tree)
