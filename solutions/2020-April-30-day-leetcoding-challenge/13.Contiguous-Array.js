/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const total = nums.reduce((p, c) => p + c, 0);
  const possibleMax = Math.min(total, nums.length - total) * 2;
  let curLength = possibleMax;

  while (curLength > 0) {
    let left = 0;
    let right = curLength;
    let sum = nums.slice(0, right).reduce((p, c) => p + c, 0);
    const expectSum = curLength / 2;
    while (sum != expectSum && right < nums.length) {
      sum += nums[right] - nums[left];
      left++;
      right++;
    }

    if (sum == expectSum) return curLength;
    curLength -= 2;
  }

  return 0;
};

module.exports = findMaxLength;
