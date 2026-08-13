class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const mapping = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wyxz",
        };

        let nums = digits.split("").map((d) => parseInt(d));
        let result = [];
        let combo = [];
        const backtrack = (i) => {
            if (i >= nums.length) {
                if (combo.length) {
                    const str = combo.reduce((acc, curr) => acc + curr, "");
                    result.push(str);
                }
                return;
            }
            const key = nums[i];
            for (let j = 0; j < mapping[key].length; j++) {
                combo.push(mapping[key][j]);
                backtrack(i + 1);
                combo.pop();
            }
        };
        backtrack(0);
        return result;
    }
}
