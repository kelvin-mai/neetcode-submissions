class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const distance = (point) => Math.pow(point[0], 2) + Math.pow(point[1], 2);
        const sorted = points.sort((a, b) => distance(a) - distance(b));
        return sorted.slice(0, k);
    }
}
