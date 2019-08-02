import target from "../solutions/35.search-insert-position"

describe("problem 35", () => {
  test("case 1", () => {
    expect(target([1, 3, 5, 6], 5)).toBe(2)
  })

  test("case 2", () => {
    expect(target([1, 3, 5, 6], 2)).toBe(1)
  })

  test("case 3", () => {
    expect(target([1, 3, 5, 6], 7)).toBe(4)
  })

  test("case 4", () => {
    expect(target([1, 3, 5, 6], 0)).toBe(0)
  })
})
