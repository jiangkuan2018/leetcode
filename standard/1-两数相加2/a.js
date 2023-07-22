const MyLinkedList = require('../LinkList/index.js')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function forEach(linkListHead, iterator) {
    let current = linkListHead
    let idx = 0
    while (current !== null) {
      const signal = iterator(current, idx)
      idx += 1
      current = current.next
    }
  }
  const l1Values = []
  forEach(l1, (node) => {
    l1Values.push(node.val)
  })
  const l2Values = []
  forEach(l2, (node) => {
    l2Values.push(node.val)
  })
  
  const res = Number(l1Values.join('')) + Number(l2Values.join(''))
  console.log(Number(l1Values.join('')) , Number(l2Values.join('')))
  console.log(Number(l1Values.join('')) + Number(l2Values.join('')))
  const list = res.toString().split('').map(v => new ListNode(Number(v)))
  list.forEach((v, idx) => {
    v.next = list[idx + 1] || null
  })
  // console.log(list[0]);
  return list[0]
}
const l1 = new MyLinkedList()
const a = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
const b = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]
a.forEach(v => {
  l1.addAtTail(v)
})
// l1.addAtTail(7)
// l1.addAtTail(2)
// l1.addAtTail(4)
// l1.addAtTail(3)
const l2 = new MyLinkedList()
b.forEach(v => {
  l2.addAtTail(v)
})
// l2.addAtTail(5)
// l2.addAtTail(6)
// l2.addAtTail(4)

// const l1 = new MyLinkedList()
// l1.addAtTail(0)

// const l2 = new MyLinkedList()
// l2.addAtTail(0)

addTwoNumbers(l1.head, l2.head)