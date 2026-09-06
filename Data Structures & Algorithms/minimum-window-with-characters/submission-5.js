class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tmap = t.split("").reduce((acc, curr) => {
            acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
            return acc;
        }, {});
        const needs = Object.keys(tmap).length;

        let L = 0;
        let smap = {};
        let haves = 0;
        let length = Infinity;
        let start = 0;
        for (let R = 0; R < s.length; R++) {
            const rc = s[R];
            if (tmap[rc]) {
                smap[rc] = (smap[rc] || 0) + 1;
                if (smap[rc] === tmap[rc]) {
                    haves++;
                }
            }

            while (haves === needs) {
                if (R - L < length) {
                    length = R - L;
                    start = L;
                }

                const lc = s[L];

                if (smap[lc]) {
                    if (tmap[lc] === smap[lc]) {
                        haves--;
                    }
                    smap[lc]--;
                }                L++;
            }
        }
        return length === Infinity ? "" : s.substring(start, start + length + 1);
    }
}
