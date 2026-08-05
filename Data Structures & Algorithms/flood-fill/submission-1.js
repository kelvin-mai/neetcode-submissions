class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let original = image[sr][sc];
        if (original === color) {
            return image;
        }
        let copy = image;
        const dfs = (r, c) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= image.length ||
                c >= image[0].length ||
                copy[r][c] !== original
            ) {
                return;
            }

            copy[r][c] = color;

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        dfs(sr, sc);
        return copy;
    }
}
