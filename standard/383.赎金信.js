/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
const ransomNote = "a", magazine = "b"
// const ransomNote = "aa", magazine = "ab"
// const ransomNote = "aa", magazine = "aab"
// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) {
    return false
  }
  const map = magazine.split('').reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) + 1)
    return acc
  }, new Map())
  let len = ransomNote.length
  while (len--) {
    // console.log(ransomNote[len])
    let count = map.get(ransomNote[len])
    if (count) {
      count -= 1
      map.set(ransomNote[len], count)
    } else {
      return false
    }
  }
  return true
}
console.log(canConstruct(ransomNote, magazine));
// @lc code=end

