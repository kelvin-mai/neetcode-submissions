class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) {
            return false;
        }
        const stack = [];
        const mapping = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        for (let i = 0; i < s.length; i++) {
            console.log(s[i]);
            if (s[i] in mapping) {
                stack.push(s[i]);
            } else if (s[i] === mapping[stack.at(-1)]) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (stack.length > 1) {
            return false;
        }
        return true;
    }
}
