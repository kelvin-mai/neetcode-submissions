class MedianFinder {
    constructor() {
        this.arr = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
    }

    /**
     * @return {number}
     */
    findMedian() {
        const mid = Math.floor(this.arr.length / 2);

        if (this.arr.length % 2) {
            return this.arr[mid];
        } else {
            return (this.arr[mid] + this.arr[mid - 1]) / 2;
        }
    }
}
