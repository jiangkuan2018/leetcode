/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
  const { L, R, _ } = moves.split('').reduce((acc, curr) => {
    acc[curr] += 1
    return acc
  }, {
    L: 0,
    R: 0,
    _: 0
  })
  
  return Math.abs(Math.max(L, R) - Math.min(L, R) + _)
}

console.log(furthestDistanceFromOrigin('R_'))