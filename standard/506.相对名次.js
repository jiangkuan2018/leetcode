const score = [5,4,3,2,1]
const score2 = [10,3,8,9,4]

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const len = score.length
  const topThree = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal"
  }
  const arr = new Array(len).fill().map(item => new Array(2).fill(0)).map((item, idx) => {
    return [score[idx], idx]
  }).sort((a, b) => b[0] - a[0])

  arr.forEach((item, idx) => {
    let pos = idx + 1
    score[item[1]] = `${topThree[pos] || pos}`
  })
  return score
}

// console.log(findRelativeRanks(score))
console.log(findRelativeRanks(score2))