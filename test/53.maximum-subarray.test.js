import target from "../solutions/53.maximum-subarray"

describe("problem 53", () => {
  test("case 1", () => {
    expect(target([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  test("case 2", () => {
    expect(target([1, 2])).toBe(3)
  })
})
