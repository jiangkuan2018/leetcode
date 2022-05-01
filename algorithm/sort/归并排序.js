const mergeSortArr = [11, 2, 9]
// const mergeSortArr = [11, 2, 9, 33, 19, 5, -3, -10, 10]
/**
 * 
 * @param {Array<number>} arr 
 * @returns {Array<number>}
 */
function mergeSort(arr) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right)) // 分割数组
}
/**
 * 
 * @param {Array<number>} left 
 * @param {Array<number>} right 
 * @returns {Array<number>}
 */
function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}

console.log(mergeSort(mergeSortArr))