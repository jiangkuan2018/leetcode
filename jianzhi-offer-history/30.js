function curry(fn) {
  const stag = []
  return function collect(...args1) {
    stag.push(...args1)
    if (stag.length < fn.length) {
      return function(...args2) {
        return collect(...args2)
      }
    } else {
      return fn.apply(this, stag)
    }
  }
}

function add(a, b) {
  return a + b
}

const curried = curry(add)
// console.log(curried(2)(3))
/**
 * 定义栈的数据结构，
 * 请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * MinStack minStack = new MinStack()
 * minStack.push(-2)
 * minStack.push(0)
 * minStack.push(-3)
 * minStack.min()   --> 返回 -3.
 * minStack.pop()
 * minStack.top()   --> 返回 0.
 * minStack.min()   --> 返回 -2.
 */

class MinStack {
  constructor() {
    this.stack = []
    this.minList = []
  }
  get minElement() {
    return this.minList[0]
  }
  push(value) {
    if (this.minList.length === 0 || value <= this.minElement) {
      this.minList.unshift(value)
    }
    this.stack.unshift(value)
  }
  pop() {
    const res = this.stack.shift()
    if (res === this.minElement) {
      this.minList.shift()
    }
  }
  top() {
    return this.stack[0]
  }
  min() {
    return this.minElement
  }
}

const minStack = new MinStack()
const hanldes = ["MinStack","push","push","push","min","pop","min"]
const args = [[],[0],[1],[0],[],[],[]]
hanldes.splice(0, 1)
args.splice(0, 1)

hanldes.forEach((fn, idx) => {
  console.log(minStack[fn].apply(minStack, args[idx]))
})
