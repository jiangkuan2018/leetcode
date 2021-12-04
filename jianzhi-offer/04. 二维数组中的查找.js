/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length === 0 || target === undefined) {
    return false
  }
  let col = matrix[0].length - 1
  let row = 0
  while (row < matrix.length && col >= 0) {
    const value = matrix[row][col]
    if (value > target) {
      col -= 1
    } else if (value < target) {
      row += 1
    } else if (value === target) {
      return true
    }
  }
  return false
}

const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(matrix, 1))