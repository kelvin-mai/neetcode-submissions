class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) {
            return 0;
        }

        let cache = {}

        const change = (remaining) => {
            if (cache[remaining]) {
                return cache[remaining]
            }
            if (remaining === 0) {
                return 0;
            }
            let result = Infinity;
            for (const coin of coins) {
                if (remaining - coin >= 0) {
                    result = Math.min(result, 1 + change(remaining - coin));
                }
            }
            cache[remaining] = result;
            return result;
        };
        const min = change(amount);
        return min === Infinity ? -1 : min;
    }
}
