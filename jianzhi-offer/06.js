const { MyLinkedList } = require("./linked");
const myLinkedList = new MyLinkedList();
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtTail(3);

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

 function reversePrint(headNode) {
  const res = []
  if (headNode) {
    while (true) {
      res.unshift(headNode.val)
      if (headNode.next === null) {
        break  
      } else {
        headNode = headNode.next
      }
    }
  }
  return res
}
console.log(reversePrint(myLinkedList.head))