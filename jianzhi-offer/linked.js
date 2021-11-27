class LinkNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
  }
  forEach(iterator) {
    const queue = []
    if (this.head !== null) {
      queue.push(this.head)
    } else {
      queue.push(new LinkNode(-1))
    }
    let idx = -1
    while (queue.length) {
      idx += 1
      const target = queue.shift()
      if (target && target.next) {
        queue.push(target.next)
      }
      const signal = typeof iterator === 'function' && iterator(target, idx)
      if (signal) {
        break
      }
    }
  }
  find(iterator) {
    let target = new LinkNode(-1)
    this.forEach((current, idx) => {
      if (iterator(current, idx)) {
        target = current
        return true
      }
    })
    return target
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    // if (this.head) {
    //   return this.find((current, idx) => idx === index).val
    // }
    // return new LinkNode(-1).val
    return this.find((current, idx) => idx === index).val
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const oldHead = this.head
    this.head = new LinkNode(val)
    this.head.next = oldHead
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    if (this.head === null) {
      this.head = new LinkNode(val)
      return
    }
    this.forEach((current) => {
      if (current.next === null) {
        current.next = new LinkNode(val)
      }
    })
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index === 0) {
      return this.addAtHead(val)
    }
    if (index < 0) {
      const newHead = new LinkNode(val)
      newHead.next = this.head
      this.head = newHead
      return
    }
    this.forEach((target, idx) => {
      if (target && (idx + 1) === index) {
        const newNode = new LinkNode(val)
        newNode.next = target.next
        target.next = newNode
        return true
      }
    })
  }
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index === 0) {
      this.head = this.head.next
      return
    }
    this.forEach((target, idx) => {
      if ((idx + 1) === index && target.next !== null) {
        target.next = target.next.next || null
      }
    })
  }
}

module.exports = {
  MyLinkedList,
  LinkNode
}