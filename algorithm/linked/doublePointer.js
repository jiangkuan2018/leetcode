const { LinkNode, MyLinkedList, createLinkedFromArray } = require('./index.js')

// const l = createLinkedFromArray([1,2,3,4,5,6])
const l = new MyLinkedList()
l.addAtTail(1)
l.addAtTail(2)
const node3 = l.addAtTail(3)
l.addAtTail(4)
const node5 = l.addAtTail(5)
// node5.next = node3

/**
 * 
 * @param {LinkNode} head 
 */
function doublePointer(head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
console.log(doublePointer(l.head))