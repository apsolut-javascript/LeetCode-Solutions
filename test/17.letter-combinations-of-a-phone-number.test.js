import letterCombinations from "../solutions/17.letter-combinations-of-a-phone-number"

describe("problem 17", () => {
  test("case 1", () => {
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    const result = letterCombinations("23")
    expect(result).toHaveLength(expected.length)
    result.forEach(a => expect(expected).toContain(a))
  })

  test("case 2", () => {
    const expected = []
    const result = letterCombinations("")
    expect(result).toHaveLength(expected.length)
    result.forEach(a => expect(expected).toContain(a))
  })
})
