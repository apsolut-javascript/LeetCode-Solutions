const target = require("./25.Largest_Number");
test("case 1", () => {
  expect(target([12, 123])).toBe("12312");
});

test("case 2", () => {
  expect(target([34, 341])).toBe("34341");
});

test("case 3", () => {
  expect(target([34, 343, 29])).toBe("3434329");
});

test("case 4", () => {
  expect(target([34, 344])).toBe("34434");
});

test("case 5", () => {
  expect(target([12, 128])).toBe("12812");
});

test("case 6", () => {
  expect(target([128, 12])).toBe("12812");
});

test("case 7", () => {
  expect(target([22, 2223])).toBe("222322");
});

test("case 8", () => {
  expect(target([22, 2221])).toBe("222221");
});

test("case 9", () => {
  expect(target([121, 12])).toBe("12121");
});

test("case 10", () => {
  expect(target([0, 0, 0])).toBe("0");
});

test("case 11", () => {
  expect(target([10, 0])).toBe("100");
});
