/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const occurrence = Array.prototype.reduce.call(
    S,
    (p, c) => {
      if (p[c] == null) p[c] = 0;
      p[c]++;
      return p;
    },
    {}
  );

  let sub = 0;
  let map = {};
  const result = [];

  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (!map[c]) map[c] = 0;
    map[c]++;
    sub++;

    if (map[c] == occurrence[c]) {
      const entries = Object.entries(map);
      if (entries.every(([k, v]) => occurrence[k] == v)) {
        result.push(sub);
        sub = 0;
        map = {};
      }
    }
  }

  return result;
};

module.exports = partitionLabels;
