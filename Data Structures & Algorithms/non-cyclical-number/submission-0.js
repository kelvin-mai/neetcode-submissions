class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = [];
        let sum = n;
        while (true) {
            sum = String(sum)
                .split("")
                .map((n) => Number(n) * Number(n))
                .reduce((acc, curr) => acc + curr, 0);
            if (sum === 1) {
                return true;
            }
            if (seen.includes(sum)) {
                return false;
            }
            seen.push(sum);
        }
        return false;
    }
}
