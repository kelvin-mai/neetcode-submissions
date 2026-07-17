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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const node = new ListNode();
        let curr = node;
        let carry = 0;
        while (l1 || l2) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            const sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
            curr = curr.next;
        }
        if (carry !== 0) {
            curr.next = new ListNode(carry);
        }
        return node.next;
    }
}
