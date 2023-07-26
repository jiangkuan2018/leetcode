// /**
//  * 合并后排序解法
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//   for (let i = m; i < nums1.length; i++) {
//     nums1[i] = nums2.shift()
//   }
//   bubbleSort(nums1)
// }

// /**
//  * @param {number[]} arr
//  */
// function bubbleSort(arr) {
//   const len = arr.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
}

merge(
  [1,2,3,0,0,0],
  3,
  [2,5,9,6],
  3
)