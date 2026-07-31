class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.timestamp = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        this.timestamp += 1;
        if (this.cache[key]) {
            this.cache[key].usage = this.timestamp;
            return this.cache[key].value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.timestamp += 1;
        this.cache[key] = { value, usage: this.timestamp };
        const size = Object.keys(this.cache).length;
        if (size > this.capacity) {
            let min = Infinity;
            let evictKey;
            for (let k of Object.keys(this.cache)) {
                if (this.cache[k].usage < min) {
                    min = Math.min(min, this.cache[k].usage);
                    evictKey = k;
                }
            }
            this.cache = Object.keys(this.cache).reduce((acc, curr) => {
                return curr !== evictKey ? { ...acc, [curr]: this.cache[curr] } : acc;
            }, {});
        }
    }
}
