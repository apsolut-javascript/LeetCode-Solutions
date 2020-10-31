const target = require("../solutions/all/673.number-of-longest-increasing-subsequence");

test.each([
  [[1, 3, 5, 4, 7], 2],
  [[2, 2, 2, 2, 2], 5],
  [[2, 1], 2],
  [[3, 1, 2], 1],
])("test 673 | case %#: %j -> %d", (input, expected) => {
  expect(target(input)).toBe(expected);
});
