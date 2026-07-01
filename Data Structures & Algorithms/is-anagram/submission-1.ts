class Solution {
    buildMap(s: string) {
        return s.split("").reduce((acc, curr) => {
            if (acc[curr]) {
                return { ...acc, [curr]: acc[curr] + 1 };
            } else {
                return { ...acc, [curr]: 1 };
            }
        }, {});
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const a = this.buildMap(s);
        const b = this.buildMap(t);
        return Object.keys(a).every((key) => a[key] === b[key]);
    }
}
