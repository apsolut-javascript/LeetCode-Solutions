/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  while (nums.length > 1) {
    const cur = nums.splice(0, 1)[0];
    const i = nums.findIndex(a => a == cur);
    if (i == -1) return cur;

    nums.splice(i, 1);
  }

  return nums[0];
};

module.exports = singleNumber;
