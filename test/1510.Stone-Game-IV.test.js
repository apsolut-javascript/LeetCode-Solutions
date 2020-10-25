const target = require("../solutions/all/1510.Stone-Game-IV");

test.each([
  [1, true],
  [2, false],
  [4, true],
  [17, false],
])("test 1510 | case %#: %d -> %j", (n, ans) => {
  expect(target(n)).toBe(ans);
});
