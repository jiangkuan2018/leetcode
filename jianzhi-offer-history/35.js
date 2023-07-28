// @ts-nocheck

class Node {
  constructor(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
  }
}

const one = new Node(7)
const two = new Node(13)
const three = new Node(11)
const four = new Node(10)
const five = new Node(1)

one.next = two
one.random = null
two.next = three
two.random = one
three.next = four
three.random = five
four.next = five
four.random = three
five.next = null
five.random = one


function copyRandomList(head) {
  if (!head) {
    return head
  }
  let newHead = null
  let node = head
  const queue = []
  const map = new Map()
  let idx = 0
  while (node) {
    queue.push(new Node(node.val))
    map.set(node, idx)
    idx += 1
    node = node.next
  }
  node = head
  idx = 0
  while (node) {
    const curr = queue[idx]
    curr.next = queue[idx + 1] || null
    curr.random = queue[map.get(node.random)] || null
    idx += 1
    node = node.next
    if (newHead === null) {
      newHead = curr
    }
  }
  return newHead
}




// function copyRandomList(head) {
//   if (!head) {
//     return head
//   }
//   let node = head
//   const map = new Map() // 创建map
//   while (node) { // 迭代链表
//     map.set(node, new Node(node.val)) // 创建新节点 新节点与旧节点关联 {oldNode => newNode} ！！！
//     node = node.next // 迭代链表
//   }
//   node = head // 重置
//   while (node) { // 再次迭代链表
//     map.get(node).next = map.get(node.next) || null // 设置新节点的next指向 新节点next 等于 旧节点next的value
//     map.get(node).random = map.get(node.random) // 设置random指向 新节点random 等于 旧节点random的value
//     node = node.next
//   }
//   return map.get(head) // 返回头节点的value
// }

console.log(copyRandomList(one))
// copyRandomList(one)
