const selectionArr = [-10, -3, 2, 5, 9, 11, 19, 33]

/**
 * 
 * @param {Array<number>} arr 
 * @returns {Array<number>}
 */
function selectionSort(arr) {
  let len = arr.length
  let minIdx = 0
  for (let i = 0; i < len; i++) {
    minIdx = i
    for (let j = i+1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j // 查找最小值
      }
    }
    const tem = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = tem
  }
  console.log(arr)
  return arr
}

selectionSort(selectionArr)