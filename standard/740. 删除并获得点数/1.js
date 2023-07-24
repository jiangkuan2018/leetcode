const { log } = require("console")

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let maxVal = 0
  for (const v of nums) {
    maxVal = Math.max(maxVal, v)
  }
  const sums = new Array(maxVal + 1).fill(0)
  for (const idx of nums) {
    sums[idx] += idx
  }
  return rob(sums)
}

/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return nums[1]
  }
  const dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[len - 1]
}

log(deleteAndEarn([2,2,3,3,3,4]))