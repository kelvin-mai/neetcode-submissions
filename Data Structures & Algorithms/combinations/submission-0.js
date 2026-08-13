class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        let subset = [];
        const backtrack = (i) => {
            if (subset.length === k) {
                result.push([...subset]);
                return;
            }
            if (i > n) {
                return;
            }
            subset.push(i);
            backtrack(i + 1);
            subset.pop();

            backtrack(i + 1);
        };
        backtrack(1);
        return result;
    }
}
