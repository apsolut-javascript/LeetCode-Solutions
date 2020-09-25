/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const freqS = reduce(s);
  const freqT = reduce(t);
  const entries = Object.entries(freqT);
  for (const [k, v] of entries) {
    if (!freqS[k] || freqS[k] != v) return k;
  }
};

const reduce = s =>
  Array.prototype.reduce.call(
    s,
    (p, c) => {
      if (!p[c]) p[c] = 0;
      p[c]++;
      return p;
    },
    {}
  );
