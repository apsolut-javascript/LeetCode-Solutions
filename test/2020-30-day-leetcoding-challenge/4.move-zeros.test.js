import target from "../../solutions/2020-30-day-leetcoding-challenge/4.move-zeros";

describe("tests for 2020-30-day-leetcoding-challenge problem 4", () => {
  test("case 1", () => {
    const nums = [0, 1, 0, 3, 12];
    target(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
});
