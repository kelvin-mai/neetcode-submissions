class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
          let cache = Array(prices.length)
    .fill()
    .map(() => Array(2).fill(-1));
  const backtrack = (i, bought) => {
    if (i >= prices.length) {
      return 0;
    }
    if (cache[i][bought] !== -1) {
      return cache[i][bought];
    }
    let result = backtrack(i + 1, bought);
    if (bought) {
      result = Math.max(result, backtrack(i + 1, 0) + prices[i]);
    } else {
      result = Math.max(result, backtrack(i + 1, 1) - prices[i]);
    }
    cache[i][bought] = result;
    return result;
  };
  return backtrack(0, 0);
    }
}
