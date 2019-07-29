import strStr from "../solutions/28.implement-str-str"

describe("problem 28", () => {
  test("case 1", () => {
    expect(strStr("hello", "ll")).toBe(2)
  })

  test("case 2", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1)
  })

  test("case 3", () => {
    expect(strStr("", "")).toBe(0)
  })
})
