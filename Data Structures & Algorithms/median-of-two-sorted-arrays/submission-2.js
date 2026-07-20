class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const length = nums1.length + nums2.length;
        const mid = Math.floor(length / 2);
        let [p1, p2] = [0, 0];
        let [r1, r2] = [0, 0];
        let i = 0;
        while (i <= mid) {
            r2 = r1;
            if (p1 < nums1.length && p2 < nums2.length) {
                if (nums1[p1] < nums2[p2]) {
                    r1 = nums1[p1];
                    p1++;
                } else {
                    r1 = nums2[p2];
                    p2++;
                }
            } else if (p1 < nums1.length) {
                r1 = nums1[p1];
                p1++;
            } else {
                r1 = nums2[p2];
                p2++;
            }
            i++;
        }
        if (length % 2 > 0) {
            return r1;
        } else {
            return (r1 + r2) / 2;
        }
    }
}
