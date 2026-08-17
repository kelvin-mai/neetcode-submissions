/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
  const sorted = intervals.sort((a,b) => a.start - b.start)
  let last = sorted[0]
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start < last.end) {
      return false;
    }
    last = sorted[i]
  }
  return true;
    }
}
