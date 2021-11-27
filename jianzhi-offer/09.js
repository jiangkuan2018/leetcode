
class CQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  /** 
 * @param {number} value
 * @return {void}
 */
  appendTail(value) {
    this.stack1.push(value)
  }
  /**
 * @return {number}
 */
  deleteHead() {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.shift())
    }
    if (this.stack2.length) {
      return this.stack2.shift()
    } else {
      return -1
    }
  }
}

/**
 * 用两个栈实现一个队列。队列的声明如下，
 * 请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */

const cqueue = new CQueue()

// console.log(cqueue.deleteHead())
cqueue.appendTail(5)
cqueue.appendTail(2)
// cqueue.deleteHead()
console.log(cqueue.deleteHead())
console.log(cqueue.deleteHead())