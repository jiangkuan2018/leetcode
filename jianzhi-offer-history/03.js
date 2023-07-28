// const nums = [2, 3, 1, 0, 2, 5, 3]
const nums = [3, 4, 2, 0, 0, 1]

function findRepeatNumber(nums = []) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i]
    } else {
      map[nums[i]] = 1
    }
  }
}

// function findRepeatNumber(nums = []) {
//   let len = nums.length
//   let i = 0
//   while (i < len) {
//     if (i === nums[i]) { // 如果下标等于元素
//       i++
//       continue
//     }
//     if (nums[i] === nums[nums[i]]) { // 位置上已经有相同值
//       return nums[i]
//     } else { // 如果不是相同值 则 把值交换过来
//       swap(nums, i, nums[i])
//     }
//   }
// }

// function swap(nums, i, j) {
//   console.log(nums, i, j)
//   let tem = nums[i]
//   nums[i] = nums[j]
//   nums[j] = tem
// }

console.log(findRepeatNumber(nums))