const { MyLinkedList, LinkNode } = require("./index.js")


const linkedList = new MyLinkedList()
linkedList.addAtTail(0)
linkedList.addAtTail(1)
linkedList.addAtTail(2)
linkedList.addAtTail(3)
linkedList.addAtTail(4)
linkedList.addAtTail(5)

/**
 * 
 * @param {LinkNode} head 
 * @param {number} k 
 */
function findBottomNode(head, k) {
  let faster = head
  let slower = head
  let idx = 0
  while (faster) {
    if (idx >= k) {
      slower = slower.next
    }
    idx += 1
    faster = faster.next
  }
  console.log(slower)
  return slower
}

findBottomNode(linkedList.head, 5)