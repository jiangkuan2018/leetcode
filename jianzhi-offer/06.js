const { MyLinkedList } = require("./linked");
const myLinkedList = new MyLinkedList();
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtTail(3);

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

function reversePrint(head) {
  var newhead = null;
  var p = null;
  while (head) {
    p = head.next;
    head.next = newhead;
    newhead = head;
    head = p;
  }
  return newhead;
}

console.log(reversePrint(myLinkedList.head));
