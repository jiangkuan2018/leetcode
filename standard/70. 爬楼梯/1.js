const { log } = require("console")


/**
 * 
 * @param {number} n 
 * @param {object} memo 
 */
function climbStairsMemo(n, memo) {
  if (memo[n] > 0) {
    return memo[n]
  }
  if (n === 1) {
    memo[n] = 1
  } else if (n === 2) {
    memo[n] = 2
  } else {
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo)
  }
  return memo[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = {}
  return climbStairsMemo(n, memo)
}


log(climbStairs(4))
log(climbStairs(40))
