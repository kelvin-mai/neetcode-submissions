class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            const indexPair = nums.findIndex((num, index) => num === diff && index !== i);
            if (indexPair  > 0) {
                return [i, indexPair];
            }
        }
    }
}
