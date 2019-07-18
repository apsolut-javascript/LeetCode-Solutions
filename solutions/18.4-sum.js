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
  for (let i = 0; i < nums.length - 3; i++) {
    const x = nums[i]
    for (let j = i + 1; j < nums.length - 2; j++) {
      const y = nums[j]
      const remain = target - x - y
      if (remain > nums.slice(-2).reduce((p, c) => p + c, 0)) continue
      let start = j + 1
      let end = nums.length - 1
      while (start < end) {
        const l = nums[start]
        const r = nums[end]
        const diff = remain - l - r
        if (diff < 0) {
          do {
            end--
          } while (nums[end] == nums[end + 1] && start < end)
        } else if (diff > 0) {
          do {
            start++
          } while (nums[start - 1] == nums[start] && start < end)
        } else {
          if (
            result.every(a => a[0] != x || a[1] != y || a[2] != l || a[3] != r)
          ) {
            result.push([x, y, l, r])
          }
          start++
          end--
        }
      }
    }
  }

  return result
}

module.exports = fourSum
