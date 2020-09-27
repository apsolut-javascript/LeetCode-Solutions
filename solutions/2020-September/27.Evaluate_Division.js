/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const vars = {};
  const nums = new Set();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const val = values[i];
    setVars(vars, a, b, val);
    nums.add(a);
    nums.add(b);
  }

  return queries.map(([a, b]) => {
    if (a == b) return nums.has(a) ? 1 : -1;
    return queryAnswer(vars, a, b, new Set());
  });
};

function setVars(vars, a, b, val) {
  if (!vars[a]) vars[a] = {};
  vars[a][b] = val;
  if (!vars[b]) vars[b] = {};
  vars[b][a] = 1 / val;
}

function queryAnswer(vars, a, b, routes) {
  if (vars[a] != null) {
    if (vars[a][b] != null) return vars[a][b];
    routes.add(a);
    const keys = Object.keys(vars[a]).filter(k => !routes.has(k));
    for (const k of keys) {
      const val = queryAnswer(vars, k, b, routes);
      if (val != -1) return vars[a][k] * val;
    }
  }

  return -1;
}

module.exports = calcEquation;
