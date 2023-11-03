/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
  const res = new Set()
  while (nums.length) {
    // @ts-ignore
    const [start, end] = nums.shift()
    for (let i = start; i <= end; i++) {
      res.add(i)
    }
  }
  console.log(res.size)
  return res.size
}

numberOfPoints([[3,6],[1,5],[4,7]])
numberOfPoints([])