import threeSumClosest from "../solutions/16.3-sum-closest"

describe("problem 16", () => {
  test("1", () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
  })
})
