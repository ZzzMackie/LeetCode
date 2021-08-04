/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length, 
    moreCount = 0, 
   lessCount = 0, 
    result = [],
    moreArr = [].concat(nums1.length >= nums2.length ? nums1 : nums2),
    lessArr = [].concat(nums1.length < nums2.length ? nums1 : nums2);
    for (let index = 0; index < len; index++) {
        if (moreArr[moreCount] < lessArr[lessCount]) {
            result.push(moreArr[moreCount])
            moreCount++
        } else {
            if (lessArr[lessCount] != undefined) {
                result.push(lessArr[lessCount])
                lessCount++
            } else {
                result.push(moreArr[moreCount])
                moreCount++
            }
        }
        
    }
    return result.length % 2 == 0 ? (result[Math.floor(result.length/2)] + result[Math.floor(result.length/2) - 1]) / 2 : result[Math.floor(result.length/2)];
};
// @lc code=end

