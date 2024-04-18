import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  return emails.reduce((result, email) => {

    let pochta = email.split('@')[1];

    if (freeEmailDomains.indexOf(pochta) !== -1) {

      if (result[pochta]) {
        result[pochta] += 1;
      } else {
        result[pochta] = 1;
      }
    }

    return result;
  }, {})
}


export default getFreeDomainsCount;
// END