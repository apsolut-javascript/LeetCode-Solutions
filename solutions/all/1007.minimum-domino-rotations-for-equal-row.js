/*
 * @lc app=leetcode id=1007 lang=javascript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  const countA = count(A);
  const countB = count(B);
  let min = Number.MAX_VALUE;
  for (let i = 1; i < 7; i++) {
    const valA = countA[i];
    const valB = countB[i];
    if (valA + valB < A.length) continue;
    if (valA > valB) {
      min = Math.min(min, rotate(A, B, i));
    } else {
      min = Math.min(min, rotate(B, A, i));
    }
  }

  return min == Number.MAX_VALUE ? -1 : min;
};

function rotate(A, B, val) {
  let step = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] != val) {
      if (B[i] != val) return Number.MAX_VALUE;
      step++;
    }
  }

  return step;
}

function count(nums) {
  const result = Array.from({ length: 7 }, _ => 0);
  for (let i = 0; i < nums.length; i++) {
    result[nums[i]] += 1;
  }

  return result;
}
// @lc code=end
