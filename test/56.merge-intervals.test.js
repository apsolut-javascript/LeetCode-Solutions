import target from "../solutions/56.merge-intervals"

describe("problem 56", () => {
  test("case 1", () => {
    expect(target([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])
  })

  test("case 2", () => {
    expect(target([[1, 4], [4, 5]])).toEqual([[1, 5]])
  })

  test("case 3", () => {
    expect(target([[1, 2], [4, 5]])).toEqual([[1, 2], [4, 5]])
  })

  test("case 4", () => {
    expect(target([])).toEqual([])
  })

  test("case 5", () => {
    expect(target([[1, 4], [2, 5]])).toEqual([[1, 5]])
  })

  test("case 6", () => {
    expect(target([[1, 4], [0, 5]])).toEqual([[0, 5]])
  })

  test("case 7", () => {
    expect(target([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])).toEqual([[1, 10]])
  })

  test("case 8", () => {
    expect(target([[2, 3], [4, 6], [5, 7], [3, 4]])).toEqual([[2, 7]])
  })

  test("case 9", () => {
    expect(target([[1, 4], [5, 6]])).toEqual([[1, 4], [5, 6]])
  })
})
