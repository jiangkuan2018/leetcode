
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let bottom = numBottles 
  let res = numBottles
  while (bottom >= numExchange) {
    bottom -= numExchange
    bottom += 1
    res += 1
  }
  return res
}

console.log(numWaterBottles(9, 3))
