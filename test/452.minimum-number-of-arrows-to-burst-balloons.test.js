const target = require("../solutions/all/452.minimum-number-of-arrows-to-burst-balloons");

test.each([
  [
    [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ],
    2,
  ],
  [
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    4,
  ],
  [
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    2,
  ],
  [[[1, 2]], 1],
  [
    [
      [2, 3],
      [2, 3],
    ],
    1,
  ],
  [[], 0],
  [
    [
      [9, 12],
      [1, 10],
      [4, 11],
      [8, 12],
      [3, 9],
      [6, 9],
      [6, 7],
    ],
    2,
  ],
])("test 452 | case %#: %j -> %s", (args, expected) => {
  expect(target(args)).toBe(expected);
});
