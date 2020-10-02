/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length == 0 || target == 0) return [];
  const ans = [];
  while (candidates.length > 0) {
    const val = candidates.pop();
    if (val > target) continue;
    const length = (target / val) | 0;
    const candidate = Array.from({ length }, _ => val);
    let current = length * val;
    if (current == target) ans.push([...candidate]);
    while (candidate.length > 0) {
      const sub = combinationSum([...candidates], target - current);
      sub.forEach(a => {
        const result = [...candidate, ...a];
        result.sort((a, b) => a - b);
        ans.push(result);
      });
      candidate.pop();
      current -= val;
    }
  }

  return ans;
};

module.exports = combinationSum;
// @lc code=end
