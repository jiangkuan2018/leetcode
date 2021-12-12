const bubbleSortArr = [11, 2, 9, 33, 19, 5, -3, -10]

/**
 * 
 * @param {Array<number>} arr 
 * @returns {Array<number>}
 */
function bubbleSort(arr) {
  const len = arr.length
  for (let i=0; i<len - 1; i++) {
    for (let j=0; j<len - 1 - i; j++) {
      console.log(i, j)
      if (arr[j] > arr[j+1]) {
        const tem = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = tem
      }
    }
  }
  return arr
}

bubbleSort(bubbleSortArr)