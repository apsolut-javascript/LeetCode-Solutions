/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let answer = m & n;
  for (let i = 0; i < 31; i++) {
    const bit = 2 ** i;
    if (n - bit < m) {
      break;
    }

    answer &= n - bit;
    if (answer == 0) return 0;
  }

  return answer;
};

module.exports = rangeBitwiseAnd;
