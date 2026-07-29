class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const sorted = nums.sort((a, b) => a - b);
        return sorted[nums.length - k];
    }
}
