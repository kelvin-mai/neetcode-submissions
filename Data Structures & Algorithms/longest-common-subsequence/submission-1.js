class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
  let cache = Array(text1.length)
    .fill()
    .map(() => Array(text2.length));
  const lcs = (c1, c2) => {
    if (c1 >= text1.length || c2 >= text2.length) {
      return 0;
    }
    if (cache[c1][c2]) {
      return cache[c1][c2];
    }
    if (text1[c1] === text2[c2]) {
      cache[c1][c2] = 1 + lcs(c1 + 1, c2 + 1);
    } else {
      cache[c1][c2] = Math.max(lcs(c1 + 1, c2), lcs(c1, c2 + 1));
    }
    return cache[c1][c2];
  };

  return lcs(0, 0);
    }
}
