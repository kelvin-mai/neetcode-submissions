class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const cache = {};
        let result = 0;

        const populate = (i) => {
            if (cache[i]) {
                return cache[i];
            }
            if (i >= s.length) {
                return 1;
            }
            if (s[i] === "0") {
                return 0;
            }

            let result = populate(i + 1);
            if (i + 1 <= s.length) {
                const double = parseInt(s[i] + s[i + 1]);
                if (double >= 10 && double <= 26) {
                    result += populate(i + 2);
                }
            }
            cache[i] = result;
            return cache[i];
        };

        return populate(0);
    }
}
