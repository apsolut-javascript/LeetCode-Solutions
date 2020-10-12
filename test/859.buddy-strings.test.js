const target = require("../solutions/all/859.buddy-strings");

test.each([
  ["ab", "ba", true],
  ["ab", "ab", false],
  ["aa", "aa", true],
  ["aaaaaaabc", "aaaaaaacb", true],
  ["", "aa", false],
  ["abcaa", "abcbb", false],
])("test 859 | case %#: (%j, %j) -> %j", (a, b, expected) => {
  expect(target(a, b)).toBe(expected);
});
