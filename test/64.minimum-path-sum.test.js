import target from "../solutions/64.minimum-path-sum"

describe("problem 64", () => {
  test("case 1", () => {
    expect(target([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7)
  })

  test("case 2", () => {
    expect(target([[3]])).toBe(3)
  })

  test("case 3", () => {
    expect(target([[3, 1]])).toBe(4)
  })

  test("case 4", () => {
    expect(target([[3], [4]])).toBe(7)
  })
})
