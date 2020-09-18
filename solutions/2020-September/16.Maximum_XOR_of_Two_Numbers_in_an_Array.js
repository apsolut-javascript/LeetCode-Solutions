/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  if (!nums.length) return 0;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const val = nums[i] ^ nums[j];
      if (val > max) max = val;
    }
  }

  return max;
};
