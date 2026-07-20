class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let count = 0;
            for (let j = i + 1; j < temperatures.length; j++) {
                count++;
                if (temperatures[i] < temperatures[j]) {
                    result.push(count);
                    break;
                }
            }
            if (result.length <= i) {
                result.push(0);
            }
        }
        return result;
    }
}
