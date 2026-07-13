class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        const seen = [];
        for (let i = 0; i < nums.length; i++) {
            if (seen.includes(nums[i])) {
                return nums[i];
            }
            seen.push(nums[i]);
        }
        return -1;
    }
}
