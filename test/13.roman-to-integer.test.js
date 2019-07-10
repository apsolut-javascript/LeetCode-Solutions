import romanToInt from "../solutions/13.roman-to-integer"

describe("Tests for Roman to Int", () => {
  test("should work for I", () => {
    expect(romanToInt("I")).toBe(1)
  })

  test("should work for III", () => {
    expect(romanToInt("III")).toBe(3)
  })

  test("should work for IV", () => {
    expect(romanToInt("IV")).toBe(4)
  })

  test("should work for IX", () => {
    expect(romanToInt("IX")).toBe(9)
  })

  test("should work for LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58)
  })

  test("should work for DCXXI", () => {
    expect(romanToInt("DCXXI")).toBe(621)
  })

  test("should work for MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994)
  })
})
