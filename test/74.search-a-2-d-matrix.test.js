import target from "../solutions/74.search-a-2-d-matrix";

describe("problem 74", () => {
  test("case 1", () => {
    expect(
      target([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
    ).toBeTruthy();
  });

  test("case 2", () => {
    expect(
      target([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13)
    ).toBeFalsy();
  });
});
