class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const sorted = intervals.sort((a,b) => a[0] - b[0]);
        let result = [sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
            const last = result[result.length - 1];
            if (last[1] >= sorted[i][0]) {
                last[1] = Math.max(sorted[i][1], last[1]);
            } else {
                result.push(sorted[i])
            }
        }
        return result;
    }
}
