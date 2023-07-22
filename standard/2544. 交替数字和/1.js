const { log } = require("console")

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  let list = n.toString().split('').map(v => Number(v))
  let maxItemIdx = 0
  let temp = list[0]
  for (let i = 1; i<list.length; i++) {
    if (list[i] >= temp) {
      temp = list[i]
      maxItemIdx = i
    }
  }

  list = list.map((v, idx) => {
    if (maxItemIdx % 2 === 0) {
      if (idx % 2 === 1) {
        return -v
      }
    } else if (idx % 2 === 0) {
      return -v
    }
    return v
  })
  console.log(list)
  return list.reduce((acc, curr) => acc + curr)
}

log(alternateDigitSum(25))