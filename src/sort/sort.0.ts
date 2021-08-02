/**
 * 冒泡排序
 */
function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return
  let temp: number

  for (let i = 0; i <= l - 2; i++) {
    let left = l - 2
    let right = l - 1
    while (left >= i) {
      if (list[left] > list[right]) {
        temp = list[left]
        list[left] = list[right]
        list[right] = temp
      }
      left--
      right--
    }
  }
}

export default sort
