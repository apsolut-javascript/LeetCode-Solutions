import fourSum from "../solutions/18.4-sum"
describe("problem 18", () => {
  test("case 1", () => {
    const expected = [[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]]
    const result = fourSum([1, 0, -1, 0, -2, 2], 0)
    expect(result).toHaveLength(expected.length)
    result.forEach(a => expect(expected).toContainEqual(a))
  })
})
