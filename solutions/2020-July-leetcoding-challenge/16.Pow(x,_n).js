/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);

  if (n % 2 == 0) {
    const result = myPow(x, n / 2);
    return result * result;
  } else {
    return myPow(x, n - 1) * x;
  }
};
