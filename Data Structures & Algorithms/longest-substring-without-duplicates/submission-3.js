class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sub = [];
        let length = 0;
        for (let i = 0; i < s.length; i++) {
            let j = i;
            while (!sub.includes(s[j]) && j < s.length) {
                sub.push(s[j]);
                j = j + 1;
            }
            length = Math.max(length, sub.length);
            sub = [];
        }
        return length;
    }
}
