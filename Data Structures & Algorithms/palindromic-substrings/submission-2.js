class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
          let result = 0;

  for (let i = 0; i < s.length; i++) {
    let [L, R] = [i, i];
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      result++;
      L--;
      R++;
    }

    [L, R] = [i, i + 1];
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      result++;
      L--;
      R++;
    }
  }

  return result;
    }
}
