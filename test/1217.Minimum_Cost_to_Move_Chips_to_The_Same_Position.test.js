const target = require("../solutions/all/1217.Minimum_Cost_to_Move_Chips_to_The_Same_Position");

test.each([
  [[2, 2, 2, 3, 3], 2],
  [[1, 1000000000], 1],
])("test 1217 | case %#: %j -> %d", (input, ans) => {
  expect(target(input)).toBe(ans);
});
