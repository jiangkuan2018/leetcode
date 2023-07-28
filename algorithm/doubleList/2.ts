class DoublyListNode {
  val: number
  next!: DoublyListNode
  prev!: DoublyListNode
  constructor(val: number) {
    this.val = val
  }
}

interface MyDoubleLinkList {
  [key: string]: any
}

class MyDoubleLinkList {
  head: DoublyListNode
  tail: DoublyListNode
  size: number
  constructor() {
    this.head = new DoublyListNode(0)
    this.tail = new DoublyListNode(0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  forEach(iter: (node: DoublyListNode, idx: number) => boolean | void) {
    let current = this.head.next
    let idx = 0
    while (current !== this.tail) {
      const res = iter(current, idx)
      if (res === true) {
        break
      }
      idx += 1
      current = current.next
    }
  }
  /**
   * 头部插入
   */
  addAtHead(val: number) {
    const node = new DoublyListNode(val)
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
    this.size += 1
  }
  /**
   * 尾部插入
   */
  addAtTail(val: number) {
    const node = new DoublyListNode(val)
    node.next = this.tail
    node.prev = this.tail.prev
    this.tail.prev.next = node
    this.tail.prev = node
    this.size += 1
  }
  addAtIndex(index: number, val: number) {
    this.forEach((curr, idx) => {
      console.log(index, idx, val)
      if (index === idx) {
        const node = new DoublyListNode(val)
        node.next = curr
        node.prev = curr.prev
        curr.prev.next = node
        curr.prev = node
        this.size += 1
      }
    })
  }
  get(index: number) {
    let res: number = -1
    this.forEach((node, idx) => {
      if (index === idx) {
        res = node.val
      }
    })
    return res
  }
  deleteAtIndex(index: number) {
    this.forEach((curr, idx) => {
      if (index === idx) {
        curr.prev.next = curr.next
        curr.next.prev = curr.prev 
        this.size -= 1
        return true
      }
    })
  }
}

const l1 = new MyDoubleLinkList()

const oper = [
  "MyLinkedList",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  // "deleteAtIndex",
  // "addAtHead",
  // "addAtTail",
  // "get",
  // "addAtHead",
  // "addAtIndex",
  // "addAtHead"
]
const args = [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]

for (let i = 1; i < oper.length; i++) {
  const res = l1[oper[i]](...args[i])
  console.log(res || null)
}
l1.forEach((curr) => {
  console.log(curr.val)
})