/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".").map(a => Number.parseInt(a));
  const arr2 = version2.split(".").map(a => Number.parseInt(a));

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    const v1 = arr1[i];
    const v2 = arr2[i];
    if (v1 && v2) {
      if (v1 == v2) continue;
      return v1 < v2 ? -1 : 1;
    }

    if (v1) return 1;
    if (v2) return -1;
  }

  return 0;
};
