import target from "../solutions/58.length-of-last-word"

describe("problem 58", () => {
  test("case 1", () => {
    expect(target("Hello World")).toBe(5)
  })

  test("case 2", () => {
    expect(target("World")).toBe(5)
  })

  test("case 3", () => {
    expect(target("")).toBe(0)
  })

  test("case 4", () => {
    expect(target("World ")).toBe(5)
  })
})
