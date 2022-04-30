const { LinkNode, MyLinkedList, createLinkedFromArray, linkedListToArray } = require('./index.js')

const l = createLinkedFromArray([1,2,3,4,5])

/**
 * @param {LinkNode} head
 * @param {number} n
 * @return {LinkNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n === 0) {
    return head
  }
  let fast = head
  let slowPrev = head
  let step = 0
  while (fast) {
    fast = fast.next
    step += 1
    if (step > (n + 1)) {
      slowPrev = slowPrev.next
    }
  }
  if (step === n) {
    head = head.next
  } else {
    slowPrev.next = slowPrev.next.next
  }
  return head
}

console.log(linkedListToArray(removeNthFromEnd(l.head, 5)))

/**
 * @param {LinkNode} head
 * @param {number} n
 * @return {LinkNode}
 */
function removeNthFromEnd2(head, n) {
  let fast = head
  let slow = head
  while (n-- > 0) {
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}

console.log(linkedListToArray(removeNthFromEnd2(l.head, 2)))