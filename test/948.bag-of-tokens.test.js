const target = require("../solutions/all/948.bag-of-tokens");

test.each([
  [[100], 50, 0],
  [[100, 200], 150, 1],
  [[100, 200, 300, 400], 200, 2],
  [[59, 0, 15, 33, 79, 72, 34, 62, 4, 16], 99, 6],
])("test 948 | case %# %j, %d, -> %d", (tokens, P, ans) => {
  expect(target(tokens, P)).toBe(ans);
});
