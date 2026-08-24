class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
  const cache = {};
  const climb = (i) => {
    if (i >= cost.length) {
      return 0;
    }
    if (cache[i]) {
      return cache[i]
    }
    cache[i] = cost[i] + Math.min(climb(i + 1), climb(i + 2));
    return cache[i]; 
  };
  return Math.min(climb(0), climb(1));
    }
}
