class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0];
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum = Math.max(sum, 0) + nums[i];
            max = Math.max(max, sum);
        }
        return max;
    }
}
