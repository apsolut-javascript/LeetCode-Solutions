/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums.sort();
  const result = [[], nums];
  for (let i = 1; i < nums.length; i++) {
    getSubsets(nums, i).forEach(a => result.push(a));
  }

  return result;
};

function getSubsets(nums, n) {
  if (n > 1) {
    const result = [];
    for (let i = 0; i < nums.length - n + 1; i++) {
      const cur = nums[i];
      getSubsets(nums.slice(i + 1), n - 1).forEach(a => {
        a.unshift(cur);
        result.push(a);
      });
    }

    return result;
  }

  return nums.map(a => [a]);
}
// @lc code=end

// export default subsets;
