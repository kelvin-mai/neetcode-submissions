class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (let i = 0; i < matrix.length; i++) {
            let l = 0;
            let r = matrix[i].length - 1;

            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                if (target > matrix[i][mid]) {
                    l = mid + 1;
                } else if (target < matrix[i][mid]) {
                    r = mid - 1;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}
