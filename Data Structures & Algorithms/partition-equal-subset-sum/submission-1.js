class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        if (sum % 2 > 0) {
            return false;
        }
        let cache = {};
        const backtrack = (i, currentSum = 0) => {
            if (currentSum === sum / 2) {
                return true;
            }
            if (i > nums.length) {
                return false;
            }
            if (cache[i]) {
                return cache[i];
            }
            cache[i] =
                backtrack(i + 1, currentSum + nums[i]) ||
                backtrack(i + 1, currentSum);
            return cache[i];
        };
        return backtrack(0);
    }
}
