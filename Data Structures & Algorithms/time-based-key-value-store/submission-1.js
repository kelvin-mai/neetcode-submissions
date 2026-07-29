class TimeMap {
    constructor() {
        this.map = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map[key]) {
            this.map[key] = [];
        }
        this.map[key].push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.map[key]) {
            return "";
        }
        const arr = this.map[key];
        let left = 0;
        let right = arr.length - 1;
        let result = "";
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid].timestamp <= timestamp) {
                result = arr[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}
