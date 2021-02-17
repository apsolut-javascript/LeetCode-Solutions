const target = require('../solutions/all/90.subsets-ii')

test.each([
    [[1, 2, 2], 6],
    [[1, 1,], 3],
    [[1, 2, 3, 4, 5, 6, 7, 8, 10, 0], 1024],
])("test 90 | case %#: %j -> %j", (s, expected) => {
    expect(target(s)).toHaveLength(expected);
});
