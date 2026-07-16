class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        const duplicate = Boolean(
                            result.find(
                                (x) => x[0] === arr[0] && x[1] === arr[1] && x[2] === arr[2],
                            ),
                        );
                        if (!duplicate) {
                            result.push(arr);
                        }
                    }
                }
            }
        }
        return result;
    }
}
