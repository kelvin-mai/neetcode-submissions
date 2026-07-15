class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length < 1) {
            return 0;
        }
        const sorted = nums.sort((a, b) => a - b);
        let count = 1;
        let longest = count;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] + 1 === sorted[i + 1]) {
                count = count + 1;
                longest = Math.max(longest, count);
            } else if (sorted[i] !== sorted[i + 1]) {
                count = 1;
            }
        }

        return longest;
    }
}
