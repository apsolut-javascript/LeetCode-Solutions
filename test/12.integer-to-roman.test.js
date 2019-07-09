import intToRoman from "../solutions/12.integer-to-roman"

describe("Tests for problem 12: Integer to Roman", () => {
  test("should work for 1", () => {
    expect(intToRoman(1)).toBe("I")
  })

  test("should work for 3", () => {
    expect(intToRoman(3)).toBe("III")
  })

  test("should work for 4", () => {
    expect(intToRoman(4)).toBe("IV")
  })

  test("should work for 20", () => {
    expect(intToRoman(20)).toBe("XX")
  })

  test("should work for 9", () => {
    expect(intToRoman(9)).toBe("IX")
  })

  test("should work for 58", () => {
    expect(intToRoman(58)).toBe("LVIII")
  })

  test("should work for 1994", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV")
  })

  test("should work for 3999", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX")
  })
})
