class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) {
            return 1;
        }

        let multiplyer = n > 0 ? x : 1 / x;
        let result = multiplyer;

        for (let i = 1; i < Math.abs(n); i++) {
            result = result * multiplyer;
        }
        return result;
    }
}
