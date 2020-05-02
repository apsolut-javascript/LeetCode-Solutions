/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewels = new Set(J);

  // a slower way
  // return Array.prototype.filter.call(S, a => jewels.has(a)).length;

  let answer = 0;
  for (let i = 0; i < S.length; i++) {
    if (jewels.has(S[i])) {
      answer++;
    }
  }

  return answer;
};
