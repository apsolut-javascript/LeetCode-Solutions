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
  const nums = Array.from({ length: n }).map((_, i) => i + 1);
  if (k == 1) {
    return nums.map(a => [a]);
  }

  const result = recurGenerateNums(nums, k);
  result.sort((a, b) => {
    for (let i = 0; i < k; i++) {
      if (a[i] != b[i]) return a[i] - b[i];
    }

    return 0;
  });
  outer: for (let i = result.length - 1; i > 0; i--) {
    const cur = result[i];
    const next = result[i - 1];
    for (let j = 0; j < k; j++) {
      if (cur[j] != next[j]) {
        continue outer;
      }
    }
    result.splice(i, 1);
  }
  return result;
};

function combineNums(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result.push([nums[i], nums[j]]);
    }
  }
  return result;
}

function recurGenerateNums(nums, n) {
  const result = [];
  if (n > 2) {
    for (let i = 0; i < nums.length; i++) {
      const remainNums = [...nums];
      const currentNum = remainNums.splice(i, 1)[0];
      const newCombination = recurGenerateNums(remainNums, n - 1);
      newCombination.forEach(a => {
        a.push(currentNum);
        a.sort();
      });
      result.push(...newCombination);
    }
  } else {
    result.push(...combineNums(nums));
  }

  return result;
}

export default combine;
