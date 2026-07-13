class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let m = nums.reduce((acc, curr) => {
            return { ...acc, [curr]: acc[curr] ? acc[curr] + 1 : 1 };
        }, {});
        let result = [];
        while (result.length < k) {
            const maxKey = Object.keys(m).reduce((prev, key) => {
                return m[key] > m[prev] ? key : prev;
            }, Object.keys(m)[0]);
            result.push(Number(maxKey));
            m = Object.keys(m).reduce((acc, curr) => {
                return curr === maxKey ? acc : { ...acc, [curr]: m[curr] };
            }, {});
        }
        return result;
    }
}
