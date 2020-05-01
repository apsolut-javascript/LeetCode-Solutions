/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    if (symbol == "(") {
      min++;
      max++;
    } else if (symbol == ")") {
      if (min > 0) {
        min--;
      }
      max--;
      if (max < 0) return false;
    } else {
      if (min > 0) min--;
      max++;
    }
  }

  return min == 0;
};

module.exports = checkValidString;
