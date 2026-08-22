class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") {
            return "0";
        }

        let result = Array(num1.length + num2.length).fill(0);

        for (let i = 0; i < num1.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                let product =
                    parseInt(num1[num1.length - 1 - i]) * parseInt(num2[num2.length - 1 - j]);
                
                result[i + j] += product;
                result[i + j + 1] += Math.floor(result[i + j] / 10);
                result[i + j] %= 10
            }
        }
        result.reverse();
        while (result[0] === 0) {
            result.shift();
        }
        return result.join("");
    }
}
