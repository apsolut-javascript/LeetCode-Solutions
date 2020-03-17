import target from "../solutions/80.remove-duplicates-from-sorted-array-ii";

describe("problem 80", () => {
  test("case 1", () => {
    expect(target([1, 1, 1, 2, 2, 3])).toBe(5);
  });

  test("case 2", () => {
    expect(target([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
  });
});
