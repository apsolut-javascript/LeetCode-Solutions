/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  return dpMinDist(
    word1,
    word2,
    0,
    0,
    Array.from({ length: word1.length }, () => [])
  );
};

function dpMinDist(word1, word2, i, j, result) {
  if (i == word1.length) return word2.length - j;
  if (j == word2.length) return word1.length - i;

  if (result[i][j] == null) {
    if (word1[i] == word2[j]) {
      return dpMinDist(word1, word2, i + 1, j + 1, result);
    }

    const insert = dpMinDist(word1, word2, i + 1, j, result);
    const replace = dpMinDist(word1, word2, i + 1, j + 1, result);
    const remove = dpMinDist(word1, word2, i, j + 1, result);

    result[i][j] = 1 + Math.min(insert, replace, remove);
  }

  return result[i][j];
}

module.exports = minDistance;
