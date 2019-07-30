import target from "../solutions/32.longest-valid-parentheses"

describe("problem 32", () => {
  test("case 1", () => {
    expect(target("(()")).toBe(2)
  })

  test("case 2", () => {
    expect(target(")()())")).toBe(4)
  })

  test("case 3", () => {
    expect(target("))))((((")).toBe(0)
  })

  test("case 5", () => {
    expect(target("(())")).toBe(4)
  })

  test("case 6", () => {
    expect(target("()")).toBe(2)
  })

  test("case 7", () => {
    expect(target("()()")).toBe(4)
  })
})
