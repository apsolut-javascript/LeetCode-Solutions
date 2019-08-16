import target from "../solutions/59.spiral-matrix-ii"

describe("problem 59", () => {
  test("case 1", () => {
    expect(target(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]])
  })

  test("case 2", () => {
    expect(target(1)).toEqual([[1]])
  })
})
