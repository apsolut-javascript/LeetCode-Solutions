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
  let leftCursor = 0,
    rightCursor = height.length - 1,
    leftMaxHeight = height[0],
    rightMaxHeight = height[height.length - 1],
    result = 0
  const tryUpdateResult = () => {
    const area =
      Math.min(leftMaxHeight, rightMaxHeight) * (rightCursor - leftCursor)
    if (area > result) {
      result = area
    }
  }
  tryUpdateResult()
  while (rightCursor > leftCursor) {
    if (leftMaxHeight > rightMaxHeight) {
      rightCursor--
      const newHeight = height[rightCursor]
      if (newHeight > rightMaxHeight) {
        rightMaxHeight = newHeight
        tryUpdateResult()
      }
    } else {
      leftCursor++
      const newHeight = height[leftCursor]
      if (newHeight > leftMaxHeight) {
        leftMaxHeight = newHeight
        tryUpdateResult()
      }
    }
  }

  return result
}

module.exports = maxArea
