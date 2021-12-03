/**
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 * 示例 1：
 * 输入：nums = [4,2,3], k = 1
 * 输出：5
 * 解释：选择下标 1 ，nums 变为 [4,-2,3] 。
 * 示例 2：

 * 输入：nums = [3,-1,0,2], k = 3
 * 输出：6
 * 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
 * 示例 3：

 * 输入：nums = [2,-3,-1,5,-4], k = 2
 * 输出：13
 * 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
 */

// const nums = [4,2,3], k = 1
// const nums = [3,-1,0,2], k = 3
// const nums = [2,-3,-1,5,-4], k = 2
const nums = [-2,9,9,8,4], k = 5

function NOT(n) {
  if (n > 0) {
    return Number(`-${n}`)
  } else {
    return Math.abs(n)
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  let minusIdx = []
  nums.sort((a, b) => Math.abs(a) - Math.abs(b)).forEach((item, idx) => {
    if (item < 0) {
      minusIdx.push(idx)
    }
  })
  while (k--) {
    const idx = minusIdx.pop()
    if (typeof idx === 'number') {
      nums[idx] = Math.abs(nums[idx])
    } else {
      nums[0] = NOT(nums[0])
    }
  }
  return nums.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0)
}

console.log(largestSumAfterKNegations(nums, k))