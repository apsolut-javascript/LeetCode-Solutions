import target from "../solutions/48.rotate-image"

describe("problem 48", () => {
  test("case 1", () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    target(input)
    expect(input).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
  })

  test("case 2", () => {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]
    target(input)
    expect(input).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ])
  })
})
