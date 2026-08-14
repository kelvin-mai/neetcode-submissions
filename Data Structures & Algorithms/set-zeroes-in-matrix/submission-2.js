class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const mark = (r, c) => {
            for (let rr = 0; rr < matrix.length; rr++) {
                if (matrix[rr][c] !== 0) {
                    matrix[rr][c] = "x";
                }
            }
            for (let cc = 0; cc < matrix[0].length; cc++) {
                if (matrix[r][cc] !== 0) {
                    matrix[r][cc] = "x";
                }
            }
        };

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === 0) {
                    mark(r, c);
                }
            }
        }

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === "x") {
                    matrix[r][c] = 0;
                }
            }
        }

        return matrix;
    }
}
