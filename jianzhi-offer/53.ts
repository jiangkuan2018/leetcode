const nums = [5,7,7,8,8,10]
// const target = 6
// const target = 8
const target = 6

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

var search = function (nums: Array<number>, target: number): number {
  // let low = 0
  // let high = nums.length - 1
  // while (low <= high) {
  //   const mid = Math.floor((high - low) / 2) + low
  //   console.log(mid)
  //   const num = nums[mid]
  //   if (num === target) {
  //     return mid
  //   } else if (num > target) {
  //     high = mid - 1
  //   } else {
  //     low = mid + 1
  //   }
  // }
  // return -1
  // const nums = [5,7,7,8,8,10]
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low
    console.log(low, mid, high)
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

console.log(search(nums, 8))
