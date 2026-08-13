class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let p = [];
        const backtrack = () => {
            if (p.length === nums.length) {
                result.push([...p]);
            }
            for (const n of nums) {
                if (!p.includes(n)) {
                    p.push(n);
                    backtrack();
                    p.pop();
                }
            }
        };
        backtrack();
        return result;
    }
}
