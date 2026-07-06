class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let consecutive = nums[0] === 1 ? 1 : 0;
        let maxConsecutive = consecutive;
        if (nums.length <= 1) {
            return consecutive;
        }
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === 1) {
                consecutive = consecutive + 1;
            } else {
                consecutive = 0;
            }
            maxConsecutive = Math.max(consecutive, maxConsecutive);
        }
        return maxConsecutive;
    }
}
