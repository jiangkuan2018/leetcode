/*
 * @lc app=leetcode.cn id=722 lang=javascript
 *
 * [722] 删除注释
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  for (let i = 0; i < source.length; i++) {
    const v = () => {
      let copy = source[i]
      return copy.trim()
    }
    if (
      v().startsWith('/*') && v().endsWith('*/')
      || v().startsWith('//')
    ) {
      source.splice(i, 1)
      i--
      continue
    }
    if (v().startsWith('/*')) {
      let cond = true
      while (cond) {
        if (v().endsWith('*/')) {
          cond = false
        }
        source.splice(i, 1)
      }
      i--
      continue
    }
  }
  console.log(["int main()","{ ","  ","int a, b, c;","a = b + c;","}"].join('\n'))
  console.log(source.join('\n'))
  return source
  
}
// @lc code=end

removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"])



/**
 * 1. 黑白棋的框架
 * 2. 棋盘
 * 3. 写AI
 * 4. 
 * 八点开始 => 一个半小时
 * 
 * 
 * 
 */

