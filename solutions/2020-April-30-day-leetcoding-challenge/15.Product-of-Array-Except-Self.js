/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeros = nums.filter(a => a == 0).length;
  if (zeros > 1) {
    return nums.map(a => 0);
  }

  const product = nums.filter(a => a != 0).reduce((p, c) => p * c, 1);
  if (zeros > 0) {
    return nums.map(a => (a == 0 ? product : 0));
  }
  return nums.map(a => (a == 0 ? 0 : product * a ** -1));
};

module.exports = productExceptSelf;
