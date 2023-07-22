const { log } = require("console")

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

  /**
   * @param {string} s1 
   * @param {string} s2 
   * @returns {boolean}
   */
  function compare(s1, s2) {
    const len = Math.min(s1.length, s2.length)
    for (let i = 0; i < len; i++) {
      const idx1 = order.indexOf(s1[i])
      const idx2 = order.indexOf(s2[i])
      // 字符在字典的位置
      if (idx1 > idx2) {
        return false
      } else if (idx1 < idx2) {
        return true
      }
      console.log(s1[i], idx1, s2[i], idx2)
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!compare(words[i], words[i + 1])) {
      return false
    }
  }
  return true

}

let words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
isAlienSorted(words, order)