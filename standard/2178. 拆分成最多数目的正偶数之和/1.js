const { log } = require("console")

/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 === 1) {
    return []
  }
  const res = []
  let val = 2
  while (finalSum >= val) {
    res.push(val)
    finalSum -= val
    val += 2
  }
  res[res.length - 1] += finalSum  
  return res
}


maximumEvenSplit(8)
maximumEvenSplit(10)
maximumEvenSplit(12)
// maximumEvenSplit(9575748670)
// maximumEvenSplit(1999991)