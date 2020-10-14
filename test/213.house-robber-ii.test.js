const target = require("../solutions/all/213.house-robber-ii");

test.each([
  [[2, 3, 2], 3],
  [[1, 2, 3, 1], 4],
  [[0], 0],
  [[1, 7, 9, 2], 10],
])("test 213 | case %#: %j -> %j", (nums, expected) => {
  expect(target(nums)).toBe(expected);
});
