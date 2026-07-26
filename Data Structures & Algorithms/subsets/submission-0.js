class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [[]];
        for (let i = 0; i < nums.length; i++) {
            let size = result.length;
            for (let j = 0; j < size; j++) {
                let subset = result[j].slice();
                subset.push(nums[i]);
                result.push(subset);
            }
        }
        return result;
    }
}
