class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
          const target = nums.length / 3;
  let cache = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] = (cache[nums[i]] || 0) + 1;
    if (cache[nums[i]] > target && !result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
    }
}
