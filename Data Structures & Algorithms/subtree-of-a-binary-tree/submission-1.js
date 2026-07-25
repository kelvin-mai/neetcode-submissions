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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) {
            return false;
        }
        if (this.sameTree(root, subRoot)) {
            return true;
        }
        const right = this.isSubtree(root.right, subRoot);
        const left = this.isSubtree(root.left, subRoot);
        return right || left;
    }

    sameTree(x, y) {
        if (!x || !y) {
            return x === y;
        }
        if (x.val === y.val) {
            return this.sameTree(x.right, y.right) && this.sameTree(x.left, y.left);
        } else {
            return false;
        }
    }
}
