class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = nums[0];
        let min = 1;
        let max = 1;
        for (let i = 0; i < nums.length; i++) {
            const maxProduct = max * nums[i];
            const minProduct = min * nums[i]
            max = Math.max(Math.max(maxProduct, minProduct), nums[i]);
            min = Math.min(Math.min(maxProduct, minProduct), nums[i]);
            result = Math.max(result, max);
        }
        return result;
    }
}
