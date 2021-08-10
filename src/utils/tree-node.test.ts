import TreeNode from './TreeNode'

const { fromArray, toLevelArray, toArray } = TreeNode

describe(`TreeNode.toLevelArray`, () => {
  test(`[4, 2, 7, 1, 3, 6, 9]`, () => {
    const node = fromArray([4, 2, 7, 1, 3, 6, 9])
    const received = toLevelArray(node)
    expect(received).toEqual([[4], [2, 7], [1, 3, 6, 9]])
  })

  test(`[1, null, 2, 3]`, () => {
    const node = fromArray([1, null, 2, 3])
    const received = toLevelArray(node)
    expect(received).toEqual([[1], [null, 2], [3, null]])
  })

  test(`[]`, () => {
    const node = fromArray([])
    const received = toLevelArray(node)
    expect(received).toEqual([])
  })

  test(`[1]`, () => {
    const node = fromArray([1])
    const received = toLevelArray(node)
    expect(received).toEqual([[1]])
  })

  test(`[1, null, 2]`, () => {
    const node = fromArray([1, null, 2])
    const received = toLevelArray(node)
    expect(received).toEqual([[1], [null, 2]])
  })

  test(`[3, 9, 20, null, null, 15, 7]`, () => {
    const node = fromArray([3, 9, 20, null, null, 15, 7])
    const received = toLevelArray(node)
    expect(received).toEqual([[3], [9, 20], [null, null, 15, 7]])
  })

  test(`[1, 2, 2, 3, 3, null, null, 4, 4]`, () => {
    const node = fromArray([1, 2, 2, 3, 3, null, null, 4, 4])
    const received = toLevelArray(node)
    expect(received).toEqual([[1], [2, 2], [3, 3, null, null], [4, 4, null, null]])
  })

  test(`[1, 2, 2, 3, null, null, 3, 4, null, null, 4]`, () => {
    const node = fromArray([1, 2, 2, 3, null, null, 3, 4, null, null, 4])
    const received = toLevelArray(node)
    expect(received).toEqual([[1], [2, 2], [3, null, null, 3], [4, null, null, 4]])
  })
})

describe(`TreeNode.toArray`, () => {
  test(`[4, 2, 7, 1, 3, 6, 9]`, () => {
    const node = fromArray([4, 2, 7, 1, 3, 6, 9])
    const received = toArray(node)
    expect(received).toEqual([4, 2, 7, 1, 3, 6, 9])
  })

  test(`[1, null, 2, 3]`, () => {
    const node = fromArray([1, null, 2, 3])
    const received = toArray(node)
    expect(received).toEqual([1, null, 2, 3])
  })

  test(`[]`, () => {
    const node = fromArray([])
    const received = toArray(node)
    expect(received).toEqual([])
  })

  test(`[1]`, () => {
    const node = fromArray([1])
    const received = toArray(node)
    expect(received).toEqual([1])
  })

  test(`[1, null, 2]`, () => {
    const node = fromArray([1, null, 2])
    const received = toArray(node)
    expect(received).toEqual([1, null, 2])
  })

  test(`[3, 9, 20, null, null, 15, 7]`, () => {
    const node = fromArray([3, 9, 20, null, null, 15, 7])
    const received = toArray(node)
    expect(received).toEqual([3, 9, 20, null, null, 15, 7])
  })

  test(`[1, 2, 2, 3, 3, null, null, 4, 4]`, () => {
    const node = fromArray([1, 2, 2, 3, 3, null, null, 4, 4])
    const received = toArray(node)
    expect(received).toEqual([1, 2, 2, 3, 3, null, null, 4, 4])
  })

  test(`[1, 2, 2, 3, null, null, 3, 4, null, null, 4]`, () => {
    const node = fromArray([1, 2, 2, 3, null, null, 3, 4, null, null, 4])
    const received = toArray(node)
    expect(received).toEqual([1, 2, 2, 3, null, null, 3, 4, null, null, 4])
  })
})
