/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  nums = nums.sort((a, b) => a - b)
  const result = []
  const dict = nums.reduce((p, c) => (p[c] ? (p[c] += 1) : (p[c] = 1), p), {})
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]
        const differ = target - sum
        if (!dict[differ]) continue
        const solution = [nums[i], nums[j], nums[k], differ].sort(
          (a, b) => a - b
        )
        const constitute = solution.reduce(
          (p, c) => (p[c] ? (p[c] += 1) : (p[c] = 1), p),
          {}
        )
        const isValid = Object.entries(constitute).every(
          ([k, v]) => dict[k] >= v
        )
        if (
          !isValid ||
          result.some(
            a =>
              a[0] == solution[0] &&
              a[1] == solution[1] &&
              a[2] == solution[2] &&
              a[3] == solution[3]
          )
        )
          continue

        result.push(solution)
      }
    }
  }

  return result
}

module.exports = fourSum
