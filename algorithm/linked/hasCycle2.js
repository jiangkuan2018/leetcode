const { LinkNode, MyLinkedList } = require('./index.js')

const list = new MyLinkedList()

// list.addAtTail(0)
// list.addAtTail(1)
// list.addAtTail(2)
// list.addAtTail(3)
// list.addAtTail(4)
// list.addAtTail(5)

// const three = list.find((node, idx) => idx === 2)
// const last = list.find((node, idx) => idx === 5)
// last.next = three

// const one = list.addAtTail(3)
// const two = list.addAtTail(2)
// const three = list.addAtTail(0)
// const four = list.addAtTail(-4)
// four.next = two

const one = list.addAtTail(1)
const two = list.addAtTail(2)
two.next = one

/**
 * 
 * @param {LinkNode} head 
 */
function hasCycleMap(head) {
  let current = head
  const map = new Map()
  while (current !== null) {
    if (map.get(current)) {
      return true
    }
    map.set(current, true)
    current = current.next
  }
  return false
}

console.log(hasCycleMap(list.head))
console.log('=================================================')

/**
 * 
 * @param {LinkNode} head 
 */
function detectCycle(head) {
  if (head === null) {
    return null
  }
  let slow = head
  let fast = head
  while (fast !== null) {
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null // 链表没有环
    }
    if (fast === slow) { // 链表有环
      let tmp = head
      while (tmp !== slow) {
        tmp = tmp.next
        slow = slow.next
      }
      return tmp // 返回相交的节点
    }
  }
  return null
}

console.log(detectCycle(list.head))