/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num <= 1) return true;

  let left = 1;
  let right = (num / 2) | 0;

  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (mid == 0) return false;

    const div = (num / mid) | 0;
    if (div ** 2 == num) return true;

    if (div < mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
