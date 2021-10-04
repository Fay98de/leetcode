/**
 * 有效的数独
 * 对于一个坐标为 [x, y] 的字符，需满足以下 3 个条件才能判定数独有效：
 * 1. 在第 x 行唯一。
 * 2. 在第 y 列唯一。
 * 3. 在第 Math.floor(x / 3) * 3 + Math.floor(y / 3) 个 Box 中唯一。（为什么乘以 3？因为一行有 3 个盒子）
 * 解决思路是建立 row、col、box 的哈希缓存，如果发现缓存重复，就判断为不是有效数组
 * @param {string[][]} board
 * @returns {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  const rows: string[][] = [[], [], [], [], [], [], [], [], []]
  const cols: string[][] = [[], [], [], [], [], [], [], [], []]
  const boxes: string[][] = [[], [], [], [], [], [], [], [], []]

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      const c = board[x][y]
      if (c === '.') continue
      if (rows[x].includes(c)) return false
      rows[x].push(c)
      if (cols[y].includes(c)) return false
      cols[y].push(c)
      const boxIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3)
      if (boxes[boxIndex].includes(c)) return false
      boxes[boxIndex].push(c)
    }
  }
  return true
}

export default isValidSudoku
