/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const result = recurFind("JFK", [...tickets]);
  console.log("---------> : findItinerary -> result", result);
  return result;
};

function recurFind(departure, tickets) {
  if (tickets.length == 0) return [departure];
  const result = [departure];
  const arrs = tickets
    .filter(([dep, arr]) => dep == departure)
    .map(([dep, arr]) => arr);
  arrs.sort();
  for (const a of arrs) {
    const index = tickets.findIndex(
      ([dep, arr]) => dep == departure && arr == a
    );
    const removed = tickets.splice(index, 1)[0];
    const r = recurFind(a, [...tickets]);
    if (r.length == tickets.length + 1) {
      result.push(...r);
      return result;
    } else {
      tickets.push(removed);
    }
  }

  return result;
}

findItinerary([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
]);

findItinerary([
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
]);

findItinerary([
  ["JFK", "KUL"],
  ["JFK", "NRT"],
  ["NRT", "JFK"],
]);

findItinerary([
  ["EZE", "TIA"],
  ["EZE", "HBA"],
  ["AXA", "TIA"],
  ["JFK", "AXA"],
  ["ANU", "JFK"],
  ["ADL", "ANU"],
  ["TIA", "AUA"],
  ["ANU", "AUA"],
  ["ADL", "EZE"],
  ["ADL", "EZE"],
  ["EZE", "ADL"],
  ["AXA", "EZE"],
  ["AUA", "AXA"],
  ["JFK", "AXA"],
  ["AXA", "AUA"],
  ["AUA", "ADL"],
  ["ANU", "EZE"],
  ["TIA", "ADL"],
  ["EZE", "ANU"],
  ["AUA", "ANU"],
]);
