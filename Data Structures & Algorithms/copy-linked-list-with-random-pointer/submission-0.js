// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return head;
        }
        const copy = new Node(head.val);
        this.map.set(head, copy);
        copy.next = this.copyRandomList(head.next);
        if (this.map.has(head)) {
            copy.random = this.map.get(head.random);
        }
        return copy;
    }
}
