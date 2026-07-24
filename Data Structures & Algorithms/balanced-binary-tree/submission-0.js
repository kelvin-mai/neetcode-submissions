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
     * @return {boolean}
     */
    isBalanced(root) {
        const maxHeight = (root) => {
            if (!root) {
                return 0;
            }
            return 1 + Math.max(maxHeight(root.left), maxHeight(root.right));
        };

        if (!root) {
            return true;
        }

        const left = maxHeight(root.left);
        const right = maxHeight(root.right);
        if (Math.abs(left - right) > 1) {
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
