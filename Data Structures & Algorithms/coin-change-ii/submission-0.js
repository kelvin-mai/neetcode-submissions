class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let cache = Array(coins.length)
            .fill()
            .map((_) => ({}));
        const count = (i, current) => {
            if (current === amount) {
                return 1;
            }
            if (current > amount || i >= coins.length) {
                return 0;
            }
            if (cache[i][current] !== undefined) {
                return cache[i][current];
            }
            cache[i][current] = count(i, current + coins[i]) + count(i + 1, current);
            return cache[i][current];
        };
        return count(0,0);
    }
}
