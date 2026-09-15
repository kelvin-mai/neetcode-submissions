class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
  let count = 0;
  let sum = 0;

  let L = 0;
  for (let R = 0; R < arr.length; R++) {
    sum += arr[R];
    if (R >= k - 1) {
      const average = sum / k;
      if (average >= threshold) {
        count++;
      }
      sum -= arr[L];
      L++;
    }
  }

  return count;
    }
}
