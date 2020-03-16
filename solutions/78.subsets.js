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
  const result = [];
  nums.sort();
  recurSubset(nums).forEach(a => result.push(a));
  result.sort((a, b) => {
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      if (a[i] != b[i]) return a[i] - b[i];
    }

    return a.length - b.length;
  });
  for (let i = result.length - 1; i > 0; i--) {
    const cur = result[i];
    const next = result[i - 1];
    if (cur.length != next.length) continue;

    if (cur.every((a, i) => a == next[i])) {
      result.splice(i, 1);
    }
  }

  result.push([]);

  return result;
};

function recurSubset(nums) {
  if (nums.length > 1) {
    const result = [nums];
    for (let i = 0; i < nums.length; i++) {
      const sub = recurSubset(nums.slice(0, i).concat(nums.slice(i + 1)));
      sub.forEach(a => result.push(a));
    }

    return result;
  }

  return [nums];
}
// @lc code=end

export default subsets;
