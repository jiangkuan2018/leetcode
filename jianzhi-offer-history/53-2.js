/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 
 */

const nums1 = [0,1,3]
const nums2 = [0,1,2,3,4,5,6,7,8,9,11,12]

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0 // 右子数组的第一位
  let right = nums.length - 1 // 左子数组的最后一位
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    const value = nums[middle]
    /**
     * 如果是相同的值 缩小左边界 因为数组内的元素使连续的0～n-1，
     * 如果下标和元素不相同时说明已经获取到了缺失值的右边，这时候缩小右边界值，
     * 右边界值middle-1是因为当前下标和下标往后的数都比缺失值要大，所以right会变成middle之前的值
     * 在剩余空间中继续查找，left值一直增加，直到left大于right，说明查找到了末尾（right代表左子数组的最后一位，连续数组的最后一位）
     * left代表右子数组的第一位，则应当返回left
     */
    if (middle === value) { 
      left = middle + 1 // 左边界值增加
    } else {
      right = middle - 1 // 右边界值减少
    }
  }
  return left
}

// console.log(missingNumber(nums1))
console.log(missingNumber(nums2))