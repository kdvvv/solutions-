// BEGIN
const groupBy = (students, key) => {
    return students.reduce((result, student) => {
        const groupKey = student[key];
        result[groupKey] = result[groupKey] || [];
        result[groupKey].push(student);
        return result;
    }, {});
};
export default groupBy;
// END