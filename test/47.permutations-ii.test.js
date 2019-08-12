import target from "../solutions/47.permutations-ii"

describe("problem 47", () => {
  test("case 1", () => {
    expect(target([1, 1, 2])).toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]])
  })
})
