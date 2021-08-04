function spiralOrder(matrix: number[][]): number[] {
  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let x = 0
  let y = 0
  const result: number[] = []

  while (left <= right && top <= bottom) {
    for (x = top; y <= right && left <= right && top <= bottom; y++) {
      result.push(matrix[x][y])
    }
    x++
    top++
    for (y = right; x <= bottom && left <= right && top <= bottom; x++) {
      result.push(matrix[x][y])
    }
    y--
    right--
    for (x = bottom; y >= left && left <= right && top <= bottom; y--) {
      result.push(matrix[x][y])
    }
    x--
    bottom--
    for (y = left; x >= top && left <= right && top <= bottom; x--) {
      result.push(matrix[x][y])
    }
    y++
    left++
  }

  return result
}

export default spiralOrder
