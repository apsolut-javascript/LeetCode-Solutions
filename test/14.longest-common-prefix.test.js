import longestCommonPrefix from "../solutions/14.longest-common-prefix"

describe("problem 14", () => {
  test("case 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  test("case 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })

  test("case 3", () => {
    expect(longestCommonPrefix([])).toBe("")
  })

  test("case 4", () => {
    expect(longestCommonPrefix([])).toBe("")
  })
})
