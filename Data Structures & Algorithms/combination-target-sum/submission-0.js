class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let combo = [];
        const backtrack = (i, sum) => {
            if (sum === target) {
                result.push([...combo])
                return;
            }
            for (let j = i; j < nums.length; j++) {
                if (sum > target) {
                    return;
                }
                combo.push(nums[j]);
                backtrack(j, sum + nums[j])
                combo.pop()
            }
        }
        backtrack(0,0);
        return result;
    }
}
