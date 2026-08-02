class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = true;
        let i = digits.length - 1;
        while (carry && i >= 0) {
            const plus = digits[i] + 1;
            digits[i] = plus % 10;
            i--;
            if (plus !== 10) {
                carry = false;
                return digits;
            }
        }
        if (carry) {
            return [1, ...digits];
        }
        return digits;
    }
}
