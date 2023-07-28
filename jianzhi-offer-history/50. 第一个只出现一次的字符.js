/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function(s) {
  const len = s.length
  const map = new Map()
  let idx = 0
  while (idx < len) {
    const key = s[idx]
    map.set(key, (map.get(key) || 0) + 1)
    idx += 1
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key
    }
  }
  return ' '
}

// console.log(firstUniqChar('abaccdeff'))
console.log(firstUniqChar('a'))