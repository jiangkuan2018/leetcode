/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 2], cost[i - 1]) + cost[i]
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}

const cost1 = [10,15,20]
const cost2 = [1,100,1,1,1,100,1,1,100,1]
const cost3 = [9, 2, 3, 5, 8, 1]
//            i-2 i-1 + i
//            当前位置 = 上一步或者上上步 + 当前

minCostClimbingStairs(cost3)