/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 
 */

const nums1 = [0,1,3]
const nums2 = [0,1,2,3,4,5,6,7,9]

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0
  let right = nums2.length - 1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    const value = nums[middle]
    console.log(middle, value)
    if (middle === value) {
      left = middle + 1
    } else if (middle < value) {

    }
    
  }
  return -1
}

console.log(missingNumber(nums1))