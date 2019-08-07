import target from "../solutions/44.wildcard-matching"

describe("problem 44", () => {
  test.each([
    ["aa", "a", false],
    ["aa", "*", true],
    ["cb", "?a", false],
    ["adceb", "*a*b", true],
    ["acdcb", "a*c?b", false],
    ["acdcb", "*", true],
    ["b", "b", true],
    ["ho", "ho**", true],
    ["ho", "h?", true],
    ["hoo", "*h?o", true],
    // [
    //   "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
    //   "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb",
    //   true,
    // ],
  ])("test", (...args) => {
    expect(target.apply(null, args.slice(0, -1))).toBe(args[args.length - 1])
  })
})
