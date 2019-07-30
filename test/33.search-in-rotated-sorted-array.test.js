import target from "../solutions/33.search-in-rotated-sorted-array"

describe("problem 33", () => {
  test("case 1", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })

  test("case 2", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })

  test("case 3", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0)
  })

  test("case 4", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6)
  })

  test("case 5", () => {
    expect(target([], 2)).toBe(-1)
  })
})
