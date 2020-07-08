/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n == 0) return []
  const result = Array.from({ length: n }, () => []),
    max = n ** 2
  let direction = 0,
    r = 0,
    c = 0

  for (let i = 1; i <= max; i++) {
    result[r][c] = i
    if (direction == 0) {
      if (c < n - 1 && result[r][c + 1] == undefined) {
        c++
        continue
      }
    } else if (direction == 1) {
      if (r < n - 1 && result[r + 1][c] == undefined) {
        r++
        continue
      }
    } else if (direction == 2) {
      if (0 < c && result[r][c - 1] == undefined) {
        c--
        continue
      }
    } else if (direction == 3) {
      if (0 < r && result[r - 1][c] == undefined) {
        r--
        continue
      }
    }

    changeDirection()
  }

  return result

  function changeDirection() {
    switch (direction) {
      case 0:
        r++
        break

      case 1:
        c--
        break

      case 2:
        r--
        break

      case 3:
        c++
        break
    }

    direction++
    direction %= 4
  }
}

module.exports = generateMatrix
