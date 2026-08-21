class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const orginal = x;
        x = Math.abs(x);
        let result = parseInt(x.toString().split('').reverse().join(''));
        if (orginal < 0) {
            result *= -1;
        }
        if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
            return 0;
        }
        return result;
    }
}
