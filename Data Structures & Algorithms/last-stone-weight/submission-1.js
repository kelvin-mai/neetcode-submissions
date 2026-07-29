class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length <= 1) {
            return stones[0] || 0;
        } else {
            const [first, second, ...rest] = stones.sort((a, b) => b - a);
            const combined = Math.abs(first - second);
            if (combined === 0) {
                return this.lastStoneWeight(rest);
            } else {
                return this.lastStoneWeight([combined, ...rest]);
            }
        }
    }
}
