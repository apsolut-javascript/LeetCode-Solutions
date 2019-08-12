import target from "../solutions/44.wildcard-matching"

describe("problem 44", () => {
  test("case 1", () => {
    expect(target("aa", "a")).toBeFalsy()
  })

  test("case 2", () => {
    expect(target("aa", "*")).toBeTruthy()
  })

  test("case 3", () => {
    expect(target("cb", "?a")).toBeFalsy()
  })

  test("case 4", () => {
    expect(target("adceb", "*a*b")).toBeTruthy()
  })

  test("case 5", () => {
    expect(target("acdcb", "a*c?b")).toBeFalsy()
  })

  test("case 6", () => {
    expect(target("adceb", "*")).toBeTruthy()
  })

  test("case 7", () => {
    expect(target("b", "b")).toBeTruthy()
  })

  test("case 8", () => {
    expect(target("ho", "ho**")).toBeTruthy()
  })

  test("case 9", () => {
    expect(target("ho", "h?")).toBeTruthy()
  })

  test("case 10", () => {
    expect(target("hoo", "*h?o")).toBeTruthy()
  })

  test("case 11", () => {
    expect(
      target(
        "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
        "**aa***ba**aa**bb**aba**aaaaaaaaaaaa*a*"
      )
    ).toBeFalsy()
  })

  test("case 12", () => {
    expect(
      target(
        "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
        "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"
      )
    ).toBeFalsy()
  })

  test("case 13", () => {
    expect(target("abce", "abc*??")).toBeFalsy()
  })
})
