class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = nums.length + 1;
        for (let L = 0; L < nums.length; L++) {
            let sum = 0;
            let R = L;
            while (sum < target && R < nums.length) {
                sum += nums[R];
                R++;
            }
            if (sum >= target) {
                minLength = Math.min(minLength, R - L);
            }
        }
        return minLength <= nums.length ? minLength : 0;
    }
}
