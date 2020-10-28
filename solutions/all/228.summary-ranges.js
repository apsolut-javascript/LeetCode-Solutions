/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ans = [];
  if (nums.length == 0) return ans;

  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    if (val == end + 1) {
      end++;
    } else {
      ans.push(getRange(start, end));
      start = val;
      end = val;
    }
  }

  ans.push(getRange(start, end));
  return ans;
};

function getRange(start, end) {
  return start == end ? `${start}` : `${start}->${end}`;
}
// @lc code=end
