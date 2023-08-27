const { MyLinkedList, LinkNode } = require('../algorithm/linked/index')


const l1 = new MyLinkedList()

// ;[9,1,9,5,0,5,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9].forEach(v => {
//   l1.addAtTail(v)
// })
l1.addAtTail(1)
l1.addAtTail(8)
l1.addAtTail(9)
// l1.addAtHead(0)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {LinkNode} head
 * @return {LinkNode}
 */
var doubleIt = function(head) {
  function reverse(head) {
    let prev = null
    let curr = head
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev // 新头
  }

  console.log(reverse(head))
  // const arr = []
  // let cur = head
  // while (cur) {
  //   arr.push(cur.val)
  //   cur = cur.next
  // }
  
  // const num = (Number(arr.join('')) * 2).toString().split('')
  // cur = head
  // while (num.length) {
  //   const v = num.shift()
  //   cur.val = Number(v)
  //   if (cur.next) {
  //     cur = cur.next
  //   } else {
  //     const hasNext = num.shift()
  //     if (hasNext) {
  //       cur.next = new LinkNode(Number(hasNext))
  //     }
  //   }
  // }
  // return head
};
doubleIt(l1.head)
// console.log()

// l1.forEach((v) => {
//   console.log( v.val)
// })