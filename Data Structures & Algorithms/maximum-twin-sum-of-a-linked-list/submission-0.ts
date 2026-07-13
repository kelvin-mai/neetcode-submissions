/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head: ListNode | null): number {
        let curr = head;
        let arr = [];
        let max = 0;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        for (let i = 0; i < arr.length / 2; i++) {
            max = Math.max(arr[i] + arr[arr.length - 1 - i], max);
        }
        return max;
    }
}
