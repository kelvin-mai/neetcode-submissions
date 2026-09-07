class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (!nums.length || k === 0) {
            return [];
        }

        let queue = [];
        let result = [];

        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            while (queue.length && nums[queue[queue.length - 1]] < nums[R]) {
                queue.pop();
            }
            queue.push(R);
            if (queue[0] <= R - k) {
                queue.shift();
            }
            if (R >= k - 1) {
                result.push(nums[queue[0]]);
                L++;
            }
        }
        return result;
    }
}
