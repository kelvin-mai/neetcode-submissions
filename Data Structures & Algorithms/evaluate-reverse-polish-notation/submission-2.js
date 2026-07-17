class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const ops = ["+", "-", "*", "/"];
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (!ops.includes(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                const num2 = stack.pop();
                const num1 = stack.pop();
                if (tokens[i] === "+") {
                    stack.push(num1 + num2);
                } else if (tokens[i] === "-") {
                    stack.push(num1 - num2);
                } else if (tokens[i] === "*") {
                    stack.push(num1 * num2);
                } else if (tokens[i] === "/") {
                    const result = num1 / num2;
                    if (result > 0) {
                        stack.push(Math.floor(result));
                    } else {
                        stack.push(Math.ceil(result));
                    }
                }
            }
        }
        return stack[0];
    }
}
