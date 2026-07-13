class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        while (students.length > 0 && sandwiches.length > 0 && students.includes(sandwiches[0])) {
            if (students[0] === sandwiches[0]) {
                const [_, ...studentRest] = students;
                const [__, ...sandwichRest] = sandwiches;
                students = studentRest;
                sandwiches = sandwichRest;
            } else {
                const [firstStudent, ...studentRest] = students;
                students = [...studentRest, firstStudent];
            }
        }
        return students.length;
    }
}
