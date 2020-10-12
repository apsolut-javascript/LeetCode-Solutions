/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  if (a.length != b.length) return false;
  const charsA = countChars(a);
  const charsB = countChars(b);
  const entries = Object.entries(charsA);
  if (Object.entries(charsB).length != entries.length) return false;
  for (let i = 0; i < entries.length; i++) {
    const [k, v] = entries[i];
    if (charsB[k] != v) return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      diff++;
      if (diff > 2) return false;
    }
  }
  if (diff == 2) return true;
  if (diff == 0 && Object.values(charsA).some(v => v >= 2)) return true;

  return false;
};

const countChars = a =>
  Array.prototype.reduce.call(
    a,
    (p, c) => {
      if (!p[c]) p[c] = 0;
      p[c]++;
      return p;
    },
    {}
  );

module.exports = buddyStrings;
// @lc code=end
