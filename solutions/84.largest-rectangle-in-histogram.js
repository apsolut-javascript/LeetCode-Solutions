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
var largestRectangleArea = function(heights, start = 0) {
  if (start >= heights.length) return 0;

  let maxArea = 0;
  let minHeight = Number.MAX_SAFE_INTEGER;
  let currentArea = 0;
  const candidates = [];
  for (let i = start; i < heights.length; i++) {
    const currentHeight = heights[i];
    if (currentHeight < minHeight) {
      minHeight = currentHeight;
      currentArea = (i - start + 1) * minHeight;
      if (currentArea < maxArea) {
        candidates.push(i + 1);
        // result.push(largestRectangleArea(heights, i + 1));
        break;
      }

      maxArea = currentArea;
    } else {
      maxArea += minHeight;
      if (currentHeight > minHeight) {
        // result.push(largestRectangleArea(heights, i));
        candidates.push(i);
      }
    }
  }

  candidates.forEach(a => {
    const area = largestRectangleArea(heights, a);
    if (area > maxArea) maxArea = area;
  });
  return maxArea;
};

function getArea(heights, start, end) {
  let minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = start; i < end; i++) {
    if (heights[i] < minHeight) minHeight = heights[i];
  }

  return (end - start) * minHeight;
}

module.exports = largestRectangleArea;
// export default  largestRectangleArea
// @lc code=end
