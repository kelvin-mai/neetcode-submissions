class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            const height = heights[i];
            let left = i;
            let right = i + 1;
            while (heights[left] >= height && left >= 0) {
                left--;
            }
            while (heights[right] >= height && right < heights.length) {
                right++;
            }

            const area = (right - left - 1) * height;

            max = Math.max(max, area);
        }
        return max;
    }
}
