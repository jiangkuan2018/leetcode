const { log } = require("console")

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  dp[0] = [...matrix[0]]
  for (let i = 1;i < n; i++) {
    for (let j = 0; j < n; j++) {
      // dp[i - 1][j] 前一行
      // matrix[i][j] 当前行
      dp[i][j] = dp[i - 1][j] + matrix[i][j] // dp每个位置 = 前一行 + 当前行
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i - 1][j - 1])
      }
      if (j < n - 1) {
        dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i - 1][j + 1])
      }
    }
  }
  const last = dp[dp.length - 1]
  return last.reduce((acc, curr) => curr < acc ? curr: acc)
}

// const matrix = [
//   [2,1,3],
//   [6,5,4],
//   [7,8,9]
// ]
const matrix = [
  [-19,57],[-40,-5]
]
log(minFallingPathSum(matrix))