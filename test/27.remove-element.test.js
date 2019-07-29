import removeElement from "../solutions/27.remove-element"

describe("problem 27", () => {
  test("case 1", () => {
    const input = [3, 2, 2, 3]
    const expected = [2, 2]
    const result = removeElement(input, 3)
    expect(result).toBe(2)
    expected.forEach(a => {
      expect(input).toContainEqual(a)
    })
    expect(input).toHaveLength(expected.length)
  })

  test("case 2", () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2]
    const expected = [0, 1, 3, 0, 4]
    const result = removeElement(input, 2)
    expect(result).toBe(5)
    expected.forEach(a => {
      expect(input).toContainEqual(a)
    })
    expect(input).toHaveLength(expected.length)
  })
})
