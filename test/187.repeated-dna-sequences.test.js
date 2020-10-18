const target = require("../solutions/all/187.repeated-dna-sequences");
test.each([
  ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC", "CCCCCAAAAA"]],
  ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
  ["", []],
])("test 187 | case %#: %j -> %j", (s, expected) => {
  expect(target(s)).toEqual(expected);
});
