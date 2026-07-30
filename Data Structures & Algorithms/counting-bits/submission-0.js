class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let arr = [];
        for (let i = 0; i <= n; i++) {
            let count = 0;
            let target = i;
            while (target > 0) {
                if (target & 1) {
                    count++;
                }
                target = target >> 1;
            }
            arr.push(count);
        }
        return arr;
    }
}
