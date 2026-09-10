class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let mincount = 0;
        let maxcount = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                mincount++;
                maxcount++;
            } else if (s[i] === ")") {
                mincount--;
                maxcount--;
            } else if (s[i] === "*") {
                mincount--;
                maxcount++;
            }

            if (maxcount < 0) {
                return false;
            }
            if (mincount < 0) {
                mincount = 0;
            }
        }
        return mincount === 0;
    }
}
