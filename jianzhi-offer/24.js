/**
 * 剑指 Offer 24. 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

const { MyLinkedList } = require('../algorithm/linked/index.js')

const myLinkedList = new MyLinkedList()
myLinkedList.addAtTail(1)
myLinkedList.addAtTail(2)
myLinkedList.addAtTail(3)
myLinkedList.addAtTail(4)
myLinkedList.addAtTail(5)

/**
 * @param {Object} head
 * @return {Object}
 */
function reverseList(head) {
  if (!head) {
    return null
  }
  let stack = []
  let node = head
  let newHead = null
  while (node !== null) {
    stack.unshift(node)
    node = node.next
  }
  while (stack.length) {
    const node = stack.shift()
    const next = stack[0]
    node.next = next || null
    if (newHead === null) {
      newHead = node
    }
  }
  return newHead
}

reverseList(myLinkedList.head)