/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [row, col] = binaryMatrix.dimensions();
  let left = 0;
  let right = col - 1;
  let min = col;
  outer: while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    for (let r = 0; r < row; r++) {
      const element = binaryMatrix.get(r, mid);
      if (element == 0) continue;

      right = mid - 1;
      min = Math.min(min, mid);
      continue outer;
    }

    left = mid + 1;
  }

  return min < col ? min : -1;
};
