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
  nums.sort((a, b) => a - b)
  const result = []
  const dict = nums.reduce((p, c) => (p[c] ? (p[c] += 1) : (p[c] = 1), p), {})
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const y = nums[j]
      const remain = target - x - y
      if (remain > nums.slice(-2).reduce((p, c) => p + c, 0)) continue
      for (let k = nums.length - 1; k > j; k--) {
        const z = nums[k]
        const sum = x + y + z
        const differ = target - sum
        if (differ > z) break
        if (!dict[differ]) continue
        const solution = [x, y, z, differ]
        const constitute = solution.reduce(
          (p, c) => (p[c] ? (p[c] += 1) : (p[c] = 1), p),
          {}
        )
        const isValid = Object.entries(constitute).every(
          ([k, v]) => dict[k] >= v
        )
        if (!isValid) continue

        solution.sort((a, b) => a - b)
        if (
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
