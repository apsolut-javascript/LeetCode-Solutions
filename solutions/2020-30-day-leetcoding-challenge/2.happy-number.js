/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const exists = new Set();
  let sum = n;
  while (!exists.has(sum)) {
    exists.add(sum);
    let cur = 0;
    while (sum >= 10) {
      cur += (sum % 10) ** 2;
      sum /= 10;
      sum |= 0;
    }
    cur += sum ** 2;
    if (cur == 1) return true;
    sum = cur;
  }

  return false;
};

module.exports = isHappy;
