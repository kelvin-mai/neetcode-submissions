/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const dfs = (node, max) => {
            if (!node) {
                return 0;
            }
            let result = node.val >= max ? 1 : 0;
            max = Math.max(max, node.val);
            result += dfs(node.right, max);
            result += dfs(node.left, max);
            return result;
        };

        return dfs(root, root.val);
    }
}
