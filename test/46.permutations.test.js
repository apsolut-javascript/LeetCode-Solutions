import target from "../solutions/46.permutations"

describe("problem 46", () => {
  test("case 1", () => {
    expect(target([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })
})
