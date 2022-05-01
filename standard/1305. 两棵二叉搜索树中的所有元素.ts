import { createTreeFromArray, TreeNode, TreeNodeVal } from '../algorithm/binaryTree/index'

const root1 = createTreeFromArray([2,1,4])
const root2 = createTreeFromArray([1,0,3])

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const list1 = inorder(root1, [])
  const list2 = inorder(root2, [])
  return [...list1, ...list2].sort((a, b) => a - b)
}

function getAllElements2(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const list1 = inorder(root1, [])
  const list2 = inorder(root2, [])
  return merge(mergeSort(list1), mergeSort(list2))
}
// getAllElements2(root1, root2)

// console.log('mergeSort', mergeSort([10, 20, 9, 2, 4, 8, 200, 100, 21]))
console.log('mergeSort', mergeSort([5, 20, 9]))

function mergeSort<T extends number[]>(arr: T): T {
  const len = arr.length
  if (arr.length < 2) { // 数组需要变成[] [x]
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right)) as T
}

function merge<T extends number[], V extends number[]>(left: T, right: V): T & V {
  console.log(left, right)
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right) as T & V
}

function inorder(root: TreeNode | null, list: Array<number>) {
  if (root !== null) {
    inorder(root.left, list)
    list.push(root.val as number)
    inorder(root.right, list)
  }
  return list
}