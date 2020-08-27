const target = require("./27.Find_Right_Interval");

describe("2020-august 27", () => {
  test("case 1", () => {
    const result = target([
      [3, 4],
      [2, 3],
      [1, 2],
    ]);
    expect(result).toEqual([-1, 0, 1]);
  });

  test("case 2", () => {
    const result = target([
      [1, 4],
      [2, 3],
      [3, 4],
    ]);
    expect(result).toEqual([-1, 2, -1]);
  });
});
