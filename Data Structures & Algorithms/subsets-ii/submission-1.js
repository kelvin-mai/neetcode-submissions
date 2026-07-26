class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sorted = nums.sort((a, b) => a - b);
        let result = [[]];
        let prev = 0;
        let id = 0;

        for (let i = 0; i < sorted.length; i++) {
            id = i >= 1 && nums[i] === nums[i - 1] ? prev : 0;
            prev = result.length;
            for (let j = id; j < prev; j++) {
                const subset = [...result[j], nums[i]];
                result.push(subset);
            }
        }
        return result;
    }
}
