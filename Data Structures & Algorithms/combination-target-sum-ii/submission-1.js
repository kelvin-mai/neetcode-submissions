class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        let result = [];
        let combo = [];
        const backtrack = (i, sum) => {
            if (sum >= target) {
                if (sum === target) {
                    result.push([...combo]);
                }
                return;
            }
            for (let j = i; j < candidates.length; j++) {
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }
                combo.push(candidates[j]);
                backtrack(j + 1, sum + candidates[j]);
                combo.pop();
            }
        };
        backtrack(0, 0);

        return result;
    }
}
