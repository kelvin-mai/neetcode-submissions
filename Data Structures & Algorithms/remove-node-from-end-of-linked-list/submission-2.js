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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head || !head.next) {
            return null;
        }
        let length = 0;
        let curr = head;
        while (curr) {
            length++;
            curr = curr.next;
        }
        let idx = length - n;
        if (idx === 0) {
            return head.next;
        }

        let prev = head;
        curr = head.next;
        for (let i = 1; i < idx; i++) {
            prev = prev.next;
            curr = curr.next;
        }
        prev.next = curr.next;
        return head;
    }
}
