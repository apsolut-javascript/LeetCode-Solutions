import removeDuplicates from "../solutions/26.remove-duplicates-from-sorted-array"

describe("problem 26", () => {
  test("case 1", () => {
    const input = [1, 1, 2]
    expect(removeDuplicates(input)).toBe(2)
    const answer = [1, 2]
    answer.forEach((a, i) => {
      expect(input).toContainEqual(a)
    })
    expect(input).toHaveLength(answer.length)
  })

  test("case 2", () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(input)).toBe(5)
    const answer = [0, 1, 2, 3, 4]
    answer.forEach((a, i) => {
      expect(input).toContainEqual(a)
    })
    expect(input).toHaveLength(answer.length)
  })
})
