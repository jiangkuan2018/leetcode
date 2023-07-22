const { log } = require("console")

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  const set = [
    new Array(numOnes).fill(1),
    new Array(numZeros).fill(0),
    new Array(numNegOnes).fill(-1)
  ].flat()
  const res = set.splice(0, k)
  return res.length ? res.reduce((acc, curr) => acc + curr) : 0
}

log(kItemsWithMaximumSum(3,2,0,4))
log(kItemsWithMaximumSum(0,0,0,4))