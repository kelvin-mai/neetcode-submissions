class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const cache = Array(m)
            .fill()
            .map(() => Array(n).fill());

        const dfs = (r, c) => {
            if (r >= m || c >= n || grid[r][c] === 1) {
                return 0;
            }
            if (r === m - 1 && c === n - 1) {
                return 1;
            }

            if (cache[r][c] !== undefined) {
                return cache[r][c];
            }
            cache[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
            return cache[r][c];
        };
        return dfs(0, 0);
    }
}
