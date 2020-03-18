import target from "../solutions/81.search-in-rotated-sorted-array-ii";

describe("problem 81", () => {
  test("case 1", () => {
    expect(target([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy();
  });

  test("case 2", () => {
    expect(target([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy();
  });
});
