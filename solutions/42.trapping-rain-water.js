/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 3) return 0

  return getBound(height, 0, height.length - 1)
}

function getBound(height, start, end) {
  while (start < end && height[start] <= height[start + 1]) start++
  while (start < end && height[end] <= height[end - 1]) end--
  if (end - start < 2) return 0

  let result = 0,
    left = start
  let lHeight = height[start]
  let rHeight = 0,
    rIndex = 0
  for (let i = start + 1; i <= end; i++) {
    const val = height[i]
    if (lHeight <= val) {
      result += getVal(height, left, i)
      result += getBound(height, i, end)
      break
    } else if (rHeight < val) {
      rHeight = val
      rIndex = i
    }
  }

  if (result == 0) {
    result += getVal(height, start, rIndex)
    result += getBound(height, rIndex, end)
  }

  return result
}

function getVal(height, start, end) {
  if (end - start < 2) return 0
  let maxHeight = Math.min(height[start], height[end])
  let result = 0

  for (let i = start + 1; i < end; i++) {
    const val = height[i]
    result += Math.max(maxHeight - val, 0)
  }

  return result
}

module.exports = trap
