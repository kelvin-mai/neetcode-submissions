class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((_, i) => [position[i], speed[i]]).sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (let i = 0; i < pairs.length; i++) {
            const [p, s] = pairs[i];
            const time = (target - pairs[i][0]) / pairs[i][1];
            if (stack.length === 0 || stack[stack.length - 1] < time) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}
