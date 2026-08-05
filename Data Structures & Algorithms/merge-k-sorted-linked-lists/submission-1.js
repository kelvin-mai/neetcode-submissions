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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode();
        let curr = dummy;
        lists = lists.sort((a,b) => a.val - b.val)
        while (lists.length > 0) {
            let i = 0;
            while (lists[i + 1] && lists[i].val >= lists[i + 1].val) {
                i++;
            }
            curr.next = new ListNode(lists[i].val);
            curr = curr.next;
            lists[i] = lists[i].next;

            lists = lists.filter((x) => !!x);
        }
        if (lists.length > 0) {
            while (lists[0]) {
                curr = new ListNode(lists[0].val);
                curr = curr.next;
                lists[0] = lists[0].next;
            }
        }

        return dummy.next;
    }
}
