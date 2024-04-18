import _ from 'lodash';

// BEGIN
const average = (...nums) => {
    if (nums.length === 0) {
        return null;
    }
    let sum = _.sum(nums);
    let count = nums.length;
    return sum / count;
}

export default average;
// END