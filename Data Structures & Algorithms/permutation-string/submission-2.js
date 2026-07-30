class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const toMap = (s) =>
            s.split("").reduce((acc, curr) => {
                acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
                return acc;
            }, {});

        const mapEquals = (m1, m2) => {
            for (const c of Object.keys(m1)) {
                if (m1[c] !== m2[c]) {
                    return false;
                }
            }
            return true;
        };

        const map1 = toMap(s1);

        for (let i = 0; i < s2.length; i++) {
            if (s1.includes(s2[i])) {
                const map2 = toMap(s2.slice(i, i + s1.length));
                if (mapEquals(map1, map2)) {
                    return true;
                }
            }
        }

        return false;
    }
}
