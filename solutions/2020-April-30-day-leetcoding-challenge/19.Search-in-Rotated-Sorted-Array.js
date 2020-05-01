/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let pivot = 0;
  const first = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= first) continue;

    pivot = i;
    break;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const i = (mid + pivot) % nums.length;
    const cur = nums[i];
    if (cur == target) return i;
    if (cur < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = search;
