/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const { length } = s
    if (length == 0) return 0
    const cache = []
    function recurCalc(i) {
        if (cache[i] != null) return cache[i]
        if (s[i] == 0) return 0
        if (length - i == 1) {
            return 1
        }

        const twoDigits = s.slice(i, i + 2)
        if (length - i == 2) {
            if (twoDigits == 10 || twoDigits == 20 || (twoDigits > 26 && twoDigits % 10 != 0)) return 1
            if (twoDigits % 10 == 0) return 0

            return 2
        }

        let val = 0
        if (twoDigits == 10 || twoDigits == 20) {
            val = recurCalc(i + 2)
        } else if (twoDigits % 10 == 0) {
            return 0
        } else if (twoDigits > 26) {
            val = recurCalc(i + 1)
        } else {
            val = recurCalc(i + 1) + recurCalc(i + 2)
        }

        cache[i] = val
        return cache[i]
    }

    return recurCalc(0)
};

// @lc code=end


module.exports = numDecodings
