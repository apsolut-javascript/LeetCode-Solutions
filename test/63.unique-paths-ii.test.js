import target from "../solutions/63.unique-paths-ii"

describe("problem 63", () => {
  test("case 1", () => {
    expect(target([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2)
  })

  test("case 2", () => {
    expect(target([[0]])).toBe(1)
  })

  test("case 3", () => {
    expect(target([[1]])).toBe(0)
  })

  test("case 4", () => {
    expect(target([[0, 1]])).toBe(0)
  })

  test("case 5", () => {
    expect(target([[0, 1, 0, 0, 0]])).toBe(0)
  })

  test("case 6", () => {
    expect(target([[1], [0]])).toBe(0)
  })

  test("case 7", () => {
    expect(target([[1, 0], [0, 0]])).toBe(0)
  })

  test("case 8", () => {
    expect(target([[0, 0], [1, 1], [0, 0]])).toBe(0)
  })
})
