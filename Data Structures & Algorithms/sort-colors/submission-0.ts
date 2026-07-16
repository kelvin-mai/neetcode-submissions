class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let counts = [0, 0, 0];
        for (let i = 0; i < nums.length; i++) {
            counts[nums[i]] = counts[nums[i]] + 1;
        }

        let i = 0;
        for (let n = 0; n < counts.length; n++) {
            for (let j = 0; j < counts[n]; j++) {
                nums[i] = n;
                i = i + 1;
            }
        }
    }
}
