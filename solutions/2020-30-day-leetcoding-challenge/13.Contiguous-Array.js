/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const total = nums.reduce((p, c) => p + c, 0);
  const possibleMax = Math.min(total, nums.length - total) * 2;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let length = 0;
    let sum = 0;
    for (let j = i; j < Math.min(nums.length, i + possibleMax); j += 2) {
      sum += nums[j] + nums[j + 1];
      if ((j + 2 - i) / 2 == sum) {
        length = j + 2 - i;
      }
    }
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};

module.exports = findMaxLength;
