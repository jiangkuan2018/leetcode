function toNumber(i: any) {
  return Number(i)
}
class LinkNode {
  public key: number
  public val: number
  public next!: LinkNode
  public prev!: LinkNode
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
  }
}

class DoubleList{
  private head: LinkNode
  private tail: LinkNode
  public size: number
  constructor() {
    this.head = new LinkNode(0, 0)
    this.tail = new LinkNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  public addLast(x: LinkNode): void {
    x.prev = this.tail.prev // 把最后一个节点的上一位赋值给x
    x.next = this.tail // x.next = this.tail
    this.tail.prev.next = x // 最后一位的上一位的下一位是x 修改最后第二位的下一位的指向
    this.tail.prev = x // 最后一位的上一位修改为x
    this.size += 1
  }
  public remove(x: LinkNode): void {
    x.prev.next = x.next
    x.next.prev = x.prev
    this.size -= 1
  }
  public removeFirst(): LinkNode | null {
    if (this.head.next == this.tail) {
      return null
    }
    const first = this.head.next
    this.remove(first)
    return first
  }
  public forEach(iterator: (item: LinkNode) => void) {
    let current = this.head
    while (current !== this.tail) {
      iterator(current)
      current = current.next
    }
  }
}

interface CacheMapI {
  [key: number]: LinkNode
}

class LRUCache {
  private map: CacheMapI
  private catch: DoubleList
  private cap: number
  constructor(capacity: number) {
    this.cap = capacity
    this.map = {}
    this.catch = new DoubleList()
  }
  /**
   * @description 添加最近使用的元素
   */
  private makeRecently(key: number): void {
    const x = this.map[key]
    this.catch.remove(x)
    this.map[key] = x
  }
  /**
   * @description 添加最近使用的元素
   */
  private addRecently(key: number, val: number) {
    const x = new LinkNode(key, val)
    this.catch.addLast(x)
    this.map[key] = x
  }
  private deleteKey(key: number) {
    const x = this.map[key]
    this.catch.remove(x)
    delete this.map[key]
  }
  private removeLeastRecently() {
    const x = this.catch.removeFirst()
    if (x) {
      delete this.map[x.key]
    }
  }
  public get(key: number): number {
    if (!(key in this.map)) {
      return -1
    }
    this.makeRecently(key)
    return this.map[key].val
  }
  public put(key: number, val: number) {
    if (key in this.map) {
      this.deleteKey(key)
      this.addRecently(key, val)
      return
    }
    if (this.cap === this.catch.size) {
      this.removeLeastRecently()
    }
    this
  }
}

const dblist = new DoubleList()
dblist.addLast(new LinkNode(1, 1))
dblist.addLast(new LinkNode(2, 2))
dblist.addLast(new LinkNode(3, 3))
// console.log(dblist)
dblist.forEach((item) => {
  console.log(`[ item ] =>`, item)
})