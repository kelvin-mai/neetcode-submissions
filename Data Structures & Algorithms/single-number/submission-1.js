class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j <= nums.length; j++) {
                if (i !== j && nums[i] === nums[j]) {
                    break;
                }
                if (nums[j] === undefined) {
                    return nums[i];
                }
            }
        }
        return -1;
    }
}
