class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];
        let merged = newInterval;
        for (let i = 0; i < intervals.length; i++) {
            if (merged === null || intervals[i][1] < merged[0]) {
                result.push(intervals[i]);
            } else if (intervals[i][0] > merged[1]) {
                result.push(merged);
                result.push(intervals[i]);
                merged = null;
            } else {
                merged[0] = Math.min(intervals[i][0], merged[0]);
                merged[1] = Math.max(intervals[i][1], merged[1]);
            }
        }
        if (merged) {
            result.push(merged);
        }
        return result;
    }
}
