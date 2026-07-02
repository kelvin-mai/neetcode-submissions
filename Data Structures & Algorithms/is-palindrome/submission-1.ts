class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const a = s.match(/[A-Za-z0-9]/g);
        if (!a) {
            return true;
        }
        const halfway = a.length / 2;
        for (let i = 0; i < a.length / 2; i++) {
            if (a[i].toLowerCase() !== a[a.length - 1 - i].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}
