import target from "../solutions/62.unique-paths"

describe("problem 62", () => {
  test("case 1", () => {
    expect(target(3, 2)).toBe(3)
  })

  test("case 2", () => {
    expect(target(7, 3)).toBe(28)
  })

  test("case 3", () => {
    expect(target(7, 2)).toBe(7)
  })

  test("case 4", () => {
    expect(target(3, 1)).toBe(1)
  })

  test("case 5", () => {
    expect(target(3, 7)).toBe(28)
  })

  test("case 6", () => {
    expect(target(7, 4)).toBe(84)
  })
})
