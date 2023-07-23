/**
 * 偷第0个房子的收益是 dp[0] = nums[0]
 * 偷第1个房子的收益是 dp[1] = max(nums[0], nums[1]) // 看第一个和第二个哪个收益高
 * 偷第2个房子的收益是 dp[2] = max(dp[2 - 1], dp[2 - 2] + nums[2]) // 看第0个房子的收益和第1个房子收益+第2个房子的收益哪个高
 * 递推公式是 dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
 * 当前的屋子要不要偷 决定于前两个房子的收益
 * dp[i - 2] + nums[i] 的意思是上上个房子和当前房子的收益
 * dp[i - 1] 的意思是上一个房子的收益
 * 因为偷的房子不能相邻，如果dp[i - 1]的收益高，当前房子就不能偷，那么当前房子的收益就是上一个房子的收益
 * 如果dp[i - 2] + nums[i] 的收益高，说明当前房子可以被偷，那么收益就是上上个房子的收益+当前房子的收益
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return nums[0]
  }
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[n - 1]
}

// rob([1,2,3,1])
rob([2,7,9,3,1])


/**
 * @param {number[]} nums
 * @return {number}
 */
function rob2(nums) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return nums[0]
  }
  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    let temp = second
    second = Math.max(second, first + nums[i])
    first = temp
  }
  return second
}

rob2([2,7,9,3,1])