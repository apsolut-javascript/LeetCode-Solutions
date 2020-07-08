/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  if (!path || path.length == 0) return "";

  const folders = path.replace(/\/\//g, "/").split("/");

  let i = 0;
  while (i < folders.length) {
    if (folders[i] == "..") {
      folders.splice(i, 1);
      if (i > 0) {
        folders.splice(i - 1, 1);
        i--;
      }
    } else if (folders[i] == "" || folders[i] == ".") {
      folders.splice(i, 1);
    } else {
      i++;
    }
  }

  return "/" + folders.join("/");
};

module.exports = simplifyPath;
