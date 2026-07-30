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
    isValidBST(root) {
        const isValid = (node, low, high) => {
            if (!node) {
                return true;
            }
            if (!(low < node.val && node.val < high)) {
                return false;
            }
            return isValid(node.left, low, node.val) && isValid(node.right, node.val, high);
        };

        return isValid(root, -Infinity, Infinity);
    }
}
