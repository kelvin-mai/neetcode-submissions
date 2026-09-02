class MyHashSet {
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.data.includes(key)) {
            this.data.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data = this.data.filter(k => k !== key);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
