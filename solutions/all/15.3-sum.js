/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

function doCalculate(nums) {
  if (nums.length < 3) return []
  if (nums.length === 3 && nums.reduce((p, c) => p + c, 0) === 0) {
    return [nums]
  }

  const availNums = new Set(nums)
  const result = []
  let left = Number.NEGATIVE_INFINITY

  for (let l = 0; l < nums.length - 2; l++) {
    if (nums[l] <= left) continue
    left = nums[l]
    if (left > 0) break
    let right = Number.POSITIVE_INFINITY
    for (let r = nums.length - 1; l + 1 < r; r--) {
      if (right <= nums[r]) {
        continue
      }
      right = nums[r]
      if (right < 0) break
      const middle = -(left + right) || 0
      if (left <= middle && middle <= right && availNums.has(middle)) {
        if (middle === left) {
          if (nums[l + 1] === middle) {
            result.push([left, middle, right])
          }
        } else if (middle === right) {
          if (nums[r - 1] === middle) {
            result.push([left, middle, right])
          }
        } else {
          result.push([left, middle, right])
        }
      }
    }
  }

  return result
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b)

  const result = doCalculate(sortedNums)
  result.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    if (a[1] !== b[1]) return a[1] - b[1]
    return a[2] - b[2]
  })
  for (let i = result.length - 1; i > 0; i--) {
    const current = result[i]
    const previous = result[i - 1]
    if (
      current.length === 0 ||
      (current[0] === previous[0] && current[1] === previous[1])
    ) {
      result.splice(i, 1)
    }
  }

  return result
}

module.exports = threeSum
