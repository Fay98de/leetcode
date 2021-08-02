/**
 * 插入排序
 */
function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return
  let temp: number

  for (let i = 1; i < l; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j] >= list[j - 1]) break
      temp = list[j]
      list[j] = list[j - 1]
      list[j - 1] = temp
    }
  }
}

export default sort
