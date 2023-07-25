/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  let sum = nums.reduce((acc, curr) => acc + curr) / 2 // 计算数组元素和的一半
  // 题目要求 任选一个元素并将它减少一半 之后返回操作的次数
  const maxQ = new MaxPriorityQueue() // 初始化大根堆
  for (const v of nums) {
      maxQ.enqueue(v, v) // 建堆 方便获取TOP K
  }
  let count = 0 // 记录次数
  while (sum > 0) {
      let element = maxQ.dequeue().element // 取到大根堆的最大值
      element /= 2 // 最大元素减半
      sum -= element // 元素的一半
      maxQ.enqueue(element, element) // 将计算之后的元素重新加入大根堆 大根堆自动排序
      count += 1 // 记录次数 如果sum小于0说明 减半之后刚好小于nums总和的一半 当然
  }
  return count
}