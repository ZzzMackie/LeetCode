/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var strSet = new Set(), result = 0, r = -1;
    for (let index = 0; index < s.length; index++) {
        if (index !== 0) {
            strSet.delete(s.charAt(index - 1))
        }
        while (r + 1 < s.length && !strSet.has(s.charAt(r + 1))) {
            strSet.add(s.charAt(r + 1))
            r++
        }
        result = Math.max(result, r - index + 1);
    }
    return result
};
// @lc code=end

