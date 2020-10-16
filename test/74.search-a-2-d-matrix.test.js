const target = require("../solutions/all/74.search-a-2-d-matrix");

describe("problem 74", () => {
  test("case 1", () => {
    expect(
      target(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        3
      )
    ).toBeTruthy();
  });

  test("case 2", () => {
    expect(
      target(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        13
      )
    ).toBeFalsy();
  });

  test.each([
    [[[1]], 1, true],
    [[[1, 2]], 2, true],
    [[[1, 3]], 3, true],
    [[[1], [3]], 3, true],
    [[[1, 3]], 2, false],
    [[[1, 2]], 3, false],
  ])("test 74 | case %#: %j, %d -> %p", (matrix, val, expected) => {
    expect(target(matrix, val)).toBe(expected);
  });
});
