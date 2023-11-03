/*
 * @lc app=leetcode.cn id=2578 lang=javascript
 *
 * [2578] 最小和分割
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  const nums = num.toString().split('').map(Number).sort((a, b) => a - b)
  console.log(nums)
};
// @lc code=end

