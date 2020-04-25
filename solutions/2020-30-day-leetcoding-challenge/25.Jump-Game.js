/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let steps = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= steps) {
      steps = 1;
    } else {
      steps++;
    }
  }

  return steps == 1;
};

module.exports = canJump;
