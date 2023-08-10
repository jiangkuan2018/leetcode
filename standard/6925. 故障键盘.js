/**
 * @param {string} s
 * @return {string}
 */
function finalString(s) {
  let left = []
  let right = s.split('')
  while (right.length) {
    const w = right.shift()
    if (w === 'i') {
      left.reverse()
    } else {
      left.push(w)
    }
  }
  return left.join('')
}

finalString('string')
finalString('poiinter')

/**
 * 
 * @param {number[]} nums 
 */
function findSmall(nums) {
  const left = nums[0]
  const right = nums[nums.length - 1]
  if (left < right) {
    return 0
  } else {
    return nums.length - 1
  }
}

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
function canSplitArray(nums, m) {
  const res = []
  const len = nums.length
  if (nums.length <= 2) {
    return true
  }
  while (nums.length) {
    const sum = nums.reduce((a, c) => a + c)
    if (sum >= m && nums.length >= 2) {
      const idx = findSmall(nums)
      res.push(nums.splice(idx, 1))
    } else {
      res.push(nums)
      break
    }
  }
  console.log(res)
  return res.length === len
}

// console.log(canSplitArray([2, 2, 1], 4))
// console.log(canSplitArray([2, 1, 3], 5))
// console.log(canSplitArray([2, 3, 3, 2, 3], 6))
// console.log(canSplitArray([1, 1], 3))
// console.log(canSplitArray([2], 1))
// console.log(canSplitArray([9,7], 1))
console.log(canSplitArray([4,1,3,2,4], 6))