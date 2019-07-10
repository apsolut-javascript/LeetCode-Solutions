import maxArea from "../solutions/11.container-with-most-water"

describe("tests for problem 11", () => {
  test("should pass all cases", () => {
    const cases = [[[1, 8, 6, 2, 5, 4, 8, 3, 7], 49]]
    cases.forEach(c => {
      const [input, output] = c
      expect(maxArea(input)).toBe(output)
    })
  })
})
