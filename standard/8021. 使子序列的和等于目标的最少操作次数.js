/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function check(nums, target) {
  let sum = 0
  while (nums.length) {
    sum += nums.shift()
    if (sum === target) {
      return true
    }
  }
  return false
}
/**
 * 
 * @param {number[]} nums
 */
function pick(nums) {
  return nums[nums.length - 1]
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function(nums, target) {
  const sum = nums.reduce((acc, curr) => acc + curr)
  if (sum < target) {
    return -1
  }
  if (sum === target) {
    return 0
  }
  nums.sort((a, b) => a - b)
  let oper = 0
  while (!check(nums, target)) {
    const val = pick(nums) / 2
    nums.push(...[val, val])
    oper += 1
  }
  return oper
};


minOperations([1,2,8], 7)