class DBNode {
  val: string
  prev!: DBNode
  next!: DBNode
  constructor(val: string) {
    this.val = val
  }
}

class DoubleLinkedList {
  head: DBNode
  tail: DBNode
  size: number
  constructor() {
    this.head = new DBNode('head') // 头部固定
    this.tail = new DBNode('tail') // 尾部固定
    this.head.next = this.tail // 设置头节点指针指向
    this.tail.prev = this.head // 设置尾节点指针指向
    this.size = 0
  }
  addAtTail(x: DBNode) {
    /**
     * [prev, 'head', next] <=> [prev, 'tail', next]
     * [prev, 'head', next] <=> [prev, '1', next] <=> [prev, 'tail', next]
     */
    x.next = this.tail // 设置新进节点的next指向
    x.prev = this.tail.prev // 设置新进节点的prev指向
    this.tail.prev.next = x // 尾节点前一个节点的next指向为x
    this.tail.prev = x // 尾节点的前一个节点应该是x
    this.size += 1
  }
  forEach(iterator: (x: DBNode) => void) {
    let current = this.head
    while (current !== this.tail) {
      console.log(`[ current ] =>`, current)
      iterator(current)
      current = current.next
    }
  }
}

const temp = new DoubleLinkedList()
temp.addAtTail(new DBNode('1'))
temp.addAtTail(new DBNode('2'))
temp.addAtTail(new DBNode('3'))

console.log(`[ temp ] =>`, temp)
temp.forEach((item) => {
  console.log(item.val)
})