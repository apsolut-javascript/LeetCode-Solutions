const target = require("./1.Largest_Time_for_Given_Digits");
test("test 1", () => {
  expect(target([1, 2, 3, 4])).toBe("23:41");
});

test("test 2", () => {
  expect(target([5, 5, 5, 5])).toBe("");
});

test("test 3", () => {
  expect(target([0, 0, 0, 0])).toBe("00:00");
});
