/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const n = nums.sort((a, b) => a - b)
  let nearest = Number.POSITIVE_INFINITY
  let result = null
  for (let i = 0; i < n.length - 1; i++) {
    if (i > 0 && n[i - 1] === n[i]) continue
    const x = n[i]

    for (let end = n.length - 1; i + 1 < end; end--) {
      if (end < n.length - 1 && n[end] === n[end + 1]) continue
      const z = n[end]

      let distance = Number.POSITIVE_INFINITY
      for (let start = i + 1; start < end; start++) {
        if (start > i + 1 && n[start] === n[start - 1]) continue
        const y = n[start]
        const sum = x + y + z
        const d = Math.abs(sum - target)
        if (d > distance) break

        distance = d
        if (distance < nearest) {
          nearest = distance
          result = sum
        }
      }
    }
  }

  return result
}

module.exports = threeSumClosest
