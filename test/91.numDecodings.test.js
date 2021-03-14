const target = require('../solutions/all/91.numDecodings')

test.each([
    ["12", 2],
    ["121", 3],
    ["226", 3],
    ["353535", 1],
    ["5555555", 1],
    ["0", 0],
    ["10", 1],
    ["101010", 1],
    ["101011", 2],
    ["10101", 1],
    ["301", 0],
    ["331", 1],
    ["130", 0],
    ["1", 1],
])("test 91 | case %#: %j -> %j", (input, expected) => {
    expect(target(input)).toBe(expected);
});
