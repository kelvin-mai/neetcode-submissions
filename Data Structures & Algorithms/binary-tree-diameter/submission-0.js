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
    diameterOfBinaryTree(root) {
        const maxHeight = (root) => {
            if (!root) {
                return 0;
            }
            return 1 + Math.max(maxHeight(root.left), maxHeight(root.right));
        };
        if (!root) {
            return 0;
        }
        const left = maxHeight(root.left);
        const right = maxHeight(root.right);
        const diameter = left + right;
        return Math.max(
            diameter,
            Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right)),
        );
    }
}
