class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let x = 0;
        let y = numbers.length - 1;
        while (y > x) {
            if (numbers[x] + numbers[y] > target) {
                y = y - 1;
            } else if (numbers[x] + numbers[y] < target) {
                x = x + 1;
            } else {
                return [x + 1, y + 1];
            }
        }
    }
}
