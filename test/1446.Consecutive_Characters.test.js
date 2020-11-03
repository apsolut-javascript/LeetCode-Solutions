const target = require("../solutions/all/1446.Consecutive_Characters");

test.each([
  ["leetcode", 2],
  ["cc", 2],
  ["abbcccddddeeeeedcba", 5],
  ["triplepillooooow", 5],
  ["hooraaaaaaaaaaay", 11],
  ["tourist", 1],
])("test 1446 | case %#: %s -> %d", (input, ans) => {
  expect(target(input)).toBe(ans);
});
