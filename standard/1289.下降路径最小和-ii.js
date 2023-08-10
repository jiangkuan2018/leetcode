/*
 * @lc app=leetcode.cn id=1289 lang=javascript
 *
 * [1289] 下降路径最小和  II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
  /**
   * @param {number[]} row 
   * @param {number} idx 
   */
  function getMin(row, idx) {
    let min = Number.MAX_VALUE
    for (let k = 0; k < row.length; k++) {
      if (k === idx) {
        continue
      } else {
        min = Math.min(row[k], min)
      }
    }
    return min
  }
  const len = grid.length
  for (let i = 1; i < len; i++) { // 遍历列
    for (let j = 0; j < grid[0].length; j++) { // 遍历行
      const min = getMin(grid[i - 1], j)
      grid[i][j] += min
    }
  }
  return Math.min(...grid[len - 1])
}

minFallingPathSum([
  [-37,51,-36,34,-22],
  [82,4,30,14,38],
  [-68,-52,-92,65,-85], // -85
  [-49,-3,-77,8,-19], // -77
  [-60,-71,-21,-62,-73] // 
])

// minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])
// @lc code=end

