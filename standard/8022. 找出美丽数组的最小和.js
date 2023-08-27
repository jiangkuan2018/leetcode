function pick() {

}

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
  let ans = 0
  const notAllowNums = new Set()
  let val = 1
  for (let i = 0; i < n; i++) {
    while (notAllowNums.has(val)) {
      val += 1
    }
    if (val < target) {
      notAllowNums.add(target - val)
    }
    ans += val
    val += 1
  }
  return ans
};

// console.log(minimumPossibleSum(2, 3))
// console.log(minimumPossibleSum(3, 3))
// console.log(minimumPossibleSum(1, 1))
console.log(minimumPossibleSum(8, 8))
console.log(minimumPossibleSum(10000, 10000))