class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
          let prefix = '';
  let i = 0;
  while (true) {
    if (i >= strs[0].length) {
      break;
    }
    const current = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return prefix;
      }
    }
    prefix += current;
    i++;
  }
  return prefix;
    }
}
