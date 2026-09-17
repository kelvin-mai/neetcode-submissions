class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
          let result = Array(matrix[0].length)
    .fill()
    .map(() => Array(matrix.length).fill());
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[c][r] = matrix[r][c];
    }
  }
  return result;
    }
}
