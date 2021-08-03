function merge(leftArray: number[], rightArray: number[]) {
  let l = 0
  let r = 0
  const result: number[] = []

  while (l < leftArray.length || r < rightArray.length) {
    if (!rightArray[r] || leftArray[l] <= rightArray[r]) {
      result.push(leftArray[l])
      l++
    } else {
      result.push(rightArray[r])
      r++
    }
  }

  return result
}

function mergeSort(list: number[]): number[] {
  if (list.length <= 1) return list
  const m = Math.floor(list.length / 2)
  const leftArray = mergeSort(list.slice(0, m))
  const rightArray = mergeSort(list.slice(m))
  const sortedArray = merge(leftArray, rightArray)

  return sortedArray
}

/**
 * 归并排序
 */
function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return list
  const sortedArray = mergeSort(list)

  for (let i = 0; i < list.length; i++) {
    list[i] = sortedArray[i]
  }
}

export default sort
