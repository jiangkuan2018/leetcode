const nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]
const nums2 = [[1]]
const nums3 = [[]]

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
  // let res = 0
  // nums = nums.map(item => item.sort((a, b) => b - a))
  // console.log(nums)

  // const r = () => {
  //   const list = []
  //   nums.forEach((item, idx) => {
  //     list.push(...(item.splice(0, 1) || []))
  //   })
  //   const largest = list.sort((a, b) => b - a)
  //   res += largest[0]
  //   if (nums[0] && nums[0].length) {
  //     r()
  //   }
  // }
  // r()
  // return res
  for (const row of nums) {
    row.sort((a, b) => a - b)
  }
  let ans = 0
  for (let j = 0; j < nums[0].length; ++j) { // j子数组元素下标
    let mx = 0
    for (const row of nums) { // 每个子数组的第j位
      mx = Math.max(mx, row[j]) // 使用Math.max选出每个子数组第j位的最大值
    }
    ans += mx // 累加最大值
  }
  return ans
}

console.log(matrixSum(nums))
// console.log(matrixSum(nums2))
// console.log(matrixSum(nums3))

/**
 * 1. 
 */