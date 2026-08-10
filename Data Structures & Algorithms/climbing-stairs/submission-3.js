class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = {};
        const dfs = (x) => {
            if (x >= n) {
                return x == n;
            }
            if (cache[x]) {
                return cache[x];
            }
            cache[x] = dfs(x + 1) + dfs(x + 2);
            return cache[x];
        };
        return dfs(0);
    }
}
