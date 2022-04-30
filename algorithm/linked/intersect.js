const { LinkNode, MyLinkedList } = require('./index.js')



const c = new MyLinkedList()
c.addAtTail(999999)
c.addAtTail(2)
c.addAtTail(3)


const a = new MyLinkedList()
a.addAtTail(1)
a.addAtTail(2).next = c.head

const b = new MyLinkedList()
b.addAtTail(1)
b.addAtTail(2)
b.addAtTail(3).next = c.head

// console.log(JSON.stringify(a))
// console.log(JSON.stringify(b))

/**
 * @param {LinkNode} headA 
 * @param {LinkNode} headB 
 */
function getIntersectionNode(headA, headB) {
  let p1 = headA
  let p2 = headB
  let cnt = 0
  while (p1 !== null && p2 !== null) {
    if (p1 === p2) {
      return p1
    }
    p1 = p1.next
    p2 = p2.next
    if (cnt < 2 && p1 === null) {
      p1 = headB
      cnt++
    }
    if (cnt < 2 && p2 === null) {
      p2 = headA
      cnt++
    }
  }
  return null
}

console.log(getIntersectionNode(a.head, b.head))