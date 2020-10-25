/*
 * @lc app=leetcode id=948 lang=javascript
 *
 * [948] Bag of Tokens
 */

// @lc code=start
/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function (tokens, P) {
  tokens.sort((a, b) => a - b);
  if (P < tokens[0]) return 0;
  const requirement = [];
  let total = 0;

  for (let i = 0; i < tokens.length; i++) {
    const val = tokens[i];
    total += val;
    requirement.push(total);
  }

  if (P > total) return tokens.length;

  let totalScores = P;
  const scores = [P];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const val = tokens[i];
    totalScores += val;
    scores.push(totalScores);
  }

  let ans = 0;
  for (let i = 0; i < scores.length; i++) {
    for (let j = i; j < requirement.length; j++) {
      if (scores[i] >= requirement[j]) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
};

module.exports = bagOfTokensScore;
// @lc code=end
