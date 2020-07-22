/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const map = Array.from({ length: board.length }, () => []);
  function findNext(i, j, wordIndex) {
    if (wordIndex >= word.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length)
      return false;
    if (map[i][j] != null || board[i][j] != word[wordIndex]) return false;

    map[i][j] = wordIndex;

    if (
      findNext(i - 1, j, wordIndex + 1) ||
      findNext(i + 1, j, wordIndex + 1) ||
      findNext(i, j - 1, wordIndex + 1) ||
      findNext(i, j + 1, wordIndex + 1)
    )
      return true;

    map[i][j] = null;
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] != word[0]) continue;

      if (findNext(i, j, 0, map)) return true;
    }
  }

  return false;
};

module.exports = exist;
