/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];
  for (let i = 1; i <= nums.length; i++) {
    result.push(...getSubset(nums, 0, i));
  }
  return result;
};

function getSubset(nums, start, length) {
  const result = [];
  for (let i = start; i < nums.length - length + 1; i++) {
    const val = nums[i];
    if (length > 1) {
      const sub = getSubset(nums, i + 1, length - 1);
      sub.forEach(a => {
        a.unshift(val);
        result.push(a);
      });
    } else {
      result.push([val]);
    }
  }

  return result;
}

module.exports = subsets;
