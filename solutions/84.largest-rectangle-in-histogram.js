/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = heights.length; i < j; j--) {
      const area = getArea(heights, i, j);
      if (area > maxArea) maxArea = area;
    }
  }

  return maxArea;
};

function getArea(heights, start, end) {
  let minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = start; i < end; i++) {
    if (heights[i] < minHeight) minHeight = heights[i];
  }

  return (end - start) * minHeight;
}

// module.exports = largestRectangleArea;
export default largestRectangleArea;
// @lc code=end
