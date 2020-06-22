/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    const mask = 1 << i;
    const sum = nums.filter(a => (a & mask) != 0).length;
    if (sum % 3 != 0) result |= mask;
  }
  return result;
};

singleNumber([2, 2, 3, 2]);
singleNumber([0, 1, 0, 1, 0, 1, 99]);
singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]);
