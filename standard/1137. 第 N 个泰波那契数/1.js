/**
 * 泰波那契数
 * n = (n - 3) + (n - 2) + (n - 1)
 */


/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}

console.time('tribonacci')
console.log(tribonacci(25))
console.timeEnd('tribonacci')

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci2 = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  let [x, y, z] = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    const sum = x + y + z
    x = y
    y = z
    z = sum
  }
  return z
}

// console.log(tribonacci2(4))
console.time('tribonacci2')
console.log(tribonacci2(25))
console.timeEnd('tribonacci2')