const target = require("./4.Partition_Labels");
test("case 1", () => {
  expect(target("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
});
