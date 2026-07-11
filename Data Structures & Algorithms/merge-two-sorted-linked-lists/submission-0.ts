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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const result = new ListNode();
        let curr = result;

        let temp1 = list1;
        let temp2 = list2;
        while (temp1 !== null && temp2 !== null) {
            if (temp1.val <= temp2.val) {
                curr.next = temp1;
                temp1 = temp1.next;
            } else {
                curr.next = temp2;
                temp2 = temp2.next;
            }

            curr = curr.next;
        }
        if (temp1 !== null) {
            curr.next = temp1;
        } else {
            curr.next = temp2;
        }

        return result.next;
    }
}
