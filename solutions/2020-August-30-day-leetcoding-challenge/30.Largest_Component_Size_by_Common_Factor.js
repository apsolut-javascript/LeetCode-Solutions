/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function (A) {
  for (let i = A.length; i >= 0; i--) {
    if (A[i] <= 1) A.splice(i, 1);
  }
  const graphs = [];
  while (A.length > 0) {
    const num = A.pop();
    const g = [num];
    for (let i = graphs.length - 1; i >= 0; i--) {
      const graph = graphs[i];
      if (graph.some(a => hasCommonFactor(a, num))) {
        graphs.splice(i, 1);
        g.push(...graph);
      }
    }
    graphs.push(g);
  }

  return Math.max(...graphs.map(a => a.length));
};

function hasCommonFactor(x, y) {
  if (x < y) return hasCommonFactor(y, x);

  const remain = x % y;
  if (remain == 1) return false;
  if (remain == 0) return true;
  return hasCommonFactor(y, remain);
}

module.exports = largestComponentSize;
