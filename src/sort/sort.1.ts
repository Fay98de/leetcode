/**
 * 选择排序
 */

function min(list: number[], start: number = 0) {
  let index = start
  for (let i = start; i < list.length; i++) {
    if (list[i] < list[index]) {
      index = i
    }
  }
  return index
}

function sort(list: number[]) {
  const l = list.length
  if (l <= 1) return
  let temp: number

  for (let i = 0; i < l; i++) {
    let j = min(list, i)
    temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
}

export default sort
