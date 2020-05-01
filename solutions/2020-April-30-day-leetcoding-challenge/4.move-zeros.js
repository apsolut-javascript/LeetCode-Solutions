/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  outer: for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] != 0) {
        nums[i] = nums[j];
        nums[j] = 0;
        continue outer;
      }
    }
    break;
  }
};

module.exports = moveZeroes;
