const { log } = require("console")

const bubbleSortArr = [11, 2, 9, 33, 19, 5, -3, -10]

/**
 * 
 * @param {Array<number>} arr 
 * @returns {Array<number>}
 */
function bubbleSort(arr) {
  const len = arr.length // 8
  for (let i=0; i<len - 1; i++) { // i = len - 1 是因为
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j+ 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// bubbleSort(bubbleSortArr)
bubbleSort([1,2,3,2,5,6])