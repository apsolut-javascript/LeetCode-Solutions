/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let result = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i)
      if (area > result) {
        result = area
      }
    }
  }

  return result
}

module.exports = maxArea
