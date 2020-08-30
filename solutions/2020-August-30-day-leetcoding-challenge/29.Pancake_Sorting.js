/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A, end = -1) {
  if (end < 0) end = A.length - 1;
  function nextToSortIndex() {
    for (let i = end; i >= 0; i--) {
      if (A[i] != i + 1) return i;
    }

    return -1;
  }

  const nextIndex = nextToSortIndex();
  if (nextIndex == -1) return [];

  const ans = [];
  const actualIndex = A.findIndex(a => a == nextIndex + 1);
  if (actualIndex != 0) {
    flip(A, actualIndex);
    ans.push(actualIndex + 1);
  }
  flip(A, nextIndex);
  ans.push(nextIndex + 1);
  ans.push(...pancakeSort(A, nextIndex - 1));
  return ans;
};

function flip(arr, end) {
  let start = 0;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

module.exports = pancakeSort;
