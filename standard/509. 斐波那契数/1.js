const { log } = require("console")

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

log(fib(4), '111111')

/**
 * 
 * @param {number} n 
 */
function fib2(n) {
  if (n < 2) { // 0 1
    return n
  }
  let x = 0
  let y = 1
  for (let i = 2; i <= n; i++) {
    let z = x + y
    x = y
    y = z
  }
  return y
}

log(fib2(4))