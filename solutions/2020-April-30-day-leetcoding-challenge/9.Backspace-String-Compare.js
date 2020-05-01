/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return cleanupStr(S) == cleanupStr(T);
};

function cleanupStr(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "#") {
      stack.push(str[i]);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }

  return stack.join("");
}

module.exports = backspaceCompare;
