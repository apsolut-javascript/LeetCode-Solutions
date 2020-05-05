/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const chars = Array.prototype.reduce.call(
    s,
    (p, c) => {
      if (p[c] == null) p[c] = 0;
      p[c]++;
      return p;
    },
    {}
  );

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] > 1) continue;

    return i;
  }

  return -1;
};
