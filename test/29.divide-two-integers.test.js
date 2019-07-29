import divide from "../solutions/29.divide-two-integers"

describe("problem 29", () => {
  test("case 1", () => {
    expect(divide(10, 3)).toBe(3)
  })

  test("case 2", () => {
    expect(divide(7, -3)).toBe(-2)
  })

  test("case 3", () => {
    expect(divide(1, 1)).toBe(1)
  })

  test("case 4", () => {
    expect(divide(-1, -1)).toBe(1)
  })

  test("case 5", () => {
    expect(divide(-2147483648, -1)).toBe(2147483647)
  })

  test("case 6", () => {
    expect(divide(-2147483648, 2)).toBe(-1073741824)
  })

  test("case 7", () => {
    expect(divide(1, 2)).toBe(0)
  })

  test("case 8", () => {
    expect(divide(2, 2)).toBe(1)
  })

  test("case 9", () => {
    expect(divide(5, 2)).toBe(2)
  })
})
