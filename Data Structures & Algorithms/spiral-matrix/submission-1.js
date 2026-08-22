class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let visited = Array(matrix.length)
            .fill()
            .map(() => Array(matrix[0].length).fill());
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        let result = [];

        const populate = (r, c, di) => {
            if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length || visited[r][c]) {
                return;
            }
            visited[r][c] = true;
            result.push(matrix[r][c]);
            const rr = r + dirs[di][0];
            const cc = c + dirs[di][1];
            if (
                rr < 0 ||
                cc < 0 ||
                rr >= matrix.length ||
                cc >= matrix[0].length ||
                visited[rr][cc]
            ) {
                di = (di + 1) % dirs.length;
            }
            populate(r + dirs[di][0], c + dirs[di][1], di);
        };

        populate(0, 0, 0);
        return result;
    }
}
