/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (!s?.length > 1) return s?.length ?? 0;

  let max = 1;
  let cur = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) cur++;
    else {
      if (cur > max) max = cur;
      cur = 1;
    }
  }
  if (cur > max) max = cur;

  return max;
};

module.exports = maxPower;
