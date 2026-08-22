class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = "";
        for (let i = 0; i < s.length; i++) {
            let L = i;
            let R = i;
            while (L >= 0 && R < s.length) {
                if (s[L] !== s[R]) {
                    break;
                }
                const substr = s.substring(L, R + 1);
                if (substr.length > result.length) {
                    result = substr;
                }
                L--;
                R++;
            }

            L = i;
            R = i + 1;
            while (L >= 0 && R < s.length) {
                if (s[L] !== s[R]) {
                    break;
                }
                const substr = s.substring(L, R + 1);
                if (substr.length > result.length) {
                    result = substr;
                }
                L--;
                R++;
            }
        }
        return result;
    }
}
