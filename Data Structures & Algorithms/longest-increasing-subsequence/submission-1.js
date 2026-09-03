class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let cache = Array(nums.length).fill();

        const backtrack = (i) => {
            if (cache[i]) {
                return cache[i];
            }

            let max = 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    max = Math.max(max, 1 + backtrack(j));
                }
            }
            cache[i] = max;
            return max;
        };

        const LISs = nums.map((_, i) => backtrack(i));
        return Math.max(...LISs);
    }
}
