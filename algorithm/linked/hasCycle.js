const { LinkNode, MyLinkedList } = require('./index.js')

const list = new MyLinkedList()

list.addAtTail(0)
list.addAtTail(1)
list.addAtTail(2)
list.addAtTail(3)
list.addAtTail(4)
list.addAtTail(5)

const three = list.find((node, idx) => idx === 2)
const last = list.find((node, idx) => idx === 5)
last.next = three

/**
 * 
 * @param {LinkNode} head 
 * @returns {Boolean}
 */
function hasCycle(head) {
  let faster = head
  let slower = head
  while (faster && slower && faster.next) {
    slower = slower.next
    faster = faster.next.next
    if (faster === slower) {
      return true
    }
  }
  return false
}

/**
 * 
 * @param {LinkNode} head 
 * @returns {Boolean}
 */
function hasCycleHash(head) {
  let current = head
  const map = new Map()
  while (current) {
    if (map.has(current)) {
      return true
    }
    map.set(current, true)
    current = current.next
  }
  return false
}

console.log(hasCycle(list.head))
console.log(hasCycleHash(list.head))