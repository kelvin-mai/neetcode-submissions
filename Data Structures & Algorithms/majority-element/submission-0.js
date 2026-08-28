class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = nums.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
            return acc;
        },{});
        let max = 0;
        let target = nums[0];
        for (const key of Object.keys(map)) {
            if (map[key] > max) {
                max = map[key];
                target = Number(key)
            }
        }
        return target;
    }
}
