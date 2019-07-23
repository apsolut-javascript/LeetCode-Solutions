import isValid from "../solutions/20.valid-parentheses"

describe("problem 20", () => {
  test("case 1", () => {
    expect(isValid("()")).toBeTruthy()
  })

  test("case 2", () => {
    expect(isValid("()[]{}")).toBeTruthy()
  })

  test("case 3", () => {
    expect(isValid("(]")).toBeFalsy()
  })

  test("case 4", () => {
    expect(isValid("([)]")).toBeFalsy()
  })

  test("case 5", () => {
    expect(isValid("{[]}")).toBeTruthy()
  })
})
