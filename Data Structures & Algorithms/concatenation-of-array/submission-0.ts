class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let result = nums;
        for (let i = 0; i < nums.length; i++) {
            result = [...result, nums[i]];
        }
        return result;
    }
}
