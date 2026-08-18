class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const validParens = (s) => {
            let open = 0;
            for (const c of s) {
                const count = c === "(" ? 1 : -1;
                open += count;
                if (open < 0) {
                    return false;
                }
            }
            return open === 0;
        };

        let result = [];
        const backtrack = (s) => {
            if (s.length >= 2 * n) {
                if (validParens(s)) {
                    result.push(s);
                }
                return;
            }
            backtrack(s + "(");
            backtrack(s + ")");
        };

        backtrack("");
        return result;
    }
}
