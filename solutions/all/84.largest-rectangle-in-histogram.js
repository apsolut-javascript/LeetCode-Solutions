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
  if (heights.length == 0) return 0;

  const stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack.pop()];
      const area = h * (i - stack[stack.length - 1] - 1);
      maxArea = Math.max(area, maxArea);
    }
    stack.push(i);
  }

  while (stack.length > 1) {
    const i = stack.pop();
    const h = heights[i];
    const area = h * (heights.length - stack[stack.length - 1] - 1);
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
};

module.exports = largestRectangleArea;
// export default  largestRectangleArea
// @lc code=end
