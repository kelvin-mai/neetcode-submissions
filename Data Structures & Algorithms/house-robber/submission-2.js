class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = {};
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }
            if (cache[i]) {
                return cache[i];
            }
            const rob = nums[i] + dfs(i + 2);
            const skip = dfs(i + 1);
            cache[i] = Math.max(rob, skip);
            return cache[i]
        };
        return dfs(0);
    }
}
