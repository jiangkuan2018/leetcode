/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // for (const v of numbers) {
  //     if (v <= target || v === 0) {
  //         filterNumbers.push(v)
  //     } else {
  //         break
  //     }
  // }
  // console.log(filterNumbers)
  for (let i = 0; i < numbers.length; i++) {
      const index1 = numbers[i]
      for (let j = i + 1; j < numbers.length; j++) {
          const index2 = numbers[j]
          if (index1 + index2 === target) {
              return [i + 1, j + 1]
          }
      }
  }
}

// console.log(twoSum([-1, 0], -1))
// console.log(twoSum([-3,3,4,90], 0))
console.log(twoSum([5,25,75], 100))