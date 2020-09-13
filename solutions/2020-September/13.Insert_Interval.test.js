const target = require("./13.Insert_Interval");
test("case 1", () => {
  const result = target([[1, 5]], [0, 0]);
  expect(result).toEqual([
    [0, 0],
    [1, 5],
  ]);
});

test("case 2", () => {
  const result = target(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  );
  expect(result).toEqual([
    [1, 5],
    [6, 9],
  ]);
});

test("case 3", () => {
  expect(
    target(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    )
  ).toEqual([
    [1, 2],
    [3, 10],
    [12, 16],
  ]);
});

test("case 4", () => {
  const result = target([], [5, 7]);
  expect(result).toEqual([[5, 7]]);
});

test("case 5", () => {
  const result = target(
    [
      [3, 5],
      [12, 15],
    ],
    [6, 6]
  );
  console.log("---------> : result", result);
  expect(result).toEqual([
    [3, 5],
    [6, 6],
    [12, 15],
  ]);
});
