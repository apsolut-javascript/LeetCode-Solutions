import target from "../solutions/88.merge-sorted-array";

describe("problem 88", () => {
  test("case 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    target(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("case 2", () => {
    const nums1 = [2, 3, 4, 0, 0, 0];
    target(nums1, 3, [1, 1, 1], 3);
    expect(nums1).toEqual([1, 1, 1, 2, 3, 4]);
  });

  test("case 3", () => {
    const nums1 = [1, 1, 1, 0, 0, 0];
    target(nums1, 3, [2, 2, 2], 3);
    expect(nums1).toEqual([1, 1, 1, 2, 2, 2]);
  });
});
