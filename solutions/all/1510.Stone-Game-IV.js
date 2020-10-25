const cache = [false, true, false];
/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  if (cache[n] != null) return cache[n];

  let ans = false;
  for (let i = 1; i < n; i++) {
    const val = i ** 2;
    if (val > n) break;
    if (!winnerSquareGame(n - val)) {
      ans = true;
      break;
    }
  }

  cache[n] = ans;
  return ans;
};

module.exports = winnerSquareGame;
