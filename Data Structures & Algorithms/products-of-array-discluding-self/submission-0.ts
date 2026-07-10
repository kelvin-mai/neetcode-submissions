class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        return nums.map((_, i) => {
            return nums.filter((_, j) => i !== j).reduce((acc, curr) => acc * curr, 1);
        });
    }
}
