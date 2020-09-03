/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;
  let stop = s.length >> 1;

  const start = s[0];
  outer: for (let i = 1; i <= stop; i++) {
    if (s[i] != start || s.length % i != 0) continue;
    for (let j = 0; j < i; j++) {
      let k = i + j;
      while (k < s.length) {
        if (s[j] != s[k]) continue outer;
        k += i;
      }
    }

    return true;
  }

  return false;
};

module.exports = repeatedSubstringPattern;
