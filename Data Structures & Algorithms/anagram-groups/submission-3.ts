class Solution {
    buildAnagramMap(s: string): { [key: string]: number } {
        return s.split("").reduce((acc, curr) => {
            if (acc[curr]) {
                return { ...acc, [curr]: acc[curr] + 1 };
            } else {
                return { ...acc, [curr]: 1 };
            }
        }, {});
    }

    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const sMap = this.buildAnagramMap(s);
        const tMap = this.buildAnagramMap(t);
        return Object.keys(sMap).every((key) => sMap[key] === tMap[key]);
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const m = strs.reduce(
            (acc, curr) => {
                const anagrams = acc.collection.filter((s) => this.isAnagram(s, curr));
                const toRemove = new Set(anagrams);
                return {
                    collection: acc.collection.filter((c) => !toRemove.has(c)),
                    groups: anagrams.length ? [...acc.groups, anagrams] : acc.groups,
                };
            },
            { collection: strs, groups: [] },
        );
        return m.groups;
    }
}
