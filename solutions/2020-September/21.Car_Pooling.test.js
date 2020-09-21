const target = require("./21.Car_Pooling");

test("case 1", () => {
  expect(
    target(
      [
        [2, 1, 5],
        [3, 3, 7],
      ],
      4
    )
  ).toBeFalsy();
});

test("case 2", () => {
  expect(
    target(
      [
        [2, 1, 5],
        [3, 3, 7],
      ],
      5
    )
  ).toBeTruthy();
});

test("case 3", () => {
  expect(
    target(
      [
        [2, 1, 5],
        [3, 5, 7],
      ],
      3
    )
  ).toBeTruthy();
});

test("case 4", () => {
  expect(
    target(
      [
        [3, 2, 7],
        [3, 7, 9],
        [8, 3, 9],
      ],
      11
    )
  ).toBeTruthy();
});
