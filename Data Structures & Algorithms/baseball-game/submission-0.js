class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (const op of operations) {
            if (op === "+") {
                const sum = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(sum);
            } else if (op === "D") {
                const doubled = 2 * stack[stack.length - 1];
                stack.push(doubled);
            } else if (op === "C") {
                stack.pop();
            } else {
                stack.push(Number(op));
            }
        }
        console.log({ stack });
        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
