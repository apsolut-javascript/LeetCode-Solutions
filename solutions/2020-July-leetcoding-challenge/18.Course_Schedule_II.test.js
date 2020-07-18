const target = require("./18.Course_Schedule_II");

describe("2020-July-leetcoding-challenge 18", () => {
  test("case 1", () => {
    expect(target(2, [[1, 0]])).toEqual([0, 1]);
  });

  test("case 2", () => {
    expect(
      target(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ])
    ).toEqual([0, 1, 2, 3]);
  });

  test("case 3", () => {
    expect(target(1, [])).toEqual([0]);
  });

  test("case 4", () => {
    expect(target(2, [[0, 1]])).toEqual([1, 0]);
  });
});
