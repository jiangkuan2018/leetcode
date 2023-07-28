// const nums = [5,7,7,8,8,10]
// const target = 6
// const target = 8
// const target = 6

// function search(nums: Array<number>, target: number): number {
//   const middle = Math.floor(nums.length / 2)
//   const left = nums.slice(0, middle)
//   const right = nums.slice(middle, nums.length)
//   if (nums.length === 1) {
//     return nums[0] === target ? 1 : 0
//   }
//   if (nums[middle] > target) {
//     return search(left, target)
//   }
//   if (nums[middle] < target) {
//     return search(right, target)
//   }
//   let rightPos = middle + 1
//   let leftPos = middle - 1
//   let count = nums[middle] === target ? 1 : 0
//   while (true) {
//     if (nums[rightPos] === target) {
//       count += 1
//       rightPos += 1
//     }
//     if (nums[leftPos] === target) {
//       count += 1
//       leftPos -= 1
//     }
//     if (nums[rightPos] !== target && nums[leftPos] !== target) {
//       return count
//     }
//   }
// }

// var search = function (nums: Array<number>, target: number): number {
//   // let low = 0
//   // let high = nums.length - 1
//   // while (low <= high) {
//   //   const mid = Math.floor((high - low) / 2) + low
//   //   console.log(mid)
//   //   const num = nums[mid]
//   //   if (num === target) {
//   //     return mid
//   //   } else if (num > target) {
//   //     high = mid - 1
//   //   } else {
//   //     low = mid + 1
//   //   }
//   // }
//   // return -1
//   // const nums = [5,7,7,8,8,10]
//   let low = 0
//   let high = nums.length - 1
//   while (low <= high) {
//     const mid = Math.floor((high - low) / 2) + low
//     console.log(low, mid, high)
//     const num = nums[mid]
//     if (num === target) {
//       return mid
//     } else if (num > target) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return -1
// }
const nums = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 7, 7, 8, 8, 10];
const target = 7
/**
 * 查找目标元素下标
 */
function search1(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    console.log(middle)
    const value = nums[middle]
    if (value > target) {
      right = middle - 1
    } else if (value < target) {
      left = middle + 1
    } else if (value === target) {
      return middle
    }
  }
  return -1
}

/**
 * 查找目标元素的左边界值
 */
function binarySearchLeftBound<T>(list: Array<T>, target: T): number {
  let left = 0
  let right = list.length -1
  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left
    const value = list[middle]
    if (value === target) {
      right = middle - 1
    } else if (value > target) {
      right = middle - 1
    } else if (value < target) {
      left = middle + 1
    }
  }
  if (left >= list.length || list[left] !== target) { // 超大值和超小值的边界检查
    return -1
  }
  return left
}

console.log(search1(nums, target))

const list = [1,2,3,4,5,6,6,6,6,6,6,6,7,7,8,9]
console.log(binarySearchLeftBound(list, 10))
