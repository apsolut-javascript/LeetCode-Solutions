import target from "../solutions/75.sort-colors";

describe("problem 75", () => {
  test("case 1", () => {
    expect(target([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
