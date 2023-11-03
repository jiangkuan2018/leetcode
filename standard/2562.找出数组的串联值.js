/*
 * @lc app=leetcode.cn id=2562 lang=javascript
 *
 * [2562] 找出数组的串联值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let ans = 0
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    if (start === end) {
      ans += nums[start]
    } else {
      ans += Number(`${nums[start]}${nums[end]}`)
    }
    start++
    end--
  }
  return ans
};
// @lc code=end

