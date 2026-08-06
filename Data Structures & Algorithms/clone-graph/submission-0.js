/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const seen = {};
        const clone = (node) => {
            if (!node) {
                return node;
            }
            if (seen[node.val]) {
                return seen[node.val];
            }
            let neighbors = [];
            const copy = new Node(node.val, neighbors);
            seen[node.val] = copy;
            if (node.neighbors && node.neighbors.length > 0) {
                for (let i = 0; i < node.neighbors.length; i++) {
                    const neighbor = clone(node.neighbors[i]);
                    copy.neighbors.push(neighbor);
                }
            }

            return copy;
        };

        return clone(node);
    }
}
