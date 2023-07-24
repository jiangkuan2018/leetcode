const { log } = require("console")

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let maxVal = 0
  for (const v of nums) {
    maxVal = Math.max(maxVal, v) // 找到数组里面的最大值
  }
  const sums = new Array(maxVal + 1).fill(0) // 创建一个新数组 长度为最大值+1 最大值就是新数组的最后一位
  for (const idx of nums) {
    /**
     * nums的每个元素都是新数组的下标值
     * [0, 0, 0, 0, 0]      新数组
     * [2, 2, 3, 3, 3, 4]   原数组
     * [0, 0, 4, 9, 4]      新数组赋值后
     * [0, 1, 2, 3, 4]      下标
     * 题目的条件是：x被选择之后 x - 1和 x + 1都要被剔除
     * 因为新数组的下标就是x，所以相邻的不可以被选择
     * 问题就变成了打家劫舍
     * 打家劫舍的条件是不可以偷连续两家
     * 那么最终解就是 dp[i] = max(dp[i - 1], dp[i - 2] + sums[i])
     * 当前房子收否可以被偷，取决于上个房子的收益 和 上上个房子的收益+当前房子的收益
     */
    sums[idx] += idx
  }
  return rob(sums)
}

/**
 * 
 * @param {number[]} sums 
 * @returns {number}
 */
var rob = function(sums) {
  const len = sums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return sums[1]
  }
  const dp = new Array(len).fill(0)
  dp[0] = sums[0]
  dp[1] = Math.max(sums[0], sums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + sums[i])
  }
  return dp[len - 1]
}

log(deleteAndEarn([2,2,3,3,3,4]))