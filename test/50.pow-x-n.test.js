import target from "../solutions/50.pow-x-n"

describe("problem 50", () => {
  test("case 1", () => {
    expect(target(2.0, 10)).toBe(1024.0)
  })

  test("case 2", () => {
    expect(target(2.1, 3)).toBeCloseTo(9.261)
  })

  test("case 3", () => {
    expect(target(2.0, -2)).toBe(0.25)
  })
})
