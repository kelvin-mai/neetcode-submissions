class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
          return s
    .split(' ')
    .filter((x) => x !== '')
    .reverse()[0].length;
    }
}
