/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  nums.push('stop')
  while (true) {
      const v = nums.shift()
      if (v === 'stop') {
          break
      }
      if (v !== val) {
          nums.push(v)
      }
  }
  return nums.length
}


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right]
          left++
      }
  }
  return left
}