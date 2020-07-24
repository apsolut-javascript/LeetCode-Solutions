/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  function pathToTarget(src) {
    if (src == target) return [[target]];
    if (!graph[src].length) return null;

    const result = [];
    graph[src].forEach(a => {
      const p = pathToTarget(a);
      if (!p) return;
      p.forEach(b => b.unshift(src));
      result.push(...p);
    });

    return result;
  }

  return pathToTarget(0) ?? [];
};

module.exports = allPathsSourceTarget;
