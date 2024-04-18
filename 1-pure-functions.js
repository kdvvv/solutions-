// BEGIN
function checkNumberPrime (num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num ** 0.5; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const sayPrimeOrNot = (num) => {
    if (checkNumberPrime(num)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

export default sayPrimeOrNot;
// END