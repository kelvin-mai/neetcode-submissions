class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array(m)
            .fill()
            .map(() => Array(n).fill());

        const dfs = (r, c) => {
            if (r >= m || c >= n) {
                return 0;
            }
            if (r === m - 1 && c === n - 1) {
                return 1;
            }
            if (grid[r][c] !== undefined) {
                return grid[r][c];
            }
            grid[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
            return grid[r][c];
        };
        return dfs(0, 0);
    }
}
