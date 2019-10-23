/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) return "";

  let left = 0,
    right = 0,
    minLeft = 0,
    minRight = -1,
    minWindow = s.length + 1,
    allMet = false;
  const chars = {};
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!chars[c]) chars[c] = 1;
    else chars[c] += 1;
  }
  const dict = {};

  while (right < s.length) {
    if (allMet) {
      const c = s[left - 1];
      if (dict[c]) {
        dict[c] -= 1;
        if (dict[c] < chars[c]) {
          allMet = false;
        }
      }
    } else {
      const c = s[right];
      if (chars[c]) {
        if (dict[c] == undefined) dict[c] = 0;
        dict[c] += 1;
        allMet = true;
        for (const k in chars) {
          if (!chars.hasOwnProperty(k)) continue;
          if (!dict[k] || dict[k] < chars[k]) {
            allMet = false;
            break;
          }
        }
      }
    }

    if (allMet) {
      if (right - left < minWindow) {
        minLeft = left;
        minRight = right;
        minWindow = right - left;
      }
      left++;
    } else {
      right++;
    }
  }

  return s.slice(minLeft, minRight + 1);
};
// @lc code=end

module.exports = minWindow;
