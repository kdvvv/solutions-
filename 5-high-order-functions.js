import _ from 'lodash';

// BEGIN
const takeOldest = (users, k = 1) => {
    let userSort = _.sortBy(users, (user) => {
        return Date.parse(user.birthday)
    })
    return userSort.slice(0, k);
}

export default takeOldest;
// END