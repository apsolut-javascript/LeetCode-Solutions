const target = require("../solutions/all/735.asteroid-collision");

test.each([
  [
    [5, 10, -5],
    [5, 10],
  ],
  [[8, -8], []],
  [[10, 2, -5], [10]],
  [
    [-2, -1, 1, 2],
    [-2, -1, 1, 2],
  ],
])("test 735 | case %#: %j -> %j", (input, expected) => {
  expect(target(input)).toEqual(expected);
});
