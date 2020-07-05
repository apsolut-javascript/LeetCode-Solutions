/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  if (x == y) return 0;

  let diff = x ^ y;
  let distance = 0;
  while (diff > 0) {
    diff &= diff - 1;
    distance++;
  }

  return distance;
};

console.log(hammingDistance(1, 4));
