import target from "../solutions/45.jump-game-ii"

describe("problem 45", () => {
  test("case 1", () => {
    expect(target([2, 3, 1, 1, 4])).toBe(2)
  })

  test("case 2", () => {
    expect(target([10, 1, 1, 1])).toBe(1)
  })

  test("case 3", () => {
    expect(target([1, 1, 1, 1])).toBe(3)
  })

  test("case 4", () => {
    expect(target([4, 2, 1, 1, 1, 1])).toBe(2)
  })

  test("case 5", () => {
    expect(target([3, 2, 1])).toBe(1)
  })

  test("case 6", () => {
    expect(target([2, 3, 1])).toBe(1)
  })
})
