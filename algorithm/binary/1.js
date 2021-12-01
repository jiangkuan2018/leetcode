/**
 * 二分查找
 * 寻找左边界
 * 不断向左收缩，达到锁定左侧边界的目的。
 */

const nums = [1,2,3,4,5,6,7]
const target = 2

function binarySearch(nums = [], target) {
  if (nums.length === 0) {
    return -1
  }
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left // 计算中间值
    const value = nums[middle]
    if (value > target) {
      right = middle - 1 // 如果中间值大于目标值 说明目标在左侧 故收紧右边界
    } else if (value < target) {
      left = middle + 1 // 如果中间值小于目标值 说明目标在右侧 故收紧左边界
    } else if (value === target) {
      return middle
    }
  }
  return -1
}

console.log(binarySearch(nums, target))

const nums1 = [1,2,3,4,5,6,6,6,6,6,6,6,6,7,8]
function binarySearchLeftBound(nums = [], target) {
  if (!nums.length) {
    return -1
  }
  let left = 0
  let right = nums.length -1
  
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    console.log(left, right)
    const value = nums[middle]
    if (value === target) {
      right = middle - 1
    } else if (value < target) {
      left = middle + 1
    } else if (value > target) {
      right = middle - 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1
  }
  return left
}
console.log(binarySearchLeftBound(nums1, 0))

function binarySearchRightBound(list = [], target) {
  let left = 0
  let right = list.length - 1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    const value = list[middle]
    if (value === target) {
      left = middle + 1
    } else if (value > target) {
      right = middle - 1
    } else if (value < target) {
      left = middle + 1
    }
  }
  if (right === list.length - 1 && list[right] !== target) {
    return -1
  }
  return right
}
// const nums1 = [1,2,3,4,5,6,6,6,6,6,6,6,6,7,8]
console.log('binarySearchRightBound', binarySearchRightBound(nums1, 6))