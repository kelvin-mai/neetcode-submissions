class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const caches = [{}, {}];
        const dfs = (i, robbedFirst = false) => {
            if (i >= nums.length || (robbedFirst && i === nums.length - 1)) {
                return 0;
            }
            if (caches[Number(robbedFirst)][i]) {
                return caches[Number(robbedFirst)][i];
            }
            const rob = nums[i] + dfs(i + 2, i === 0 ? true : robbedFirst);
            const skip = dfs(i + 1, robbedFirst);
            caches[Number(robbedFirst)][i] = Math.max(rob, skip);
            return caches[Number(robbedFirst)][i];
        };
        return dfs(0);
    }
}
