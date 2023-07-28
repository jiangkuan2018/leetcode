/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let arr = []
  for (let i = 0; i < s.length; i += n) {
    const item = s.substr(i, n)
    arr.push(item)
  }
  return arr.slice(1).join('') + arr[0]
}

console.log(reverseLeftWords('abcdefg', 2))
console.log(reverseLeftWords('lrloseumgh', 6))