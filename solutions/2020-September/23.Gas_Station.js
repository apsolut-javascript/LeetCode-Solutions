/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const remain = [];
  let sum = 0;
  for (let i = 0; i < gas.length; i++) {
    const r = gas[i] - cost[i];
    sum += r;
    remain.push(r);
  }

  if (sum < 0) return -1;
  for (let i = 0; i < gas.length; i++) {
    if (canComplete(gas, cost, i)) return i;
  }

  return -1;
};

function canComplete(gas, cost, startIndex) {
  let i = startIndex;
  let remain = 0;
  do {
    remain += gas[i] - cost[i];
    if (remain < 0) return false;
    i++;
    if (i == gas.length) i = 0;
  } while (i != startIndex);

  return true;
}
