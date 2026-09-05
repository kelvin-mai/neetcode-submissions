class CountSquares {
    constructor() {
        this.pts = [];
        this.map = {};
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x,y] = point;
        const p = `${x},${y}`;
        this.map[p] = this.map[p] ? this.map[p] + 1 : 1;
        this.pts.push(point);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let result = 0;
        const [px, py] = point;
        for (const [x, y] of this.pts) {
            if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) {
                continue;
            }
            result += (this.map[`${x},${py}`] || 0) * (this.map[`${px},${y}`] || 0);
        }
        return result;
    }
}
