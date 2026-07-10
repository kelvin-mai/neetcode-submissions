class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length <= 0) {
            return "";
        }
        const encoded = strs.map((str) => str.length + "#" + str);
        return encoded.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length <= 1) {
            return [];
        }
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf("#", i);
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            result.push(str.substring(i, i + length));
            i += length;
        }
        return result;
    }
}
