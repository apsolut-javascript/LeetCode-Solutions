const target = require("./2.Contains_Duplicate_III");

test("1", () => {
  expect(target([1, 2, 3, 1], 3, 0)).toBeTruthy();
});

test("2", () => {
  expect(target([1, 0, 1, 1], 1, 2)).toBeTruthy();
});

test("3", () => {
  expect(target([1, 5, 9, 1, 5, 9], 2, 3)).toBeFalsy();
});
