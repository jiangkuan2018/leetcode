class DBNode {
  key: number
  val: string
  prev!: DBNode
  next!: DBNode
  constructor(key: number, val: string) {
    this.key = key
    this.val = val
  }
}

class DoubleLinkedList {
  head: DBNode
  tail: DBNode
  size: number
  constructor() {
    this.head = new DBNode(0, 'head') // 头部固定
    this.tail = new DBNode(0, 'tail') // 尾部固定
    this.head.next = this.tail // 设置头节点指针指向
    this.tail.prev = this.head // 设置尾节点指针指向
    this.size = 0
  }
  addAtTail(x: DBNode) {
    /**
     * [prev, 'head', next] <=> [prev, 'tail', next]
     * [prev, 'head', next] <=> [prev, '1', next] <=> [prev, 'tail', next]
     * [prev, 'head', next] <=> [prev, '1', next] <=> [prev, '2', next] <=> [prev, 'tail', next]
     */
    x.next = this.tail // 设置新进节点的next指向
    x.prev = this.tail.prev // 设置新进节点的prev指向
    this.tail.prev.next = x // 尾节点前一个节点的next指向为x
    this.tail.prev = x // 尾节点的前一个节点应该是x
    this.size += 1
  }
  remove(x: DBNode) {
    x.prev.next = x.next
    x.next.prev = x.prev
    this.size -= 1
  }
  removeFirst() {
    if (!(this.head.next instanceof DBNode)) {
      return null
    }
    const first = this.head.next
    this.remove(first)
    return first
  }
  forEach(iterator: (x: DBNode) => void) {
    let current = this.head.next
    while (current !== this.tail) {
      iterator(current)
      current = current.next
    }
  }
}
interface HashMapI {
  [key: number]: DBNode
}
class LRUCatch {
  map: HashMapI
  cache: DoubleLinkedList
  cap: number
  constructor(capacity: number) {
    this.map = Object.create(null)
    this.cache = new DoubleLinkedList()
    this.cap = capacity
  }
  public get(key: number) {
    if (key in this.map) {
      return this.map[key]
    } else {
      return null
    }
  }
  public set(key: number, val: number) {
    if (key in this.map) {
      const target = this.map[key]
      this.deleteKey(target)
    }
  }
  private deleteKey(x: DBNode) {
    // delete this.map[]
    // this.cache.remove()
  }

}
const LRU = new LRUCatch(5)

// LRU.set()

// const temp = new DoubleLinkedList()
// temp.addAtTail(new DBNode('1'))
// temp.addAtTail(new DBNode('2'))
// const three = new DBNode('3')
// temp.addAtTail(three)
// temp.addAtTail(new DBNode('4'))
// temp.remove(three)
// temp.removeFirst()

// temp.forEach((item) => {
//   console.log(item.val)
// })