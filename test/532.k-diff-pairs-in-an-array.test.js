const target = require("../solutions/all/532.k-diff-pairs-in-an-array");

test.each([
  [[3, 1, 4, 1, 5], 2, 2],
  [[1, 3, 1, 5, 4], 0, 1],
  [[1, 2, 3, 4, 5], 1, 4],
])("case %#: %p -> %p", (nums, k, expected) => {
  expect(target(nums, k)).toBe(expected);
});
