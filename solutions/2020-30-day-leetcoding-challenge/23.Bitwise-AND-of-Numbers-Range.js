/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let answer = m;
  for (let i = m + 1; i <= n; i++) {
    if (answer == 0) return 0;
    answer &= i;
  }

  return answer;
};

module.exports = rangeBitwiseAnd;
