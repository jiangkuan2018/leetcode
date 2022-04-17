class LRUDBNode {
  key: number
  val: number
  prev!: LRUDBNode
  next!: LRUDBNode
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
  }
}

class LRUDoubleLinkedList {
  head: LRUDBNode
  tail: LRUDBNode
  size: number
  constructor() {
    this.head = new LRUDBNode(0, 0)
    this.tail = new LRUDBNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  addLast(x: LRUDBNode) {
    x.next = this.tail
    x.prev = this.tail.prev
    this.tail.prev = x
    this.tail.prev.next = x
    this.size += 1
  }
  remove(x: LRUDBNode) {
    x.prev.next = x.next
    x.next.prev = x.prev
    this.size -= 1
  }
  removeFirst() {
    const node = this.head.next
    this.remove(node)
    this.size -= 1
    return node
  }
  removeLast() {
    const node = this.tail.prev
    this.remove(node)
    this.size -= 1
    return node
  }
}
interface HashMapNewI {
  [x: number]: LRUDBNode
}
class LRUCacheNew {
  private map: HashMapNewI
  private cap: number
  private cache: LRUDoubleLinkedList
  constructor(cap: number) {
    this.cap = cap
    this.map = Object.create(null)
    this.cache = new LRUDoubleLinkedList()
  }
  public get(key: number) {
    // console.log(this.map)
    if (key in this.map) {
      this.makeRecently(key)
      const v = this.map[key].val
      console.log(v)
      return v
    } else {
      console.log(-1)
      return -1
    }
  }
  public put(key: number, val: number) {
    if (key in this.map) { // 更新
      this.deleteKey(key)
      this.addRecently(key, val)
    } else { // 添加操作 要考虑是否超过上限
      if (this.cap === this.cache.size) {
        this.deleteLast() // 删除最后使用的
      }
      this.addRecently(key, val)
    }
  }
  private deleteKey(key: number) {
    const node = this.map[key]
    this.cache.remove(node)
    delete this.map[key]
  }
  private deleteLast() {
    // const node = this.cache.removeFirst()
    const node = this.cache.removeLast()
    delete this.map[node.key]
  }
  private addRecently(key: number, val: number) {
    const node = new LRUDBNode(key, val)
    this.cache.addLast(node)
    this.map[key] = node
  }
  private makeRecently(key: number) {
    const node = this.map[key]
    this.cache.remove(node)
    this.cache.addLast(node)
  }
}

const cache = new LRUCacheNew(2)
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
