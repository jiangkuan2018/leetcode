const { log } = require("console")

/**
 * 
 * @param {number} n 
 */
function climbStairs(n) {
  if (n === 1) {
    return 1
  }
  // 初始化dp数组
  const dp = new Array(n + 1).fill(0) // 从1开始计数 方便后续使用下标 所以初始化数组多一位
  dp[1] = 1
  dp[2] = 2
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[dp.length - 1]
}

log(climbStairs(5), '====')


/**
 * 
 * @param {number} n 
 */
function climbStairs2(n) {
  if (n === 1) {
    return 1
  }
  let first = 1
  let second = 2
  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }
  return second
}

log(climbStairs2(5), '====')