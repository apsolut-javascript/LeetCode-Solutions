/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  return recurGenerateNums(1, n, k);
};

function recurGenerateNums(start, end, n) {
  const result = [];
  if (n > 1) {
    for (let i = start; i <= end; i++) {
      recurGenerateNums(i + 1, end, n - 1).forEach(a => {
        a.unshift(i);
        result.push(a);
      });
    }
  } else {
    return Array.from({ length: end - start + 1 }).map((_, i) => [start + i]);
  }

  return result;
}

export default combine;
