class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
  let cache = {
    [s.length]: true,
  };
  const buildWord = (i, built = '') => {
    if (i === s.length) {
      return true;
    }
    if (cache[i] !== undefined) {
      return cache[i];
    }
    for (const word of wordDict) {
      const newWord = built + word;
      if (s.startsWith(word, i) && newWord.length <= s.length) {
        const result = buildWord(newWord.length, newWord);
        if (result) {
          cache[i] = true;
          return true;
        }
      }
    }
    cache[i] = false;
    return false;
  };
  return buildWord(0);
    }
}
