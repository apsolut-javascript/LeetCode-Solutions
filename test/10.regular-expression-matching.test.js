import isMatch from "../solutions/10.regular-expression-matching"

describe("problem 10", () => {
  test("1", () => {
    expect(isMatch("aa", "a")).toBeFalsy()
  })

  test("2", () => {
    expect(isMatch("aa", "a*")).toBeTruthy()
  })

  test("3", () => {
    expect(isMatch("ab", ".*")).toBeTruthy()
  })

  test("4", () => {
    expect(isMatch("aab", "c*a*b")).toBeTruthy()
  })

  test("5", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBeFalsy()
  })

  test("6", () => {
    expect(isMatch("a", ".*..a*")).toBeFalsy()
  })

  test("7", () => {
    expect(isMatch("a", "c*a")).toBeTruthy()
  })
})
