/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const map = {}
  for (let v of stones) {
    if (map[v]) {
      map[v] += 1
    } else {
      map[v] = 1
    }
  }
  let sum = 0
  for (let v of jewels) {
    sum += (map[v] || 0)
  }
  return sum
}

  
numJewelsInStones('aA', 'aAAbbbb')
numJewelsInStones('z', 'ZZ')