class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let prefix = [];
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            prefix.push(sum);
        }
        let postfix = Array(nums.lengt).fill(0);
        sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[nums.length - i - 1];
            postfix[nums.length - i - 1] = sum;
        }
        for (let i = 0; i < nums.length; i++) {
            if (prefix[i] === postfix[i]) {
                return i;
            }
        }
        return -1;
    }
}
