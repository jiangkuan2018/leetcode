function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while(preIndex >= 0 && arr[preIndex] > current) {
          /**
           * 在向后查找的过程中发现后面的数字比当前数字还要大时
           * 已排序的数字整体向前移动一位，给当前（current）的值留空位
           */
          arr[preIndex+1] = arr[preIndex] // 向前移动1位，把大的数字移动到前面
          preIndex--;
      }
      arr[preIndex+1] = current; // 如果找到了比current还小的值，留出来的空位修改为current
  }
  return arr;
}
insertionSort([11, 2, 9, 33, 19, 5, -3, -10])





















/**
 * 
 * @param {Array<number>} arr 
 */
function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    const current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  console.log(arr)
  return arr
}

insertionSort1([11, 2, 9, 33, 19, 5, -3, -10])


/**
 * 打车17
 * 鸡柳28
 * 超市376
 * 百味鸡33
 */