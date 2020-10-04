const target = require("../solutions/all/1288.Remove-Covered-Intervals");

test.each([
  [
    [
      [1, 4],
      [3, 6],
      [2, 8],
    ],
    2,
  ],
  [
    [
      [1, 4],
      [2, 3],
    ],
    1,
  ],
  [
    [
      [0, 10],
      [5, 12],
    ],
    2,
  ],
  [
    [
      [3, 10],
      [4, 10],
      [5, 11],
    ],
    2,
  ],
  [
    [
      [1, 2],
      [1, 4],
      [3, 4],
    ],
    1,
  ],
])("case %#: %j -> %p", (args, expected) => {
  expect(target(args)).toBe(expected);
});
