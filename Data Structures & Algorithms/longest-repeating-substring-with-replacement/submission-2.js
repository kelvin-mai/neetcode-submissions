class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            let count = {};
            let maxf = 0;
            for (let j = i; j < s.length; j++) {
                count[s[j]] = (count[s[j]] || 0) + 1;
                maxf = Math.max(maxf, count[s[j]]);
                if (j - i + 1 - maxf <= k) {
                    result = Math.max(result, j - i + 1);
                }
            }
        }
        return result;
    }
}
