/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  outer: for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur == 0) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == cur) {
        nums[j] = 0;
        continue outer;
      }
    }

    return cur;
  }

  return nums[nums.length - 1];
};

module.exports = singleNumber;
