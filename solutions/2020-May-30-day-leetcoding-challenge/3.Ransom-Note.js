/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const letters = Array.prototype.reduce.call(
    magazine,
    (p, c) => {
      if (p[c] == null) {
        p[c] = 0;
      }

      p[c]++;
      return p;
    },
    {}
  );

  for (let i = 0; i < ransomNote.length; i++) {
    const l = ransomNote[i];
    if (letters[l] > 0) letters[l]--;
    else return false;
  }

  return true;
};
