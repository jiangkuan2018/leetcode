/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = nums[0]
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    if (count === 0) {
      candidate = x
    }
    if (x === candidate) {
      count++
    } else {
      count--
    }
  }
  return candidate
}

majorityElement([2,2,1,1,1,2,2])