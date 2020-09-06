const target = require("./6.Image_Overlap");

test("case 1", () => {
  expect(
    target(
      [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 1],
      ]
    )
  ).toBe(3);
});

test("case 2", () => {
  expect(
    target(
      [
        [1, 0],
        [0, 0],
      ],
      [
        [0, 1],
        [1, 0],
      ]
    )
  ).toBe(1);
});
