class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
          let min = 1;
  let max = Math.max(...piles);
  if (h === piles.length) {
    return max;
  }
  let speed = 1;
  while (true) {
    let time = 0;
    for (let pile of piles) {
      time = time + Math.ceil(pile / speed);
    }
    if (time <= h) {
      return speed;
    }
    speed = speed + 1;
  }
    }
}
