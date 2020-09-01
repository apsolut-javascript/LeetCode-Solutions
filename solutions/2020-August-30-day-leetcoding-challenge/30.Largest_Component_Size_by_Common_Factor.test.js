const target = require("./30.Largest_Component_Size_by_Common_Factor");

describe("2020-august 30", () => {
  test("case 1", () => {
    const result = target([4, 6, 15, 35]);
    expect(result).toBe(4);
  });

  test("case 2", () => {
    const result = target([20, 50, 9, 63]);
    expect(result).toBe(2);
  });

  test("case 3", () => {
    const result = target([2, 3, 6, 7, 4, 12, 21, 39]);
    expect(result).toBe(8);
  });

  test("case 4", () => {
    const result = target([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toBe(6);
  });
});
