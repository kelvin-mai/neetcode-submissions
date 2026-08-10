class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let max = -1;
            if (i + 1 < arr.length) {
                for (let j = i + 1; j < arr.length; j++) {
                    max = Math.max(max, arr[j])
                }
            }
            result.push(max);
        }
        return result;
    }
}
