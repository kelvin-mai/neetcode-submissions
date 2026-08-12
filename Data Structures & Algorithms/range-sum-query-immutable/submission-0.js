class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
        this.sums = [];
        let sum = 0;
        for (const n of nums) {
            sum += n;
            this.sums.push(sum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const leftSum = left - 1 >= 0 ? this.sums[left - 1] : 0;
        return this.sums[right] - leftSum;
    }
}
