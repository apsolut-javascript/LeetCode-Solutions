const target = require("../solutions/all/1009.complement-of-base-10-integer");

test.each([
  [5, 2],
  [7, 0],
  [10, 5],
  [0, 1],
])("case %#, %d -> %d", (args, expected) => {
  expect(target(args)).toBe(expected);
});
