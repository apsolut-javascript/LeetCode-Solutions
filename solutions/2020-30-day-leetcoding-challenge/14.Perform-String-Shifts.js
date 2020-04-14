/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let amount = 0;
  for (let i = 0; i < shift.length; i++) {
    const d = shift[i][0];
    const a = shift[i][1];
    amount += (d == 0 ? 1 : -1) * a;
  }

  amount %= s.length;
  if (amount == 0) return s;

  return s.slice(amount) + s.slice(0, amount);
};

module.exports = stringShift;
