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
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) continue;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] == b[j]) continue;

      const c1 = a[i];
      const c2 = a[j];
      a = a.slice(0, i) + c2 + a.slice(i + 1, j) + c1 + a.slice(j + 1);
      return a == b;
    }

    return false;
  }

  const chars = Array.prototype.reduce.call(
    a,
    (p, c) => {
      if (!p[c]) p[c] = 0;
      p[c]++;
      return p;
    },
    {}
  );
  return Object.values(chars).some(v => v >= 2);
};

module.exports = buddyStrings;
// @lc code=end
