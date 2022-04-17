/**
 * 链表节点
 * key和val表示节点实际存储的值，prev和next表示节点的前一位和后一位节点
 */
class DBNode {
  key: number
  val: number
  prev!: DBNode
  next!: DBNode
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
  }
}
/**
 * 双链表头和尾的节点是固定的，因此初始化时会默认设置为0值。
 */
class DoubleLinkedList {
  head: DBNode
  tail: DBNode
  size: number
  constructor() {
    this.head = new DBNode(0, 0) // 头部固定
    this.tail = new DBNode(0, 0) // 尾部固定
    this.head.next = this.tail // 设置头节点指针指向
    this.tail.prev = this.head // 设置尾节点指针指向
    this.size = 0
  }
  addLast(x: DBNode) {
    /**
     * [prev, 0, next] <=> [prev, 0, next]
     * [prev, 0, next] <=> [prev, '1', next] <=> [prev, 0, next]
     * [prev, 0, next] <=> [prev, '1', next] <=> [prev, '2', next] <=> [prev, 0, next]
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
class LRUCache {
  private map: HashMapI
  private cache: DoubleLinkedList
  private cap: number
  constructor(capacity: number) {
    this.map = Object.create(null)
    this.cache = new DoubleLinkedList()
    this.cap = capacity
  }
  public get(key: number) {
    if (key in this.map) {
      this.makeRecently(key)
      return this.map[key].val
    } else {
      return -1
    }
  }
  public put(key: number, val: number) {
    if (key in this.map) { // 如果使用已存在的key
      this.deleteKey(key) // 先删除原有的引用
      this.addRecently(key, val)
      return
    }
    if (this.cap === this.cache.size) {
      this.removeLeastRecently()
    }
    this.addRecently(key, val)
  }
  private removeLeastRecently() {
    const node = this.cache.removeFirst()
    if (node instanceof DBNode) {
      delete this.map[node.key]
    }
  }
  private addRecently(key: number, val: number) {
    const newNode = new DBNode(key, val)
    this.cache.addLast(newNode)
    this.map[key] = newNode
  }
  private makeRecently(key: number) {
    const node = this.map[key]
    this.cache.remove(node)
    this.cache.addLast(node)
  }
  private deleteKey(key: number) {
    const node = this.map[key]
    this.cache.remove(node)
    delete this.map[key]
  }
}

const LRU = new LRUCache(5)

LRU.put(1, 1)
LRU.put(2, 2)
LRU.put(3, 3)
console.log(LRU.get(2))
LRU.put(4, 4)
LRU.put(5, 5)
LRU.put(6, 6)

console.log(LRU)
